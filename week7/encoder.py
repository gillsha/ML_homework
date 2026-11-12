"""
encoder.py - Baseline #2: DL Context Encoder (two-tower, attribute-based).

User tower: embeddings of customerType / riskLevel / investmentCapacity ->
            concat -> MLP -> 32-dim user vector
Item tower: embeddings of assetCategory / sector / industry ->
            concat -> MLP -> 32-dim item vector
Score(user, item) = dot(user_vec, item_vec)
Training: BPR loss (pos = real train Buy, neg = random ISIN not bought by
          that customer in train), negatives sampled from the candidate
          universe used at evaluation time.

NOTE: there is no customerID / ISIN identity embedding anywhere - the whole
point of a "context encoder" is that the user/item vector is built purely
from their attributes, so the model can score customers it never saw during
training (as long as their customerType/riskLevel/investmentCapacity is
known) and the full candidate universe of items.
"""
import random
import time

import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F


class Vocab:
    """Simple string -> index mapping with a reserved UNK slot."""

    def __init__(self, values):
        uniq = sorted(set(values))
        self.itos = ["<UNK>"] + uniq
        self.stoi = {s: i for i, s in enumerate(self.itos)}

    def __len__(self):
        return len(self.itos)

    def encode(self, value):
        return self.stoi.get(value, 0)


class ContextEncoder(nn.Module):
    def __init__(
        self,
        user_vocabs,  # dict: field_name -> Vocab, for customerType/riskLevel/investmentCapacity
        item_vocabs,  # dict: field_name -> Vocab, for assetCategory/sector/industry
        emb_dim=8,
        hidden_dim=64,
        out_dim=32,
    ):
        super().__init__()
        self.user_fields = list(user_vocabs.keys())
        self.item_fields = list(item_vocabs.keys())

        self.user_embs = nn.ModuleDict(
            {f: nn.Embedding(len(v), emb_dim) for f, v in user_vocabs.items()}
        )
        self.item_embs = nn.ModuleDict(
            {f: nn.Embedding(len(v), emb_dim) for f, v in item_vocabs.items()}
        )

        user_in = emb_dim * len(self.user_fields)
        item_in = emb_dim * len(self.item_fields)

        self.user_mlp = nn.Sequential(
            nn.Linear(user_in, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, out_dim),
        )
        self.item_mlp = nn.Sequential(
            nn.Linear(item_in, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, out_dim),
        )

    def user_vector(self, user_idx_dict):
        feats = [self.user_embs[f](user_idx_dict[f]) for f in self.user_fields]
        x = torch.cat(feats, dim=-1)
        return self.user_mlp(x)

    def item_vector(self, item_idx_dict):
        feats = [self.item_embs[f](item_idx_dict[f]) for f in self.item_fields]
        x = torch.cat(feats, dim=-1)
        return self.item_mlp(x)

    def score(self, user_idx_dict, item_idx_dict):
        u = self.user_vector(user_idx_dict)
        i = self.item_vector(item_idx_dict)
        return (u * i).sum(-1)


def build_vocabs(customer_snapshot, asset_snapshot):
    user_fields = ["customerType", "riskLevel", "investmentCapacity"]
    item_fields = ["assetCategory", "sector", "industry"]
    user_vocabs = {f: Vocab(customer_snapshot[f].tolist()) for f in user_fields}
    item_vocabs = {f: Vocab(asset_snapshot[f].tolist()) for f in item_fields}
    return user_vocabs, item_vocabs, user_fields, item_fields


def encode_users(customer_snapshot, user_vocabs, user_fields, customer_ids, device):
    out = {}
    for f in user_fields:
        vals = customer_snapshot.loc[customer_ids, f].tolist()
        out[f] = torch.tensor([user_vocabs[f].encode(v) for v in vals], dtype=torch.long, device=device)
    return out


def encode_items(asset_snapshot, item_vocabs, item_fields, isins, device):
    out = {}
    for f in item_fields:
        vals = asset_snapshot.loc[isins, f].tolist()
        out[f] = torch.tensor([item_vocabs[f].encode(v) for v in vals], dtype=torch.long, device=device)
    return out


def sample_training_customers(train_tx, n_customers, seed=42):
    """Pick a representative, reproducible sample of customers that have
    >=1 train purchase, to keep BPR training fast."""
    rng = random.Random(seed)
    all_customers = train_tx["customerID"].unique().tolist()
    if n_customers >= len(all_customers):
        return all_customers
    return rng.sample(all_customers, n_customers)


def build_bpr_pairs(train_tx, customer_ids, candidate_isins):
    """For each sampled customer, build (customer, positive_isin) pairs from
    their real train Buy transactions (positives restricted to the candidate
    universe, since that's also the set negatives are drawn from and the set
    used for evaluation)."""
    cand_set = set(candidate_isins)
    sub = train_tx[train_tx["customerID"].isin(customer_ids) & train_tx["ISIN"].isin(cand_set)]
    pairs = sub[["customerID", "ISIN"]].drop_duplicates().values.tolist()
    bought_by_customer = sub.groupby("customerID")["ISIN"].apply(set).to_dict()
    return pairs, bought_by_customer


def train_context_encoder(
    customer_snapshot,
    asset_snapshot,
    train_tx,
    candidate_isins,
    n_sample_customers=5000,
    emb_dim=8,
    hidden_dim=64,
    out_dim=32,
    lr=1e-3,
    batch_size=1024,
    n_epochs=15,
    seed=42,
    device=None,
):
    device = device or torch.device("cuda" if torch.cuda.is_available() else "cpu")
    rng = random.Random(seed)
    torch.manual_seed(seed)

    sampled_customers = sample_training_customers(train_tx, n_sample_customers, seed=seed)
    pairs, bought_by_customer = build_bpr_pairs(train_tx, sampled_customers, candidate_isins)

    user_vocabs, item_vocabs, user_fields, item_fields = build_vocabs(customer_snapshot, asset_snapshot)
    model = ContextEncoder(user_vocabs, item_vocabs, emb_dim, hidden_dim, out_dim).to(device)
    optimizer = torch.optim.Adam(model.parameters(), lr=lr)

    candidate_arr = list(candidate_isins)
    n_cand = len(candidate_arr)

    t0 = time.time()
    n_batches = max(1, len(pairs) // batch_size)
    losses = []
    for epoch in range(n_epochs):
        rng.shuffle(pairs)
        epoch_losses = []
        for b in range(n_batches):
            batch = pairs[b * batch_size : (b + 1) * batch_size]
            if not batch:
                continue
            users = [p[0] for p in batch]
            pos_items = [p[1] for p in batch]
            neg_items = []
            for u in users:
                bought = bought_by_customer.get(u, set())
                while True:
                    cand = candidate_arr[rng.randrange(n_cand)]
                    if cand not in bought:
                        neg_items.append(cand)
                        break

            u_idx = encode_users(customer_snapshot, user_vocabs, user_fields, users, device)
            pos_idx = encode_items(asset_snapshot, item_vocabs, item_fields, pos_items, device)
            neg_idx = encode_items(asset_snapshot, item_vocabs, item_fields, neg_items, device)

            pos_score = model.score(u_idx, pos_idx)
            neg_score = model.score(u_idx, neg_idx)
            loss = -F.logsigmoid(pos_score - neg_score).mean()

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            epoch_losses.append(loss.item())
        losses.append(float(np.mean(epoch_losses)))
        print(f"[encoder] epoch {epoch + 1:>2}/{n_epochs}  BPR loss = {losses[-1]:.4f}")

    runtime = time.time() - t0

    info = {
        "n_sample_customers_requested": n_sample_customers,
        "n_sample_customers_used": len(sampled_customers),
        "n_training_pairs": len(pairs),
        "n_candidate_items": n_cand,
        "emb_dim": emb_dim,
        "hidden_dim": hidden_dim,
        "out_dim": out_dim,
        "lr": lr,
        "batch_size": batch_size,
        "n_epochs": n_epochs,
        "device": str(device),
        "final_loss": losses[-1],
        "loss_per_epoch": losses,
        "runtime_sec": runtime,
    }
    return model, user_vocabs, item_vocabs, user_fields, item_fields, info


@torch.no_grad()
def score_all_candidates(model, customer_snapshot, asset_snapshot, user_vocabs, item_vocabs,
                          user_fields, item_fields, customer_ids, candidate_isins, device):
    """Returns dict customerID -> ranked list of ISINs (all candidates,
    best first)."""
    model.eval()
    item_idx = encode_items(asset_snapshot, item_vocabs, item_fields, candidate_isins, device)
    item_vecs = model.item_vector(item_idx)  # [n_cand, out_dim]

    results = {}
    chunk = 512
    for start in range(0, len(customer_ids), chunk):
        chunk_ids = customer_ids[start : start + chunk]
        u_idx = encode_users(customer_snapshot, user_vocabs, user_fields, chunk_ids, device)
        u_vecs = model.user_vector(u_idx)  # [chunk, out_dim]
        scores = u_vecs @ item_vecs.T  # [chunk, n_cand]
        order = torch.argsort(scores, dim=1, descending=True).cpu().numpy()
        for row_i, cid in enumerate(chunk_ids):
            ranked = [candidate_isins[j] for j in order[row_i]]
            results[cid] = ranked
    return results
