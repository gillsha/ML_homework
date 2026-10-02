// R[movieIndex][userIndex]: rows are movies, columns are users.
// Maps contain ONLY observed ratings. A missing key is not a rating of zero.
const CF = (() => {
    const SETTINGS = Object.freeze({ k: 30, minCommon: 3, shrinkage: 10, prior: 10, seed: 20261002 });
    const clock = () => performance.now();
    const clip = value => Math.max(1, Math.min(5, value));

    function buildData(movies, ratings) {
        if (!movies.length || !ratings.length) throw new Error('Для модели нужны фильмы и оценки.');
        const movieIds = movies.map(movie => movie.id).sort((a, b) => a - b);
        if (new Set(movieIds).size !== movieIds.length || movieIds.some(id => !Number.isSafeInteger(id) || id <= 0)) {
            throw new Error('Некорректные или повторные movie ID.');
        }
        const userIds = [...new Set(ratings.map(rating => rating.userId))].sort((a, b) => a - b);
        const movieIndex = new Map(movieIds.map((id, index) => [id, index]));
        const userIndex = new Map(userIds.map((id, index) => [id, index]));
        const byMovie = movieIds.map(() => new Map());
        const byUser = userIds.map(() => new Map());
        let sum = 0;
        // Canonical order makes sums and tie-breaking independent of input order.
        const ordered = [...ratings].sort((a, b) => a.userId - b.userId || a.movieId - b.movieId);
        ordered.forEach(({ userId, movieId, rating }) => {
            const u = userIndex.get(userId);
            const i = movieIndex.get(movieId);
            if (!Number.isSafeInteger(userId) || userId <= 0 || i === undefined ||
                !Number.isInteger(rating) || rating < 1 || rating > 5 || byUser[u].has(i)) {
                throw new Error('Некорректная оценка, неизвестный фильм или повторная пара.');
            }
            byUser[u].set(i, rating);
            byMovie[i].set(u, rating);
            sum += rating;
        });
        const globalMean = sum / ratings.length;
        function summaries(profiles) {
            return profiles.map(profile => {
                let total = 0;
                profile.forEach(value => { total += value; });
                return {
                    count: profile.size,
                    mean: profile.size ? total / profile.size : globalMean,
                    bias: (total - profile.size * globalMean) / (profile.size + SETTINGS.prior)
                };
            });
        }
        return {
            movieIds, userIds, movieIndex, userIndex, byMovie, byUser, globalMean,
            movieStats: summaries(byMovie), userStats: summaries(byUser), ratingCount: ratings.length
        };
    }

    function similarities(profiles, inverse, stats) {
        const size = profiles.length;
        const weights = new Float64Array(size * size);
        const common = new Uint32Array(size * size);
        // Accumulate intersections using inverted sparse profiles, one row at a time.
        // No filled-in rating participates in a similarity calculation.
        for (let a = 0; a < size; a++) {
            const dot = new Float64Array(size);
            const squareA = new Float64Array(size);
            const squareB = new Float64Array(size);
            const counts = new Uint32Array(size);
            profiles[a].forEach((ratingA, feature) => {
                const x = ratingA - stats[a].mean;
                inverse[feature].forEach((ratingB, b) => {
                    if (b <= a) return;
                    const y = ratingB - stats[b].mean;
                    dot[b] += x * y;
                    squareA[b] += x * x;
                    squareB[b] += y * y;
                    counts[b]++;
                });
            });
            for (let b = a + 1; b < size; b++) {
                const n = counts[b];
                const denominator = Math.sqrt(squareA[b] * squareB[b]);
                if (n < SETTINGS.minCommon || denominator <= 1e-12) continue;
                const weight = Math.max(-1, Math.min(1, dot[b] / denominator)) * n / (n + SETTINGS.shrinkage);
                // Positive neighbours only: negative similarity is not evidence of affinity.
                if (weight <= 0) continue;
                weights[a * size + b] = weights[b * size + a] = weight;
                common[a * size + b] = common[b * size + a] = n;
            }
        }
        return { size, weights, common };
    }

    function buildModel(movies, ratings, progress = () => {}) {
        const start = clock();
        const data = buildData(movies, ratings);
        const dataMs = clock() - start;
        progress('Сходство пользователей: сравниваем столбцы матрицы…');
        let phase = clock();
        const user = similarities(data.byUser, data.byMovie, data.userStats);
        const userMs = clock() - phase;
        progress('Сходство фильмов: сравниваем строки матрицы…');
        phase = clock();
        const item = similarities(data.byMovie, data.byUser, data.movieStats);
        return { data, user, item, timing: { dataMs, userMs, itemMs: clock() - phase } };
    }

    function baselineRaw(data, u, i) {
        const raw = data.globalMean + (data.userStats[u]?.bias ?? 0) + (data.movieStats[i]?.bias ?? 0);
        return Number.isFinite(raw) ? raw : (Number.isFinite(data.globalMean) ? data.globalMean : 3);
    }

    function baseline(data, u, i) {
        return clip(baselineRaw(data, u, i));
    }

    function predict(model, userId, movieId, method) {
        if (method !== 'user' && method !== 'item') throw new Error('Неизвестный метод CF.');
        const { data } = model;
        const u = data.userIndex.get(userId);
        const i = data.movieIndex.get(movieId);
        const fallback = reason => {
            const rawScore = baselineRaw(data, u, i);
            return { rawScore, score: clip(rawScore), fallback: true, reason, neighbors: 0, strongestCommon: 0 };
        };
        if (u === undefined) return fallback('Новый пользователь');
        if (i === undefined || !data.movieStats[i].count) return fallback('У фильма нет оценок');
        const matrix = model[method];
        const entity = method === 'user' ? u : i;
        const candidates = method === 'user' ? data.byMovie[i] : data.byUser[u];
        const stats = method === 'user' ? data.userStats : data.movieStats;
        const ids = method === 'user' ? data.userIds : data.movieIds;
        const neighbors = [];
        candidates.forEach((rating, other) => {
            const offset = entity * matrix.size + other;
            const weight = matrix.weights[offset];
            if (Number.isFinite(weight) && weight > 0) neighbors.push({ other, weight, residual: rating - stats[other].mean, common: matrix.common[offset] });
        });
        neighbors.sort((a, b) => b.weight - a.weight || ids[a.other] - ids[b.other]);
        const selected = neighbors.slice(0, SETTINGS.k);
        if (!selected.length) return fallback('Нет надёжных положительных соседей');
        let weighted = 0;
        let totalWeight = 0;
        selected.forEach(neighbor => {
            weighted += neighbor.weight * neighbor.residual;
            totalWeight += neighbor.weight;
        });
        const rawScore = stats[entity].mean + weighted / totalWeight;
        if (!Number.isFinite(rawScore)) return fallback('Неконечный прогноз: использован baseline');
        return {
            rawScore, score: clip(rawScore), fallback: false, reason: '',
            neighbors: selected.length, strongestCommon: selected[0].common
        };
    }

    function recommend(model, userId, method, limit = 10, { includeLegacy = false } = {}) {
        if (!['user', 'item', 'popularity'].includes(method)) throw new Error('Неизвестный метод рекомендаций.');
        const start = clock();
        const { data } = model;
        const u = data.userIndex.get(userId);
        const seen = data.byUser[u] || new Map();
        const candidates = [];
        data.movieIds.forEach((movieId, i) => {
            // A catalog entry with no training evidence is not a recommendation candidate.
            if (seen.has(i) || !data.movieStats[i].count) return;
            const count = data.movieStats[i].count;
            const prediction = method === 'popularity'
                ? { rawScore: count, score: null, fallback: false, reason: 'Число train-оценок', neighbors: 0, strongestCommon: 0 }
                : predict(model, userId, movieId, method);
            candidates.push({ movieId, count, ...prediction });
        });
        candidates.sort((a, b) => b.rawScore - a.rawScore || a.movieId - b.movieId);
        const result = { items: candidates.slice(0, limit), candidates: candidates.length, ms: clock() - start };
        // Audit only: reproduce the OLD clipped ranking on the exact same candidates.
        // The extra sort is deliberately outside the recommendation timer.
        if (includeLegacy && method !== 'popularity') {
            candidates.sort((a, b) => b.score - a.score || a.movieId - b.movieId);
            result.legacyItems = candidates.slice(0, limit);
        }
        return result;
    }

    function hash(userId, movieId) {
        // Stable 32-bit hash, not Math.random(). ID is a final tie-breaker.
        let value = SETTINGS.seed;
        for (const character of `${userId}:${movieId}`) {
            value = Math.imul(value ^ character.charCodeAt(0), 16777619);
        }
        value ^= value >>> 16;
        value = Math.imul(value, 0x85ebca6b);
        value ^= value >>> 13;
        return value >>> 0;
    }

    function splitRatings(ratings) {
        const groups = new Map();
        ratings.forEach(rating => {
            if (!groups.has(rating.userId)) groups.set(rating.userId, []);
            groups.get(rating.userId).push(rating);
        });
        const train = [];
        const test = [];
        [...groups.keys()].sort((a, b) => a - b).forEach(userId => {
            const rows = groups.get(userId).sort((a, b) => hash(userId, a.movieId) - hash(userId, b.movieId) || a.movieId - b.movieId);
            const count = rows.length > 1 ? Math.max(1, Math.floor(rows.length * 0.2)) : 0;
            test.push(...rows.slice(0, count));
            train.push(...rows.slice(count));
        });
        return { train, test };
    }

    function evaluate(movies, ratings, progress = () => {}) {
        const { train, test } = splitRatings(ratings);
        if (!test.length) throw new Error('Недостаточно данных для отложенного теста.');
        const model = buildModel(movies, train, progress);
        return { train: train.length, ...evaluateModel(model, test, progress), timing: model.timing };
    }

    // Scoring is separate from fitting: test labels are read only AFTER predictions.
    function evaluateModel(model, test, progress = () => {}) {
        if (!test.length) throw new Error('Недостаточно данных для отложенного теста.');
        const coldItems = test.filter(row => !model.data.movieStats[model.data.movieIndex.get(row.movieId)]?.count).length;
        const results = {};
        for (const method of ['baseline', 'user', 'item']) {
            progress(`Test: ${method}, ${test.length} скрытых оценок…`);
            const start = clock();
            let squared = 0;
            let absolute = 0;
            let fallbackCount = 0;
            let warmSquared = 0;
            let warmAbsolute = 0;
            test.forEach(row => {
                const u = model.data.userIndex.get(row.userId);
                const i = model.data.movieIndex.get(row.movieId);
                const prediction = method === 'baseline'
                    ? { score: baseline(model.data, u, i), fallback: true }
                    : predict(model, row.userId, row.movieId, method);
                const error = prediction.score - row.rating;
                squared += error * error;
                absolute += Math.abs(error);
                fallbackCount += Number(prediction.fallback);
                if (model.data.movieStats[i]?.count) {
                    warmSquared += error * error;
                    warmAbsolute += Math.abs(error);
                }
            });
            const warmCount = test.length - coldItems;
            results[method] = {
                rmse: Math.sqrt(squared / test.length), mae: absolute / test.length,
                warmRmse: warmCount ? Math.sqrt(warmSquared / warmCount) : null,
                warmMae: warmCount ? warmAbsolute / warmCount : null,
                fallbackCount, ms: clock() - start
            };
        }
        return { test: test.length, coldItems, results };
    }

    return { SETTINGS, buildData, similarities, buildModel, baseline, predict, recommend, splitRatings, evaluateModel, evaluate };
})();

if (typeof module !== 'undefined') module.exports = CF;
