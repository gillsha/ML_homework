"""
baselines.py - Baseline #1: non-personalized Popularity ranking.
"""
import time


def fit_popularity(train_tx, candidate_isins, top_k=10):
    """Rank ISINs by number of Buy transactions in train, restricted to the
    candidate universe (items that actually have a price quote at the
    cutoff date). Returns the same top-k list for every user."""
    t0 = time.time()
    cand_set = set(candidate_isins)
    counts = (
        train_tx[train_tx["ISIN"].isin(cand_set)]
        .groupby("ISIN")
        .size()
        .sort_values(ascending=False)
    )
    top_list = counts.index.tolist()[:top_k]
    runtime = time.time() - t0
    return top_list, runtime


def recommend_popularity(top_list, customer_id=None):
    """Same top-10 list regardless of customer_id - that's the point of the
    non-personalized baseline."""
    return list(top_list)
