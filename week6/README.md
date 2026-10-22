# HW6: graph recommendations with Personalized PageRank

Implemented and measured MovieLens 100K application. The instructor specification is preserved byte-for-byte as [assignment.md](assignment.md); this avoids a case-insensitive `readme.md`/`README.md` collision. The unchanged UI still calls that specification `readme.md`. This publication contains code and experimental evidence, not the final course report or a session export.

## Run locally

From the repository root:

```sh
python3 week6/tools/get_data.py
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/week6/` in a browser with GPU acceleration. Do not open `index.html` as a `file:` URL. TensorFlow.js **4.22.0** loads from jsDelivr; D3 **7.9.0** is vendored. Verification used Chromium **153.0.8010.12**, WebGL2 on Apple M3, Playwright **1.62.1**, Node **25.9.0**, Python **3.12.14** and NumPy **2.3.5**. GPU timings are device-specific.

The two raw data files remain unchanged locally. They are omitted from this publication: the [GroupLens distribution terms](https://files.grouplens.org/datasets/movielens/ml-100k/README) require separate redistribution permission. The download helper obtains them directly from GroupLens, verifies the exact tested SHA-256 hashes and refuses to replace differing files. It can also verify existing copies.

## Exact evaluation order

1. Wait for data/backend initialization. Click **Build graph**, then **Run tests** (12 PASS, 0 FAIL, 0 PENDING).
2. Click **Run alpha sweep (validation)**. Select maximum validation macro Recall@10; exact ties choose the smaller alpha. The supplied sweep restores the previous slider setting: explicitly move the slider to **0.50**, the selected alpha.
3. For the reported test comparison, open the browser console and run the existing functions:

   ```js
   hw6SetAlpha(0.50);
   const rows = await hw6RunComparison('test');
   hw6RenderComparison(rows);
   ```

   The supplied **Evaluate Recall@10 — all four methods** button combines test evaluation followed by a sweep. It is not the reported workflow. The code and runners have been preserved.
4. Select user **1**, then **2**, and each method; click **Recommend Top-10** for each setting at alpha 0.50. For the diagnostic, collect PPR `(1,.85)`, `(2,.85)`, `(1,.50)` separately; these do not change the primary selection. The supplied two-user demo is separately labelled.
5. Click **Export verification**, **Export results**, **Export recommendations**. Use the supplementary [selected settings](results/exports/selected_settings.json) for checkpoint and metadata not exported by the app.

On a fresh page the first MF request lazily trains the unchanged supplied reference (previously measured **33.416 s**, checkpoint **1**). No retraining was done for this publication. To reproduce the exact saved comparison, use [tools/browser_verify.cjs](tools/browser_verify.cjs): it restores the packaged checkpoint, runs the validation button, explicitly sets alpha, calls the existing test runner and uses the native exporters. The publication rerun took **43.436 s** and reproduced every test recall and mean popularity exactly. Tensor count remained **2→2**. The only console error was a missing `favicon.ico` (404); no JavaScript exceptions. See [browser evidence](results/publication-browser-check.json) and [resource diagnosis](results/resource-check.json).

## Data, implementation and protocol

[Import provenance](results/import-provenance.json) records instructor repository `dryjins/RecSys-LLMs`, retrieved HEAD `4b9598b4e670417387aabe3facb7868b6b6143eb`, and the sole commit touching week6, `00c032fb58ca5f7bec05218b5bebee01e462e532`. No other instructor weeks were imported. MovieLens files match the project's HW5 checksums.

There are 943 users, 1,682 movies and 100,000 ratings; independently computed **unpadded sparsity is 93.69533064%**. Per-user chronological splitting sorts `(timestamp, movieId)`, takes `floor(.8n)` training and `floor(.1n)` validation, and places the remainder in test: **79,619 / 9,596 / 10,785**. Users with fewer than five ratings would be excluded; none are. This is not a globally chronological split, and timestamps describe ratings, not viewing sessions.

The graph contains 943 training-observed users and 1,611 training-observed movies, with 45,602 binary positive edges (rating ≥4). User 685 and 253 movie nodes have degree zero. TF.js propagation uses rectangular user/movie blocks, batches of at most128, per-user convergence/freezing, restart-directed dangling mass and bounded CPU caching by graph/parameters/backend. No dense square MovieLens tensor is created. MovieLens PPR seeds are **raw user IDs**; explicit transition fixtures use **node indices**. User943 maps to node942; node943 is already a movie. Unknown raw IDs throw.

Recommendations rank training candidates by score descending, then movie ID ascending. Validation excludes all training-rated movies; test also excludes all validation-rated movies. All methods use the same warm, scoreable cohort and macro Recall@10 (relevance ≥4). [Cohort details](results/cohort-breakdown.json): validation846, test861. The82 excluded test users are81 positive-degree users without eligible relevance plus user685, who also lacks positive training edges. The13 absent relevant test items are13 distinct movies and13 user–movie instances.

## Measured findings and limitations

| Primary test method (861 users) | Recall@10 | Mean positive-training popularity |
|---|---:|---:|
| Popularity | 0.076023 | 271.997 |
| Global PageRank, alpha .50 | 0.079693 | 257.820 |
| PPR, alpha .50 | 0.112189 | 244.207 |
| Supplied HW6 MF | 0.021137 | 96.761 |
| Saved HW5 MF, lambda .05 | 0.021137 | 96.761 |
| Saved HW5 MF, lambda .005 | 0.021137 | 96.761 |

The unchanged HW6 MF is the primary reference. Both saved HW5 configurations are separate extra comparisons: the [saved validation decision](results/models/hw5-validation-decision.json) selected neither. All three use `mu + dot(P[userId], Q[movieId])`, padded16-dimensional factors, Adam.01 and checkpoint1. HW6 uses30epochs/batch512/regularization.05/shared seed20261013; HW5 used20epochs/batch64/regularization.05 or.005/separate seeds5101–5103 and warm clipped RMSE for checkpoint selection. These are not identical training protocols.

All943 users have **one unique float32 candidate score in each MF**, with zero score standard deviation. Complete ordered Top10 lists and per-user hits are identical across both cohorts; ascending-ID ties explain the equal recall. Factor hashes, norms, score dispersion and checkpoint provenance are in [mf-equality.json](results/mf-equality.json) and [models/](results/models/). The HW6 maximum absolute float64 factor dot product is2.94e-9, below the mean's float32 ULP2.38e-7. The models collapsed for ranking; these results cannot establish the quality of a well-trained MF.

At alpha.95, **914/943 GPU users converge and29 reach500 iterations** (unchanged L1 tolerance1e-6). Float64 converges for943/943. Maximum GPU residual1.823e-6, mass error8.402e-7 and GPU–float64 element difference1.538e-8; evaluated Top10 orders/hits all agree. The earlier907 denominator was the union of validation/test cohorts, not all graph users. User685 is applicable and converges in one iteration with all mass at its restart node. [Full all-user evidence](results/all943-convergence.json) includes every user and exclusions.

The app's padded sparsity display differs from the independent unpadded value; nine Latin-1 titles are decoded incorrectly by the supplied UTF-8 loader. Native exports omit some checkpoint/runtime/hit/convergence metadata. These supplied components remain unchanged; [discrepancies](results/analysis-users-and-discrepancies.json), supplementary CSVs and JSON preserve the missing evidence. All eight recommendation audits found no pool/exclusion violations, short lists or zero-score lists. Exploratory validation-only alpha.10/.30 results are labelled separately and did not replace primary alpha.50.

See [additional metrics](results/additional-metrics.json), [exploratory validation](results/exploratory-validation.json), [independent histories](results/independent-histories.json), [verified references](results/references.md), and [portable verification instructions](tools/README.md). Raw full-vector GPU JSON (~146.7 MiB) is omitted; the tools regenerate it in bounded batches. All three factor checkpoints are included (about493 KiB combined). No private session logs are included. GitHub Pages was disabled and both candidate demo URLs returned404 when checked; a live deployment has not been verified.
