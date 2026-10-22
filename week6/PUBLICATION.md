# HW6 — Personalized PageRank on MovieLens 100K

This is the verified 22 October2026 app and evidence, restored as a fresh focused publication after the earlier HW6 revert. The current `graph.js` and `script.js` are preserved exactly; the older publication's modified implementations were not restored. The instructor assignment remains [readme.md](readme.md).

[Final report](../A06_submit/gill_elizaveta_a06_report.pdf) · [Numerical source map](report/number_sources.md) · [Full user tables](report/recommendations_supplement.html) · [Verification tools](tools/README.md)

## Run locally

```sh
python3 week6/tools/get_data.py
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/week6/` in a GPU-capable browser. Raw MovieLens files are downloaded directly from GroupLens and verified by SHA-256. Existing differing data are never overwritten. TensorFlow.js4.22.0 is loaded from jsDelivr; D3 is vendored. No GitHub Pages configuration or deployment is changed by this publication.

## Evaluation protocol and results

Build the graph and run all self-checks. Run **validation** alpha selection, then explicitly set alpha to.50 before calling `hw6RunComparison('test')` and `hw6RenderComparison(rows)`. Do not use the combined runner's test-before-selection sequence for this report. The browser verification tool restores the included supplied-MF checkpoint without training. A fresh app's first MF request otherwise triggers the supplied trainer.

The shared validation/test cohorts are846/861. At validation-selected alpha.50, test Recall@10 is.11219 for PPR, .07969 for global PageRank, .07602 for popularity and.02114 for each of three separately identified MF checkpoints. PPR covers138/1611 candidates. User1 PPR gets3/19 (MF7/19); user2 gets0/2. At diagnostic alpha.85, the original two-user overlap is0/10 but becomes8/10 on the common eligible pool; the original comparison does not isolate restart effects.

All943 users converge at.50; at.95,29/943 float32 columns reach500 iterations. Float64 converges and filtered Top10 rankings agree. All three MF checkpoints collapse to constant float32 scores; conclusions do not generalize to a successfully trained MF. Whole-matrix regularization is a code-based hypothesis, not an experimentally proven cause. Exploratory.10/.30 findings are validation-only; primary.50 remains fixed.

The current graph uses rectangular blocks and full-user batched propagation, independent freezing, tol1e-6/maxIter500, and synchronous readback. Saved convergence, factor checkpoints, per-user audits, validation selection, split statistics and benchmark evidence are in [results](results/). The report explains float32 precision and memory limitations. Timings are historical measurements on the recorded M3/WebGL runtime, not universal performance promises.

## Publication scope

Only HW6 code, portable tools, numerical experiment evidence, report materials and the final PDF are published. Public evidence copies omit console/private filesystem inventories and replace local runtime paths with portable descriptions; numerical results are retained. Original workbench artifacts stay local. No session JSON, JSONL, gzip, conversation backups, private logs or authentication data are included. The prepared local session array is described in report §6 but is deliberately absent from Git. Instructor submission has not been performed.
