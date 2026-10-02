// Run: node --test test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Data = require('./data.js');
const CF = require('./cf.js');
const Offline = require('./offline.cjs');
const { verifyProtocol } = require('./verify-results.cjs');

const movies = [40, 999, 10, 30, 20].map(id => ({ id, title: `Movie ${id}`, year: null }));
const ratings = [
    [2, 10, 1], [2, 20, 3], [2, 30, 5],
    [8, 10, 1], [8, 20, 3], [8, 30, 5], [8, 40, 5],
    [50, 10, 5], [50, 20, 3], [50, 30, 1], [50, 40, 1],
    [77, 10, 2], [77, 20, 4], [77, 40, 4]
].map(([userId, movieId, rating]) => ({ userId, movieId, rating, timestamp: 1 }));
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-12, `${actual} != ${expected}`);

test('Strict parsing: bad values, duplicate pairs/IDs, references, empty files', () => {
    for (const input of ['oops\t2\t5\t1', '1\t2\t99\t1', '12x\t3\t4junk\t1', '1\t2\t0\t1', '1\t2\t3', '1\t2\t3\tbad', '']) {
        assert.throws(() => Data.parseRatingData(input));
    }
    assert.throws(() => Data.parseRatingData('1\t2\t3\t1\n1\t2\t4\t2'));
    assert.throws(() => Data.parseItemData('oops|Title'));
    assert.throws(() => Data.parseItemData('1|A\n1|B'));
    assert.throws(() => Data.parseItemData(''));
    assert.throws(() => Data.validateReferences(movies, [{ movieId: 123 }]));
    assert.equal(Data.parseItemData('10|A (1997)|\r\n')[0].year, 1997);
    assert.equal(Data.parseRatingData('2\t10\t5\t1\r\n')[0].rating, 5);
});

test('Loader rejects HTTP errors and decodes Latin-1 titles', async () => {
    await assert.rejects(Data.loadData(async () => new Response('Not found', { status: 404 })), /HTTP 404/);
    await assert.rejects(Data.loadData(async () => { throw new Error('network'); }), /network/);
    const result = await Data.loadData(async name => name === 'u.item'
        ? new Response(Buffer.from('10|Misérables, Les (1995)|\n', 'latin1'))
        : new Response('2\t10\t5\t1\n'));
    assert.equal(result.movies[0].title, 'Misérables, Les');
});

test('Sparse matrix orientation and arbitrary ID mapping; missing is not zero', () => {
    const model = CF.buildModel(movies, ratings);
    assert.deepEqual(model.data.userIds, [2, 8, 50, 77]);
    assert.deepEqual(model.data.movieIds, [10, 20, 30, 40, 999]);
    assert.equal(model.user.size, 4); // compare user columns
    assert.equal(model.item.size, 5); // compare movie rows
    assert.equal(model.data.byMovie[0].get(0), 1);
    assert.equal(model.data.byMovie[4].size, 0);
    assert.equal(model.data.byUser[0].get(3), undefined);
    assert.equal(model.data.userStats[0].mean, 3);
    near(CF.predict(model, 2, 40, 'user').score, 4.5);
    assert.equal(CF.predict(model, 2, 40, 'user').neighbors, 1);
    assert.equal(CF.predict(model, 2, 40, 'item').fallback, false);
});

test('Intersection similarity matches independent reference in BOTH orientations', () => {
    const model = CF.buildModel(movies, ratings);
    for (const method of ['user', 'item']) {
        const profiles = method === 'user' ? model.data.byUser : model.data.byMovie;
        const stats = method === 'user' ? model.data.userStats : model.data.movieStats;
        for (let a = 0; a < profiles.length; a++) {
            for (let b = a + 1; b < profiles.length; b++) {
                const keys = [...profiles[a].keys()].filter(key => profiles[b].has(key));
                const x = keys.map(key => profiles[a].get(key) - stats[a].mean);
                const y = keys.map(key => profiles[b].get(key) - stats[b].mean);
                const norm = Math.hypot(...x) * Math.hypot(...y);
                const raw = norm ? x.reduce((sum, value, k) => sum + value * y[k], 0) / norm : 0;
                const expected = keys.length >= 3 ? Math.max(0, raw) * keys.length / (keys.length + 10) : 0;
                near(model[method].weights[a * profiles.length + b], expected);
            }
        }
    }
    // Users 2 and 77 share only two movies: even a high raw similarity is rejected.
    assert.equal(model.user.weights[3], 0);
    assert.ok(model.user.weights[1] > 0 && model.user.weights[1] <= 3 / 13);
});

test('Cold start, no variance, no neighbours, and all-seen cases are finite and explicit', () => {
    const model = CF.buildModel(movies, ratings);
    for (const method of ['user', 'item']) {
        for (const [user, movie] of [[null, 10], [2, 999], [2, 99999], [123, 999]]) {
            const prediction = CF.predict(model, user, movie, method);
            assert.equal(prediction.fallback, true);
            assert.ok(Number.isFinite(prediction.score) && prediction.score >= 1 && prediction.score <= 5);
        }
        assert.deepEqual(CF.recommend(model, 8, method).items, []);
        assert.ok(CF.recommend(model, null, method).items.every(item => item.fallback && item.movieId !== 999));
    }
    const constant = ratings.map(row => ({ ...row, rating: 3 }));
    const flat = CF.buildModel(movies, constant);
    assert.ok(flat.user.weights.every(weight => weight === 0));
    assert.ok(flat.item.weights.every(weight => weight === 0));
    assert.equal(CF.predict(flat, 2, 40, 'item').score, 3);
    assert.equal(CF.predict(flat, 2, 40, 'item').fallback, true);
    // All predictions tie: IDs, not initial catalog order, determine the result.
    assert.deepEqual(CF.recommend(flat, null, 'user').items.map(item => item.movieId), [10, 20, 30, 40]);
});

test('Ranking excludes watched/unrated movies and is independent of input order', () => {
    const first = CF.buildModel(movies, ratings);
    const second = CF.buildModel([...movies].reverse(), [...ratings].reverse());
    for (const method of ['user', 'item']) {
        const result = CF.recommend(first, 2, method);
        assert.deepEqual(result.items.map(item => item.movieId), [40]);
        assert.deepEqual(result.items, CF.recommend(second, 2, method).items);
        assert.deepEqual(Array.from(first[method].weights), Array.from(second[method].weights));
    }
});

test('Holdout is deterministic, disjoint and retains a train rating per user', () => {
    const split = CF.splitRatings(ratings);
    assert.deepEqual(split, CF.splitRatings([...ratings].reverse()));
    const keys = new Set(split.train.map(row => `${row.userId}:${row.movieId}`));
    assert.equal(split.train.length + split.test.length, ratings.length);
    split.test.forEach(row => {
        assert.ok(!keys.has(`${row.userId}:${row.movieId}`));
        assert.ok(split.train.some(train => train.userId === row.userId));
    });
    const trainData = CF.buildData(movies, split.train);
    assert.equal(trainData.ratingCount, split.train.length);
    split.test.forEach(row => assert.ok(!trainData.byUser[trainData.userIndex.get(row.userId)].has(trainData.movieIndex.get(row.movieId))));
    const report = CF.evaluate(movies, ratings);
    for (const result of Object.values(report.results)) assert.ok(Number.isFinite(result.rmse) && Number.isFinite(result.mae));
});

test('Zero and ONE common observation both cause fallback, in both orientations', () => {
    const catalog = [1, 2, 3, 4].map(id => ({ id, title: String(id) }));
    const fixture = rows => rows.map(([userId, movieId, rating]) => ({ userId, movieId, rating }));
    const disjoint = CF.buildModel(catalog, fixture([[10, 1, 5], [10, 2, 3], [20, 3, 5], [20, 4, 1]]));
    // A shared coordinate can yield raw cosine=1. It is still insufficient evidence.
    const single = CF.buildModel(catalog, fixture([[10, 1, 1], [10, 2, 5], [20, 1, 1], [20, 3, 5], [30, 2, 1], [30, 3, 2]]));
    assert.equal(single.user.weights[1], 0); // users 10/20 share only movie 1
    assert.equal(single.item.weights[1 * 4 + 2], 0); // movies 2/3 share only user 30
    for (const model of [disjoint, single]) {
        for (const method of ['user', 'item']) {
            const result = CF.predict(model, 10, 3, method);
            assert.equal(result.fallback, true);
            assert.equal(result.neighbors, 0);
            assert.ok(Number.isFinite(result.score));
        }
    }
});

test('Missing/malformed source IDs are rejected; missing API IDs have finite cold fallback', () => {
    for (const id of ['', 'u_2', '-2', '0', '2.5', 'Infinity', '9007199254740992']) {
        assert.throws(() => Data.parseRatingData(`${id}\t10\t4\t1`));
        assert.throws(() => Data.parseRatingData(`2\t${id}\t4\t1`));
        assert.throws(() => Data.parseItemData(`${id}|Title`));
    }
    const model = CF.buildModel(movies, ratings);
    for (const method of ['user', 'item']) {
        for (const [u, i] of [[undefined, 10], [2, undefined], [undefined, undefined]]) {
            const result = CF.predict(model, u, i, method);
            assert.equal(result.fallback, true);
            assert.ok(Number.isFinite(result.score) && result.score >= 1 && result.score <= 5);
        }
        assert.ok(!CF.recommend(model, 2, method).items.some(item => [10, 20, 30].includes(item.movieId)));
    }
});

test('Changing every test rating cannot change train means, similarities, candidates, neighbours or fallback', () => {
    const original = CF.splitRatings(ratings);
    const testKeys = new Set(original.test.map(row => `${row.userId}:${row.movieId}`));
    const perturbed = ratings.map(row => testKeys.has(`${row.userId}:${row.movieId}`) ? { ...row, rating: 6 - row.rating } : row);
    const changed = CF.splitRatings(perturbed);
    assert.deepEqual(original.train, changed.train);
    assert.equal(Offline.membershipHash(original.test), Offline.membershipHash(changed.test));
    const first = CF.buildModel(movies, original.train);
    const second = CF.buildModel(movies, changed.train);
    assert.deepEqual(first.data, second.data);
    for (const method of ['user', 'item']) {
        assert.deepEqual(first[method], second[method]);
        for (const userId of [...first.data.userIds, undefined, 99999]) {
            assert.deepEqual(Offline.candidateIds(first.data, userId), Offline.candidateIds(second.data, userId));
            assert.deepEqual(CF.recommend(first, userId, method).items, CF.recommend(second, userId, method).items);
            for (const movieId of [...first.data.movieIds, undefined]) {
                assert.deepEqual(CF.predict(first, userId, movieId, method), CF.predict(second, userId, movieId, method));
            }
        }
    }
    // The held-out coordinate itself does not enter candidate/neighbor evidence.
    original.test.forEach(row => assert.equal(first.data.byMovie[first.data.movieIndex.get(row.movieId)].has(first.data.userIndex.get(row.userId)), false));
});

test('Top-N formulas: binary DCG, macro denominators, short lists and zero hits', () => {
    const items = [7, 8, 9].map(movieId => ({ movieId }));
    const result = Offline.rankingMetrics(items, new Set([7, 9, 100]));
    near(result.precision, 0.2);
    near(result.recall, 2 / 3); // Unreachable positive 100 remains in denominator.
    near(result.ndcg, 1.5 / (1 + 1 / Math.log2(3) + 0.5));
    assert.equal(result.hitRate, 1);
    assert.equal(Offline.rankingMetrics([], new Set([7])).ndcg, 0);
    assert.equal(Offline.rankingMetrics(items, new Set()).recall, null);
    assert.throws(() => Offline.rankingMetrics([{ movieId: 7 }, { movieId: 7 }], new Set([7])));
});

test('Offline experiment: common user/candidate protocol, repeated ranking hashes and TSV', () => {
    const result = Offline.experiment(movies, ratings, { repeats: 2, bootstrapSamples: 50 });
    assert.equal(result.summary.split.train + result.summary.split.test, ratings.length);
    assert.equal(result.users.length, result.summary.ranking.timedUsers);
    assert.equal(result.summary.ranking.evaluatedUsers, result.users.filter(row => row.relevantIds.length).length);
    for (const method of ['user', 'item']) {
        assert.equal(new Set(result.summary.methods[method].predictionSha256).size, 1);
        assert.ok(result.summary.methods[method].topN.ndcg >= 0 && result.summary.methods[method].topN.ndcg <= 1);
    }
    assert.equal(Offline.usersTsv(result.users).trim().split('\n').length, result.users.length + 1);
});

test('Evaluation supports genuinely new catalog IDs, not just empty known rows', () => {
    const model = CF.buildModel([{ id: 10, title: 'Train movie' }], [{ userId: 2, movieId: 10, rating: 4 }]);
    const report = CF.evaluateModel(model, [{ userId: 2, movieId: 999, rating: 5 }, { userId: 999, movieId: 999, rating: 3 }]);
    assert.equal(report.coldItems, 2);
    for (const result of Object.values(report.results)) {
        assert.equal(result.rmse, 1);
        assert.equal(result.mae, 1);
        assert.equal(result.fallbackCount, 2);
        assert.equal(result.warmRmse, null);
        assert.equal(result.warmMae, null);
    }
});

test('Saved-result audit rejects false seed, split membership/counts and candidate metadata', () => {
    const { summary } = Offline.experiment(movies, ratings, { repeats: 1, bootstrapSamples: 50 });
    const { train, test: heldOut } = CF.splitRatings(ratings);
    verifyProtocol(summary, movies, train, heldOut);
    for (const [group, key, value] of [
        ['settings', 'seed', 123], ['split', 'train', 0], ['split', 'testPairsSha256', 'wrong'],
        ['ranking', 'commonCandidatesSha256', 'wrong'], ['ranking', 'evaluatedUsers', 0]
    ]) {
        const altered = structuredClone(summary);
        altered[group][key] = value;
        assert.throws(() => verifyProtocol(altered, movies, train, heldOut));
    }
});

test('Rank by finite raw score: clipping cannot replace relevance order with movie IDs', () => {
    const catalog = [1, 2, 3, 4, 5].map(id => ({ id, title: String(id) }));
    const rows = [[10, 1, 3], [10, 2, 4], [10, 3, 5], [20, 1, 1], [20, 2, 2], [20, 3, 3], [20, 4, 4], [20, 5, 5]]
        .map(([userId, movieId, rating]) => ({ userId, movieId, rating }));
    const model = CF.buildModel(catalog, rows);
    const result = CF.recommend(model, 10, 'user', 10, { includeLegacy: true });
    assert.deepEqual(result.items.map(item => item.movieId), [5, 4]);
    assert.deepEqual(result.legacyItems.map(item => item.movieId), [4, 5]);
    assert.deepEqual(result.items.map(item => item.rawScore), [6, 5]);
    assert.deepEqual(result.items.map(item => item.score), [5, 5]);
    assert.equal(Offline.tieStats(result.items).adjacentTies, 0);
    assert.equal(Offline.tieStats(result.legacyItems, 'score').adjacentTies, 1);
    const ratingMetrics = CF.evaluateModel(model, [{ userId: 10, movieId: 5, rating: 5 }]);
    assert.equal(ratingMetrics.results.user.rmse, 0); // rating loss still uses clipped score
    model.user.weights[1] = Infinity;
    const prediction = CF.predict(model, 10, 5, 'user');
    assert.ok(prediction.fallback && Number.isFinite(prediction.rawScore));
    model.data.globalMean = NaN;
    assert.ok(Number.isFinite(CF.predict(model, undefined, undefined, 'user').rawScore));
});

test('Popularity counts TRAIN observations only, respects watched filter and ID tie-break', () => {
    const model = CF.buildModel(movies, ratings);
    const result = CF.recommend(model, null, 'popularity');
    assert.deepEqual(result.items.map(item => [item.movieId, item.rawScore]), [[10, 4], [20, 4], [30, 3], [40, 3]]);
    assert.ok(result.items.every(item => item.score === null));
    assert.deepEqual(CF.recommend(model, 2, 'popularity').items.map(item => item.movieId), [40]);
    const split = CF.splitRatings(ratings);
    const trainModel = CF.buildModel(movies, split.train);
    CF.recommend(trainModel, null, 'popularity').items.forEach(item => {
        assert.equal(item.rawScore, split.train.filter(row => row.movieId === item.movieId).length);
    });
});

test('Paired bootstrap is deterministic, detects zero differences and uses paired users', () => {
    const row = (u, i, p) => ({
        user: { precision: u, recall: u, ndcg: u, hitRate: u },
        item: { precision: i, recall: i, ndcg: i, hitRate: i },
        popularity: { precision: p, recall: p, ndcg: p, hitRate: p }
    });
    const users = [row(0, 0.25, 0.25), row(0.25, 0.5, 0.5)];
    const first = Offline.pairedBootstrap(users, { samples: 100, seed: 123 });
    assert.deepEqual(first, Offline.pairedBootstrap(users, { samples: 100, seed: 123 }));
    assert.deepEqual(first.comparisons.item_minus_user.ndcg.ci95, [0.25, 0.25]);
    assert.deepEqual(first.comparisons.popularity_minus_item.ndcg.primaryFamilyCI, [0, 0]);
    assert.throws(() => Offline.pairedBootstrap([row(null, 1, 1)], { samples: 10 }));
    assert.equal(Offline.rankingMetrics([], new Set()).ndcg, null);
    assert.equal(Offline.rankingMetrics([], new Set()).recall, null);
    assert.equal(Offline.rankingMetrics([], new Set()).precision, 0);
});

test('Zero-positive users remain in TSV but have null Recall/NDCG and a visible cohort exclusion', () => {
    const rows = ratings.map(row => ({ ...row, rating: row.userId === 77 ? 1 : 5 }));
    const { summary, users } = Offline.experiment(movies, rows, { repeats: 1, bootstrapSamples: 10 });
    assert.equal(summary.cohort.before, 4);
    assert.equal(summary.cohort.after, 3);
    assert.deepEqual(summary.cohort.excluded.map(row => row.userId), [77]);
    const excluded = users.find(row => row.userId === 77);
    for (const method of Offline.METHODS) {
        assert.equal(excluded[method].recall, null);
        assert.equal(excluded[method].ndcg, null);
        assert.equal(excluded[method].precision, 0); // defined: 0 hits / 10, unlike recall
        assert.equal(summary.methods[method].allUsers.recall, null);
        near(summary.methods[method].allUsers.precision, summary.methods[method].topN.precision * 3 / 4);
    }
    assert.equal(summary.cohort.denominators.precision.slots, 30);
    assert.equal(summary.cohort.denominators.recall.macroUsers, 3);
});

test('Bundled MovieLens: counts, encoding and full-model recommendations', async () => {
    const data = await Data.loadData(async name => new Response(fs.readFileSync(path.join(__dirname, name))));
    assert.equal(data.movies.length, 1682);
    assert.equal(data.ratings.length, 100000);
    assert.equal(data.movies.find(movie => movie.id === 543).title, 'Misérables, Les');
    assert.ok(data.movies.every(movie => !movie.title.includes('\ufffd')));
    const model = CF.buildModel(data.movies, data.ratings);
    assert.equal(model.data.userIds.length, 943);
    const seen = new Set(data.ratings.filter(row => row.userId === 1).map(row => row.movieId));
    for (const method of ['user', 'item']) {
        const result = CF.recommend(model, 1, method);
        assert.equal(result.items.length, 10);
        assert.ok(result.items.every(item => !seen.has(item.movieId) && item.score >= 1 && item.score <= 5));
        assert.deepEqual(result.items, CF.recommend(model, 1, method).items);
    }
});
