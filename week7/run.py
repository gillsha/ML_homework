"""
run.py - end-to-end pipeline for A07 "Context Encoder (DL-based RecSys)".

Usage:
    python run.py --data-dir data/extracted/FAR-Trans
"""
import argparse
import json
import time

import torch

import data
import baselines
import encoder
import evaluate


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--data-dir", default="data/extracted/FAR-Trans")
    parser.add_argument("--n-sample-customers", type=int, default=5000)
    parser.add_argument("--epochs", type=int, default=15)
    parser.add_argument("--k", type=int, default=10)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--metrics-out", default="metrics.json")
    parser.add_argument("--example-csv-out", default="example_user_ndcg.csv")
    args = parser.parse_args()

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"[run] device = {device}")

    # ---------- 1. Load + temporal split ----------
    print("\n=== 1. Loading data & building temporal split ===")
    customers, assets, tx, close_prices = data.load_raw(args.data_dir)
    train_tx, test_tx = data.build_splits(tx)

    candidate_isins = data.candidate_universe(close_prices, cutoff=data.TRAIN_CUTOFF)
    print(f"[data] candidate universe (ISIN w/ close price near cutoff): {len(candidate_isins)}")

    customer_snapshot = data.snapshot_customers(customers, cutoff=data.TRAIN_CUTOFF)
    asset_snapshot = data.snapshot_assets(assets, cutoff=data.TRAIN_CUTOFF)

    relevant_by_user = evaluate.get_evaluated_users(test_tx, candidate_isins)
    evaluated_users = sorted(relevant_by_user.keys())
    print(f"[eval] evaluated users (>=1 relevant test Buy in candidate universe): "
          f"{len(evaluated_users)}")

    # ---------- 2. Baseline #1: Popularity ----------
    print("\n=== 2. Baseline #1: Popularity ranking ===")
    top_list, pop_runtime = baselines.fit_popularity(train_tx, candidate_isins, top_k=args.k)
    print(f"[popularity] top-{args.k} ISIN: {top_list}")
    print(f"[popularity] fit runtime: {pop_runtime:.4f} s")

    pop_ranked_by_user = {cid: top_list for cid in evaluated_users}
    pop_ndcg, pop_df = evaluate.evaluate_ranked_lists(pop_ranked_by_user, relevant_by_user, k=args.k)
    print(f"[popularity] mean nDCG@{args.k} over {len(pop_df)} users = {pop_ndcg:.4f}")

    # ---------- 3. Baseline #2: DL Context Encoder ----------
    print("\n=== 3. Baseline #2: DL Context Encoder (BPR) ===")
    (
        model,
        user_vocabs,
        item_vocabs,
        user_fields,
        item_fields,
        train_info,
    ) = encoder.train_context_encoder(
        customer_snapshot,
        asset_snapshot,
        train_tx,
        candidate_isins,
        n_sample_customers=args.n_sample_customers,
        n_epochs=args.epochs,
        seed=args.seed,
        device=device,
    )
    print(f"[encoder] trained on {train_info['n_sample_customers_used']} sampled customers "
          f"({train_info['n_training_pairs']} BPR (user,pos_item) pairs), "
          f"runtime = {train_info['runtime_sec']:.2f} s")

    t0 = time.time()
    dl_ranked_by_user = encoder.score_all_candidates(
        model, customer_snapshot, asset_snapshot, user_vocabs, item_vocabs,
        user_fields, item_fields, evaluated_users, candidate_isins, device,
    )
    scoring_runtime = time.time() - t0
    print(f"[encoder] scored all {len(evaluated_users)} evaluated users x "
          f"{len(candidate_isins)} candidates in {scoring_runtime:.2f} s")

    dl_ndcg, dl_df = evaluate.evaluate_ranked_lists(dl_ranked_by_user, relevant_by_user, k=args.k)
    print(f"[encoder] mean nDCG@{args.k} over {len(dl_df)} users = {dl_ndcg:.4f}")

    total_dl_runtime = train_info["runtime_sec"] + scoring_runtime

    # ---------- 4. Worked example for one real customer ----------
    print("\n=== 4. Worked nDCG@10 example for one real customer ===")
    example_customer = evaluate.pick_example_customer(relevant_by_user, min_relevant=2, seed=args.seed)
    example_relevant = relevant_by_user[example_customer]
    example_ranked = dl_ranked_by_user[example_customer]
    final_ndcg, final_dcg, idcg = evaluate.write_stepwise_ndcg_csv(
        args.example_csv_out, example_customer, example_ranked, example_relevant, k=args.k
    )
    print(f"[example] customerID = {example_customer}")
    print(f"[example] relevant ISINs in test window ({len(example_relevant)}): "
          f"{sorted(example_relevant)}")
    print(f"[example] DCG@{args.k} = {final_dcg:.6f}  IDCG@{args.k} = {idcg:.6f}  "
          f"nDCG@{args.k} = {final_ndcg:.6f}")
    print(f"[example] step-by-step CSV written to: {args.example_csv_out}")

    # ---------- 5. Save metrics.json ----------
    metrics = {
        "split": {
            "train_cutoff": str(data.TRAIN_CUTOFF.date()),
            "test_end": str(data.TEST_END.date()),
            "n_train_buy_tx": int(len(train_tx)),
            "n_train_customers": int(train_tx["customerID"].nunique()),
            "n_train_isin": int(train_tx["ISIN"].nunique()),
            "n_test_buy_tx": int(len(test_tx)),
            "n_test_customers": int(test_tx["customerID"].nunique()),
            "n_test_isin": int(test_tx["ISIN"].nunique()),
            "n_candidate_isin": len(candidate_isins),
            "n_evaluated_users": len(evaluated_users),
        },
        "popularity": {
            "k": args.k,
            "top_k_isin": top_list,
            "fit_runtime_sec": pop_runtime,
            "ndcg_at_k": pop_ndcg,
            "n_evaluated_users": int(len(pop_df)),
        },
        "context_encoder": {
            "k": args.k,
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
            "final_bpr_loss": train_info["final_loss"],
            "loss_per_epoch": train_info["loss_per_epoch"],
            "train_runtime_sec": train_info["runtime_sec"],
            "scoring_runtime_sec": scoring_runtime,
            "total_runtime_sec": total_dl_runtime,
            "ndcg_at_k": dl_ndcg,
            "n_evaluated_users": int(len(dl_df)),
        },
        "worked_example": {
            "customerID": example_customer,
            "n_relevant_in_test": len(example_relevant),
            "relevant_isins": sorted(example_relevant),
            "dcg_at_k": final_dcg,
            "idcg_at_k": idcg,
            "ndcg_at_k": final_ndcg,
            "csv_path": args.example_csv_out,
        },
    }
    with open(args.metrics_out, "w") as f:
        json.dump(metrics, f, indent=2)
    print(f"\n[run] metrics written to: {args.metrics_out}")

    # ---------- 6. Summary ----------
    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"Train split  : {metrics['split']['n_train_buy_tx']} Buy tx | "
          f"{metrics['split']['n_train_customers']} customers | "
          f"{metrics['split']['n_train_isin']} ISIN")
    print(f"Test split   : {metrics['split']['n_test_buy_tx']} Buy tx | "
          f"{metrics['split']['n_test_customers']} customers | "
          f"{metrics['split']['n_test_isin']} ISIN")
    print(f"Candidate universe: {metrics['split']['n_candidate_isin']} ISIN")
    print(f"Evaluated users (>=1 relevant test purchase in candidate universe): "
          f"{metrics['split']['n_evaluated_users']}")
    print(f"\nDL Context Encoder hyperparams: emb_dim={train_info['emb_dim']}, "
          f"hidden_dim={train_info['hidden_dim']}, out_dim={train_info['out_dim']}, "
          f"lr={train_info['lr']}, batch_size={train_info['batch_size']}, "
          f"epochs={train_info['n_epochs']}, "
          f"sampled customers={train_info['n_sample_customers_used']} "
          f"(of {train_tx['customerID'].nunique()} with train history)")
    print(f"\nFinal nDCG@{args.k}:")
    print(f"  Popularity baseline : {pop_ndcg:.4f}")
    print(f"  DL Context Encoder  : {dl_ndcg:.4f}")
    print(f"\nRuntime:")
    print(f"  Popularity fit            : {pop_runtime:.4f} s")
    print(f"  DL Context Encoder train  : {train_info['runtime_sec']:.2f} s")
    print(f"  DL Context Encoder scoring: {scoring_runtime:.2f} s")
    print(f"  DL Context Encoder total  : {total_dl_runtime:.2f} s")
    print("=" * 70)


if __name__ == "__main__":
    main()
