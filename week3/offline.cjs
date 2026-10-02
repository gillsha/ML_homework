// Offline experiment. Only training observations enter CF.buildModel/recommend.
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const CF = require('./cf.js');

const TOP_N = 10;
const RELEVANT_FROM = 4;
const METHODS = ['user', 'item', 'popularity'];
const OUTPUT_METHODS = [...METHODS, 'legacy_user', 'legacy_item'];
const METRICS = ['precision', 'recall', 'ndcg', 'hitRate'];
// Declared before the raw-ranking experiment: NDCG is primary, all 3 paired contrasts.
const BOOTSTRAP = Object.freeze({ seed: 20261003, samples: 5000, primaryMetric: 'ndcg' });

function digest(value) {
    return crypto.createHash('sha256').update(value).digest('hex');
}

function candidateIds(data, userId) {
    const seen = data.byUser[data.userIndex.get(userId)] || new Map();
    return data.movieIds.filter((id, index) => !seen.has(index) && data.movieStats[index].count > 0);
}

function rankingMetrics(items, relevant, n = TOP_N) {
    const ids = items.slice(0, n).map(item => item.movieId);
    assert.equal(new Set(ids).size, ids.length, 'Duplicate recommendations');
    let hits = 0;
    let dcg = 0;
    ids.forEach((id, rank) => {
        if (relevant.has(id)) {
            hits++;
            dcg += 1 / Math.log2(rank + 2);
        }
    });
    let ideal = 0;
    for (let rank = 0; rank < Math.min(n, relevant.size); rank++) ideal += 1 / Math.log2(rank + 2);
    return {
        hits, precision: hits / n,
        recall: relevant.size ? hits / relevant.size : null,
        ndcg: ideal ? dcg / ideal : null,
        hitRate: Number(hits > 0)
    };
}

function summarizeTimes(values) {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return {
        samplesMs: values, medianMs: sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2,
        minMs: sorted[0], maxMs: sorted[sorted.length - 1]
    };
}

function membershipHash(rows) {
    const canonical = [...rows].sort((a, b) => a.userId - b.userId || a.movieId - b.movieId);
    return digest(canonical.map(row => `${row.userId}\t${row.movieId}`).join('\n'));
}

function tieStats(items, key = 'rawScore') {
    const groups = new Map();
    items.forEach(item => groups.set(item[key], (groups.get(item[key]) || 0) + 1));
    const sizes = [...groups.values()].filter(size => size > 1);
    return {
        usersWithTies: Number(sizes.length > 0), tiedSlots: sizes.reduce((a, b) => a + b, 0),
        equalPairs: sizes.reduce((sum, size) => sum + size * (size - 1) / 2, 0),
        adjacentTies: sizes.reduce((sum, size) => sum + size - 1, 0)
    };
}

function aggregate(users, method) {
    const eligible = users.filter(row => row.relevantIds.length > 0);
    const result = {};
    for (const metric of METRICS) result[metric] = eligible.reduce((sum, row) => sum + row[method][metric], 0) / eligible.length;
    result.hits = eligible.reduce((sum, row) => sum + row[method].hits, 0);
    result.fallbackSlots = eligible.reduce((sum, row) => sum + row[method].items.filter(item => item.fallback).length, 0);
    return result;
}

function sumTies(users, method) {
    const result = { usersWithTies: 0, tiedSlots: 0, equalPairs: 0, adjacentTies: 0 };
    users.forEach(row => {
        const ties = tieStats(row[method].items, method.startsWith('legacy_') ? 'score' : 'rawScore');
        Object.keys(result).forEach(key => { result[key] += ties[key]; });
    });
    return result;
}

function pairedBootstrap(users, { samples = BOOTSTRAP.samples, seed = BOOTSTRAP.seed } = {}) {
    assert.ok(users.length && Number.isInteger(samples) && samples > 0);
    const pairs = [['item', 'user'], ['popularity', 'user'], ['popularity', 'item']];
    const dimensions = pairs.flatMap(([a, b]) => METRICS.map(metric => ({ a, b, metric })));
    const differences = users.map(row => dimensions.map(({ a, b, metric }) => {
        assert.ok(Number.isFinite(row[a][metric]) && Number.isFinite(row[b][metric]));
        return row[a][metric] - row[b][metric];
    }));
    const distributions = dimensions.map(() => new Float64Array(samples));
    let state = seed >>> 0;
    function random() {
        // Mulberry32: deterministic bootstrap resampling, separate from split seed.
        state = (state + 0x6D2B79F5) >>> 0;
        let x = Math.imul(state ^ (state >>> 15), 1 | state);
        x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
        return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    }
    for (let repeat = 0; repeat < samples; repeat++) {
        const sums = new Float64Array(dimensions.length);
        for (let draw = 0; draw < users.length; draw++) {
            const row = differences[Math.floor(random() * users.length)];
            row.forEach((value, index) => { sums[index] += value; });
        }
        sums.forEach((sum, index) => { distributions[index][repeat] = sum / users.length; });
    }
    const quantile = (sorted, p) => {
        const position = p * (sorted.length - 1);
        const lo = Math.floor(position), hi = Math.ceil(position);
        return sorted[lo] + (sorted[hi] - sorted[lo]) * (position - lo);
    };
    const comparisons = {};
    dimensions.forEach(({ a, b, metric }, index) => {
        const name = `${a}_minus_${b}`;
        if (!comparisons[name]) comparisons[name] = {};
        const sorted = distributions[index].sort();
        const delta = differences.reduce((sum, row) => sum + row[index], 0) / users.length;
        comparisons[name][metric] = {
            delta, ci95: [quantile(sorted, 0.025), quantile(sorted, 0.975)],
            primaryFamilyCI: metric === BOOTSTRAP.primaryMetric
                ? [quantile(sorted, 0.05 / (2 * pairs.length)), quantile(sorted, 1 - 0.05 / (2 * pairs.length))] : null
        };
    });
    return {
        seed, samples, users: users.length, primaryMetric: BOOTSTRAP.primaryMetric,
        primaryContrasts: pairs.length, primaryPerContrastConfidence: 1 - 0.05 / pairs.length,
        method: 'Paired user bootstrap, same resampled indices for every method/metric; percentile intervals, linear quantile interpolation. Three primary NDCG contrasts use Bonferroni 98.333% intervals. Other 95% intervals are exploratory. Conditional on this fitted model, split and positive-test cohort.',
        comparisons
    };
}

function experiment(movies, ratings, { repeats = 3, bootstrapSamples = BOOTSTRAP.samples, progress = () => {} } = {}) {
    assert.ok(Number.isInteger(repeats) && repeats >= 1);
    const { train, test } = CF.splitRatings(ratings);
    assert.ok(test.length, 'No test observations');
    const trainKeys = new Set(train.map(row => `${row.userId}:${row.movieId}`));
    assert.ok(test.every(row => !trainKeys.has(`${row.userId}:${row.movieId}`)), 'Train/test overlap');
    assert.equal(train.length + test.length, ratings.length);

    // Warm-up model is never fitted on test. No parameter selection is performed.
    progress('Warm-up: train-only model');
    let model = CF.buildModel(movies, train);
    const userIds = [...new Set(test.map(row => row.userId))].sort((a, b) => a - b);
    assert.ok(userIds.every(id => model.data.userIndex.has(id)));
    for (const userId of userIds.slice(0, 10)) {
        METHODS.forEach(method => CF.recommend(model, userId, method, TOP_N));
    }

    const build = { data: [], user: [], item: [] };
    for (let repeat = 0; repeat < repeats; repeat++) {
        progress(`Build ${repeat + 1}/${repeats}`);
        model = CF.buildModel(movies, train);
        build.data.push(model.timing.dataMs);
        build.user.push(model.timing.userMs);
        build.item.push(model.timing.itemMs);
    }

    const candidates = new Map(userIds.map(id => [id, candidateIds(model.data, id)]));
    const candidateSets = new Map(userIds.map(id => [id, new Set(candidates.get(id))]));
    const recommendations = Object.fromEntries(OUTPUT_METHODS.map(method => [method, new Map()]));
    const queryTimes = Object.fromEntries(METHODS.map(method => [method, []]));
    const timingByUser = Object.fromEntries(METHODS.map(method => [method, []]));
    const predictionHashes = Object.fromEntries(METHODS.map(method => [method, []]));
    const legacyHashes = { user: crypto.createHash('sha256'), item: crypto.createHash('sha256') };
    for (let repeat = 0; repeat < repeats; repeat++) {
        // Rotate order: every method runs first, second and third once in 3 passes.
        const order = METHODS.map((_, index) => METHODS[(index + repeat) % METHODS.length]);
        for (const method of order) {
            progress(`Recommend ${method}, run ${repeat + 1}/${repeats}, ${userIds.length} users`);
            const checksum = crypto.createHash('sha256');
            let elapsed = 0;
            const userTimes = [];
            for (const userId of userIds) {
                const result = CF.recommend(model, userId, method, TOP_N, { includeLegacy: repeat === 0 });
                // CF.recommend's timer ends before these audits and metric calculations.
                elapsed += result.ms;
                userTimes.push(result.ms);
                assert.equal(result.candidates, candidates.get(userId).length);
                assert.ok(result.items.every(item => candidateSets.get(userId).has(item.movieId)));
                const snapshot = result.items.map(item => [item.movieId, item.rawScore, item.score, item.fallback, item.neighbors]);
                checksum.update(JSON.stringify([userId, snapshot]));
                if (repeat === 0) {
                    recommendations[method].set(userId, result.items);
                    if (result.legacyItems) {
                        recommendations[`legacy_${method}`].set(userId, result.legacyItems);
                        legacyHashes[method].update(JSON.stringify([userId, result.legacyItems.map(item => [item.movieId, item.score, item.fallback, item.neighbors])]));
                    }
                }
                else assert.deepEqual(result.items, recommendations[method].get(userId), 'Non-deterministic ranking');
            }
            predictionHashes[method].push(checksum.digest('hex'));
            queryTimes[method].push(elapsed);
            timingByUser[method].push(summarizeTimes(userTimes));
        }
    }

    // Ground truth is consulted only after all recommendation lists are fixed.
    const relevant = new Map(userIds.map(id => [id, new Set()]));
    const testRows = new Map(userIds.map(id => [id, []]));
    test.forEach(row => {
        testRows.get(row.userId).push(row);
        if (row.rating >= RELEVANT_FROM) relevant.get(row.userId).add(row.movieId);
    });
    const users = userIds.map(userId => {
        const truth = relevant.get(userId);
        const unreachable = [...truth].filter(id => !candidateSets.get(userId).has(id));
        const row = {
            userId, candidates: candidates.get(userId).length, testCount: testRows.get(userId).length,
            maxTestRating: Math.max(...testRows.get(userId).map(row => row.rating)),
            relevantIds: [...truth].sort((a, b) => a - b), unreachableRelevantIds: unreachable.sort((a, b) => a - b)
        };
        for (const method of OUTPUT_METHODS) {
            const items = recommendations[method].get(userId);
            row[method] = { ...rankingMetrics(items, truth), items };
        }
        return row;
    });
    const eligible = users.filter(row => row.relevantIds.length > 0);
    assert.ok(eligible.length, 'No test positives');
    const ratingReport = CF.evaluateModel(model, test);
    const methods = {};
    for (const method of METHODS) {
        methods[method] = {
            rating: ratingReport.results[method] || null, topN: aggregate(users, method),
            allUsers: {
                users: users.length, precision: users.reduce((sum, row) => sum + row[method].precision, 0) / users.length,
                hitRate: users.reduce((sum, row) => sum + row[method].hitRate, 0) / users.length,
                recall: null, ndcg: null, note: 'Recall/NDCG undefined for zero-positive users; not imputed with zero.'
            },
            ties: sumTies(eligible, method), tiesAllUsers: sumTies(users, method),
            similarityBuild: method === 'popularity' ? null : summarizeTimes(build[method]), recommendations: summarizeTimes(queryTimes[method]),
            recommendationPerUserMeanMs: summarizeTimes(queryTimes[method]).medianMs / userIds.length,
            perUserTiming: timingByUser[method].map(({ samplesMs, ...summary }) => summary),
            predictionSha256: predictionHashes[method]
        };
    }
    const counts = users.map(row => row.candidates);
    const summary = {
        schemaVersion: 2, settings: CF.SETTINGS, topN: TOP_N, relevantRatingAtLeast: RELEVANT_FROM,
        cohort: {
            criterion: 'Include user iff count(test ratings >=4) > 0, independent of method/candidates/hits.',
            before: users.length, after: eligible.length,
            excluded: users.filter(row => !row.relevantIds.length).map(row => ({ userId: row.userId, testCount: row.testCount, maxTestRating: row.maxTestRating })),
            denominators: {
                precision: { perUser: TOP_N, macroUsers: eligible.length, slots: TOP_N * eligible.length },
                recall: { perUser: 'All relevant test items of that user, including unreachable cold items', macroUsers: eligible.length },
                ndcg: { perUser: 'Sum 1/log2(rank+1) for rank=1..min(10, relevant_count)', macroUsers: eligible.length },
                hitRate: { users: eligible.length }, ratingError: { testPairs: test.length },
                supplementalAllUsersPrecision: { perUser: TOP_N, macroUsers: users.length }, supplementalAllUsersHitRate: { users: users.length }
            }
        },
        split: {
            train: train.length, test: test.length, trainPairsSha256: membershipHash(train), testPairsSha256: membershipHash(test),
            coldItemTestRatings: ratingReport.coldItems, coldUserTestRatings: 0,
            trainUsers: model.data.userIds.length, catalogMovies: model.data.movieIds.length,
            trainMovies: model.data.movieStats.filter(stats => stats.count > 0).length
        },
        ranking: {
            evaluatedUsers: eligible.length, usersWithoutRelevantTestRatings: users.length - eligible.length,
            timedUsers: users.length, relevantTestRatings: users.reduce((sum, row) => sum + row.relevantIds.length, 0),
            unreachableRelevantTestRatings: users.reduce((sum, row) => sum + row.unreachableRelevantIds.length, 0),
            candidatesMin: Math.min(...counts), candidatesMax: Math.max(...counts),
            candidatesMean: counts.reduce((sum, count) => sum + count, 0) / counts.length,
            commonCandidatesSha256: digest(JSON.stringify([...candidates]))
        },
        benchmark: { repeats, warmupBuilds: 1, warmupRecommendationUsers: Math.min(10, userIds.length), sharedDataBuild: summarizeTimes(build.data) },
        legacyClipped: Object.fromEntries(['user', 'item'].map(method => [method, {
            topN: aggregate(users, `legacy_${method}`), ties: sumTies(eligible, `legacy_${method}`),
            tiesAllUsers: sumTies(users, `legacy_${method}`), predictionSha256: legacyHashes[method].digest('hex'),
            changedTop10Users: eligible.filter(row => row[method].items.map(item => item.movieId).join(',') !== row[`legacy_${method}`].items.map(item => item.movieId).join(',')).length
        }])),
        baselineRating: ratingReport.results.baseline, methods,
        bootstrap: pairedBootstrap(eligible, { samples: bootstrapSamples })
    };
    return { summary, users };
}

function usersTsv(users) {
    const columns = ['user_id', 'candidate_count', 'relevant_test_movie_ids', 'unreachable_relevant_movie_ids', 'test_count', 'max_test_rating'];
    for (const method of OUTPUT_METHODS) {
        columns.push(...['precision_at_10', 'recall_at_10', 'ndcg_at_10', 'hit_at_10', 'top_movie_ids', 'top_scores', 'top_raw_scores', 'top_fallback', 'top_neighbors'].map(name => `${method}_${name}`));
    }
    const rows = users.map(row => {
        const cells = [row.userId, row.candidates, row.relevantIds.join(','), row.unreachableRelevantIds.join(','), row.testCount, row.maxTestRating];
        for (const method of OUTPUT_METHODS) {
            const result = row[method];
            cells.push(result.precision, result.recall ?? '', result.ndcg ?? '', result.hitRate,
                result.items.map(item => item.movieId).join(','), method === 'popularity' ? '' : result.items.map(item => item.score).join(','),
                result.items.map(item => item.rawScore).join(','), result.items.map(item => Number(item.fallback)).join(','),
                result.items.map(item => item.neighbors).join(','));
        }
        return cells.join('\t');
    });
    return [columns.join('\t'), ...rows].join('\n') + '\n';
}

module.exports = { TOP_N, RELEVANT_FROM, METHODS, OUTPUT_METHODS, BOOTSTRAP, candidateIds, rankingMetrics, membershipHash, tieStats, pairedBootstrap, experiment, usersTsv };
