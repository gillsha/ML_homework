// Rating-only (browser-equivalent): node evaluate.cjs
// Saved offline ranking experiment: node evaluate.cjs --offline --output results
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const Data = require('./data.js');
const CF = require('./cf.js');
const Offline = require('./offline.cjs');

const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

async function main() {
    const args = process.argv.slice(2);
    let offline = false;
    let output;
    for (let index = 0; index < args.length; index++) {
        if (args[index] === '--offline') offline = true;
        else if (args[index] === '--output' && args[index + 1] && !args[index + 1].startsWith('--')) output = path.resolve(args[++index]);
        else throw new Error('Usage: node evaluate.cjs [--offline [--output DIRECTORY]]');
    }
    if (output && !offline) throw new Error('--output requires --offline');
    if (output && !fs.statSync(output).isDirectory()) throw new Error('Output directory must exist');
    const data = await Data.loadData(async name => new Response(fs.readFileSync(path.join(__dirname, name))));
    if (!offline) {
        console.log(JSON.stringify({ settings: CF.SETTINGS, ...CF.evaluate(data.movies, data.ratings) }, null, 2));
        return;
    }
    const previousPath = output && path.join(output, 'offline.json');
    const previous = previousPath && fs.existsSync(previousPath) ? JSON.parse(fs.readFileSync(previousPath, 'utf8')) : null;
    const { summary, users } = Offline.experiment(data.movies, data.ratings, { progress: message => console.error(message) });
    const checksums = {};
    for (const name of ['u.data', 'u.item', 'data.js', 'cf.js', 'offline.cjs', 'evaluate.cjs']) {
        checksums[name] = sha256(fs.readFileSync(path.join(__dirname, name)));
    }
    const tsv = Offline.usersTsv(users);
    const report = {
        generatedAt: new Date().toISOString(),
        environment: {
            node: process.version, v8: process.versions.v8, platform: process.platform, arch: process.arch,
            osRelease: os.release(), cpu: os.cpus()[0]?.model, logicalCpus: os.cpus().length,
            memoryGiB: os.totalmem() / 1024 ** 3, execution: 'Single Node.js process, JavaScript on CPU; no GPU or worker threads'
        },
        protocol: {
            split: 'Per-user hash(seed,userId,movieId); floor(20%) held out, at least one test row for count>=2, at least one train row. Not chronological.',
            candidates: 'All catalog movies with at least one TRAIN rating minus the user\'s TRAIN-rated movies; no negative sampling or test-aware filtering.',
            relevant: 'Held-out rating >=4. All other candidates count as non-relevant for this offline metric, including unobserved items.',
            aggregation: 'Primary: macro average over the same positive-test cohort for all THREE methods. Recall/NDCG are null for zero-positive users, never zero-filled. Supplemental precision and hit rate are also reported over all test users.',
            ranking: 'CF: finite rawScore before clipping, descending; ties by ascending movie ID. score=clip(rawScore,1,5) only for rating metrics and display. Legacy clipped sorting is recomputed on the SAME scored candidates as an audit, outside timings.',
            popularity: 'Descending number of observed TRAIN ratings of the movie, regardless of rating value; tie by ID. Same user history filter and candidate set. No rating prediction/RMSE for counts.',
            precision: 'Hits in first 10 / 10; missing slots count as misses.',
            recall: 'Hits in first 10 / all relevant test items, including cold items excluded from candidates.',
            ndcg: 'Binary gain, discount 1/log2(rank+1), IDCG from min(10, all relevant test items).',
            hitRate: 'Fraction of eligible users with at least one relevant recommendation.',
            fitting: 'Only train enters buildModel, means, similarities, neighbour selection and fallback. Hyperparameters fixed; no tuning on test.',
            timing: 'performance.now(): shared buildData separately; each similarity matrix separately. Recommend time includes candidate filtering, all candidate predictions, sorting and top-10 slicing; excludes audits, metrics, serialization, loading, UI and warm-up.',
            repetitions: '1 unmeasured model build + recommendations for first 10 users/method; 3 measured builds; 3 recommendation passes per method on same last train model, method order rotates. Similarity build order is user then item. Popularity counts are prepared in shared buildData, no similarity. Report median/min/max; no forced GC.',
            inference: 'Paired bootstrap of users on the primary positive-test cohort: fixed seed 20261003, 5000 replicates, NDCG primary. 3 primary pairwise contrasts use Bonferroni-adjusted percentile intervals. Conditional uncertainty, not across new splits or retrained models.'
        },
        checksums, ...summary, usersTsvSha256: sha256(tsv)
    };
    const json = JSON.stringify(report, null, 2) + '\n';
    if (output) {
        if (previous && !previous.schemaVersion) {
            assert.deepEqual(previous.settings, report.settings);
            assert.deepEqual(previous.split, report.split);
            assert.deepEqual(previous.ranking, report.ranking);
            for (const method of ['user', 'item']) {
                assert.deepEqual(previous.methods[method].topN, report.legacyClipped[method].topN);
                assert.equal(previous.methods[method].predictionSha256[0], report.legacyClipped[method].predictionSha256);
            }
            const reference = path.join(output, 'clipped-reference.json');
            if (!fs.existsSync(reference)) fs.writeFileSync(reference, JSON.stringify(previous, null, 2) + '\n');
        }
        fs.writeFileSync(path.join(output, 'offline.json'), json);
        fs.writeFileSync(path.join(output, 'offline-users.tsv'), tsv);
        console.error(`Saved ${output}/offline.json and offline-users.tsv`);
    }
    console.log(json);
}

main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
});
