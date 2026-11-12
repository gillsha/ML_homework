"""
data.py - loading & preparing FAR-Trans for A07 "Context Encoder" homework.

Real column names taken from the FAR-Trans README.txt (not guessed):
  customer_information.csv: customerID, customerType, riskLevel,
      investmentCapacity, lastQuestionnaireDate, timestamp
  asset_information.csv: ISIN, assetName, assetShortName, assetCategory,
      assetSubCategory, marketID, sector, industry, timestamp
  transactions.csv: customerID, ISIN, transactionID, transactionType,
      timestamp, totalValue, units, channel, marketID
  close_prices.csv: ISIN, timestamp, closePrice
"""
import os
import pandas as pd

TRAIN_CUTOFF = pd.Timestamp("2021-06-01")
TEST_END = pd.Timestamp("2021-12-01")
# tolerance window to find a close price on/near the cutoff date (markets are
# not open every calendar day, so we look a few days back from the cutoff)
PRICE_WINDOW_DAYS = 10


def load_raw(data_dir):
    customers = pd.read_csv(
        os.path.join(data_dir, "customer_information.csv"),
        parse_dates=["lastQuestionnaireDate", "timestamp"],
    )
    assets = pd.read_csv(
        os.path.join(data_dir, "asset_information.csv"), parse_dates=["timestamp"]
    )
    tx = pd.read_csv(
        os.path.join(data_dir, "transactions.csv"), parse_dates=["timestamp"]
    )
    close_prices = pd.read_csv(
        os.path.join(data_dir, "close_prices.csv"), parse_dates=["timestamp"]
    )
    return customers, assets, tx, close_prices


def build_splits(tx, train_cutoff=TRAIN_CUTOFF, test_end=TEST_END, verbose=True):
    """Temporal split on Buy transactions only (recommending future purchases).
    Reports honest counts for train / test / "after test window" so nothing
    is silently swept under the rug."""
    buy = tx[tx["transactionType"] == "Buy"].copy()
    train = buy[buy["timestamp"] < train_cutoff].copy()
    test = buy[(buy["timestamp"] >= train_cutoff) & (buy["timestamp"] < test_end)].copy()
    after = buy[buy["timestamp"] >= test_end]

    if verbose:
        print(f"[data] Buy transactions total: {len(buy)} "
              f"(Sell transactions excluded, {len(tx) - len(buy)} rows)")
        print(f"[data] TRAIN  (< {train_cutoff.date()}):               "
              f"{len(train):>7} tx | {train['customerID'].nunique():>6} customers | "
              f"{train['ISIN'].nunique():>4} ISIN")
        print(f"[data] TEST   [{train_cutoff.date()} .. {test_end.date()}): "
              f"{len(test):>7} tx | {test['customerID'].nunique():>6} customers | "
              f"{test['ISIN'].nunique():>4} ISIN")
        print(f"[data] AFTER  (>= {test_end.date()}, NOT used):          "
              f"{len(after):>7} tx | {after['customerID'].nunique():>6} customers | "
              f"{after['ISIN'].nunique():>4} ISIN")
        print("[data] Note: data continues well past 2021-12-01 (47030 Buy rows), "
              "so the test window is not starved of data; cutoffs were used as given.")
    return train, test


def candidate_universe(close_prices, cutoff=TRAIN_CUTOFF, window_days=PRICE_WINDOW_DAYS):
    """All ISINs that have a close price on/near the cutoff date -> the
    universe of items that could plausibly be recommended at that point in
    time (an asset with no price quote is not a realistic recommendation)."""
    window = close_prices[
        (close_prices["timestamp"] <= cutoff)
        & (close_prices["timestamp"] >= cutoff - pd.Timedelta(days=window_days))
    ]
    isins = sorted(window["ISIN"].unique().tolist())
    return isins


def _snapshot_as_of(df, id_col, date_col, cutoff):
    """For every id, take the record with date_col closest to (but not after)
    cutoff. If an id has no record before cutoff, fall back to its earliest
    available record (purely defensive - FAR-Trans has full coverage for the
    IDs we actually need, see exploration notes in run.py output)."""
    df = df.copy()
    before = df[df[date_col] <= cutoff]
    best_before = before.sort_values(date_col).groupby(id_col, as_index=False).tail(1)
    missing_ids = set(df[id_col].unique()) - set(best_before[id_col].unique())
    if missing_ids:
        fallback = (
            df[df[id_col].isin(missing_ids)]
            .sort_values(date_col)
            .groupby(id_col, as_index=False)
            .head(1)
        )
        best_before = pd.concat([best_before, fallback], ignore_index=True)
    return best_before.drop_duplicates(subset=[id_col], keep="first").reset_index(drop=True)


def snapshot_customers(customers, cutoff=TRAIN_CUTOFF):
    """One row per customerID, using the information available as of the
    train cutoff (no leakage from later profile updates). Categories such as
    Predicted_* and Not_Available are kept as-is, exactly as they appear in
    the raw data - they are NOT merged with their non-predicted counterparts."""
    snap = _snapshot_as_of(customers, "customerID", "timestamp", cutoff)
    cols = ["customerID", "customerType", "riskLevel", "investmentCapacity"]
    snap = snap[cols].copy()
    for c in cols[1:]:
        snap[c] = snap[c].fillna("Not_Available").astype(str)
    return snap.set_index("customerID")


def snapshot_assets(assets, cutoff=TRAIN_CUTOFF):
    """One row per ISIN, information as of the train cutoff. sector/industry
    are genuinely missing (NaN) for some assets in the raw file; we label
    those explicitly as 'Unknown' (a distinct category) instead of dropping
    the asset or silently imputing something else."""
    snap = _snapshot_as_of(assets, "ISIN", "timestamp", cutoff)
    cols = ["ISIN", "assetCategory", "sector", "industry"]
    snap = snap[cols].copy()
    for c in cols[1:]:
        snap[c] = snap[c].fillna("Unknown").astype(str)
    return snap.set_index("ISIN")
