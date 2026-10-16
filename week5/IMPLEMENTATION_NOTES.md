# HW5 implementation and correctness notes

## Migration and source of truth

Active homework: this `week5/` directory in
`https://github.com/gillsha/ML_homework_lunch_generator.git`.
The six old PageRank files were moved, byte-for-byte with relative paths intact,
to `legacy-pagerank/`: `app.js`, `graph.js`, `pagerank.js`, `index.html`,
`readme.md`, and `data/karate.csv`. The destination did not exist before migration.
The archive retains the old rendering defect; it is historical work, not HW5 MF.

The current starter was imported from instructor revision
[`00c032fb58ca5f7bec05218b5bebee01e462e532`](https://github.com/dryjins/RecSys-LLMs/tree/00c032fb58ca5f7bec05218b5bebee01e462e532/week5).
`readme.md` is the **unaltered upstream requirements document**. `style.css`,
`u.data`, and `u.item` are also unaltered. Source and archive SHA-256 hashes are
in `evidence/provenance.json`. `verification/import-upstream.py` checks those
hashes and refuses to overwrite an existing implementation. It is a one-time
provenance utility, not a command to rerun for normal verification.

The screenshot and lecture specify matrix factorization; the general guidelines
and old local directory refer to PageRank. The screenshot's dot-product model
also differs from the current README's mean-plus-dot model. The explicit local
conventions below follow the implementation-stage instructions and code metric
contract; these differences have not been silently resolved in the upstream text.

## Exact model, loss, and randomness

The application uses 16 factors; unit fixtures may request a smaller width to
check the parameterized function contract. User/item matrices use raw positive
IDs as row indices, with unused ID-zero padding. Rows also exist for catalog
items not observed in training; **allocation never implies learned eligibility**.

For observed training ratings T and mini-batch B:

```text
mu = sum(r for r in T) / |T|
raw(u,i) = mu + sum_f P[u,f] * Q[i,f]

L_B = (1 / |B|) * sum_(u,i,r in B) (raw(u,i) - r)^2
      + lambda * (sum_(all u,f) P[u,f]^2 + sum_(all i,f) Q[i,f]^2)
```

- MSE is a mean over the actual batch, including a shorter final batch.
- The L2 term is a **whole-matrix sum**, including allocated/padding rows,
  applied once per mini-batch. It is **not** divided by batch size, rating count,
  factor count, or number of rows. There is no 1/2 factor.
- This preserves the explicit expression in the upstream `trainMF` example.
  Substituting batch-averaged/gathered-row L2 would change the meaning of
  `reg=0.05`; that substitution has not been made.
- Adam optimizes both factor variables. `mu` is fixed, not optimized.
- Gradient updates consume only the `train` argument. The all-rating dense
  matrix and validation/test targets are never used by the loss.
- No clipping occurs inside the training objective.

Defaults remain **20 epochs, learning rate 0.01, lambda 0.05, batch size 64**.
Initialization uses `tf.randomNormal`, mean 0, SD 0.05, seeds **5101** (users)
and **5102** (items). Fisher-Yates shuffling uses Mulberry32 seed **5103**, reset
once per run and advanced across epochs. TF.js is pinned to **4.22.0**.
The backend is selected and recorded at runtime. Fixed seeds support repeatable
runs on the same environment; bit-identical results across backends are not
promised. Synthetic checks use explicitly labelled small configurations
(including lambda=0 to isolate fitting); these are not MovieLens tuning runs.

## Splits, eligibility, predictions, and retrieval

The supplied split is retained: per user sort by `(timestamp, movieId)`, take
`floor(0.8*n)` training rows, `floor(0.1*n)` validation rows, and the remainder
for test. Users with fewer than five ratings are skipped. Equal timestamps can
cross boundaries: this is deterministic nondecreasing ordering, not strict
temporal separation. Original held-out arrays remain intact for history masks.

- **Rating RMSE:** use `clip(raw, 1, 5)`, only for users and movies observed in
  training. `eligibleSplit` supplies exactly the same rows to baseline and MF.
  Report raw/eligible/excluded rows and distinct missing user/item IDs. The
  baseline is the training mean, never a held-out mean.
- **Unknown IDs:** `predictRating` returns the training mean for out-of-range,
  non-integer, zero, or allocated-but-unobserved IDs. It returns 0 before a model
  exists. These fallbacks are not included in reported warm-start RMSE.
  An empty-training model has mean 0. Recommendations for unknown users are [].
- **Empty evaluation:** the low-level RMSE helper retains upstream's 0 return
  for an empty array; reports use null rather than claiming a measured zero.
  Nonempty training with no eligible validation rows is rejected because a
  validation checkpoint cannot be selected. Empty training returns empty history.
- **Candidates:** all globally training-observed movie IDs with metadata, minus
  that user's training and validation history. The user must be training-known.
  History filtering happens before Top-K. A test-rated movie remains eligible
  if another user observed it during training and it passes these rules.
- **Ranking:** tensor gather + matrix multiplication + `tf.topk`, using **raw
  model scores**. Equal scores select ascending movie ID (candidate IDs are
  sorted before `topk`). The UI and saved JSON explicitly label raw scores;
  scores outside 1–5 are permitted and are not probabilities.
- **Recall@K:** relevant IDs are distinct test items rated >=4 in that user's
  eligible candidate set. Compute `hits / relevant` per eligible user, then take
  the arithmetic mean. Users with no eligible relevant items are excluded.
  `unseenIds` means globally training-absent relevant movie IDs; already-seen,
  unknown-user, and missing-metadata exclusions are reported separately, not
  misleadingly folded into that category. Reasons may overlap.

`u.item` is decoded with `TextDecoder('iso-8859-1')`. Browsers alias that label
to Windows-1252; an independent byte audit confirms **no 0x80–0x9f bytes**, so
this decodes the supplied file identically to Latin-1. All nine accented titles
are compared with Python's Latin-1 decoding of the original bytes.

## Checkpoints and tensor ownership

`trainMF` records clipped warm-start training/validation RMSE each epoch. On a
strict validation improvement it clones both factor matrices into independent
tensors, disposes the previous snapshots, and records the epoch. Equality keeps
the earliest epoch. After the last update it assigns the selected snapshots back
into the existing variables. `selectBestCheckpoint` remains a pure non-mutating
history selector; its tie rule also handles an unsorted input history.

Model variables belong to the current model. Reinitialization disposes the old
variables and temporary initialization tensors. Batch tensors/intermediates are
inside `tf.tidy`; `optimizer.minimize(..., false, ...)` returns null, so it is not
disposed as a tensor. Optimizer slots and snapshot tensors are disposed in
`finally`. `disposeModel()` releases the two retained variables. UI/result
objects hold plain JSON data, not tensors. The training API remains synchronous
like the upstream scaffold; the browser can be busy during a full run.

## Necessary local deviations from scaffolding

1. `script.js`: six function implementations; observed-ID membership, candidate
   context, explicit eligibility statistics, seeded shuffle, loss and checkpoint
   helpers. RMSE no longer scores random cold-item rows.
2. `runPipeline`: evaluates/restores the selected model, displays test RMSE and
   the matched baseline/population, and prepares serializable results. Test RMSE
   is calculated after training; it is never an epoch-selection criterion.
3. `index.html`/renderers: warm-start split table, sparsity, raw-score labels,
   selected-model evaluation, results download, links to local notes and archive.
   Recall UI requires an initialized model. Recommendations/recall requested
   after training are added to the downloadable JSON.
4. `data.js`: legacy title decoding and removal of a stale TODO comment. Split
   logic and genre mapping are unchanged.
5. Test fixture corrections and lifetime fixes below. Runtime failures now show
   the actual message rather than the obsolete “implement TODO functions” hint.

## Transparent upstream test changes

Original excerpts from upstream `script.js` (revision linked above):

```js
// REC_FIXTURE, lines 843–845
train: [{ userId: 1, movieId: 1, rating: 5, timestamp: 1 }],
val: [{ userId: 1, movieId: 2, rating: 4, timestamp: 2 }],
test: [{ userId: 1, movieId: 3, rating: 5, timestamp: 3 }],
// test #9, line 1127
if (!ids.includes(3)) throw new Error("movie 3 is test-rated and must be eligible");
```

The global training pool was {1}, so recommending 3 contradicted training-only
candidates. **Correction #9:** add user 2's training rows for items 2–5. User 1's
train/val exclusions and test item remain unchanged; the original assertions are
retained. Adding item 2 also ensures its removal tests validation-history masking,
not merely absence from the global pool.

```js
// recallFixture, lines 909–915
const train = [
  { userId: 1, movieId: 1, rating: 5, timestamp: 1 },
  { userId: 2, movieId: 2, rating: 5, timestamp: 1 },
  { userId: 2, movieId: 3, rating: 4, timestamp: 2 },
];
const val = [];
const test = [{ userId: 1, movieId: 2, rating: 5, timestamp: 2 }];
// test #10, lines 1144–1146
const rankEleven = withFixture({ ...recallFixture(11), history: [] }, () => recallAtK(10));
if (!close(rankEleven.overallRecall, 0)) {
  throw new Error(`rank-11 recall = ${rankEleven.overallRecall}, expected 0`);
}
```

Only {2,3} were eligible for user 1, so rank 11 was impossible. **Correction #10:**
add user 2's training rows for items 4–12. The original scores, target, assertions,
and rank-1/rank-11 intent are retained; user 1 now has eleven candidates.

Other lifecycle-only test changes: `fixtureModel` initialization and the factor
slice in check #6 use `tf.tidy`; `withFixture` disposes temporary models and
restores all affected state. It derives fixture `numUsers` and observed-ID sets
from the fixture training history. This fixes the measured upstream fixture leak
without changing the nine other checks' assertions. The app labels its results
**adapted upstream self-checks: nine unchanged assertion checks and two corrected
fixture checks**, never “the untouched original 11 tests”. Focused new tests live
separately in `verification/correctness.js` and have their own result category.

## Verification and evidence

All checks are **agent-executed**, not the student's personal verification.
No MovieLens MF experiment, hyperparameter search, or report has been run/written
at this stage. The real dataset is loaded only for parsing, split, baseline, and
encoding checks. Training tests are deliberately **synthetic**, including the
opposing-preference validation example that demonstrates overfitting/restoration.
It is not represented as a real debugging incident.

Evidence:

- `evidence/provenance.json`: original starter and byte-identical archive hashes.
- `evidence/data-statistics.json`: independent Python counts, exclusions,
  baseline metrics, timestamp ties, genres and decoded accented titles.
- `evidence/correctness-results.json`: real browser/runtime/backend, categorized
  tests, numeric loss/restoration/memory evidence, data cross-checks and code hashes.
- `evidence/integrity-results.json`: archive, untouched upstream-file and
  executed-source hash checks, regenerated by `verification/check-integrity.py`.
- `verification/browser-check.cjs`: loopback server + real browser test runner;
  it does not train on MovieLens and closes the server/browser on completion.

The initial runtime pass had 11 adapted upstream checks and 13 focused checks
passing. A synthetic end-to-end UI/saved-results check was then added. The final
JSON records **9 unchanged-assertion checks + 2 corrected-fixture checks + 14 new
focused checks passing**, with no failures or pending checks. No implementation
runtime failure was observed in that initial pass; no fictional failure/fix
narrative is supplied. The previously observed upstream null-disposal and fixture
leak defects are documented separately from deliberately constructed tests.

### Reproduce correctness checks

The app itself requires no npm installation. Verification needs Python 3,
Node.js, Playwright 1.64.1, Chromium, and network access for the pinned TF.js CDN.
Install test tooling **outside the repository** (choose an existing parent):

```sh
npm install --prefix "$HOME/.cache/hw5-tools" --no-audit --no-fund playwright@1.64.1
"$HOME/.cache/hw5-tools/node_modules/.bin/playwright" install chromium
PLAYWRIGHT_MODULE="$HOME/.cache/hw5-tools/node_modules/playwright" \
  node week5/verification/browser-check.cjs
```

Run the last command from the repository root. An existing compatible browser can
be supplied via `CHROMIUM_EXECUTABLE=/absolute/path/to/chromium`; the runner has
no hard-coded temporary paths. `RESULTS_FILE` optionally selects a separate JSON
output for preserving an earlier run. `python3 week5/verification/check-data.py`
runs just the independent data audit. No dependencies, caches, or browser binaries
belong in this repository.

After browser verification, run `python3 week5/verification/check-integrity.py`
to verify archive/upstream preservation and the saved run's source hashes.

### Next stage: full default experiment (not executed yet)

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory week5
```

Open `http://127.0.0.1:8000/`, confirm the TF.js backend and defaults
(20 / 0.01 / 0.05 / 64), run self-checks, then click **Train** once. The page will
report the restored validation checkpoint and matched warm-start test RMSE.
**Save training results JSON** records options, seeds, backend, history, selected
epoch, exclusions, and metrics. Requested recommendation lists and Recall@10 are
also included if generated before saving. Full experiments/interpretation and
student manual verification are the next stage, not outcomes of these notes.

Future report plan remains at most five main-text pages plus separate references.
Author details will be requested then. AI disclosure currently records OpenCode
CLI 1.19.0 and harness model `openai/gpt-6-astra`; the eventual session JSON must
be a genuine unmodified native export, not these verification result files.
