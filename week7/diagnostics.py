"""
diagnostics.py - read-only analysis script, does NOT modify run.py / run_v2.py
/ data.py / encoder.py / encoder_v2.py / baselines.py / evaluate.py.

Ranked lists per user were not persisted to disk by run.py / run_v2.py (only
aggregate metrics were), so to inspect them we recompute them here by calling
the exact same train/eval functions with the exact same seed=42 and
hyperparameters already used in the saved metrics.json / metrics_v2.json.
No train/eval logic is changed - this script only imports and calls it, then
counts how many distinct top-10 ISIN SETS (order ignored) come out across the
4508 evaluated users, for Popularity, v1 and v2.
"""
import json

import torch

import data
import baselines
import encoder
import encoder_v2
import evaluate

DATA_DIR = "data/extracted/FAR-Trans"


def main():
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"[diagnostics] device = {device}")

    customers, assets, tx, close_prices = data.load_raw(DATA_DIR)
    train_tx, test_tx = data.build_splits(tx, verbose=False)
    candidate_isins = data.candidate_universe(close_prices, cutoff=data.TRAIN_CUTOFF)
    customer_snapshot = data.snapshot_customers(customers, cutoff=data.TRAIN_CUTOFF)
    asset_snapshot = data.snapshot_assets(assets, cutoff=data.TRAIN_CUTOFF)
    relevant_by_user = evaluate.get_evaluated_users(test_tx, candidate_isins)
    evaluated_users = sorted(relevant_by_user.keys())

    assert len(candidate_isins) == 553
    assert len(evaluated_users) == 4508
    print(f"[diagnostics] candidate universe = {len(candidate_isins)}, "
          f"evaluated users = {len(evaluated_users)}")

    K = 10

    # ---------- Popularity ----------
    top_list, _ = baselines.fit_popularity(train_tx, candidate_isins, top_k=K)
    pop_ranked_by_user = {cid: top_list for cid in evaluated_users}
    pop_sets = {frozenset(pop_ranked_by_user[cid][:K]) for cid in evaluated_users}
    print(f"[diagnostics] Popularity: {len(pop_sets)} distinct top-{K} sets "
          f"(expected 1, sanity check)")

    # ---------- Context Encoder v1 (attrs only) ----------
    (model_v1, user_vocabs_v1, item_vocabs_v1, user_fields_v1, item_fields_v1,
     train_info_v1) = encoder.train_context_encoder(
        customer_snapshot, asset_snapshot, train_tx, candidate_isins,
        n_sample_customers=5000, emb_dim=8, hidden_dim=64, out_dim=32,
        lr=1e-3, batch_size=1024, n_epochs=15, seed=42, device=device,
    )
    ranked_v1 = encoder.score_all_candidates(
        model_v1, customer_snapshot, asset_snapshot, user_vocabs_v1, item_vocabs_v1,
        user_fields_v1, item_fields_v1, evaluated_users, candidate_isins, device,
    )
    v1_sets = {frozenset(ranked_v1[cid][:K]) for cid in evaluated_users}
    print(f"[diagnostics] Context Encoder v1: {len(v1_sets)} distinct top-{K} sets "
          f"out of {len(evaluated_users)} evaluated users")

    # ---------- Context Encoder v2 (+ popularity feature) ----------
    (model_v2, user_vocabs_v2, item_vocabs_v2, user_fields_v2, item_fields_v2,
     pop_feature_v2, train_info_v2) = encoder_v2.train_context_encoder_v2(
        customer_snapshot, asset_snapshot, train_tx, candidate_isins,
        n_sample_customers=5000, emb_dim=8, hidden_dim=64, out_dim=32,
        lr=1e-3, batch_size=1024, n_epochs=15, seed=42, device=device,
    )
    ranked_v2 = encoder_v2.score_all_candidates_v2(
        model_v2, customer_snapshot, asset_snapshot, user_vocabs_v2, item_vocabs_v2,
        user_fields_v2, item_fields_v2, pop_feature_v2, evaluated_users, candidate_isins, device,
    )
    v2_sets = {frozenset(ranked_v2[cid][:K]) for cid in evaluated_users}
    print(f"[diagnostics] Context Encoder v2: {len(v2_sets)} distinct top-{K} sets "
          f"out of {len(evaluated_users)} evaluated users")

    # sanity re-check: nDCG@10 should match the saved metrics (same seed/hparams)
    pop_ndcg, _ = evaluate.evaluate_ranked_lists(pop_ranked_by_user, relevant_by_user, k=K)
    v1_ndcg, _ = evaluate.evaluate_ranked_lists(ranked_v1, relevant_by_user, k=K)
    v2_ndcg, _ = evaluate.evaluate_ranked_lists(ranked_v2, relevant_by_user, k=K)
    print(f"[diagnostics] sanity re-check nDCG@10: Popularity={pop_ndcg:.4f}, "
          f"v1={v1_ndcg:.4f}, v2={v2_ndcg:.4f}")

    result = {
        "n_evaluated_users": len(evaluated_users),
        "k": K,
        "distinct_top10_sets": {
            "popularity": len(pop_sets),
            "context_encoder_v1": len(v1_sets),
            "context_encoder_v2": len(v2_sets),
        },
        "sanity_ndcg_recheck": {
            "popularity": pop_ndcg,
            "context_encoder_v1": v1_ndcg,
            "context_encoder_v2": v2_ndcg,
        },
    }
    with open("diagnostics_topk_diversity.json", "w") as f:
        json.dump(result, f, indent=2)
    print("\n[diagnostics] written to diagnostics_topk_diversity.json")
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
