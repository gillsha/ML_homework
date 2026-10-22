# Portable HW6 verification

These tools never patch the app or train a model. Work from the repository root. Python3 with NumPy2.3.5 is required for numerical checks; `pip install -r week6/tools/requirements.txt`. For browser verification, install Playwright1.62.1 with `npm install --prefix week6/tools`, then install a GPU-capable Chromium. Optionally set `PLAYWRIGHT_MODULE` to an existing Playwright module and `CHROMIUM_EXECUTABLE` to a browser executable. No machine-specific paths are embedded.

```sh
python3 week6/tools/get_data.py
OPENBLAS_NUM_THREADS=1 VECLIB_MAXIMUM_THREADS=1 OMP_NUM_THREADS=1 python3 week6/tools/verify_package.py --output week6/results/regenerated/portable-check.json
node week6/tools/browser_verify.cjs --output week6/results/regenerated/browser-check.json
```

The data helper verifies the exact original MovieLens checksums and refuses to replace differing files. The CPU check independently rebuilds the chronological split/graph, audits6828 method-user lists, recomputes recall/coverage/popularity, verifies all three frozen MF checkpoints' float32 rankings, and reproduces primary users1/2 and reference-graph arithmetic. It took5.024seconds on the recorded host; allow under20seconds on similar hardware. Its deadline is165seconds.

The browser check restores the exact saved HW6 factor files, explicitly runs validation selection before test, checks source hashes, runs all12 supplied checks and compares test recall/popularity to saved values. It does not retrain. Current publication verification took23.005seconds, selected alpha.50, reproduced every metric exactly and kept tensor count2→2. Estimated40–70seconds before the run; deadline170seconds. The tool reports console errors honestly and returns1 for a sole missing `favicon.ico`404 too; distinguish that recorded resource warning from a numerical/JavaScript failure. See `results/publication-browser-check.json` and `publication-browser-assessment.json`. No app file was changed to suppress the warning.

For independent float64/GPU vector comparison, run one GPU job at a time (estimate10–30seconds on similar hardware), followed by its CPU comparison (estimate under10seconds):

```sh
node week6/tools/browser_verify.cjs --mode propagation --alpha .95 --start 0 --end 128 --output week6/results/regenerated/gpu-095.json
OPENBLAS_NUM_THREADS=1 VECLIB_MAXIMUM_THREADS=1 OMP_NUM_THREADS=1 python3 week6/tools/numpy_batch.py --gpu week6/results/regenerated/gpu-095.json --output week6/results/regenerated/numpy-095.json
```

`core.py` implements its own raw parsing, split, graph and float64 propagation; it imports no app code. The current app may populate its full-user cache on the first requested seed even when exporting a small verification subset. The subset limit bounds output, not the app's cache. Use the recorded full943-user convergence evidence for the complete official grid; .95 has29 capped float32 columns and primary.50 has none. Timings and float32 stopping counts can vary by GPU/backend.

Portable report regeneration uses `python3 week6/report/build_report.py` (requires pypdf) and `node week6/report/build-pdf.cjs` (same Playwright/browser settings). This regenerates the report from included evidence; it does not create or read session exports. Render and inspect every page before replacing the final PDF. The published final PDF is at `A06_submit/gill_elizaveta_a06_report.pdf`.

Private workbench files, raw console transcripts, session JSON/JSONL/gzip and backups are excluded from Git. Public evidence copies retain numerical fields and recorded experiment provenance while removing private local runtime paths. The original private artifacts remain unchanged locally.
