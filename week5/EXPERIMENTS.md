# Named experiments

## default-20261016-01 — first instructor-default experiment

Completed with the real browser application and TensorFlow.js 4.22.0/WebGL.
Defaults and seeds were unchanged. Users 1 and 2 were selected before training.

- [Run notes](experiments/default-20261016-01/RUN_NOTES.md)
- [Compact machine-readable summary](experiments/default-20261016-01/summary.json)
- [Setup and source/data hashes](experiments/default-20261016-01/setup.json)
- [Actual application-exported JSON](experiments/default-20261016-01/exported-results.json)
- [Independent verification](experiments/default-20261016-01/independent-verification.json)
- [Training screenshot](experiments/default-20261016-01/training-results.png)
- [User 1 screenshot](experiments/default-20261016-01/user-1-recommendations.png)
- [User 2 screenshot](experiments/default-20261016-01/user-2-recommendations.png)

The model is effectively mean-only: factors shrank to approximately 1e-27 in
Frobenius norm, and browser scores are tied. Numerical RMSE gaps do not establish
improvement. This original run is preserved unchanged; the one explicitly
requested regularization comparison is recorded separately below.

## reg-0005-20261016-01 — single-variable regularization comparison

Changed only reg from 0.05 to 0.005 through the existing parameter control.
Application defaults and training/data source hashes are unchanged. All other
training settings, seeds, split/evaluation rules, backend, and users 1/2 match.

- [Run notes](experiments/reg-0005-20261016-01/RUN_NOTES.md)
- [Validation decision saved before new-model test evaluation](experiments/reg-0005-20261016-01/validation-decision.json)
- [Controlled side-by-side comparison](experiments/reg-0005-20261016-01/comparison.json)
- [Summary](experiments/reg-0005-20261016-01/summary.json)
- [Independent verification](experiments/reg-0005-20261016-01/independent-verification.json)

Neither run demonstrated validation improvement; the recorded difference was zero
with a predeclared 2e-6 RMSE tie tolerance. Both restored epoch 1. The follow-up
retained larger but still negligible factors; raw scores remained tied. Test RMSE,
Recall@10 and both Top-10 lists are unchanged. No further parameter search was run.
The default test results had already been observed; the new run's preference was
recorded from validation before computing its own test metrics or Recall.

The coordinating AI's manual-exercise result is saved as an **AI-assisted
cross-check** in `evidence/ai-assisted-recall-cross-check.json`. Student personal
verification remains pending.

## Reproduction and preservation

Tooling installation is described in IMPLEMENTATION_NOTES.md. Run from the repo
root, with Playwright available normally or via PLAYWRIGHT_MODULE. An existing
Chromium binary can be supplied through CHROMIUM_EXECUTABLE.

```sh
# This performs a FULL experiment, so use it only when explicitly intended.
# A new name is mandatory; an existing directory is never overwritten.
node week5/verification/run-default.cjs NEW_DEFAULT_RUN_NAME
python3 week5/verification/verify-experiment.py NEW_DEFAULT_RUN_NAME
python3 week5/verification/summarize-experiment.py NEW_DEFAULT_RUN_NAME
```

For an explicitly authorized replication of the one-variable comparison, use a
new name and `--reg=0.005`. The runner checks unchanged defaults/application/data,
runs correctness checks, fills `#reg`, then invokes the same application training
functions with a validation-first gate. It writes the validation decision before
unlocking test evaluation. The diagnostics use the actual coefficient.

```sh
node week5/verification/run-default.cjs NEW_REG_COMPARISON_NAME --reg=0.005
python3 week5/verification/verify-experiment.py NEW_REG_COMPARISON_NAME
python3 week5/verification/summarize-experiment.py NEW_REG_COMPARISON_NAME
python3 week5/verification/compare-experiments.py NEW_REG_COMPARISON_NAME
```

The first command freezes source/data hashes and code copies, checks eligibility
before choosing users, runs correctness checks, instruments read-only diagnostics,
and clicks the real application's Train button. It records actual epoch progress.
The next two commands read the saved factors and artifacts independently and write
new derived files exclusively. They do not overwrite an earlier verification.
Failures are recorded in the attempt's directory; any repaired rerun needs a new
name. No training application source change was needed for the first experiment.

After adding experiment-specific RUN_NOTES.md, seal a completed run:

```sh
python3 week5/verification/seal-experiment.py NEW_DEFAULT_RUN_NAME
# Read-only audit of the existing default run:
python3 week5/verification/seal-experiment.py default-20261016-01 --check
```

Exact selected factors are stored as little-endian float32 arrays; model.json
contains shapes, training mean, selected epoch, and hashes. Data files remain in
week5, identified by hashes. Source snapshots preserve the uncommitted application
and verification code used for the experiment. No dependency or browser binaries
are stored in the project.

The implementation notes describe the earlier correctness stage; these named
experiment notes contain the subsequent full-run observations. Neither is the
final course report. All checks so far are agent-executed; student personal
verification and the final native session export remain separate future steps.
