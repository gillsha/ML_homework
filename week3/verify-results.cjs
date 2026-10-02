// Independent audit of the persisted per-user predictions, not of in-memory metrics.
// Run: node verify-results.cjs [results-directory] [optional-replay-directory]
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const Data = require('./data.js');
const CF = require('./cf.js');
const Offline = require('./offline.cjs');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-12, `${a} != ${b}`);
const numbers = value => value === '' ? [] : value.split(',').map(Number);

function verifyProtocol(report, movies, train, test) {
    assert.deepEqual(report.settings, CF.SETTINGS, 'Unexpected model/split settings');
    assert.equal(report.topN, 10);
    assert.equal(report.relevantRatingAtLeast, 4);
    const pairHash = rows => hash([...rows].sort((a, b) => a.userId - b.userId || a.movieId - b.movieId)
        .map(row => `${row.userId}\t${row.movieId}`).join('\n'));
    const data = CF.buildData(movies, train);
    const users = [...new Set(test.map(row => row.userId))].sort((a, b) => a - b);
    const candidates = users.map(id => {
        const seen = data.byUser[data.userIndex.get(id)] || new Map();
        return [id, data.movieIds.filter((movieId, i) => data.movieStats[i].count > 0 && !seen.has(i))];
    });
    const isCold = row => !data.movieStats[data.movieIndex.get(row.movieId)]?.count;
    const positives = test.filter(row => row.rating >= 4);
    assert.deepEqual(report.split, {
        train: train.length, test: test.length, trainPairsSha256: pairHash(train), testPairsSha256: pairHash(test),
        coldItemTestRatings: test.filter(isCold).length,
        coldUserTestRatings: test.filter(row => !data.userIndex.has(row.userId)).length,
        trainUsers: data.userIds.length, catalogMovies: data.movieIds.length,
        trainMovies: data.movieStats.filter(stats => stats.count > 0).length
    }, 'Split metadata does not match actual input');
    const eligible = new Set(positives.map(row => row.userId)).size;
    assert.deepEqual(report.ranking, {
        evaluatedUsers: eligible, usersWithoutRelevantTestRatings: users.length - eligible, timedUsers: users.length,
        relevantTestRatings: positives.length, unreachableRelevantTestRatings: positives.filter(isCold).length,
        candidatesMin: Math.min(...candidates.map(([, ids]) => ids.length)),
        candidatesMax: Math.max(...candidates.map(([, ids]) => ids.length)),
        candidatesMean: candidates.reduce((sum, [, ids]) => sum + ids.length, 0) / users.length,
        commonCandidatesSha256: hash(JSON.stringify(candidates))
    }, 'Ranking population/candidates do not match actual input');
}

async function main() {
    const directory = path.resolve(process.argv[2] || path.join(__dirname, 'results'));
    const report = JSON.parse(fs.readFileSync(path.join(directory, 'offline.json'), 'utf8'));
    assert.equal(report.schemaVersion, 2, 'Use the regenerated raw-score report');
    const tsv = fs.readFileSync(path.join(directory, 'offline-users.tsv'), 'utf8');
    assert.equal(hash(tsv), report.usersTsvSha256);
    for (const [file, expected] of Object.entries(report.checksums)) assert.equal(hash(fs.readFileSync(path.join(__dirname, file))), expected, `Changed source: ${file}`);
    const data = await Data.loadData(async name => new Response(fs.readFileSync(path.join(__dirname, name))));
    const { train, test } = CF.splitRatings(data.ratings);
    verifyProtocol(report, data.movies, train, test);
    const trainByUser = new Map();
    const itemCounts = new Map();
    const positiveByUser = new Map();
    const testByUser = new Map();
    train.forEach(row => {
        if (!trainByUser.has(row.userId)) trainByUser.set(row.userId, new Set());
        trainByUser.get(row.userId).add(row.movieId);
        itemCounts.set(row.movieId, (itemCounts.get(row.movieId) || 0) + 1);
    });
    test.forEach(row => {
        assert.ok(!trainByUser.get(row.userId).has(row.movieId));
        if (!positiveByUser.has(row.userId)) positiveByUser.set(row.userId, new Set());
        if (!testByUser.has(row.userId)) testByUser.set(row.userId, []);
        testByUser.get(row.userId).push(row);
        if (row.rating >= 4) positiveByUser.get(row.userId).add(row.movieId);
    });
    const [header, ...lines] = tsv.trimEnd().split('\n');
    const columns = header.split('\t');
    const methods = Offline.OUTPUT_METHODS;
    const totals = Object.fromEntries(methods.map(method => [method, { precision: 0, recall: 0, ndcg: 0, hitRate: 0, hits: 0, fallbackSlots: 0 }]));
    const checksums = Object.fromEntries(methods.map(method => [method, crypto.createHash('sha256')]));
    const allUsers = [];
    const found = new Set();
    let evaluatedUsers = 0;
    for (const line of lines) {
        const cells = line.split('\t');
        assert.equal(cells.length, columns.length);
        const row = Object.fromEntries(columns.map((column, i) => [column, cells[i]]));
        const userId = Number(row.user_id);
        assert.ok(!found.has(userId));
        found.add(userId);
        const relevant = positiveByUser.get(userId);
        assert.ok(relevant);
        assert.deepEqual(numbers(row.relevant_test_movie_ids), [...relevant].sort((a, b) => a - b));
        assert.deepEqual(numbers(row.unreachable_relevant_movie_ids), [...relevant].filter(id => !itemCounts.has(id)).sort((a, b) => a - b));
        const candidates = new Set([...itemCounts.keys()].filter(id => !trainByUser.get(userId).has(id)));
        assert.equal(Number(row.candidate_count), candidates.size);
        const testCount = testByUser.get(userId).length;
        const maxTestRating = Math.max(...testByUser.get(userId).map(row => row.rating));
        assert.equal(Number(row.test_count), testCount);
        assert.equal(Number(row.max_test_rating), maxTestRating);
        const audited = { userId, testCount, maxTestRating, relevantIds: [...relevant] };
        if (relevant.size) evaluatedUsers++;
        for (const method of methods) {
            const ids = numbers(row[`${method}_top_movie_ids`]);
            const scores = numbers(row[`${method}_top_scores`]);
            const rawScores = numbers(row[`${method}_top_raw_scores`]);
            const fallback = numbers(row[`${method}_top_fallback`]);
            const neighbors = numbers(row[`${method}_top_neighbors`]);
            assert.equal(ids.length, Math.min(10, candidates.size));
            assert.equal(new Set(ids).size, ids.length);
            assert.equal(method === 'popularity' ? 0 : ids.length, scores.length);
            assert.equal(ids.length, rawScores.length);
            assert.equal(ids.length, neighbors.length);
            assert.equal(ids.length, fallback.length);
            assert.ok(ids.every(id => candidates.has(id)));
            assert.ok(scores.every(score => Number.isFinite(score) && score >= 1 && score <= 5));
            assert.ok(rawScores.every(Number.isFinite));
            assert.ok(fallback.every(value => value === 0 || value === 1));
            const keys = method.startsWith('legacy_') ? scores : rawScores;
            for (let i = 1; i < ids.length; i++) assert.ok(keys[i] < keys[i - 1] || (keys[i] === keys[i - 1] && ids[i] > ids[i - 1]));
            if (method === 'popularity') {
                const expected = [...candidates].sort((a, b) => itemCounts.get(b) - itemCounts.get(a) || a - b).slice(0, 10);
                assert.deepEqual(ids, expected);
                assert.deepEqual(rawScores, ids.map(id => itemCounts.get(id)));
            } else scores.forEach((score, i) => assert.equal(score, Math.max(1, Math.min(5, rawScores[i]))));
            const items = ids.map((movieId, i) => ({ movieId, rawScore: rawScores[i], score: method === 'popularity' ? null : scores[i], fallback: Boolean(fallback[i]), neighbors: neighbors[i] }));
            const snapshot = items.map(item => method.startsWith('legacy_')
                ? [item.movieId, item.score, item.fallback, item.neighbors]
                : [item.movieId, item.rawScore, item.score, item.fallback, item.neighbors]);
            checksums[method].update(JSON.stringify([userId, snapshot]));
            const hits = ids.filter(id => relevant.has(id)).length;
            const precision = hits / 10;
            const dcg = ids.reduce((sum, id, i) => sum + (relevant.has(id) ? 1 / Math.log2(i + 2) : 0), 0);
            const ideal = Array.from({ length: Math.min(10, relevant.size) }, (_, i) => 1 / Math.log2(i + 2)).reduce((a, b) => a + b, 0);
            near(precision, Number(row[`${method}_precision_at_10`]));
            audited[method] = { precision, recall: relevant.size ? hits / relevant.size : null, ndcg: ideal ? dcg / ideal : null, hitRate: Number(hits > 0), items };
            if (relevant.size) {
                const recall = hits / relevant.size;
                const ndcg = dcg / ideal;
                near(recall, Number(row[`${method}_recall_at_10`]));
                near(ndcg, Number(row[`${method}_ndcg_at_10`]));
                for (const [metric, value] of Object.entries({ precision, recall, ndcg, hitRate: Number(hits > 0), hits })) totals[method][metric] += value;
                totals[method].fallbackSlots += fallback.reduce((a, b) => a + b, 0);
            } else {
                assert.equal(row[`${method}_recall_at_10`], '');
                assert.equal(row[`${method}_ndcg_at_10`], '');
            }
            assert.equal(Number(row[`${method}_hit_at_10`]), Number(hits > 0));
        }
        allUsers.push(audited);
    }
    assert.deepEqual([...found].sort((a, b) => a - b), [...positiveByUser.keys()].sort((a, b) => a - b));
    assert.equal(evaluatedUsers, report.ranking.evaluatedUsers);
    const excluded = allUsers.filter(row => !row.relevantIds.length);
    const eligible = allUsers.filter(row => row.relevantIds.length);
    assert.equal(report.cohort.before, allUsers.length);
    assert.equal(report.cohort.after, eligible.length);
    assert.deepEqual(report.cohort.excluded, excluded.map(({ userId, testCount, maxTestRating }) => ({ userId, testCount, maxTestRating })));
    assert.deepEqual(report.cohort.denominators.precision, { perUser: 10, macroUsers: eligible.length, slots: eligible.length * 10 });
    assert.equal(report.cohort.denominators.recall.macroUsers, eligible.length);
    assert.equal(report.cohort.denominators.ndcg.macroUsers, eligible.length);
    assert.equal(report.cohort.denominators.hitRate.users, eligible.length);
    assert.equal(report.cohort.denominators.ratingError.testPairs, test.length);
    // Independent tie accounting from all equal pairs, not rounded display ratings.
    function auditTies(users, method) {
        const result = { usersWithTies: 0, tiedSlots: 0, equalPairs: 0, adjacentTies: 0 };
        users.forEach(row => {
            const keys = row[method].items.map(item => method.startsWith('legacy_') ? item.score : item.rawScore);
            const tied = new Set();
            keys.forEach((key, i) => {
                for (let j = i + 1; j < keys.length; j++) if (keys[j] === key) {
                    result.equalPairs++; tied.add(i); tied.add(j);
                }
                if (i && key === keys[i - 1]) result.adjacentTies++;
            });
            result.usersWithTies += Number(tied.size > 0); result.tiedSlots += tied.size;
        });
        return result;
    }
    for (const method of methods) {
        const result = method.startsWith('legacy_') ? report.legacyClipped[method.slice(7)] : report.methods[method];
        for (const metric of ['precision', 'recall', 'ndcg', 'hitRate']) {
            totals[method][metric] /= evaluatedUsers;
            near(totals[method][metric], result.topN[metric]);
        }
        assert.equal(totals[method].hits, result.topN.hits);
        assert.equal(totals[method].fallbackSlots, result.topN.fallbackSlots);
        assert.deepEqual(auditTies(eligible, method), result.ties);
        assert.deepEqual(auditTies(allUsers, method), result.tiesAllUsers);
        const predictionHash = checksums[method].digest('hex');
        if (method.startsWith('legacy_')) {
            assert.equal(predictionHash, result.predictionSha256);
            const original = method.slice(7);
            assert.equal(result.changedTop10Users, eligible.filter(row => row[original].items.map(item => item.movieId).join(',') !== row[method].items.map(item => item.movieId).join(',')).length);
        } else {
            assert.ok(result.predictionSha256.every(value => value === predictionHash));
            assert.equal(result.allUsers.users, allUsers.length);
            near(result.allUsers.precision, allUsers.reduce((sum, row) => sum + row[method].precision, 0) / allUsers.length);
            near(result.allUsers.hitRate, allUsers.reduce((sum, row) => sum + row[method].hitRate, 0) / allUsers.length);
            assert.equal(result.allUsers.recall, null);
            assert.equal(result.allUsers.ndcg, null);
        }
    }
    assert.deepEqual(report.bootstrap, Offline.pairedBootstrap(eligible));
    const referencePath = path.join(directory, 'clipped-reference.json');
    if (fs.existsSync(referencePath)) {
        const reference = JSON.parse(fs.readFileSync(referencePath, 'utf8'));
        assert.deepEqual(reference.split, report.split);
        for (const method of ['user', 'item']) {
            assert.deepEqual(reference.methods[method].topN, report.legacyClipped[method].topN);
            assert.equal(reference.methods[method].predictionSha256[0], report.legacyClipped[method].predictionSha256);
        }
    }
    let replay = null;
    if (process.argv[3]) {
        const directory = path.resolve(process.argv[3]);
        const second = JSON.parse(fs.readFileSync(path.join(directory, 'offline.json'), 'utf8'));
        for (const key of ['checksums', 'settings', 'split', 'ranking', 'cohort', 'bootstrap', 'legacyClipped', 'usersTsvSha256']) assert.deepEqual(report[key], second[key]);
        for (const method of Offline.METHODS) {
            assert.deepEqual(report.methods[method].topN, second.methods[method].topN);
            assert.deepEqual(report.methods[method].predictionSha256, second.methods[method].predictionSha256);
            const { ms: firstMs, ...firstRating } = report.methods[method].rating || {};
            const { ms: secondMs, ...secondRating } = second.methods[method].rating || {};
            assert.deepEqual(firstRating, secondRating);
        }
        const { ms: firstMs, ...firstBaseline } = report.baselineRating;
        const { ms: secondMs, ...secondBaseline } = second.baselineRating;
        assert.deepEqual(firstBaseline, secondBaseline);
        assert.equal(tsv, fs.readFileSync(path.join(directory, 'offline-users.tsv'), 'utf8'));
        replay = { status: 'PASS', primaryAt: report.generatedAt, replayAt: second.generatedAt, perUserTsvIdentical: true };
    }
    console.log(JSON.stringify({ status: 'PASS', auditedUsers: found.size, evaluatedUsers, totals, replay }, null, 2));
}

module.exports = { verifyProtocol };
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
