/* Focused agent-executed checks. All small examples below are SYNTHETIC,
 * except the explicitly labelled loaded-MovieLens decoding check.
 * Loaded by the browser runner, not by the application during normal use.
 */
function runCorrectnessTests() {
  const checks = [];
  const assert = (ok, message) => { if (!ok) throw new Error(message); };
  const near = (a, b, eps = 1e-6) => assert(Math.abs(a - b) <= eps, `${a} != ${b} (tol ${eps})`);
  const equal = (a, b) => assert(JSON.stringify(a) === JSON.stringify(b), `${JSON.stringify(a)} != ${JSON.stringify(b)}`);
  const rating = (userId, movieId, value, timestamp = 1) => ({ userId, movieId, rating: value, timestamp });
  const catalog = (n) => Array.from({ length: n }, (_, j) => ({ id: j + 1, title: `Synthetic ${j + 1}`, genres: [] }));
  const weights = () => ({ user: Array.from(model.userFactors.dataSync()), item: Array.from(model.itemFactors.dataSync()) });
  const compareWeights = (a, b, eps = 1e-7) => {
    for (const key of ['user', 'item']) {
      equal(a[key].length, b[key].length);
      a[key].forEach((x, i) => near(x, b[key][i], eps));
    }
  };
  const check = (name, fn) => {
    try { checks.push({ name, origin: 'new-focused-check', status: 'PASS', detail: fn() || {} }); }
    catch (e) { checks.push({ name, origin: 'new-focused-check', status: 'FAIL', detail: e.message }); }
  };
  const tinyTrain = [rating(1, 1, 5), rating(1, 2, 1), rating(2, 1, 1), rating(2, 2, 5)];
  const tinyVal = tinyTrain.map((r) => ({ ...r, timestamp: 2 }));
  const tiny = { movies: catalog(2), train: tinyTrain, val: tinyVal };

  check('Synthetic analytical prediction, clipping, and summed-L2 normalization', () =>
    withFixture({ movies: catalog(1), train: [rating(1, 1, 5)], model: fixtureModel({1:2}, {1:3}, 1) }, () => {
      equal(predictRating(1, 1), 5); // raw = 1 + 2*3 = 7
      const objective = tf.tidy(() => batchObjective(tf.tensor1d([1, 1], 'int32'),
        tf.tensor1d([1, 1], 'int32'), tf.tensor1d([5, 3]), 0.1).dataSync()[0]);
      near(objective, 11.3, 2e-6); // mean(4,16) + .1*(4+9)
      near(computeRMSEFor([rating(1, 1, 3)]), 2); // clipped 5, not raw 7
      tf.tidy(() => model.userFactors.assign(model.userFactors.mul(-1)));
      equal(predictRating(1, 1), 1);
      return { rawPrediction: 7, clippedPrediction: 5, clippedNegativePrediction: 1, objective, expectedObjective: 11.3 };
    }));

  check('Synthetic factors update and raw training loss falls', () => withFixture(tiny, () => {
    initializeFactors(trainSet, 16);
    const before = weights();
    const loss = () => tf.tidy(() => batchObjective(tf.tensor1d(trainSet.map(r => r.userId), 'int32'),
      tf.tensor1d(trainSet.map(r => r.movieId), 'int32'), tf.tensor1d(trainSet.map(r => r.rating)), 0).dataSync()[0]);
    const beforeLoss = loss();
    trainMF(trainSet, valSet, { epochs: 12, lr: 0.05, reg: 0, batchSize: 4 });
    const afterLoss = loss();
    assert(afterLoss < beforeLoss, 'Raw training loss did not decrease');
    assert(weights().user.some((x, i) => Math.abs(x - before.user[i]) > 1e-5), 'Factors unchanged');
    return { beforeLoss, afterLoss, selectedEpoch: model.selectedEpoch, syntheticReg: 0 };
  }));

  check('Synthetic validation/test labels do not enter gradient updates', () => {
    const run = (valRating, testRating) => withFixture({ ...tiny,
      val: tinyVal.map(r => ({ ...r, rating: valRating })), test: [rating(1, 1, testRating)] }, () => {
      initializeFactors(trainSet, 16);
      trainMF(trainSet, valSet, { epochs: 1, lr: 0.02, reg: 0.05, batchSize: 2 });
      return weights();
    });
    const a = run(1, 1), b = run(5, 5);
    compareWeights(a, b, 0);
    return { maxWeightDifference: 0, fixedTrainingData: true, changedValidationAndTestLabels: true, epochs: 1 };
  });

  check('Synthetic checkpoint copies are independent and restoration uses the selected epoch', () => withFixture(tiny, () => {
    initializeFactors(trainSet, 16);
    const original = weights(), snapshot = snapshotFactors();
    try {
      tf.tidy(() => model.userFactors.assign(model.userFactors.add(10)));
      equal(Array.from(snapshot.userFactors.dataSync()), original.user);
      restoreFactors(snapshot);
      compareWeights(weights(), original, 0);
    } finally { tf.dispose(snapshot); }
    // Deliberately conflicting validation preferences: a controlled synthetic
    // overfitting example, NOT a real MovieLens debugging incident.
    const opposite = trainSet.map(r => ({ ...r, rating: 6 - r.rating, timestamp: 2 }));
    initializeFactors(trainSet, 16);
    const opts = { epochs: 8, lr: 0.05, reg: 0, batchSize: 4 };
    const history = trainMF(trainSet, opposite, opts).map(r => ({ ...r }));
    const selected = selectBestCheckpoint(history), restored = weights();
    assert(selected.epoch < opts.epochs, 'Synthetic example did not select an earlier epoch');
    near(computeRMSEFor(opposite), selected.valRMSE, 1e-7);
    initializeFactors(trainSet, 16);
    trainMF(trainSet, opposite, { ...opts, epochs: selected.epoch });
    compareWeights(restored, weights(), 1e-7);
    return { independentSnapshot: true, selectedEpoch: selected.epoch, lastEpoch: opts.epochs,
      selectedValidationRMSE: selected.valRMSE, lastValidationRMSE: history.at(-1).valRMSE,
      restoredEqualsIndependentPrefixRun: true, tolerance: 1e-7, history };
  }));

  check('Synthetic checkpoint ties keep earliest epoch without mutating history', () => {
    const h = [{epoch:3,valRMSE:1},{epoch:1,valRMSE:1},{epoch:2,valRMSE:2}];
    const before = JSON.stringify(h);
    equal(selectBestCheckpoint(h).epoch, 1);
    equal(JSON.stringify(h), before);
    equal(selectBestCheckpoint([]), null);
    equal(selectBestCheckpoint(null), null);
  });

  check('Synthetic candidate masks, raw ranking, deterministic ties, and cold starts', () =>
    withFixture({ movies: catalog(6),
      train: [rating(1,1,3), ...[2,3,4,5,7].map(id => rating(2,id,3))],
      val: [rating(1,2,4)], test: [rating(1,3,5)],
      model: fixtureModel({1:1,2:1,3:100}, {1:100,2:99,3:7,4:6,5:6,6:1000,7:2000}, 0) }, () => {
      const recs = recommendTopK(1, 10);
      equal(recs.map(r => r.movieId), [3,4,5]);
      equal(recs.map(r => r.score), [7,6,6]);
      equal(recs.map(r => r.scoreType), Array(3).fill('raw model score'));
      equal(recommendTopK(3), []); // allocated but unseen user
      equal(recommendTopK(999), []);
      equal(recommendTopK(1, 0), []);
      equal(predictRating(3,3), 0); // fixture mean, not random/high factor score
      equal(predictRating(1,6), 0); // allocated but unseen movie
      equal(predictRating(1,999), 0);
      return { returnedIds: recs.map(r => r.movieId), rawScores: recs.map(r => r.score),
        excluded: { history:[1,2], coldItem:[6], missingMetadata:[7], coldUser:[3,999] } };
    }));

  check('Synthetic macro recall with unequal denominators and explicit user exclusions', () =>
    withFixture({ movies: catalog(8),
      train: [rating(1,1,3),rating(2,1,3),rating(3,1,3),rating(4,1,3),
        ...[2,3,4,5,6,7].map(id=>rating(5,id,3))],
      val: [rating(4,2,4)],
      test: [rating(1,2,4),rating(2,2,4),rating(2,3,5),rating(2,4,4),
        rating(3,2,3),rating(4,2,5),rating(4,8,5),rating(99,2,5)],
      model: fixtureModel({1:1,2:1,3:1,4:1,5:1,99:100}, {1:0,2:9,3:8,4:7,5:6,6:5,7:4,8:100}, 0) }, () => {
      const result = recallAtK(1);
      equal(result.perUser, [{userId:1,relevant:1,hit:1},{userId:2,relevant:3,hit:1}]);
      near(result.overallRecall, (1 + 1/3)/2, 1e-12);
      assert(Math.abs(result.overallRecall - 2/4) > 0.1, 'Accidentally micro-averaged');
      equal(result.excluded.usersWithoutRelevant, [3,4,99]);
      equal(result.excluded.unseenIds, [8]);
      equal(result.excluded.unknownUsers, [99]);
      equal(result.excluded.seenRelevantRows, 1);
      return result;
    }));

  check('Synthetic warm-start masks use identical baseline/MF rows and training-only mean', () =>
    withFixture({ movies: catalog(2), train:[rating(1,1,2),rating(2,1,4)],
      val:[rating(1,1,4),rating(1,2,5),rating(3,1,1)],
      model:fixtureModel({1:0,2:0,3:100},{1:0,2:100},3) }, () => {
      const eligible = eligibleSplit(valSet);
      equal(eligible.eligibleRows,1); equal(eligible.excludedRows,2);
      equal(eligible.missingUserIds,[3]); equal(eligible.missingItemIds,[2]);
      near(computeBaselineRMSE(eligible.rows),1);
      near(computeRMSEFor(eligible.rows),1);
      near(computeRMSEFor(valSet),1);
      initializeFactors(trainSet,16);
      equal(model.globalMean,3);
      return { raw:3,eligible:1,excluded:2,baseline:1,mf:1,trainingMean:3 };
    }));

  check('Synthetic split rounding and timestamp/movie-ID boundary ties', () => {
    const savedRatings = ratings, savedExclusions = SPLIT_EXCLUSIONS;
    try {
      ratings = Array.from({length:11},(_,i)=>rating(1,11-i,3,100));
      ratings.push(...[1,2,3,4].map(i=>rating(2,i,3,100)));
      const s = splitByTimestamp();
      equal(s.train.map(r=>r.movieId),[1,2,3,4,5,6,7,8]);
      equal(s.val.map(r=>r.movieId),[9]); equal(s.test.map(r=>r.movieId),[10,11]);
      equal(SPLIT_EXCLUSIONS.map(x=>x.userId),[2]);
      return {train:8,validation:1,test:2,boundaryTimestampsEqual:true,skippedUsers:[2]};
    } finally { ratings=savedRatings; SPLIT_EXCLUSIONS=savedExclusions; }
  });

  check('MovieLens titles decode without UTF-8 replacement characters', () => {
    equal(movieTitle(543),'Misérables, Les (1995)');
    equal(movieTitle(1005),'Double vie de Véronique, La (Double Life of Veronique, The) (1991)');
    equal(movieTitle(1233),'Nénette et Boni (1996)');
    assert(!movies.some(m=>m.title.includes('\ufffd')), 'Replacement character in title');
    return {examples:[543,1005,1233].map(movieId=>({movieId,title:movieTitle(movieId)}))};
  });

  check('Synthetic empty-training and empty-validation behavior', () => withFixture({movies:catalog(1)},()=> {
    equal(predictRating(1,1),0); equal(recommendTopK(1),[]);
    initializeFactors([],16); equal(model.globalMean,0); equal(trainMF([],[],{}),[]);
    trainSet=[rating(1,1,3)]; initializeFactors(trainSet,16);
    let message='';
    try { trainMF(trainSet,[],{epochs:1,lr:.01,reg:.05,batchSize:1}); } catch(e) { message=e.message; }
    assert(message.includes('No warm-start validation rows'), 'Empty validation was not rejected');
    return {emptyValidationMessage:message};
  }));

  check('Synthetic UI pipeline displays restored test RMSE and saves labelled raw scores', () => {
    const inputs=['epochs','lr','reg','batch-size'];
    const values=inputs.map(id=>document.getElementById(id).value);
    const targets=['training-curve','rating-results','status','recommendations','recall-results'];
    const html=targets.map(id=>document.getElementById(id).innerHTML);
    try {
      document.getElementById('epochs').value='2';
      document.getElementById('batch-size').value='2';
      return withFixture(REC_FIXTURE,()=> {
        document.getElementById('train').click();
        assert(lastRun && model, 'UI pipeline did not produce results');
        equal(lastRun.selectedEpoch,selectBestCheckpoint(trainingHistory).epoch);
        equal(lastRun.splits.test.eligibleRows,1);
        near(lastRun.splits.test.mfRMSE,computeRMSEFor(testSet));
        renderTopK(1); renderRecall(10);
        equal(lastRun.recommendations[1].items.map(r=>r.movieId).sort((a,b)=>a-b),[3,4,5]);
        equal(lastRun.recommendations[1].scoreType,'raw model score');
        assert(document.getElementById('recommendations').textContent.includes('raw model score'),'UI raw label absent');
        assert(document.getElementById('rating-results').textContent.includes('same 1 test rows'),'UI population absent');
        assert(JSON.parse(JSON.stringify(lastRun)).retrieval.K===10,'JSON results not serializable');
        return {synthetic:true,epochs:2,selectedEpoch:lastRun.selectedEpoch,
          displayedEvaluation:document.getElementById('rating-results').textContent,
          savedScoreType:lastRun.recommendations[1].scoreType,
          savedRecommendationIds:lastRun.recommendations[1].items.map(r=>r.movieId)};
      });
    } finally {
      inputs.forEach((id,i)=>document.getElementById(id).value=values[i]);
      targets.forEach((id,i)=>document.getElementById(id).innerHTML=html[i]);
    }
  });

  check('Synthetic repeated initialize/train/dispose cycles have stable tensor counts', () => withFixture(tiny, () => {
    const start=tf.memory().numTensors, retained=[], disposed=[];
    for(let j=0;j<5;j++) {
      initializeFactors(trainSet,16);
      // Test replacement too: the first two variables must be disposed.
      initializeFactors(trainSet,16);
      trainMF(trainSet,valSet,{epochs:3,lr:.02,reg:.05,batchSize:2});
      recommendTopK(1,10); computeRMSEFor(valSet); recallAtK(10);
      retained.push(tf.memory().numTensors);
      disposeModel(); disposed.push(tf.memory().numTensors);
    }
    equal(retained,Array(5).fill(start+2)); equal(disposed,Array(5).fill(start));
    return {before:start,withModel:retained,afterDispose:disposed,cycles:5};
  }));

  check('Adapted upstream harness has separate stable tensor counts across repeats', () => {
    const before=tf.memory().numTensors, counts=[];
    for(let j=0;j<3;j++) {
      const result=runTests(); assert(result.failed===0 && result.pending===0,'Adapted upstream harness failed');
      counts.push(tf.memory().numTensors);
    }
    equal(counts,Array(3).fill(before));
    return {before,afterEachHarnessRun:counts,originalInspectionLeak:16,
      correction:'fixture initializer/slice tidy, temporary model disposal and state restoration'};
  });

  return { verificationAuthor:'AI agent; no student personal verification claimed',
    passed:checks.filter(c=>c.status==='PASS').length,failed:checks.filter(c=>c.status==='FAIL').length,checks };
}
