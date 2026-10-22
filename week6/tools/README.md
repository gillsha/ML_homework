# Portable verification

Run from `week6/`. App sources are never patched by these tools. Obtain data with `python3 tools/get_data.py` (existing files are checksum-verified). Install NumPy2.3.5 from `tools/requirements.txt` in a virtual environment. Browser checks use Playwright1.62.1 (`npm install --prefix tools`) and a GPU-capable Chromium. Set `CHROMIUM_EXECUTABLE` to your browser executable if needed; `PLAYWRIGHT_MODULE` can point to an existing Playwright module. No personal paths are embedded in scripts.

CPU jobs below were measured at0.01–5 seconds each. Use one BLAS thread for comparable rounding and bounded CPU load:

```sh
export OPENBLAS_NUM_THREADS=1 VECLIB_MAXIMUM_THREADS=1 OMP_NUM_THREADS=1
python3 tools/verify_package.py --output results/regenerated/package-check.json
```

This verifies publication/app/data hashes, the byte-identical assignment, saved factor hashes and source scoring, and reproduces the cohort, MF equality, additional metrics and four global-alpha correlation/overlap files. It compares outputs with the original evidence (float64 tolerance1e-12). Each child process has a170-second deadline; numerical scripts have a165-second alarm. It also verifies all943 IDs in compact convergence evidence. GPU verification is separate:

```sh
node tools/browser_verify.cjs --output results/regenerated/browser-check.json
```

Estimate40–70 seconds on the measured M3; observed43.436seconds. It hashes served app/data files against the tested local version, clicks Build graph and Run tests, restores the saved supplied-MF factors without training, clicks the validation sweep, selects alpha explicitly, calls the supplied test runner, compares metrics and downloads native verification/results exports. It records backend, errors, timing and tensors. `--mode smoke` runs only loading/build/self-checks (~6seconds). The automatic favicon404 is reported honestly; an exit code1 with that sole error is a resource warning, not a failed numerical check. To check an available deployment add `--url https://YOUR-DEMO/week6/`; remote hashes must match local files. No deployment was available at publication time.

For full propagation regeneration, run **one GPU job at a time**, estimated5–15seconds per128-user batch; then one independent NumPy job (~1.5seconds for128 users at alpha.95):

```sh
node tools/browser_verify.cjs --mode propagation --alpha .95 --start 0 --end 128 --output results/regenerated/propagation-0.95-0.json
python3 tools/numpy_batch.py --gpu results/regenerated/propagation-0.95-0.json --output results/regenerated/numpy-0.95-0.json
```

Repeat with `(start,end)` = `(128,256)`, `(256,384)`, `(384,512)`, `(512,640)`, `(640,768)`, `(768,896)`, `(896,943)`; repeat at alpha.50 if desired. No numerical tolerance, cap or batching procedure changes. Do not launch the GPU jobs concurrently. After all eight .95 pairs:

```sh
python3 tools/additional_checks.py convergence --evidence results/regenerated --output results/regenerated/all943-convergence.json
```

The script audits all IDs, separate cohorts, nonnegative mass, residuals and float64 agreement. GPU float32 convergence counts can depend on the device/backend and reduction rounding; compare values honestly rather than forcing the saved count.

Other independently reproducible commands:

```sh
python3 tools/additional_checks.py cohorts --output results/regenerated/cohort-breakdown.json
python3 tools/additional_checks.py mf --output results/regenerated/mf-equality.json
python3 tools/additional_checks.py metrics --output results/regenerated/additional-metrics.json
python3 tools/additional_checks.py alpha --alpha .95 --output results/regenerated/global-alpha-0.95.json
python3 tools/additional_checks.py explore --alpha .10 --start 0 --end 128 --output results/regenerated/explore-0.1-0.json
```

`alpha` accepts the original grid .50/.70/.85/.95. `explore` accepts only .10/.30 and computes **validation only**, at most128 validation-cohort users per invocation; repeat through end846 and average all846 per-user recalls. The stored primary alpha remains.50. `metrics` independently recomputes relevance/hits/popularity/groups from raw data and the saved complete lists, whose ranks were already checked against float64 propagation; it does not retrain or silently recompute GPU scores.

`core.py` independently parses Latin-1 titles and chronological raw ratings, constructs the graph, redistributes dangling mass to the restart distribution, initializes at restart, and freezes each column at L1<1e-6 or caps at500. It does not import app code. `numpy_batch.py` regenerates float64 vectors and compares them to saved GPU vectors, including stationarity residual and exact Top10 order/hits. `results/numpy-*.json` preserve original independent per-user comparisons, while full GPU vector files are omitted for size. Preserve freshly generated evidence under ignored `results/regenerated/`.

Model directories contain little-endian float32 factors and `model.json`: `[944,16]` users and `[1683,16]` items, row0 padding, raw IDs directly index rows. HW5 directories also contain exact saved source snapshots, original factor/source SHA-256 values, extracted configuration/history provenance, and the no-winner validation decision. No HW5 folder is required to reproduce these extra comparisons. `results/exports/` contains original native downloads plus separately named supplementary files; helper rerun exports go beside the helper's output file and do not overwrite originals.
