"""
run_v2.py - controlled ablation driver for A07 Context Encoder.

Reuses data.py, baselines.py and evaluate.py UNCHANGED. Only the DL item
tower is modified (see encoder_v2.py): one additional continuous input -
z-scored log1p(train Buy count) per ISIN - concatenated into the item tower
before item_mlp.

The split / candidate universe / evaluated users are recomputed from the
SAME unmodified data.py functions used by run.py, purely to assert they
still equal the v1 values (553 candidates / 4508 evaluated users) - not to
change them. Popularity and Context Encoder v1 numbers are read back from
the existing metrics.json rather than recomputed, so v1 results used for
comparison are exactly the ones already reported (metrics.json is not
touched/overwritten).
"""
import json
import time

import torch

import data
import encoder_v2
import evaluate

DATA_DIR = "data/extracted/FAR-Trans"
V1_METRICS_PATH = "metrics.json"
V2_METRICS_PATH = "metrics_v2.json"


def main():
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"[run_v2] device = {device}")

    with open(V1_METRICS_PATH) as f:
        v1_metrics = json.load(f)

    # ---------- reuse the same split / candidate universe / snapshots (unchanged) ----------
    customers, assets, tx, close_prices = data.load_raw(DATA_DIR)
    train_tx, test_tx = data.build_splits(tx, verbose=False)
    candidate_isins = data.candidate_universe(close_prices, cutoff=data.TRAIN_CUTOFF)
    customer_snapshot = data.snapshot_customers(customers, cutoff=data.TRAIN_CUTOFF)
    asset_snapshot = data.snapshot_assets(assets, cutoff=data.TRAIN_CUTOFF)
    relevant_by_user = evaluate.get_evaluated_users(test_tx, candidate_isins)
    evaluated_users = sorted(relevant_by_user.keys())

    assert len(candidate_isins) == v1_metrics["split"]["n_candidate_isin"] == 553, (
        "candidate universe changed vs v1 - STOPPING, this would violate the "
        "ablation constraint (candidate universe must stay identical)."
    )
    assert len(evaluated_users) == v1_metrics["split"]["n_evaluated_users"] == 4508, (
        "evaluated users changed vs v1 - STOPPING, this would violate the "
        "ablation constraint (evaluated users must stay identical)."
    )
    print(f"[run_v2] confirmed unchanged vs v1: {len(candidate_isins)} candidates, "
          f"{len(evaluated_users)} evaluated users")

    # ---------- train v2 (same seed / sample / hyperparams as v1) ----------
    (
        model,
        user_vocabs,
        item_vocabs,
        user_fields,
        item_fields,
        pop_feature,
        train_info,
    ) = encoder_v2.train_context_encoder_v2(
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
        device=device,
    )
    print(
        f"[run_v2] trained on {train_info['n_sample_customers_used']} sampled customers "
        f"({train_info['n_training_pairs']} BPR pairs), runtime={train_info['runtime_sec']:.2f}s"
    )

    t0 = time.time()
    ranked_by_user = encoder_v2.score_all_candidates_v2(
        model, customer_snapshot, asset_snapshot, user_vocabs, item_vocabs,
        user_fields, item_fields, pop_feature, evaluated_users, candidate_isins, device,
    )
    scoring_runtime = time.time() - t0

    ndcg_v2, df_v2 = evaluate.evaluate_ranked_lists(ranked_by_user, relevant_by_user, k=10)
    total_runtime_v2 = train_info["runtime_sec"] + scoring_runtime
    print(f"[run_v2] nDCG@10 (v2) = {ndcg_v2:.4f} over {len(df_v2)} users")

    # ---------- comparison vs v1 / popularity (numbers taken from metrics.json) ----------
    pop_ndcg = v1_metrics["popularity"]["ndcg_at_k"]
    v1_ndcg = v1_metrics["context_encoder"]["ndcg_at_k"]
    v1_loss = v1_metrics["context_encoder"]["loss_per_epoch"]
    v2_loss = train_info["loss_per_epoch"]

    gap_v1 = pop_ndcg - v1_ndcg
    gap_v2 = pop_ndcg - ndcg_v2
    gap_delta = gap_v1 - gap_v2  # positive => gap shrank (v2 closer to Popularity)

    print("\n" + "=" * 72)
    print("ABLATION SUMMARY: Context Encoder v1 vs v2 (+ log1p(train Buy count) item feature)")
    print("=" * 72)
    print(f"{'Model':38s} {'nDCG@10':>10s}")
    print(f"{'Popularity':38s} {pop_ndcg:>10.4f}")
    print(f"{'Context Encoder v1 (no pop feature)':38s} {v1_ndcg:>10.4f}")
    print(f"{'Context Encoder v2 (+ pop feature)':38s} {ndcg_v2:>10.4f}")

    print("\nLoss per epoch, v1 vs v2:")
    print(f"{'epoch':>5s} {'v1_loss':>10s} {'v2_loss':>10s} {'diff(v2-v1)':>12s}")
    for i, (l1, l2) in enumerate(zip(v1_loss, v2_loss), start=1):
        print(f"{i:>5d} {l1:>10.4f} {l2:>10.4f} {l2 - l1:>12.4f}")

    print("\nGap to Popularity (Popularity_nDCG - model_nDCG):")
    print(f"  v1 gap = {gap_v1:.4f}")
    print(f"  v2 gap = {gap_v2:.4f}")
    if gap_delta > 1e-9:
        verdict = f"Gap SHRANK by {gap_delta:.4f} nDCG@10 points (v2 closer to Popularity than v1)."
    elif gap_delta < -1e-9:
        verdict = f"Gap GREW by {-gap_delta:.4f} nDCG@10 points (v2 further from Popularity than v1)."
    else:
        verdict = "Gap UNCHANGED."
    print(f"  => {verdict}")
    print("=" * 72)

    metrics_v2 = {
        "note": (
            "Ablation on top of A07 pipeline: ONE variable changed - item tower "
            "gets one extra continuous input (z-scored log1p(train Buy count) per "
            "ISIN) concatenated with categorical embeddings before item_mlp. "
            "Split / candidate universe / evaluated users / seed / sample size / "
            "hyperparameters are identical to v1 (asserted at runtime, see "
            "n_candidate_isin / n_evaluated_users below vs metrics.json)."
        ),
        "split": v1_metrics["split"],
        "popularity": v1_metrics["popularity"],
        "context_encoder_v1": v1_metrics["context_encoder"],
        "context_encoder_v2": {
            "k": 10,
            "hyperparams": {
                "n_sample_customers_requested": train_info["n_sample_customers_requested"],
                "n_sample_customers_used": train_info["n_sample_customers_used"],
                "n_training_pairs": train_info["n_training_pairs"],
                "n_candidate_items": train_info["n_candidate_items"],
                "emb_dim": train_info["emb_dim"],
                "hidden_dim": train_info["hidden_dim"],
                "out_dim": train_info["out_dim"],
                "lr": train_info["lr"],
                "batch_size": train_info["batch_size"],
                "n_epochs": train_info["n_epochs"],
                "device": train_info["device"],
            },
            "ablation_feature": train_info["ablation_feature"],
            "ablation_feature_stats": train_info["ablation_feature_stats"],
            "final_bpr_loss": train_info["final_loss"],
            "loss_per_epoch": train_info["loss_per_epoch"],
            "train_runtime_sec": train_info["runtime_sec"],
            "scoring_runtime_sec": scoring_runtime,
            "total_runtime_sec": total_runtime_v2,
            "ndcg_at_k": ndcg_v2,
            "n_evaluated_users": int(len(df_v2)),
        },
        "comparison": {
            "gap_popularity_minus_v1": gap_v1,
            "gap_popularity_minus_v2": gap_v2,
            "gap_delta_v1_minus_v2": gap_delta,
            "verdict": verdict,
        },
    }
    with open(V2_METRICS_PATH, "w") as f:
        json.dump(metrics_v2, f, indent=2)
    print(f"\n[run_v2] metrics written to: {V2_METRICS_PATH} ({V1_METRICS_PATH} left untouched)")


if __name__ == "__main__":
    main()
