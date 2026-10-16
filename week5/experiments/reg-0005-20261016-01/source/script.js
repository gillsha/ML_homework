/**
 * week5/script.js — Matrix Factorization with TensorFlow.js (HW5).
 *
 * This is a plain (classic) script, NOT an ES module. `index.html` loads the
 * TensorFlow.js runtime from a CDN before this file, exposing the global `tf`:
 *
 *   <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js"></script>
 *   <script src="data.js"></script>
 *   <script src="script.js"></script>
 *
 * `week5/data.js` (loaded before this file) exposes the MovieLens 100k data
 * layer as globals: `movies`, `ratings`, `numUsers`, `numMovies`,
 * `ratingMatrix`, `SPLIT_EXCLUSIONS`, `loadData()` and `splitByTimestamp()`.
 * This file reads those globals, renders a dataset / split summary, and wires
 * the page controls. The factorization itself is built on `tf.Variable`s and
 * tensor ops so it can run on the WebGL (GPU) backend.
 *
 * BACKEND: `initTf()` prefers WebGL, falls back to CPU, and writes the chosen
 * backend into `#tf-status`. If the CDN did not load (`typeof tf ===
 * 'undefined'`) the page shows a clear message and stops instead of throwing.
 *
 * LOCAL IMPLEMENTATION: see IMPLEMENTATION_NOTES.md for conventions and the
 * explicit changes to eligibility, checkpoint restoration, and test fixtures.
 * The original requirements remain unchanged in readme.md.
 * SIX ASSIGNMENT FUNCTIONS:
 *   1. `predictRating`        — scalar gather + dot + globalMean, clamp [1, 5].
 *   2. `initializeFactors`    — two `tf.Variable`s + the global mean.
 *   3. `trainMF`              — batched tensor training loop with L2 / Adam.
 *   4. `selectBestCheckpoint` — earliest entry with the smallest val RMSE.
 *   5. `recommendTopK`        — `matMul` + `tf.topk`, exclude train/val items.
 *   6. `recallAtK`            — Recall@K against relevant (>= 4.0) test items.
 *
 * PROVIDED for you (scaffolding): `initTf`, the shared metric helpers
 * (`computeRMSEFor`, `computeBaselineRMSE`), formatting helpers, every DOM
 * renderer, the hyper-parameter reader, the training pipeline wrapper, and the
 * automated test harness. Necessary local scaffolding corrections are listed
 * separately in IMPLEMENTATION_NOTES.md; original requirements are preserved.
 *
 * The harness reports unimplemented stubs as PENDING rather than FAIL, so the
 * page stays usable before and after the assignment is done.
 *
 * @module week5/script
 */

// ---------------------------------------------------------------------------
// Typedefs
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} Movie
 * @property {number} id
 * @property {string} title
 * @property {string[]} genres
 */

/**
 * @typedef {Object} Rating
 * @property {number} userId
 * @property {number} movieId
 * @property {number} rating
 * @property {number} timestamp
 */

/**
 * @typedef {Object} Model
 * @property {tf.Variable} userFactors Dense factor matrix `[numUsers + 1, F]`,
 *   row index = raw `userId`.
 * @property {tf.Variable} itemFactors Dense factor matrix `[maxMovieId + 1, F]`,
 *   row index = raw `movieId`.
 * @property {number} globalMean       Mean rating of the training set.
 * @property {Set<number>} observedUsers Users actually present in training.
 * @property {Set<number>} observedItems Items actually present in training.
 */

/**
 * @typedef {Object} HistoryRow
 * @property {number} epoch
 * @property {number} trainRMSE
 * @property {number} valRMSE
 */

/**
 * @typedef {Object} TrainOptions
 * @property {number} epochs    Number of full passes over the training set.
 * @property {number} lr        Learning rate.
 * @property {number} reg       L2 regularization strength.
 * @property {number} batchSize Mini-batch size.
 */

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

/** Number of latent factors used by the default pipeline. */
const NUM_FACTORS = 16;
const MODEL_SEEDS = Object.freeze({ users: 5101, items: 5102, shuffle: 5103 });
let lastRun = null; // Plain JSON-serializable results; no retained tensors.

function disposeModel(candidate = model) {
  if (!candidate) return;
  tf.dispose([candidate.userFactors, candidate.itemFactors]);
  if (candidate === model) model = null;
}

function trainingIds(train = trainSet) {
  return {
    users: new Set(train.map((r) => r.userId)),
    items: new Set(train.map((r) => r.movieId)),
  };
}

function knownPair(userId, movieId, candidate = model) {
  return !!candidate && Number.isInteger(userId) && Number.isInteger(movieId) &&
    userId > 0 && movieId > 0 &&
    userId < candidate.userFactors.shape[0] && movieId < candidate.itemFactors.shape[0] &&
    candidate.observedUsers.has(userId) && candidate.observedItems.has(movieId);
}

// Return both the rows and interpretable exclusions; never confuse allocated
// random factor rows with IDs that actually appeared in training.
function eligibleSplit(split, train = trainSet) {
  const ids = trainingIds(train);
  const rows = [], users = new Set(), items = new Set();
  let missingUserRows = 0, missingItemRows = 0;
  for (const r of split) {
    const u = ids.users.has(r.userId), i = ids.items.has(r.movieId);
    if (!u) { users.add(r.userId); missingUserRows++; }
    if (!i) { items.add(r.movieId); missingItemRows++; }
    if (u && i) rows.push(r);
  }
  return { rows, rawRows: split.length, eligibleRows: rows.length,
    excludedRows: split.length - rows.length, missingUserRows, missingItemRows,
    missingUserIds: [...users].sort((a, b) => a - b),
    missingItemIds: [...items].sort((a, b) => a - b) };
}

function splitStatistics() {
  const result = {};
  for (const [name, split] of Object.entries({ train: trainSet, validation: valSet, test: testSet })) {
    const { rows, ...counts } = eligibleSplit(split);
    result[name] = { ...counts, baselineRMSE: rows.length ? computeBaselineRMSE(rows) : null };
  }
  return result;
}

// Mulberry32 + Fisher-Yates. Reset once per training run, not once per epoch.
function seededRandom(seed) {
  return () => {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function snapshotFactors(candidate = model) {
  return { userFactors: candidate.userFactors.clone(), itemFactors: candidate.itemFactors.clone() };
}

function restoreFactors(snapshot, candidate = model) {
  candidate.userFactors.assign(snapshot.userFactors);
  candidate.itemFactors.assign(snapshot.itemFactors);
}

// Caller owns this scalar tensor. Training wraps it in optimizer.minimize/tidy.
// L_B = mean_B((mu + dot - rating)^2) + reg * (sum(P^2) + sum(Q^2)).
function batchObjective(userIdx, itemIdx, targets, reg) {
  const u = tf.gather(model.userFactors, userIdx);
  const i = tf.gather(model.itemFactors, itemIdx);
  const raw = u.mul(i).sum(1).add(model.globalMean);
  const mse = tf.losses.meanSquaredError(targets, raw);
  const penalty = model.userFactors.square().sum().add(model.itemFactors.square().sum()).mul(reg);
  return mse.add(penalty);
}

/** Training split (80% of each user's ratings, oldest first). */
let trainSet = [];

/** Validation split (10% of each user's ratings). */
let valSet = [];

/** Test split (10% of each user's ratings, newest). */
let testSet = [];

/**
 * The fitted factorization, or `null` before `initializeFactors` runs.
 *
 * @type {Model|null}
 */
let model = null;

/**
 * Metric history produced by `trainMF`.
 *
 * @type {HistoryRow[]}
 */
let trainingHistory = [];

/**
 * The history entry returned by `selectBestCheckpoint`, or `null`.
 *
 * @type {HistoryRow|null}
 */
let bestCheckpoint = null;

/** Name of the TensorFlow.js backend selected by `initTf` (`"webgl"` / `"cpu"`). */
let tfBackend = null;

// ---------------------------------------------------------------------------
// TensorFlow.js bootstrap (provided)
// ---------------------------------------------------------------------------

/**
 * Select the fastest available TensorFlow.js backend and report it.
 *
 * Tries WebGL (GPU) first and falls back to the pure-JS CPU backend. Writes
 * `backend: <name>` into `#tf-status` when that element exists. If the CDN
 * failed, `tf` is undefined: this renders a readable message and returns
 * `null` instead of letting the page throw an uncaught `ReferenceError`.
 *
 * @returns {Promise<string|null>} the selected backend, or `null` when TF.js is missing.
 */
async function initTf() {
  const statusEl = document.getElementById("tf-status");
  if (typeof tf === "undefined") {
    const message =
      "TensorFlow.js failed to load. Check your network connection (the CDN script) and reload the page.";
    if (statusEl) {
      statusEl.textContent = message;
      statusEl.className = "error";
    } else if (document.body) {
      const banner = document.createElement("p");
      banner.className = "error";
      banner.textContent = message;
      document.body.insertBefore(banner, document.body.firstChild);
    }
    return null;
  }

  try {
    await tf.setBackend("webgl");
  } catch (error) {
    await tf.setBackend("cpu");
  }
  await tf.ready();

  tfBackend = tf.getBackend();
  if (statusEl) statusEl.textContent = `TensorFlow.js backend: ${tfBackend}`;
  return tfBackend;
}

/**
 * True when `candidate` is a TF.js factor model (dense `tf.Variable` rows).
 *
 * Used to route `computeRMSEFor` through the batched tensor path and to keep
 * the fixture-based tests independent of how the model was produced.
 *
 * @param {*} candidate
 * @returns {boolean}
 */
function isTfModel(candidate) {
  return (
    !!candidate &&
    !!candidate.userFactors &&
    typeof candidate.userFactors.dataSync === "function" &&
    !!candidate.itemFactors &&
    typeof candidate.itemFactors.dataSync === "function"
  );
}

// ---------------------------------------------------------------------------
// Formatting helpers (provided)
// ---------------------------------------------------------------------------

/**
 * Format a number to a fixed number of decimals. Non-finite and missing values
 * render as an em dash so the tables never show `NaN` or `undefined`.
 *
 * @param {number|null|undefined} x
 * @param {number} [d=4] decimal places
 * @returns {string}
 */
function fmt(x, d = 4) {
  if (x === null || x === undefined) return "\u2014";
  const n = Number(x);
  if (!Number.isFinite(n)) return "\u2014";
  return n.toFixed(d);
}

/**
 * Look up a movie title by id, with a readable fallback for unknown ids.
 *
 * @param {number|string} id
 * @returns {string}
 */
function movieTitle(id) {
  const numericId = Number(id);
  const movie = movies.find((m) => m.id === numericId);
  return movie ? movie.title : `Movie #${id}`;
}

/**
 * Escape text before inserting it into HTML.
 *
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Clamp a number into the inclusive range `[lo, hi]`.
 *
 * @param {number} value
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
function clamp(value, lo, hi) {
  return Math.min(hi, Math.max(lo, value));
}

// ---------------------------------------------------------------------------
// Shared metric helpers (provided)
// ---------------------------------------------------------------------------

/**
 * Root-mean-square error of the current model over a split.
 *
 * Provided so that `trainMF` and the test harness share one implementation.
 *
 * When `model` holds TF.js variables this builds the index tensors ONCE, uses
 * `tf.gather` + element-wise multiply to score every rating in a single batch,
 * and clamps to `[1, 5]` — the same contract as `predictRating`, but fast
 * enough to call every epoch. Local change: cold-start rows are excluded, and
 * the whole computation runs inside `tf.tidy` so the intermediate tensors are
 * released automatically.
 *
 * When no TF.js model is available it falls back to the scalar
 * `predictRating` loop. That path returns `NaN` instead of throwing while
 * `predictRating` is still a `TODO(hw5)` stub, so the helper never crashes the
 * page or the harness.
 *
 * @param {Rating[]} split
 * @returns {number} `0` for an empty split; `NaN` if the scalar path throws.
 */
function computeRMSEFor(split) {
  if (!split || split.length === 0) return 0;

  if (isTfModel(model)) {
    split = split.filter((r) => knownPair(r.userId, r.movieId));
    if (!split.length) return 0;
    return tf.tidy(() => {
      const n = split.length;
      const uRows = model.userFactors.shape[0];
      const iRows = model.itemFactors.shape[0];
      const userIds = new Int32Array(n);
      const movieIds = new Int32Array(n);
      const actual = new Float32Array(n);
      const valid = new Float32Array(n);

      for (let k = 0; k < n; k++) {
        const r = split[k];
        userIds[k] = r.userId;
        movieIds[k] = r.movieId;
        actual[k] = r.rating;
        const uOk = r.userId >= 0 && r.userId < uRows;
        const iOk = r.movieId >= 0 && r.movieId < iRows;
        valid[k] = uOk && iOk ? 1 : 0;
      }

      const uIdx = tf.clipByValue(tf.tensor1d(userIds, "int32"), 0, Math.max(0, uRows - 1));
      const iIdx = tf.clipByValue(tf.tensor1d(movieIds, "int32"), 0, Math.max(0, iRows - 1));
      const u = tf.gather(model.userFactors, uIdx);
      const i = tf.gather(model.itemFactors, iIdx);
      const dot = tf.sum(tf.mul(u, i), 1);
      const mask = tf.tensor1d(valid, "float32");
      const pred = tf.clipByValue(dot.mul(mask).add(model.globalMean), 1, 5);
      const diff = pred.sub(tf.tensor1d(actual, "float32"));
      return Math.sqrt(tf.mean(diff.square()).dataSync()[0]);
    });
  }

  let sum = 0;
  try {
    for (const r of split) {
      const diff = predictRating(r.userId, r.movieId) - r.rating;
      sum += diff * diff;
    }
  } catch (error) {
    return Number.NaN;
  }
  return Math.sqrt(sum / split.length);
}

/**
 * Baseline RMSE: predict the training-set mean rating for every pair and
 * measure the error on `split`. This is the number your factorization must beat.
 *
 * @param {Rating[]} split
 * @returns {number} `0` for an empty split (never divides by zero).
 */
function computeBaselineRMSE(split) {
  if (!split || split.length === 0) return 0;
  const mean = trainSet.length
    ? trainSet.reduce((acc, r) => acc + r.rating, 0) / trainSet.length
    : 0;
  let sum = 0;
  for (const r of split) {
    const diff = mean - r.rating;
    sum += diff * diff;
  }
  return Math.sqrt(sum / split.length);
}

// ---------------------------------------------------------------------------
// Implemented assignment functions
//
// See IMPLEMENTATION_NOTES.md for local contracts and original source hashes.
// ---------------------------------------------------------------------------

/**
 * Predict the rating a user would give a movie (scalar).
 *
 * Implemented HW5 task: prediction with TensorFlow.js. The model stores the
 * factors as two dense `tf.Variable`s:
 *   - `model.userFactors` shape `[numUsers + 1, F]`, row index = `userId`
 *   - `model.itemFactors` shape `[maxMovieId + 1, F]`, row index = `movieId`
 *
 * Suggested TF.js path (wrap it in `tf.tidy` and pull out a JS number):
 * ```js
 * const f = model.userFactors.shape[1];
 * return tf.tidy(() => {
 *   const u = model.userFactors.slice([userId, 0], [1, f]); // [1, F]
 *   const i = model.itemFactors.slice([movieId, 0], [1, f]); // [1, F]
 *   const dot = u.mul(i).sum().dataSync()[0];                // scalar
 *   return clamp(model.globalMean + dot, 1, 5);
 * });
 * ```
 * `dataSync()` copies the value to the CPU as a plain number, which survives
 * `tf.tidy` (the tensors do not). Keep this function scalar: `computeRMSEFor`
 * uses its own batched tensor path, and the harness calls it once per pair.
 *
 * Contract:
 *  - Return `model.globalMean` for IDs absent from training, including
 *    allocated but untrained rows. Never throw for an unknown id.
 *  - Return `0` when the model is not initialized (`model === null`) so callers
 *    can guard cheaply.
 *  - The result is clamped to `[1, 5]`.
 *
 * @param {number} userId
 * @param {number} movieId
 * @returns {number} predicted rating in `[1, 5]`
 */
function predictRating(userId, movieId) {
  if (!model) return 0;
  if (!knownPair(userId, movieId)) return model.globalMean;
  return tf.tidy(() => {
    const u = tf.gather(model.userFactors, userId);
    const i = tf.gather(model.itemFactors, movieId);
    return clamp(model.globalMean + u.mul(i).sum().dataSync()[0], 1, 5);
  });
}

/**
 * Allocate the latent factor variables and the global mean.
 *
 * Implemented HW5 task: compute `globalMean` as the mean rating over `train`
 * (`0` for an empty training set), then create the two dense variables:
 * ```js
 * const maxMovieId = movies.reduce((m, x) => Math.max(m, x.id), 0);
 * model = {
 *   userFactors: tf.variable(tf.randomNormal([numUsers + 1, numFactors], 0, 0.05)),
 *   itemFactors: tf.variable(tf.randomNormal([maxMovieId + 1, numFactors], 0, 0.05)),
 *   globalMean,
 * };
 * ```
 * `tf.randomNormal(shape, mean, std)` draws small values — use a small std
 * (e.g. `0.05`) so training starts near the global mean. `tf.variable` wraps a
 * tensor so the optimizer can update it in place. Store the result on the
 * module-level `model` object and return it.
 *
 * Contract:
 *  - `numFactors` defaults to the module-level `NUM_FACTORS`.
 *  - If a previous `model` exists, dispose its variables (`tf.dispose`) before
 *    replacing it so repeated "Train" clicks do not leak GPU memory.
 *  - Return the `model` object.
 *
 * @param {Rating[]} train
 * @param {number} [numFactors=NUM_FACTORS]
 * @returns {Model}
 */
function initializeFactors(train, numFactors = NUM_FACTORS) {
  if (!Number.isInteger(numFactors) || numFactors < 1) throw new Error("Invalid factor count");
  disposeModel();
  trainingHistory = [];
  bestCheckpoint = null;
  lastRun = null;
  const ids = trainingIds(train);
  const maxUserId = train.reduce((m, r) => Math.max(m, r.userId), numUsers);
  const maxMovieId = train.reduce((m, r) => Math.max(m, r.movieId),
    movies.reduce((m, x) => Math.max(m, x.id), 0));
  model = tf.tidy(() => ({
    userFactors: tf.variable(tf.randomNormal([maxUserId + 1, numFactors], 0, 0.05, "float32", MODEL_SEEDS.users)),
    itemFactors: tf.variable(tf.randomNormal([maxMovieId + 1, numFactors], 0, 0.05, "float32", MODEL_SEEDS.items)),
  }));
  model.globalMean = train.length ? train.reduce((sum, r) => sum + r.rating, 0) / train.length : 0;
  model.observedUsers = ids.users;
  model.observedItems = ids.items;
  return model;
}

/**
 * Train the factorization with batched gradient descent.
 *
 * Implemented HW5 task: mini-batch loop over `train` using the TF.js optimizer.
 * Score each batch with tensor ops (never one `tf` call per rating) and let the
 * optimizer update both variables in place:
 * ```js
 * const optimizer = tf.train.adam(lr);
 * for (let epoch = 1; epoch <= epochs; epoch++) {
 *   for (const batch of batches) {
 *     optimizer.minimize(() => tf.tidy(() => {
 *       const u = tf.gather(model.userFactors, batch.userIdx);
 *       const i = tf.gather(model.itemFactors, batch.itemIdx);
 *       const pred = tf.sum(u.mul(i), 1).add(model.globalMean);
 *       const mse = tf.losses.meanSquaredError(batch.targets, pred);
 *       const l2 = model.userFactors.square().sum()
 *         .add(model.itemFactors.square().sum()).mul(reg);
 *       return mse.add(l2);
 *     }), false, [model.userFactors, model.itemFactors]);
 *   }
 *   trainingHistory.push({
 *     epoch,
 *     trainRMSE: computeRMSEFor(train),
 *     valRMSE: computeRMSEFor(val),
 *   });
 * }
 * return trainingHistory;
 * ```
 * Key TF.js APIs to use: `tf.train.adam(lr)` (or `tf.train.sgd`),
 * `optimizer.minimize(fn, returnCost, varList)`, `tf.gather`,
 * `tf.losses.meanSquaredError`, and `tf.tidy` for per-batch intermediates.
 * With returnCost=false, `minimize` returns null; do not call dispose on it.
 *
 * Contract:
 *  - `opts = { epochs, lr, reg, batchSize }`. Use mini-batches of `batchSize`
 *    (or full-batch when `batchSize >= train.length`).
 *  - Update `model` in place. Do NOT reallocate it.
 *  - Append one `HistoryRow` per epoch to the module-level `trainingHistory`
 *    and return it: `{ epoch, trainRMSE: computeRMSEFor(train),
 *    valRMSE: computeRMSEFor(val) }`. `epoch` is 1-based.
 *  - Shuffling the batch order each epoch is allowed and usually helps.
 *  - Guard `train.length === 0` by returning an empty history.
 *
 * @param {Rating[]} train
 * @param {Rating[]} val
 * @param {TrainOptions} opts
 * @returns {HistoryRow[]}
 */
function trainMF(train, val, opts) {
  trainingHistory = [];
  bestCheckpoint = null;
  if (!train.length) return trainingHistory;
  if (!model) throw new Error("Initialize factors before training");
  const { epochs, lr, reg, batchSize } = opts;
  if (!Number.isInteger(epochs) || epochs < 1 || !Number.isInteger(batchSize) || batchSize < 1 ||
      !Number.isFinite(lr) || lr <= 0 || !Number.isFinite(reg) || reg < 0) {
    throw new Error("Invalid training hyperparameters");
  }
  if (train.some((r) => !knownPair(r.userId, r.movieId))) {
    throw new Error("Training IDs differ from initialized model");
  }
  const validation = eligibleSplit(val, train).rows;
  if (!validation.length) throw new Error("No warm-start validation rows; cannot select a checkpoint");
  const random = seededRandom(MODEL_SEEDS.shuffle);
  const order = Array.from({ length: train.length }, (_, i) => i);
  const optimizer = tf.train.adam(lr);
  let bestFactors = null;
  try {
    for (let epoch = 1; epoch <= epochs; epoch++) {
      for (let j = order.length - 1; j > 0; j--) {
        const k = Math.floor(random() * (j + 1));
        [order[j], order[k]] = [order[k], order[j]];
      }
      for (let start = 0; start < order.length; start += batchSize) {
        const batch = order.slice(start, start + batchSize).map((i) => train[i]);
        tf.tidy(() => {
          const u = tf.tensor1d(batch.map((r) => r.userId), "int32");
          const i = tf.tensor1d(batch.map((r) => r.movieId), "int32");
          const y = tf.tensor1d(batch.map((r) => r.rating));
          optimizer.minimize(() => batchObjective(u, i, y, reg), false,
            [model.userFactors, model.itemFactors]);
        });
      }
      const row = { epoch, trainRMSE: computeRMSEFor(train), valRMSE: computeRMSEFor(validation) };
      if (!Number.isFinite(row.trainRMSE) || !Number.isFinite(row.valRMSE)) throw new Error("Non-finite training metric");
      trainingHistory.push(row);
      // Strict improvement preserves the earliest epoch on exact ties.
      if (!bestCheckpoint || row.valRMSE < bestCheckpoint.valRMSE) {
        const copy = snapshotFactors();
        if (bestFactors) tf.dispose(bestFactors);
        bestFactors = copy;
        bestCheckpoint = row;
      }
    }
    restoreFactors(bestFactors);
    model.selectedEpoch = bestCheckpoint.epoch;
    return trainingHistory;
  } finally {
    if (bestFactors) tf.dispose(bestFactors);
    optimizer.dispose();
  }
}

/**
 * Pick the best epoch from a training history.
 *
 * Return the entry with the smallest `valRMSE`. On a tie return the
 * entry with the EARLIEST `epoch` (do not simply take the last minimum). This
 * one is plain JavaScript — no TF.js needed.
 *
 * Contract:
 *  - Return `null` for an empty or missing history.
 *  - Do not mutate the input array.
 *
 * @param {HistoryRow[]} history
 * @returns {HistoryRow|null}
 */
function selectBestCheckpoint(history) {
  let best = null;
  for (const row of history || []) {
    if (!Number.isFinite(row.valRMSE)) continue;
    if (!best || row.valRMSE < best.valRMSE ||
        (row.valRMSE === best.valRMSE && row.epoch < best.epoch)) best = row;
  }
  return best;
}

/**
 * Recommend the top-K movies for a user.
 *
 * Score every eligible candidate movie and return the K highest-scoring
 * movies the user has NOT already rated in `trainSet` or `valSet`. Test-set
 * ratings may be candidates if training-observed globally. Upstream tensor
 * scoring sketch (the local implementation gathers eligible rows first):
 * ```js
 * const userRow = model.userFactors.slice([userId, 0], [1, F]); // [1, F]
 * const scores = model.itemFactors.matMul(userRow, false, true)  // [rows, 1]
 *   .squeeze().add(model.globalMean);                            // [rows]
 * // mask excluded ids to a large negative value, then:
 * const { values, indices } = tf.topk(maskedScores, Math.min(K, rows));
 * ```
 * Local implementation: apply the history/training/metadata mask to the ID
 * list before gathering factor rows. Top-K indices address this compact list,
 * so map them back through sorted candidate IDs (not directly to raw IDs).
 *
 * Contract:
 *  - Return `[{ movieId, title, score }, ...]` sorted by descending `score`,
 *    truncated to `K` (fewer if not enough candidates).
 *  - Only training-observed movie IDs with metadata are candidates. Exclude
 *    IDs the user rated in `trainSet` or `valSet`; unknown users return [].
 *  - Scores are RAW globalMean + dot (unclipped), labelled in returned data.
 *  - Return `[]` when the model is not initialized, when `K <= 0`, or when the
 *    user has no eligible candidates — never throw.
 *  - `title` comes from the same metadata used by `movieTitle(movieId)`.
 *
 * @param {number} userId
 * @param {number} [K=10]
 * @returns {Array<{movieId: number, title: string, score: number}>}
 */
function recommendTopK(userId, K = 10) {
  return recommendFromContext(userId, K, recommendationContext());
}

function recommendationContext() {
  const metadata = new Map(movies.map((m) => [m.id, m]));
  const seen = new Map();
  for (const r of [...trainSet, ...valSet]) {
    if (!seen.has(r.userId)) seen.set(r.userId, new Set());
    seen.get(r.userId).add(r.movieId);
  }
  const ids = trainingIds();
  const pool = [...ids.items].filter((id) => metadata.has(id) && model?.observedItems.has(id))
    .sort((a, b) => a - b);
  return { metadata, seen, pool, users: ids.users };
}

function candidateIds(userId, context) {
  if (!model || !Number.isInteger(userId) || !model.observedUsers.has(userId) ||
      !context.users.has(userId) || userId <= 0 || userId >= model.userFactors.shape[0]) return [];
  return context.pool.filter((id) => !context.seen.get(userId)?.has(id));
}

function recommendFromContext(userId, K, context) {
  if (!Number.isFinite(K) || K < 1) return [];
  const ids = candidateIds(userId, context);
  if (!ids.length) return [];
  return tf.tidy(() => {
    const u = model.userFactors.slice([userId, 0], [1, model.userFactors.shape[1]]);
    const items = tf.gather(model.itemFactors, tf.tensor1d(ids, "int32"));
    const raw = items.matMul(u, false, true).reshape([ids.length]).add(model.globalMean);
    // Candidates are filtered BEFORE topk. Sorted IDs make equal-score ties
    // deterministic: tf.topk chooses the lower index first.
    const top = tf.topk(raw, Math.min(Math.floor(K), ids.length), true);
    const scores = top.values.dataSync(), indices = top.indices.dataSync();
    return Array.from(indices, (index, j) => ({ movieId: ids[index],
      title: context.metadata.get(ids[index]).title, score: scores[j], scoreType: "raw model score" }));
  });
}

/**
 * Compute Recall@K for the current model.
 *
 * Retrieval evaluation shares the tensor scorer with `recommendTopK`.
 *   - relevant = test ratings with `rating >= 4.0`.
 *   - Candidate items = the set of movie ids that appear anywhere in `trainSet`
 *     (a global candidate pool, NOT just the user's own training items).
 *   - For every training-known user with an eligible relevant test movie,
 *     score their training-only, metadata-backed, history-filtered candidates.
 *     Reuse one context for the full evaluation to avoid rebuilding histories.
 *
 * Contract:
 *  - Return
 *    `{ overallRecall, perUser, excluded }` where:
 *      `overallRecall` = mean over reported users of `hit / relevant`
 *        (`0` when there are no reported users — never divide by zero);
 *      `perUser` = `[{ userId, relevant, hit }, ...]` (reported users only);
 *      `excluded` = `{ unseenIds, usersWithoutRelevant }`.
 *  - `unseenIds` = distinct relevant test movie ids that are NOT present in
 *    `trainSet` (they can never be recommended from a training-only pool).
 *  - `usersWithoutRelevant` = distinct test users with no eligible relevant
 *    item after metadata/history filtering. Additional reasons are separate.
 *  - Report exclusions explicitly so the recall number is interpretable.
 *
 * @param {number} [K=10]
 * @returns {{overallRecall: number, perUser: Array<{userId: number, relevant: number, hit: number}>, excluded: {unseenIds: number[], usersWithoutRelevant: number[]}}}
 */
function recallAtK(K = 10) {
  const context = recommendationContext(), training = trainingIds();
  const tests = new Map(), unseenIds = new Set(), unknownUsers = new Set();
  const missingMetadataIds = new Set();
  let excludedRelevantRows = 0, seenRelevantRows = 0;
  for (const r of testSet) {
    if (!tests.has(r.userId)) tests.set(r.userId, []);
    tests.get(r.userId).push(r);
    if (r.rating >= 4 && !training.items.has(r.movieId)) unseenIds.add(r.movieId);
    if (!training.users.has(r.userId)) unknownUsers.add(r.userId);
    if (r.rating >= 4 && !context.metadata.has(r.movieId)) missingMetadataIds.add(r.movieId);
  }
  const perUser = [], usersWithoutRelevant = [];
  for (const [userId, rows] of [...tests].sort((a, b) => a[0] - b[0])) {
    const candidates = new Set(candidateIds(userId, context)), relevant = new Set();
    for (const r of rows) {
      if (r.rating < 4) continue;
      if (candidates.has(r.movieId)) relevant.add(r.movieId);
      else {
        excludedRelevantRows++;
        if (context.seen.get(userId)?.has(r.movieId)) seenRelevantRows++;
      }
    }
    if (!relevant.size) { usersWithoutRelevant.push(userId); continue; }
    const recs = recommendFromContext(userId, K, context);
    const hit = recs.filter((r) => relevant.has(r.movieId)).length;
    perUser.push({ userId, relevant: relevant.size, hit });
  }
  const sorted = (s) => [...s].sort((a, b) => a - b);
  return { overallRecall: perUser.length ? perUser.reduce((s, u) => s + u.hit / u.relevant, 0) / perUser.length : 0,
    perUser, scoreType: "raw model score", candidatePolicy: "training-observed metadata items minus train/validation history",
    excluded: { unseenIds: sorted(unseenIds), usersWithoutRelevant,
      unknownUsers: sorted(unknownUsers), missingMetadataIds: sorted(missingMetadataIds),
      excludedRelevantRows, seenRelevantRows } };
}

// ---------------------------------------------------------------------------
// UI rendering (provided)
// ---------------------------------------------------------------------------

/**
 * Render the dataset shape summary.
 *
 * @param {HTMLElement|null} [container]
 * @returns {void}
 */
function renderDatasetSummary(container) {
  const target = container || document.getElementById("dataset-summary-body");
  if (!target) return;
  const maxMovieId = movies.reduce((max, m) => Math.max(max, m.id), 0);
  target.innerHTML = `
    <dl class="summary-list">
      <dt>Movies</dt><dd>${movies.length.toLocaleString("en-US")}</dd>
      <dt>Ratings</dt><dd>${ratings.length.toLocaleString("en-US")}</dd>
      <dt>Users</dt><dd>${numUsers.toLocaleString("en-US")}</dd>
      <dt>Rating matrix</dt><dd>${(numUsers + 1).toLocaleString("en-US")} &times; ${(maxMovieId + 1).toLocaleString("en-US")}</dd>
      <dt>Sparsity (real IDs; no padding)</dt><dd>${(100 * (1 - ratings.length / (new Set(ratings.map((r) => r.userId)).size * movies.length))).toFixed(8)}%</dd>
    </dl>`;
}

/**
 * Render the chronological 80/10/10 split summary.
 *
 * @param {HTMLElement|null} [container]
 * @returns {void}
 */
function renderSplitSummary(container) {
  const target = container || document.getElementById("split-summary-body");
  if (!target) return;
  const stats = splitStatistics();
  const exclusions = typeof SPLIT_EXCLUSIONS === "undefined" ? [] : SPLIT_EXCLUSIONS;
  target.innerHTML = `
    <table class="data-table">
      <thead><tr><th>Split</th><th>Raw rows</th><th>Eligible</th><th>Excluded</th><th>Cold users/items</th><th>Baseline RMSE</th></tr></thead>
      <tbody>${Object.entries(stats).map(([name, s]) => `<tr><td>${name}</td><td>${s.rawRows}</td><td>${s.eligibleRows}</td><td>${s.excludedRows}</td><td>${s.missingUserIds.length} / ${s.missingItemIds.length}</td><td>${fmt(s.baselineRMSE, 8)}</td></tr>`).join("")}</tbody>
    </table>
    <p class="hint">${exclusions.length} user(s) skipped while splitting. Warm-start RMSE uses training-observed users/items. Cold ID counts are distinct. Per-user order is (timestamp, movie ID); equal timestamps can cross split boundaries.</p>`;
}

/**
 * Render the training history as a plain table (no SVG, no chart library).
 *
 * @param {HTMLElement|null} [container]
 * @returns {void}
 */
function renderTrainingCurve(container) {
  const target = container || document.getElementById("training-curve");
  if (!target) return;
  if (!trainingHistory || trainingHistory.length === 0) {
    target.innerHTML =
      '<p class="empty-state">No training history yet. Press &ldquo;Train&rdquo; when ready for the experiment.</p>';
    return;
  }
  let bestIndex = 0;
  for (let i = 1; i < trainingHistory.length; i++) {
    if (trainingHistory[i].valRMSE < trainingHistory[bestIndex].valRMSE) bestIndex = i;
  }
  const rows = trainingHistory
    .map(
      (row, i) => `
      <tr${i === bestIndex ? ' class="best-epoch"' : ""}>
        <td class="num">${row.epoch}</td>
        <td class="num">${fmt(row.trainRMSE)}</td>
        <td class="num">${fmt(row.valRMSE)}</td>
      </tr>`,
    )
    .join("");
  target.innerHTML = `
    <table class="data-table">
      <thead><tr><th scope="col">Epoch</th><th scope="col">Train RMSE</th><th scope="col">Val RMSE</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

/**
 * Render the top-K recommendations for a user.
 *
 * @param {number} userId
 * @param {HTMLElement|null} [container]
 * @returns {void}
 */
function renderTopK(userId, container) {
  const target = container || document.getElementById("recommendations");
  if (!target) return;
  if (!model) {
    target.innerHTML = '<p class="empty-state">Train the model before requesting recommendations.</p>';
    return;
  }
  try {
    const recs = recommendTopK(Number(userId), 10);
    if (lastRun) {
      if (!lastRun.recommendations) lastRun.recommendations = {};
      lastRun.recommendations[userId] = { scoreType: "raw model score", items: recs };
    }
    if (!recs || recs.length === 0) {
      target.innerHTML = '<p class="empty-state">No eligible recommendations for this user.</p>';
      return;
    }
    target.innerHTML =
      '<p>Ranked by raw model score (training mean + dot product; not clipped to 1–5).</p><ol class="recommendation-list">' +
      recs
        .map(
          (r) =>
            `<li><span class="rec-title">${escapeHtml(r.title)}</span> <span class="rec-score">${fmt(r.score)}</span></li>`,
        )
        .join("") +
      "</ol>";
  } catch (error) {
    target.innerHTML = `<p class="empty-state">Recommendations unavailable: <code>${escapeHtml(error.message)}</code></p>`;
  }
}

/**
 * Render the Recall@K report, including explicit exclusions.
 *
 * @param {number} [K=10]
 * @param {HTMLElement|null} [container]
 * @returns {void}
 */
function renderRecall(K = 10, container) {
  const target = container || document.getElementById("recall-results");
  if (!target) return;
  if (!model) {
    target.textContent = "Train the model before evaluating Recall.";
    return;
  }
  try {
    const result = recallAtK(K);
    if (lastRun) lastRun.retrieval = { K, ...result };
    const rows = result.perUser
      .map(
        (u) => `
        <tr>
          <td>${u.userId}</td>
          <td class="num">${u.relevant}</td>
          <td class="num">${u.hit}</td>
          <td class="num">${u.relevant ? fmt(u.hit / u.relevant) : "\u2014"}</td>
        </tr>`,
      )
      .join("");
    target.innerHTML = `
      <p><strong>Recall@${K}:</strong> <span class="num">${fmt(result.overallRecall)}</span></p>
      <table class="data-table">
        <thead><tr><th scope="col">User</th><th scope="col">Relevant</th><th scope="col">Hits</th><th scope="col">Recall</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="4">No evaluable users.</td></tr>'}</tbody>
      </table>
      <p class="hint">Macro-average over ${result.perUser.length} eligible users. Excluded: ${result.excluded.unseenIds.length} distinct unseen relevant test item(s); ${result.excluded.usersWithoutRelevant.length} user(s) without an eligible relevant item; ${result.excluded.unknownUsers.length} cold-start user(s); ${result.excluded.excludedRelevantRows} ineligible relevant rows.</p>`;
  } catch (error) {
    target.innerHTML = `<p class="empty-state">Recall unavailable: <code>${escapeHtml(error.message)}</code></p>`;
  }
}

/**
 * Read the training hyper-parameters from the DOM, falling back to defaults when
 * the inputs are absent or invalid.
 *
 * @returns {TrainOptions}
 */
function readHyperparameters() {
  const readNumber = (id, fallback) => {
    const el = document.getElementById(id);
    if (!el) return fallback;
    const value = Number(el.value);
    return Number.isFinite(value) ? value : fallback;
  };
  return {
    epochs: Math.max(1, Math.round(readNumber("epochs", 20))),
    lr: readNumber("lr", 0.01),
    reg: readNumber("reg", 0.05),
    batchSize: Math.max(1, Math.round(readNumber("batch-size", 64))),
  };
}

/**
 * Populate the user `<select>` from the training split.
 *
 * @returns {void}
 */
function populateUserSelect() {
  const select = document.getElementById("user-select");
  if (!select) return;
  const ids = Array.from(new Set(trainSet.map((r) => r.userId))).sort((a, b) => a - b);
  select.innerHTML = ids.length
    ? ids.map((id) => `<option value="${id}">User ${id}</option>`).join("")
    : '<option value="">No users</option>';
}

/**
 * Run the full training pipeline: initialize, train, select the best checkpoint,
 * and refresh the training curve.
 *
 * @returns {void}
 */
function runPipeline() {
  const status = document.getElementById("status");
  if (!movies.length || trainSet.length === 0) {
    if (status) status.textContent = "Data not loaded yet — reload the page.";
    return;
  }
  const opts = readHyperparameters();
  try {
    if (status) status.textContent = "Training\u2026";
    initializeFactors(trainSet, NUM_FACTORS);
    trainingHistory = trainMF(trainSet, valSet, opts);
    bestCheckpoint = selectBestCheckpoint(trainingHistory);
    const stats = splitStatistics();
    for (const [name, split] of Object.entries({ train: trainSet, validation: valSet, test: testSet })) {
      const eligible = eligibleSplit(split).rows;
      stats[name].mfRMSE = eligible.length ? computeRMSEFor(eligible) : null;
    }
    lastRun = { schemaVersion: 1, upstreamRevision: "00c032fb58ca5f7bec05218b5bebee01e462e532",
      tfjs: tf.version.tfjs, backend: tf.getBackend(), options: opts, factors: NUM_FACTORS,
      seeds: MODEL_SEEDS, loss: "batch-mean raw-prediction MSE + reg * (sum(P^2) + sum(Q^2))",
      scoreType: "raw model score", ratingRMSE: "clipped [1,5], warm-start rows only",
      trainingMean: model.globalMean, selectedEpoch: model.selectedEpoch,
      bestCheckpoint: { ...bestCheckpoint }, history: trainingHistory.map((r) => ({ ...r })), splits: stats };
    renderTrainingCurve();
    const evaluation = document.getElementById("rating-results");
    if (evaluation) evaluation.textContent = `Restored epoch ${model.selectedEpoch}. Warm-start validation RMSE ${fmt(stats.validation.mfRMSE, 8)}; test RMSE ${fmt(stats.test.mfRMSE, 8)} vs baseline ${fmt(stats.test.baselineRMSE, 8)} on the same ${stats.test.eligibleRows} test rows.`;
    if (status) {
      status.textContent = bestCheckpoint
        ? `Trained ${opts.epochs} epoch(s) on ${tfBackend || "tf"} — best val RMSE ${fmt(bestCheckpoint.valRMSE)} at epoch ${bestCheckpoint.epoch}.`
        : `Trained ${opts.epochs} epoch(s) — no history recorded.`;
    }
  } catch (error) {
    const message = String(error && error.message ? error.message : error);
    if (status) status.textContent = message;
    const target = document.getElementById("training-curve");
    if (target) {
      target.innerHTML = `<p class="empty-state">Training failed: <code>${escapeHtml(message)}</code></p>`;
    }
  }
}

/**
 * Wire the controls once the data has been loaded. Rendering is defensive so an
 * unimplemented stub can never take the whole page down at load time.
 *
 * @returns {void}
 */
function init() {
  populateUserSelect();
  renderDatasetSummary();
  renderSplitSummary();
  renderTrainingCurve();

  const testButton = document.getElementById("run-tests");
  if (testButton) testButton.addEventListener("click", () => runTests());

  const trainButton = document.getElementById("train");
  if (trainButton) trainButton.addEventListener("click", runPipeline);
  document.getElementById("save-results")?.addEventListener("click", () => {
    if (!lastRun) return;
    const blob = new Blob([JSON.stringify(lastRun, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob), link = document.createElement("a");
    link.href = url; link.download = "hw5-training-results.json"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  });

  const recommendButton = document.getElementById("recommend-btn");
  if (recommendButton) {
    recommendButton.addEventListener("click", () => {
      const select = document.getElementById("user-select");
      renderTopK(select ? select.value : 1);
    });
  }

  const recallButton = document.getElementById("recall-btn");
  if (recallButton) recallButton.addEventListener("click", () => renderRecall(10));

  const status = document.getElementById("status");
  if (status) {
    status.textContent = `Dataset ready: ${movies.length.toLocaleString("en-US")} movies, ${trainSet.length.toLocaleString("en-US")} train ratings on ${tfBackend || "tf"}. Run self-checks, then Train when ready for the experiment.`;
  }
}

// ---------------------------------------------------------------------------
// Test harness
// ---------------------------------------------------------------------------

/** Marker carried by every unimplemented stub error message. */
const TODO_MARKER = "TODO(hw5)";

/** A five-rating toy training set used by several checks. */
const TOY_RATINGS = [
  { userId: 1, movieId: 1, rating: 5, timestamp: 1 },
  { userId: 1, movieId: 2, rating: 4, timestamp: 2 },
  { userId: 1, movieId: 3, rating: 3, timestamp: 3 },
  { userId: 2, movieId: 1, rating: 2, timestamp: 1 },
  { userId: 2, movieId: 2, rating: 5, timestamp: 2 },
];

/** Movies matching `TOY_RATINGS`. */
const TOY_MOVIES = [
  { id: 1, title: "Toy One", genres: [] },
  { id: 2, title: "Toy Two", genres: [] },
  { id: 3, title: "Toy Three", genres: [] },
];

/** A tiny train/val/test fixture for the recommendation checks. */
const REC_FIXTURE = {
  movies: [
    { id: 1, title: "Alpha", genres: [] },
    { id: 2, title: "Bravo", genres: [] },
    { id: 3, title: "Charlie", genres: [] },
    { id: 4, title: "Delta", genres: [] },
    { id: 5, title: "Echo", genres: [] },
  ],
  // Corrected fixture #9: candidates must be observed in global training.
  train: [
    { userId: 1, movieId: 1, rating: 5, timestamp: 1 },
    ...[2, 3, 4, 5].map((movieId) => ({ userId: 2, movieId, rating: 4, timestamp: 1 })),
  ],
  val: [{ userId: 1, movieId: 2, rating: 4, timestamp: 2 }],
  test: [{ userId: 1, movieId: 3, rating: 5, timestamp: 3 }],
};

/**
 * Build a TF.js factor model from sparse score maps.
 *
 * `userScores[id]` / `itemScores[id]` may be a number (written into factor 0,
 * so the dot product is just the product) or an array (written across factors).
 * Rows are dense and indexed by raw id, exactly like the real model, so the
 * recommendation / recall fixtures exercise the same tensor path as training.
 *
 * @param {Object<number, number|number[]>} userScores
 * @param {Object<number, number|number[]>} itemScores
 * @param {number} [globalMean=0]
 * @returns {Model}
 */
function fixtureModel(userScores, itemScores, globalMean = 0) {
  const F = NUM_FACTORS;
  const userIds = Object.keys(userScores).map(Number);
  const itemIds = Object.keys(itemScores).map(Number);

  // A number goes into factor 0 (so the dot product is the product); an array
  // is copied across the first factors.
  const rowsFor = (value) => {
    if (Array.isArray(value) || ArrayBuffer.isView(value)) return Array.from(value);
    const row = new Array(F).fill(0);
    row[0] = Number(value);
    return row;
  };

  const maxUser = Math.max(numUsers, ...userIds);
  const maxMovieFromMovies = movies.reduce((m, x) => Math.max(m, x.id), 0);
  const maxItem = Math.max(maxMovieFromMovies, ...itemIds);

  const uData = new Float32Array((maxUser + 1) * F);
  for (const id of userIds) {
    const row = rowsFor(userScores[id]);
    for (let f = 0; f < Math.min(F, row.length); f++) uData[id * F + f] = row[f];
  }
  const iData = new Float32Array((maxItem + 1) * F);
  for (const id of itemIds) {
    const row = rowsFor(itemScores[id]);
    for (let f = 0; f < Math.min(F, row.length); f++) iData[id * F + f] = row[f];
  }

  return tf.tidy(() => ({
    userFactors: tf.variable(tf.tensor2d(uData, [maxUser + 1, F])),
    itemFactors: tf.variable(tf.tensor2d(iData, [maxItem + 1, F])),
    globalMean,
  }));
}

/**
 * A recall fixture with 12 movies, one user whose single relevant test movie
 * (movie 2) is placed at a chosen rank by the hand-made model.
 *
 * @param {number} targetRank 1 to put movie 2 first, 11 to put it last.
 * @returns {{movies: Movie[], train: Rating[], val: Rating[], test: Rating[], model: Model}}
 */
function recallFixture(targetRank) {
  const movies = [];
  for (let id = 1; id <= 12; id++) {
    movies.push({ id, title: `Movie ${id}`, genres: [] });
  }
  const train = [
    { userId: 1, movieId: 1, rating: 5, timestamp: 1 },
    { userId: 2, movieId: 2, rating: 5, timestamp: 1 },
    { userId: 2, movieId: 3, rating: 4, timestamp: 2 },
    // Corrected fixture #10: all eleven candidates must occur in training.
    ...Array.from({ length: 9 }, (_, j) => ({ userId: 2, movieId: j + 4, rating: 4, timestamp: 2 })),
  ];
  const val = [];
  const test = [{ userId: 1, movieId: 2, rating: 5, timestamp: 2 }];
  const itemScores = { 1: 3.0 };
  if (targetRank === 1) {
    itemScores[2] = 5.0;
    for (let id = 3; id <= 12; id++) itemScores[id] = 1.0 + 0.01 * id;
  } else {
    itemScores[2] = 1.0;
    for (let id = 3; id <= 12; id++) itemScores[id] = 1.1 + 0.01 * id;
  }
  return { movies, train, val, test, model: fixtureModel({ 1: 1 }, itemScores) };
}

/**
 * Run `fn` with the module-level data globals temporarily replaced by a fixture,
 * then restore them. Keeps the checks independent of the loaded dataset.
 *
 * @param {{movies?: Movie[], train?: Rating[], val?: Rating[], test?: Rating[], model?: Model|null, history?: HistoryRow[]}} fixture
 * @param {() => any} fn
 * @returns {any}
 */
function withFixture(fixture, fn) {
  const saved = { movies, trainSet, valSet, testSet, model, trainingHistory, bestCheckpoint, lastRun, numUsers };
  try {
    movies = fixture.movies !== undefined ? fixture.movies : movies;
    trainSet = fixture.train || [];
    valSet = fixture.val || [];
    testSet = fixture.test || [];
    model = fixture.model !== undefined ? fixture.model : null;
    trainingHistory = fixture.history || [];
    bestCheckpoint = null;
    lastRun = null;
    numUsers = trainSet.reduce((m, r) => Math.max(m, r.userId), 0);
    if (model) {
      const ids = trainingIds();
      model.observedUsers = ids.users;
      model.observedItems = ids.items;
    }
    return fn();
  } finally {
    if (model && model !== saved.model) disposeModel(model);
    movies = saved.movies;
    trainSet = saved.trainSet;
    valSet = saved.valSet;
    testSet = saved.testSet;
    model = saved.model;
    trainingHistory = saved.trainingHistory;
    bestCheckpoint = saved.bestCheckpoint;
    lastRun = saved.lastRun;
    numUsers = saved.numUsers;
  }
}

/**
 * Run the automated self-checks. Checks that call an unimplemented
 * `TODO(hw5)` stub are reported as PENDING rather than FAIL, so the harness is
 * useful before and after the assignment is implemented.
 *
 * @param {HTMLElement|null} [logElement] element that receives the text log
 * @returns {{passed: number, failed: number, pending: number, checks: Array<Object>}}
 */
function runTests(logElement) {
  const checks = [];
  const close = (a, b, eps = 1e-9) => Math.abs(a - b) < eps;

  const pass = (name, detail) => checks.push({ name, status: "PASS", detail });
  const fail = (name, detail) => checks.push({ name, status: "FAIL", detail });
  const pending = (name, detail) => checks.push({ name, status: "PENDING", detail });

  const check = (name, fn) => {
    try {
      const outcome = fn();
      if (outcome && outcome.pending) pending(name, outcome.pending);
      else pass(name, outcome === undefined ? "" : String(outcome));
    } catch (error) {
      if (String(error && error.message).includes(TODO_MARKER)) {
        pending(name, "TODO(hw5): not implemented yet.");
      } else {
        fail(name, String(error && error.message ? error.message : error));
      }
    }
  };

  // 1. Shared helper: baseline RMSE on a toy split.
  check("computeBaselineRMSE: toy split matches the hand-computed value", () =>
    withFixture(
      {
        train: [
          { userId: 1, movieId: 1, rating: 2, timestamp: 1 },
          { userId: 1, movieId: 2, rating: 4, timestamp: 2 },
        ],
      },
      () => {
        const rmse = computeBaselineRMSE(trainSet);
        if (!close(rmse, 1)) throw new Error(`rmse = ${rmse}, expected 1`);
        return `rmse=${fmt(rmse)}`;
      },
    ),
  );

  // 2. Shared helper: zero-denominator guard.
  check("computeBaselineRMSE: empty split returns 0 (no division by zero)", () =>
    withFixture({ train: [{ userId: 1, movieId: 1, rating: 3, timestamp: 1 }] }, () => {
      if (computeBaselineRMSE([]) !== 0) throw new Error("expected 0");
      return "guarded";
    }),
  );

  // 3. Formatting helper.
  check("fmt: formats numbers and guards non-finite input", () => {
    if (fmt(1.23456) !== "1.2346") throw new Error(`fmt(1.23456) = ${fmt(1.23456)}`);
    if (fmt(2, 2) !== "2.00") throw new Error(`fmt(2, 2) = ${fmt(2, 2)}`);
    if (fmt(Number.NaN) !== "\u2014") throw new Error("NaN must render as an em dash");
    return "ok";
  });

  // 4. Formatting helper.
  check("movieTitle: resolves ids and falls back for unknown ids", () =>
    withFixture({ movies: [{ id: 7, title: "Seven Samurai", genres: [] }] }, () => {
      if (movieTitle(7) !== "Seven Samurai") throw new Error("known id failed");
      if (movieTitle(999) !== "Movie #999") throw new Error(`fallback = ${movieTitle(999)}`);
      return "ok";
    }),
  );

  // 5. Student stub: prediction and clamp (TF.js gather + dot).
  check("predictRating: clamps to [1, 5] and falls back to the global mean", () =>
    withFixture(
      {
        movies: TOY_MOVIES,
        train: TOY_RATINGS,
        model: fixtureModel({ 1: [1, 2] }, { 3: [3, 4] }, 3),
      },
      () => {
        const pred = predictRating(1, 3);
        if (pred !== 5) throw new Error(`predictRating = ${pred}, expected 5 (3 + 11 clamped)`);
        const fallback = predictRating(100000, 3);
        if (fallback !== 3) throw new Error(`out-of-range user must return globalMean, got ${fallback}`);
        return `clamped=${pred}, fallback=${fallback}`;
      },
    ),
  );

  // 6. Student stub: TF.js variable allocation on the toy 5-rating set.
  check("initializeFactors: allocates tf.Variable factors and the global mean", () =>
    withFixture({ movies: TOY_MOVIES, train: TOY_RATINGS, model: null }, () => {
      const created = initializeFactors(TOY_RATINGS, 4);
      if (!created || !model) throw new Error("model was not assigned");
      if (!close(model.globalMean, 3.8)) {
        throw new Error(`globalMean = ${model.globalMean}, expected 3.8`);
      }
      if (!isTfModel(model)) throw new Error("userFactors/itemFactors are not tf tensors");
      if (model.userFactors.shape[1] !== 4 || model.itemFactors.shape[1] !== 4) {
        throw new Error(
          `factor width = ${model.userFactors.shape[1]} / ${model.itemFactors.shape[1]}, expected 4`,
        );
      }
      if (model.itemFactors.shape[0] !== 4) {
        throw new Error(`item rows = ${model.itemFactors.shape[0]}, expected 4 (max movie id 3 + 1)`);
      }
      if (model.userFactors.shape[0] < 3) {
        throw new Error(`user rows = ${model.userFactors.shape[0]}, expected at least 3`);
      }
      const row = tf.tidy(() => Array.from(model.userFactors.slice([1, 0], [1, 4]).dataSync()));
      if (!Array.from(row).every(Number.isFinite)) {
        throw new Error("user factor row is not finite");
      }
      return `user [${model.userFactors.shape}], item [${model.itemFactors.shape}]`;
    }),
  );

  // 7. Student stub: batched training loop.
  check("trainMF: returns one finite history row per epoch", () =>
    withFixture({ movies: TOY_MOVIES, train: TOY_RATINGS, val: TOY_RATINGS, model: null }, () => {
      initializeFactors(TOY_RATINGS, 4);
      const history = trainMF(TOY_RATINGS, TOY_RATINGS, {
        epochs: 3,
        lr: 0.02,
        reg: 0.05,
        batchSize: 2,
      });
      if (!Array.isArray(history) || history.length !== 3) {
        throw new Error(`history length = ${history && history.length}, expected 3`);
      }
      history.forEach((row, i) => {
        if (row.epoch !== i + 1 && row.epoch !== i) {
          throw new Error(`row ${i} epoch = ${row.epoch}`);
        }
        if (!Number.isFinite(row.trainRMSE) || !Number.isFinite(row.valRMSE)) {
          throw new Error(`row ${i} RMSE is not finite`);
        }
      });
      return history.map((r) => `e${r.epoch}:${fmt(r.trainRMSE)}`).join(" ");
    }),
  );

  // 8. Student stub: checkpoint selection and tie-break.
  check("selectBestCheckpoint: smallest valRMSE wins, ties keep the earliest epoch", () => {
    const history = [
      { epoch: 2, trainRMSE: 0.9, valRMSE: 0.4 },
      { epoch: 1, trainRMSE: 1.0, valRMSE: 0.3 },
      { epoch: 3, trainRMSE: 0.8, valRMSE: 0.3 },
    ];
    const best = selectBestCheckpoint(history);
    if (!best || best.epoch !== 1) {
      throw new Error(`best epoch = ${best && best.epoch}, expected 1 (tie -> earliest)`);
    }
    return `best epoch ${best.epoch}`;
  });

  // 9. Student stub: recommendation filtering (tensor matMul + topk).
  check("recommendTopK: excludes train+val items but allows test-rated items", () =>
    withFixture(
      {
        movies: REC_FIXTURE.movies,
        train: REC_FIXTURE.train,
        val: REC_FIXTURE.val,
        test: REC_FIXTURE.test,
        model: fixtureModel({ 1: 1 }, { 1: 5, 2: 4, 3: 3, 4: 2, 5: 1 }),
      },
      () => {
        const recs = recommendTopK(1, 10);
        const ids = recs.map((r) => r.movieId);
        if (ids.includes(1)) throw new Error("movie 1 is in train and must be excluded");
        if (ids.includes(2)) throw new Error("movie 2 is in val and must be excluded");
        if (!ids.includes(3)) throw new Error("movie 3 is test-rated and must be eligible");
        for (let i = 1; i < recs.length; i++) {
          if (recs[i - 1].score < recs[i].score) {
            throw new Error("results are not sorted by descending score");
          }
        }
        return ids.join(", ");
      },
    ),
  );

  // 10. Student stub: recall at rank 1 vs rank 11.
  check("recallAtK: relevant movie at rank 1 scores 1.0; at rank 11 scores 0.0", () => {
    const rankOne = withFixture({ ...recallFixture(1), history: [] }, () => recallAtK(10));
    if (!close(rankOne.overallRecall, 1)) {
      throw new Error(`rank-1 recall = ${rankOne.overallRecall}, expected 1`);
    }
    const rankEleven = withFixture({ ...recallFixture(11), history: [] }, () => recallAtK(10));
    if (!close(rankEleven.overallRecall, 0)) {
      throw new Error(`rank-11 recall = ${rankEleven.overallRecall}, expected 0`);
    }
    return `rank1=${fmt(rankOne.overallRecall)} rank11=${fmt(rankEleven.overallRecall)}`;
  });

  // 11. Student stub: empty-result guard.
  check("recallAtK: empty test set returns 0 without dividing by zero", () =>
    withFixture(
      {
        movies: REC_FIXTURE.movies,
        train: REC_FIXTURE.train,
        val: [],
        test: [],
        model: fixtureModel({ 1: 1 }, { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }),
      },
      () => {
        const result = recallAtK(10);
        if (result.overallRecall !== 0) {
          throw new Error(`expected 0, got ${result.overallRecall}`);
        }
        if (!Array.isArray(result.perUser) || result.perUser.length !== 0) {
          throw new Error("perUser must be empty");
        }
        if (!result.excluded) throw new Error("excluded report missing");
        return "guarded";
      },
    ),
  );

  checks.forEach((c, i) => { c.origin = [8, 9].includes(i) ? "upstream-corrected-fixture" : "upstream-unchanged-assertions"; });
  const passed = checks.filter((c) => c.status === "PASS").length;
  const failed = checks.filter((c) => c.status === "FAIL").length;
  const pendingCount = checks.filter((c) => c.status === "PENDING").length;

  const lines = [
    `HW5 adapted upstream self-checks (9 original assertions, 2 corrected fixtures) — pass ${passed}, fail ${failed}, pending ${pendingCount} (of ${checks.length})`,
    "",
    ...checks.map((c) => `${c.status.padEnd(7)} ${c.name}${c.detail ? ` \u2014 ${c.detail}` : ""}`),
  ];
  const text = lines.join("\n");

  const target = logElement || document.getElementById("testLog");
  if (target) target.textContent = text;

  return { passed, failed, pending: pendingCount, checks };
}

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

/**
 * Select the TF.js backend, load the MovieLens data, split it chronologically,
 * and wire the page. `data.js` must be loaded before this script.
 *
 * If TensorFlow.js is missing, `initTf` renders a clear message and this
 * function stops without throwing.
 *
 * @returns {Promise<void>}
 */
window.onload = async function () {
  const status = document.getElementById("status");
  const backend = await initTf();
  if (!backend) return;

  try {
    if (status) status.textContent = "Loading data\u2026";
    await loadData();
    const split = splitByTimestamp();
    trainSet = split.train;
    valSet = split.val;
    testSet = split.test;
    init();
  } catch (error) {
    console.error("Initialization failed:", error);
    if (status) status.textContent = `Error: ${error.message}`;
  }
};
