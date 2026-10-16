# First full default MovieLens run — default-20261016-01

This is an experiment/evidence note, not the final homework report. All execution
and verification here were performed by the AI agent. Student personal verification
is pending. There was one successful full training attempt, no repaired training
rerun, no tuning, and no Git commit.

## Frozen setup and execution

- Defaults: 16 factors, 20 epochs, Adam lr=0.01, reg=0.05, batch size=64.
- Seeds: user=5101, item=5102, shuffle=5103.
- Loss: observed-training batch-mean raw-prediction MSE plus reg times the
  whole-matrix sum of squared factor entries, including allocated padding rows.
- Clipped [1,5] warm-start RMSE; identical eligible baseline/MF rows. Raw-score
  ranking, ascending movie ID on ties. Candidate pool is training-observed movies
  with metadata, minus the user's train/validation history. Per-user chronological
  split retains timestamp/movie-ID tie-breaking; boundaries may share timestamps.
- Browser: Chromium 153.0.8010.12; Playwright 1.64.1; Node 25.9.0;
  TensorFlow.js 4.22.0; selected backend WebGL (WebGL 2); Apple M3 host.
- Users 1 and 2 were fixed before tests/model initialization; they had 19 and 2
  eligible relevant test items. No substitution or result-based user selection.
- All 11 adapted upstream and 14 focused correctness checks passed before training.
- Actual epoch progress is in `progress.ndjson`; runner heartbeats are labelled
  separately and are not presented as training progress.

The runner observes the original application via runtime wrappers, without
editing application files, changing optimizer arguments, or drawing random
numbers. Initialization diagnostics precede the training timer. Training takes
**229.5616 s**, including epoch metrics, snapshots/restoration, and progress logging.
Loading: 0.9322 s; correctness tests: 6.6944 s; initialization: 0.0081 s;
initial diagnostics: 1.2192 s. Recall evaluation takes 60.6460 s separately.

Four WebGL ReadPixels performance warnings were recorded. There were no application
exceptions or training failures. They were not treated as a failed run.

## Checkpoint and RMSE

All 20 epoch train/validation RMSE pairs were identical. The earliest-minimum rule
selected **epoch 1**. Recomputed restored validation RMSE was 1.18002107464026,
exactly matching the selected history entry.

| Split | Raw rows | Eligible | Excluded | Baseline RMSE (browser JS) | MF RMSE (browser TF.js) | Independent saved-factor MF RMSE |
|---|---:|---:|---:|---:|---:|---:|
| Train | 79619 | 79619 | 0 | 1.105208514257592 | 1.1052078640164102 | 1.1052085142573125 |
| Validation | 9596 | 9561 | 35 | 1.1800217293694784 | 1.18002107464026 | 1.1800217293694546 |
| Test | 10785 | 10732 | 53 | 1.2257193843348209 | 1.225719429436268 | 1.2257193843347933 |

There are 0 cold-start users, 32 distinct cold validation items, and 46 distinct
cold test items. Training includes 943 users and 1611 movies. Training mean is
3.5806026199776437. Raw split counts sum to 100000; eligible counts sum to 99912,
plus 88 excluded held-out rows. Full IDs and baseline values are retained in JSON.

Difference convention: `delta = MF_RMSE - baseline_RMSE` (negative means improvement),
and `relative_percent = 100 * delta / baseline_RMSE`.

- Train browser delta: -6.5024118e-7 (-0.0000588343%).
- Validation browser delta: -6.5472922e-7 (-0.0000554845%).
- Test browser delta: +4.5101447e-8 (+0.00000367959%).

These differences are numerical, not evidence of useful predictive improvement.
Independent double-precision MF and baseline RMSE are identical on all three
splits. The browser uses float32 tensor predictions/reductions while its baseline
helper uses JS double arithmetic. Both original and independently recomputed
figures are retained, not substituted for one another.

## Regularization diagnostics — measured, not presumed

All-matrix Frobenius norms at initialization: user 6.1485554, item 8.2035314
(TF.js reductions). At the restored checkpoint, independent double-precision norms
from exact stored float32 factors are user **7.5527973e-28**, item **8.3811044e-28**.
TF.js squared-norm reductions report zero because these squares underflow float32;
the stored factors are tiny, not literally all zero.

On all eligible train/validation/test rating pairs, TF.js dot corrections are
exactly zero at the restored checkpoint. Raw predictions are all
**3.5806026458740234**, the float32 representation of the training mean.
No raw prediction lies outside [1,5]. At initialization, test correction RMS was
0.01005908 and its range was [-0.04499456, 0.04576048]; test raw scores ranged from
3.53560805 to 3.62636304, with no clipping needed then either. Complete distributions,
quantiles, and means for all three splits are saved.

Fixed diagnostic batch: the first 64 supplied training rows before shuffling,
31 from user 196 and 33 from user 186. This is not claimed to be the optimizer's
first shuffled batch. Identical rows are saved for both states.

| State | Data MSE (TF.js) | reg × whole-matrix squared norms (TF.js) |
|---|---:|---:|
| Initialization | 1.4167258739 | 5.2551331520 |
| Restored epoch 1 | 1.4152655602 | 0 (float32 underflow) |

The initial loss-value ratio is 3.70935. Restored L2 recomputed in double precision
is 6.3643829e-56. **A ratio of loss values is not a ratio of gradients and does not
prove gradient dominance or causation.** The measured factor shrinkage and lost
score variation are consistent with strong regularization under this objective;
one unchanged-default run does not isolate the cause from optimization dynamics.

## Retrieval and fixed-user observations

Macro Recall@10: **0.021137488852036153** over **861** users (expected population).
There were 108 total hits across 5142 eligible relevant items; macro recall is not
computed by dividing those two totals. Exclusions: 82 users without an eligible
relevant item, 13 relevant rows/13 distinct items absent from training, 0 cold-start
users, 0 relevant missing-metadata IDs, and 0 already-seen relevant test rows.

Every candidate score for each selected user is exactly tied. The two lists are
therefore the ten lowest eligible movie IDs after history masking, not a ranking
of learned preferences. Both float32 and double-precision reconstruction reproduce
the browser order exactly; all 1367 / 1556 candidates are tied for users 1 / 2.

### User 1

- Train/validation history: 217 + 27 = 244 ratings, 144 rated >=4.
- Liked-genre counts: Drama 68, Comedy 42, Action 37 (multi-label counts).
- Top-10 IDs: **5, 6, 18, 20, 32, 74, 100, 102, 111, 129**.
- Relevant hits: **6, 18, 20, 32, 100, 111, 129**; recall 7/19 = 0.36842105.
- No overlap with training/validation; all movie titles, genres, scores, test
  relevance, and complete histories are in `user-1.json`.

Fargo and Bound fit familiar Crime/Drama/Thriller categories, as do the historical
5-star ratings for The Usual Suspects and Dolores Claiborne. Shanghai Triad and
The White Balloon share Drama with 5-star Dead Man Walking and The Remains of the
Day. Crumb is a documentary, but not a new genre for this user: all four historical
documentaries were rated >=4, including The Haunted World of Edward D. Wood Jr.
The Aristocats is less aligned with the user's historical Children's ratings
(mean 2.2083), despite being tied with every other candidate. None of the
recommended genres is absent from the rated history. The apparently strong
user-level recall does not establish learned personalization: the scores do not
differentiate items, and the list is determined by IDs and the history mask.

### User 2

- Train/validation history: 49 + 6 = 55 ratings, 38 rated >=4.
- Liked-genre counts: Drama 22, Romance 13, Comedy 11.
- Top-10 IDs: **2, 3, 4, 5, 6, 7, 8, 9, 11, 12**.
- No hits among the two eligible relevant test movies: Fly Away Home (304, 4)
  and As Good As It Gets (316, 5); recall 0.
- No overlap with training/validation; complete evidence is in `user-2.json`.

Copycat, Seven, and The Usual Suspects resemble the Crime/Thriller categories of
5-star Fargo and L.A. Confidential. Dead Man Walking shares Drama with 5-star
Good Will Hunting. But the list contains no Romance, despite 13 positive Romance
ratings and 5-star Emma, Sense and Sensibility, and Titanic. Babe offers Children's
content, which is less frequent in this history but not a previously absent
genre (one prior Children's movie was rated 4). These are descriptive genre
comparisons, not explanations of a learned ranking: the scores are tied.

### Limits and business meaning

An item missing from the observed train/validation ratings is not proven unknown
or unwatched by the person. MovieLens lacks complete exposure/viewing histories.
Both lists remain within genres already observed, so neither shows genre novelty
under the defined history comparison. Familiar genres may be useful for low-risk
recommendation and new titles could be discovery candidates, but this run cannot
establish actual discovery, satisfaction, or increased retention. Offline recall
measures recovery of observed held-out positives, not business impact.

## Independent checks and artifacts

`verify-experiment.py` parsed the original bytes independently, recreated splits
and candidates, loaded the exact little-endian float32 factors, and passed 1796
assertions. RMSE/candidate score tolerance: 2e-6; baseline/macro recall: 1e-12;
restored-versus-selected validation RMSE: 1e-7. The two Top-10 orders match exactly.
Maximum raw-score discrepancy is 2.5896380e-8 (mean float32 conversion). Tie
neighborhoods are fully retained in `user-analysis.json`, rather than suppressed.

Evidence includes setup/source/data hashes, frozen source files, actual downloaded
UI JSON, per-epoch metrics, read-only diagnostics, exact factor binaries (168128
bytes total), per-user retrieval results, complete selected-user histories, and
screenshots of the real page. `summary.json` is a compact entry point.
Before model disposal there were 2 live tensors / 168128 bytes; afterward 0 live
tensors / 0 bytes. WebGL's reusable allocation cache is reported separately and
is not counted as a live-tensor leak. All factors and epoch metrics were finite.

The runner refuses to reuse the experiment name. After verification, the seal
script hashes every artifact and makes the experiment tree read-only. Future
experiments must use new names. This is the first default run, not a tuned result.

## Proposed follow-up — not executed

Change only **reg from 0.05 to 0.005**, keeping the whole-matrix-sum definition,
16 factors, epochs, lr, batch size, seeds, split, users, and evaluation unchanged.
Test whether weaker shrinkage preserves score variation and improves validation
RMSE. Select the checkpoint using validation only. Improvement is a hypothesis,
not a claimed outcome. No follow-up has been run.

Student exercise is pending: use user 1's Top-10 IDs and the 19 eligible relevant
test IDs, identify the intersection, count hits, and compute Recall@10. No student
verification or first-person reflection has been supplied by the agent.
