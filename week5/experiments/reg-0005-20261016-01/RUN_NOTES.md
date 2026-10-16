# Controlled regularization comparison — reg-0005-20261016-01

Technical experiment note, not a final homework report. All execution and
verification were AI-assisted. The coordinating AI's user-1 Recall@10 calculation
is recorded separately in `evidence/ai-assisted-recall-cross-check.json` as an
AI-assisted cross-check. **Student personal verification remains pending.**

One full follow-up was run, successfully on its first attempt. There was no further
parameter search, no application-default change, no report writing, and no commit.
The sealed default experiment was read for comparison and not modified.

## Frozen intervention and validation-first chronology

The only training/model parameter changed was **reg: 0.05 -> 0.005**. Both runs use
16 factors, 20 epochs, Adam learning rate 0.01, batch size 64, initialization SD
0.05, seeds 5101/5102/5103, and the same training-mean-plus-dot model. Both use
observed-training batch-mean MSE plus `reg * (sum(P^2) + sum(Q^2))`, summed over the
whole allocated matrices for every mini-batch. No normalization was changed.

Application/data hashes match the default. The same chronological split, timestamp
and movie-ID tie-break, warm-start RMSE eligibility, clipping, raw-score ranking,
candidate/history filtering, and macro recall conventions were retained. Users 1
and 2 remain fixed. Initial factor norms and the fixed diagnostic batch match.

The existing `#reg` control was set to 0.005 after 25 correctness checks passed;
the application's HTML/script defaults still specify 0.05. The runner invokes
the same initializeFactors/trainMF/selectBestCheckpoint functions as runPipeline.
It stops before runPipeline's automatic test evaluation. Runtime instrumentation
rejects new-model test RMSE/retrieval before the decision gate is released, and
initial/pre-decision diagnostics score only training and validation rows.
No training RNG draws or optimizer modifications were introduced.

The old default test metrics and Recall@10 **had already been observed**. This is
not represented as a never-inspected test set. Neither old nor new test metrics
were inputs to the validation comparison/preference rule.

The between-run validation tie tolerance, **2e-6 absolute RMSE**, was fixed in
setup.json before training. All twenty epoch validation values in the follow-up
equalled 1.18002107464026, so the unchanged earliest-minimum rule restored epoch 1.

At **2026-10-16 14:32:50.026 UTC**, validation-decision.json recorded:

- Default restored validation RMSE: 1.18002107464026.
- New restored validation RMSE: 1.18002107464026.
- New minus default: 0.
- Preference: **neither-demonstrated-improvement**.
- New-model test metrics and Recall computed at that point: false.
- Default test already observed: true.
- Blocked/accidental evaluation attempts: 0.

The decision's SHA-256 was recorded in progress.ndjson and passed into the exported
results. New-model test evaluation began only afterward, at **14:32:50.028 UTC**.
The saved preference was not revised after test or retrieval results arrived.

## Results, including unchanged held-out outcomes

| Quantity | Default reg=0.05 | Follow-up reg=0.005 |
|---|---:|---:|
| Selected epoch | 1 | 1 |
| Train RMSE, browser | 1.1052078640164102 | 1.1052078640164102 |
| Validation RMSE, browser | 1.18002107464026 | 1.18002107464026 |
| Validation RMSE, independent double | 1.1800217293694546 | 1.1800217293694546 |
| Test RMSE, browser | 1.225719429436268 | 1.225719429436268 |
| Test RMSE, independent double | 1.2257193843347933 | 1.2257193843347933 |
| Macro Recall@10 | 0.021137488852036153 | 0.021137488852036153 |
| Training wall time, seconds | 229.5616 | 266.4940 |
| Stored-factor user Frobenius norm | 7.552797306e-28 | 3.228540531e-16 |
| Stored-factor item Frobenius norm | 8.381104407e-28 | 3.011903970e-16 |
| Validation dot-product RMS, browser | 0 | 3.798422678e-35 |
| Validation raw-score standard deviation | 0 | 0 |
| Raw prediction outside [1,5] | 0% | 0% |

Both use TF.js 4.22.0 / WebGL 2, Chromium 153.0.8010.12, Playwright 1.64.1,
Node.js 25.9.0 on the same Apple M3 host. Timing is observed wall time including
epoch metrics and checkpoint handling; no speed effect is attributed to reg.

The identical warm-start test comparison uses 10732 of 10785 raw rows, excluding
53 rows involving 46 distinct training-absent movie IDs and no cold users.
Validation uses 9561 of 9596 rows; training uses 79619. Independent MF RMSE equals
the independently calculated training-mean baseline on all three splits. The tiny
browser-versus-baseline discrepancies are numerical, not useful improvement.

Recall uses exactly 861 users; 82 users lack an eligible relevant item. There are
5142 eligible relevant items summed over users, 108 hits, and 13 excluded relevant
rows/13 distinct movies absent from training. There are no cold-start users,
missing-metadata relevant IDs, or already-seen relevant test rows. The arithmetic
mean of per-user recalls is reported, not the ratio of the aggregate counts.

## Comparable diagnostics and hypothesis

Initialization norms are identical: user 6.148555381, item 8.203531426. Reducing reg
left larger residual factors, but their selected-checkpoint norms are still about
1e-16, compared with initialization norms of order 1. Follow-up validation dot
corrections range from -6.521833676e-34 to 8.916169650e-34. The tiny nonzero values
are lost when added to the mean: **every browser raw prediction remains exactly
3.5806026458740234**, and all candidate scores for both selected users are tied.
This is effective collapse of the learned correction, not a claim that every
stored factor or dot product is literally zero.

The fixed diagnostic batch is the same 64 training rows before shuffling:
31 from user 196 and 33 from user 186. Complete row identities are saved.

| Fixed-batch component | Default | Follow-up |
|---|---:|---:|
| Initial data MSE | 1.4167258739 | 1.4167258739 |
| Initial scaled whole-matrix L2 | 5.2551331520 | 0.5255132914 |
| Initial penalty/data loss ratio | 3.7093507281 | 0.3709350560 |
| Restored data MSE, browser | 1.4152655602 | 1.4152655602 |
| Restored penalty, independent double | 6.364382911e-56 | 9.747519745e-34 |

Diagnostics now read the actual reg control/config rather than assuming 0.05.
The original default diagnostic remains correct and unchanged in its sealed run.
Loss-value ratios do not establish gradient dominance. This controlled comparison
shows larger residual factors but **no restored raw-score variation or validation
improvement**. The practical weaker-regularization hypothesis is not supported for
this seed/configuration. This does not prove a coefficient is universally best,
nor identify a universal cause of collapse. No other coefficient was tried.

## Fixed-user recommendation comparisons

Complete IDs, decoded titles, genres, scores, relevance labels, and full histories
are saved in user-1.json and user-2.json. Each new ordered Top-10 list is identical
to its default list (10/10 overlap, no additions/removals). Every raw score is
3.5806026458740234. Both lists are the lowest eligible movie IDs after history
masking because the raw scores tie, not because the model learned preferences.

| Rank | User 1 ID and title | User 2 ID and title |
|---:|---|---|
| 1 | 5 Copycat (1995) | 2 GoldenEye (1995) |
| 2 | 6 Shanghai Triad (Yao a yao yao dao waipo qiao) (1995) | 3 Four Rooms (1995) |
| 3 | 18 White Balloon, The (1995) | 4 Get Shorty (1995) |
| 4 | 20 Angels and Insects (1995) | 5 Copycat (1995) |
| 5 | 32 Crumb (1994) | 6 Shanghai Triad (Yao a yao yao dao waipo qiao) (1995) |
| 6 | 74 Faster Pussycat! Kill! Kill! (1965) | 7 Twelve Monkeys (1995) |
| 7 | 100 Fargo (1996) | 8 Babe (1995) |
| 8 | 102 Aristocats, The (1970) | 9 Dead Man Walking (1995) |
| 9 | 111 Truth About Cats & Dogs, The (1996) | 11 Seven (Se7en) (1995) |
| 10 | 129 Bound (1996) | 12 Usual Suspects, The (1995) |

User 1 has 7 hits among 19 eligible relevant items (Recall@10 0.3684210526), with
hit IDs 6,18,20,32,100,111,129. User 2 has zero hits among two eligible relevant
items: Fly Away Home (304, rating 4) and As Good As It Gets (316, rating 5).
Neither list overlaps its user's training/validation history. Candidate counts
remain 1367 and 1556. The histories themselves were also verified unchanged.

User 1's Fargo/Bound recommendations share Crime/Thriller categories with five-star
The Usual Suspects and Dolores Claiborne. Crumb is genre-familiar: four historical
documentaries were all rated at least 4. The Aristocats is less aligned with the
historical Children's-category mean of 2.2083. User 2's crime/thriller recommendations
share categories with five-star Fargo and L.A. Confidential, but the list has no
Romance despite 13 positive Romance ratings, including five-star Emma and Titanic.
These remain descriptive comparisons, not explanations of a learned ranking.

Neither user's list introduces a genre absent from their rated history. Unrated
in the observed train/validation history does not mean genuinely unknown or
unwatched: exposure is not fully observed. Offline recall does not establish
increased retention, discovery, or satisfaction.

## Verification, preservation, and next step

- 25 pretraining correctness checks passed.
- 1805 independent verification assertions passed, including saved-factor RMSE,
  candidate/ranking/metadata checks, macro recall, validation-gate chronology,
  and the exported decision hash. RMSE/score tolerance is 2e-6, baseline/macro
  tolerance 1e-12, and restoration agreement tolerance 1e-7.
- Both independently recomputed Top-10 orders match exactly, in float32 emulation
  and double precision. There are no concealed ordering differences: all
  candidates tie at the raw-score level.
- 17 controlled-comparison checks passed: only reg differs, application/data and
  runtime match, initial norms and the fixed batch match, and users remain 1/2.
- All factors/epoch metrics are finite. Two retained model tensors (168128 bytes)
  return to zero live tensors/bytes after disposal. Four WebGL ReadPixels
  performance warnings were saved; there were no application errors or reruns.
- Setup hashes, source snapshots, full histories, exact factor binaries, actual
  app-downloaded JSON, diagnostics, decision, comparison, and screenshots are saved.

One justified next step is to review the intended scaling of batch-mean data loss
versus whole-matrix summed L2 with the instructor before authorizing a different
objective or more experiments. That recommendation follows the flat validation
curve and factor diagnostics, not test performance. No further search is started.

The default seal must still verify, and this follow-up is sealed separately after
verification. Student personal verification remains pending; the coordinating AI
cross-check does not satisfy it as unaided student work.
