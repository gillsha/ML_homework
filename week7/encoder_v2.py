"""
encoder_v2.py - controlled ablation over A07 Context Encoder.

Exactly ONE change vs encoder.py's ContextEncoder / train_context_encoder:
the item tower gets one additional continuous input - z-scored
log1p(train Buy count) per ISIN - concatenated with the existing categorical
embeddings (assetCategory, sector, industry) before item_mlp.

Everything else is reused UNMODIFIED from encoder.py (Vocab, user tower,
customer sampling, BPR pair construction, negative sampling order, seed) so
that the only source of difference between v1 and v2 results is this one
added feature.
"""
import random
import time

import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F

from encoder import (
    Vocab,
    build_vocabs,
    sample_training_customers,
    build_bpr_pairs,
    encode_users,
)


def compute_item_popularity_feature(train_tx, asset_index):
    """The ONE new variable: log1p(# train Buy tx) per ISIN, z-scored using
    the mean/std of the log1p counts of ISINs that actually appear in train
    (no leakage from test - train_tx is the same train split as v1).
    Items with zero train Buy get count=0 -> log1p(0)=0, scaled with the
    same train-derived mean/std (they correctly land below the train mean)."""
    train_counts = train_tx.groupby("ISIN").size()
    log1p_train = np.log1p(train_counts)
    mean, std = log1p_train.mean(), log1p_train.std()
    if std == 0 or np.isnan(std):
        std = 1.0

    counts_full = train_counts.reindex(asset_index, fill_value=0)
    log1p_full = np.log1p(counts_full)
    z = (log1p_full - mean) / std
    stats = {"train_log1p_mean": float(mean), "train_log1p_std": float(std)}
    return z, stats


class ContextEncoderV2(nn.Module):
    def __init__(self, user_vocabs, item_vocabs, emb_dim=8, hidden_dim=64, out_dim=32):
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
        item_in = emb_dim * len(self.item_fields) + 1  # +1 = the new continuous popularity feature

        self.user_mlp = nn.Sequential(
            nn.Linear(user_in, hidden_dim), nn.ReLU(), nn.Linear(hidden_dim, out_dim)
        )
        self.item_mlp = nn.Sequential(
            nn.Linear(item_in, hidden_dim), nn.ReLU(), nn.Linear(hidden_dim, out_dim)
        )

    def user_vector(self, user_idx_dict):
        feats = [self.user_embs[f](user_idx_dict[f]) for f in self.user_fields]
        x = torch.cat(feats, dim=-1)
        return self.user_mlp(x)

    def item_vector(self, item_idx_dict, item_cont_feat):
        feats = [self.item_embs[f](item_idx_dict[f]) for f in self.item_fields]
        feats.append(item_cont_feat)  # [batch, 1] continuous feature, concatenated last
        x = torch.cat(feats, dim=-1)
        return self.item_mlp(x)

    def score(self, user_idx_dict, item_idx_dict, item_cont_feat):
        u = self.user_vector(user_idx_dict)
        i = self.item_vector(item_idx_dict, item_cont_feat)
        return (u * i).sum(-1)


def encode_items_v2(asset_snapshot, item_vocabs, item_fields, isins, pop_feature, device):
    out = {}
    for f in item_fields:
        vals = asset_snapshot.loc[isins, f].tolist()
        out[f] = torch.tensor([item_vocabs[f].encode(v) for v in vals], dtype=torch.long, device=device)
    cont = torch.tensor(pop_feature.loc[isins].values, dtype=torch.float32, device=device).unsqueeze(-1)
    return out, cont


def train_context_encoder_v2(
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
    """Control flow copied as-is from encoder.train_context_encoder - the
    only change is that item scoring now also consumes `pop_feature`
    (encode_items_v2 / model.item_vector take the extra continuous input)."""
    device = device or torch.device("cuda" if torch.cuda.is_available() else "cpu")
    rng = random.Random(seed)
    torch.manual_seed(seed)

    sampled_customers = sample_training_customers(train_tx, n_sample_customers, seed=seed)
    pairs, bought_by_customer = build_bpr_pairs(train_tx, sampled_customers, candidate_isins)

    user_vocabs, item_vocabs, user_fields, item_fields = build_vocabs(customer_snapshot, asset_snapshot)
    pop_feature, pop_feature_stats = compute_item_popularity_feature(train_tx, asset_snapshot.index)

    model = ContextEncoderV2(user_vocabs, item_vocabs, emb_dim, hidden_dim, out_dim).to(device)
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
            pos_idx, pos_cont = encode_items_v2(asset_snapshot, item_vocabs, item_fields, pos_items, pop_feature, device)
            neg_idx, neg_cont = encode_items_v2(asset_snapshot, item_vocabs, item_fields, neg_items, pop_feature, device)

            pos_score = model.score(u_idx, pos_idx, pos_cont)
            neg_score = model.score(u_idx, neg_idx, neg_cont)
            loss = -F.logsigmoid(pos_score - neg_score).mean()

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            epoch_losses.append(loss.item())
        losses.append(float(np.mean(epoch_losses)))
        print(f"[encoder_v2] epoch {epoch + 1:>2}/{n_epochs}  BPR loss = {losses[-1]:.4f}")

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
        "ablation_feature": "log1p(train Buy count) per ISIN, z-scored on train",
        "ablation_feature_stats": pop_feature_stats,
    }
    return model, user_vocabs, item_vocabs, user_fields, item_fields, pop_feature, info


@torch.no_grad()
def score_all_candidates_v2(model, customer_snapshot, asset_snapshot, user_vocabs, item_vocabs,
                             user_fields, item_fields, pop_feature, customer_ids, candidate_isins, device):
    model.eval()
    item_idx, item_cont = encode_items_v2(asset_snapshot, item_vocabs, item_fields, candidate_isins, pop_feature, device)
    item_vecs = model.item_vector(item_idx, item_cont)

    results = {}
    chunk = 512
    for start in range(0, len(customer_ids), chunk):
        chunk_ids = customer_ids[start : start + chunk]
        u_idx = encode_users(customer_snapshot, user_vocabs, user_fields, chunk_ids, device)
        u_vecs = model.user_vector(u_idx)
        scores = u_vecs @ item_vecs.T
        order = torch.argsort(scores, dim=1, descending=True).cpu().numpy()
        for row_i, cid in enumerate(chunk_ids):
            ranked = [candidate_isins[j] for j in order[row_i]]
            results[cid] = ranked
    return results
