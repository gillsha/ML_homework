"""
evaluate.py - nDCG@10 computation, shared by both baselines, plus a
step-by-step trace for one real customer (for manual verification).
"""
import math

import pandas as pd


def ndcg_at_k(ranked_list, relevant_set, k=10):
    """Standard binary-relevance nDCG@k.
    DCG  = sum_{i=1..k} rel_i / log2(i+1)
    IDCG = DCG of the ideal ranking (all relevant items first)
    nDCG = DCG / IDCG  (0 if IDCG == 0, i.e. no relevant item exists at all)
    """
    ranked_k = ranked_list[:k]
    rels = [1 if item in relevant_set else 0 for item in ranked_k]
    dcg = sum(rel / math.log2(i + 2) for i, rel in enumerate(rels))  # i is 0-based -> position i+1
    ideal_hits = min(len(relevant_set), k)
    idcg = sum(1 / math.log2(i + 2) for i in range(ideal_hits))
    ndcg = dcg / idcg if idcg > 0 else 0.0
    return ndcg, rels, dcg, idcg


def get_evaluated_users(test_tx, candidate_isins):
    """Users eligible for evaluation: >=1 real Buy in the test window whose
    ISIN is also inside the candidate universe (otherwise it could never be
    ranked / recommended in the first place)."""
    cand_set = set(candidate_isins)
    sub = test_tx[test_tx["ISIN"].isin(cand_set)]
    relevant_by_user = sub.groupby("customerID")["ISIN"].apply(lambda s: set(s)).to_dict()
    return relevant_by_user


def evaluate_ranked_lists(ranked_by_user, relevant_by_user, k=10):
    """ranked_by_user: dict customerID -> ranked list of ISINs (same list
    for all users for the popularity baseline, per-user for the DL model).
    Returns mean nDCG@k and the per-user breakdown."""
    rows = []
    for cid, relevant in relevant_by_user.items():
        ranked = ranked_by_user[cid] if isinstance(ranked_by_user, dict) else ranked_by_user
        ndcg, rels, dcg, idcg = ndcg_at_k(ranked, relevant, k=k)
        rows.append({"customerID": cid, "ndcg": ndcg, "n_relevant": len(relevant)})
    df = pd.DataFrame(rows)
    return df["ndcg"].mean(), df


def pick_example_customer(relevant_by_user, min_relevant=2, seed=42):
    """Pick a real customerID from the evaluated set that has >=2 relevant
    (test-window) purchases, so the worked example is non-trivial."""
    import random

    candidates = sorted([c for c, rel in relevant_by_user.items() if len(rel) >= min_relevant])
    if not candidates:
        raise ValueError(f"No evaluated customer with >= {min_relevant} test purchases found.")
    rng = random.Random(seed)
    return rng.choice(candidates)


def write_stepwise_ndcg_csv(path, customer_id, ranked_list, relevant_set, k=10):
    """Full position-by-position nDCG@k computation for one customer,
    written to CSV, so the numbers can be recomputed by hand."""
    ranked_k = ranked_list[:k]
    rows = []
    dcg_running = 0.0
    for pos, item in enumerate(ranked_k, start=1):
        rel = 1 if item in relevant_set else 0
        gain = rel / math.log2(pos + 1)
        dcg_running += gain
        rows.append(
            {
                "customerID": customer_id,
                "position": pos,
                "ISIN": item,
                "relevance": rel,
                "discount_log2(pos+1)": math.log2(pos + 1),
                "gain_rel/discount": gain,
                "cumulative_DCG": dcg_running,
            }
        )
    df = pd.DataFrame(rows)

    ideal_hits = min(len(relevant_set), k)
    idcg_rows = []
    idcg_running = 0.0
    for pos in range(1, k + 1):
        rel = 1 if pos <= ideal_hits else 0
        gain = rel / math.log2(pos + 1)
        idcg_running += gain
        idcg_rows.append(gain)
    idcg = idcg_running

    final_dcg = dcg_running
    final_ndcg = final_dcg / idcg if idcg > 0 else 0.0

    df["IDCG_total"] = idcg
    df["DCG_total"] = final_dcg
    df["nDCG@10"] = final_ndcg
    df["n_relevant_in_test"] = len(relevant_set)
    df["relevant_ISINs_in_test"] = ", ".join(sorted(relevant_set))

    df.to_csv(path, index=False)
    return final_ndcg, final_dcg, idcg
