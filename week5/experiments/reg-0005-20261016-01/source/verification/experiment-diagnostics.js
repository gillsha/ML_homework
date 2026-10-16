/* Read-only diagnostics installed AFTER tests and user preselection.
 * No optimizer/model writes and no random-number calls. Wrappers call the
 * original application functions with unchanged arguments and return values.
 */
function distribution(values) {
  const a = Array.from(values).sort((x, y) => x - y);
  const n = a.length, mean = a.reduce((s, x) => s + x, 0) / n;
  const quantile = p => a[Math.floor(p * (n - 1))];
  return { count:n, finite:a.every(Number.isFinite), min:a[0], max:a[n-1], mean,
    meanAbsolute:a.reduce((s,x)=>s+Math.abs(x),0)/n,
    rms:Math.sqrt(a.reduce((s,x)=>s+x*x,0)/n),
    standardDeviation:Math.sqrt(a.reduce((s,x)=>s+(x-mean)**2,0)/n),
    zeroCount:a.filter(x=>x===0).length,
    quantiles:{p01:quantile(.01),p05:quantile(.05),p50:quantile(.5),p95:quantile(.95),p99:quantile(.99)} };
}

function diagnoseState(label, {reg = readHyperparameters().reg, includeTest = true} = {}) {
  const before=tf.memory().numTensors;
  const details=tf.tidy(()=> {
    const pSquared=model.userFactors.square().sum().dataSync()[0];
    const qSquared=model.itemFactors.square().sum().dataSync()[0];
    const F=model.userFactors.shape[1];
    const p=model.userFactors.dataSync(), q=model.itemFactors.dataSync();
    const observedSquared=(data,ids)=> {
      let sum=0;
      for(const id of ids) for(let f=0;f<F;f++) sum+=data[id*F+f]**2;
      return sum;
    };
    const pairs=rows=> {
      const u=tf.gather(model.userFactors,tf.tensor1d(rows.map(r=>r.userId),'int32'));
      const i=tf.gather(model.itemFactors,tf.tensor1d(rows.map(r=>r.movieId),'int32'));
      const dot=u.mul(i).sum(1), raw=dot.add(model.globalMean);
      return {dot,raw};
    };
    const predictionDistributions={};
    const splits = {train:trainSet,validation:valSet};
    if (includeTest) splits.test = testSet;
    for(const [name,split] of Object.entries(splits)) {
      const rows=eligibleSplit(split).rows, scored=pairs(rows);
      const raw=Array.from(scored.raw.dataSync());
      predictionDistributions[name]={dotCorrections:distribution(scored.dot.dataSync()),
        rawPredictions:distribution(raw),outsideRatingRange:raw.filter(x=>x<1||x>5).length,
        outsideRatingRangeFraction:raw.filter(x=>x<1||x>5).length/raw.length};
    }
    // Fixed diagnostic batch = first 64 rows of the provided trainSet BEFORE
    // shuffle. It is not asserted to be the optimizer's first shuffled batch.
    const batch=trainSet.slice(0,64), scored=pairs(batch);
    const dataMSE=tf.losses.meanSquaredError(tf.tensor1d(batch.map(r=>r.rating)),scored.raw).dataSync()[0];
    const l2=model.userFactors.square().sum().add(model.itemFactors.square().sum()).mul(reg).dataSync()[0];
    return {label,trainingMean:model.globalMean,
      allFactorsFinite:[...p,...q].every(Number.isFinite),
      norms:{userFrobenius:Math.sqrt(pSquared),itemFrobenius:Math.sqrt(qSquared),
        userSquared:pSquared,itemSquared:qSquared,
        observedUserFrobenius:Math.sqrt(observedSquared(p,model.observedUsers)),
        observedItemFrobenius:Math.sqrt(observedSquared(q,model.observedItems))},
      predictionDistributions,
      fixedBatch:{definition:'First 64 rows of supplied trainSet, before training shuffle',
        rows:batch,dataMSE,regularization:reg,scaledWholeMatrixL2:l2,
        l2ToDataMseRatio:l2/dataMSE,
        caution:'Loss-value ratio alone is not evidence of gradient dominance or causation'}};
  });
  return {...details,tensorsBefore:before,tensorsAfter:tf.memory().numTensors};
}

function installExperimentInstrumentation({validationFirst = false} = {}) {
  window.__experiment={trainingActive:false,metrics:[],diagnostics:{},timing:{},
    evaluationLocked:validationFirst,blockedEvaluationAttempts:0};
  const originalInitialize=initializeFactors, originalTrain=trainMF, originalRMSE=computeRMSEFor;
  const allowedRows=new Set([...trainSet,...valSet]);
  const originalRecall=recallAtK, originalRecommend=recommendFromContext;
  const guard=()=> {
    if(__experiment.evaluationLocked) {
      __experiment.blockedEvaluationAttempts++;
      throw new Error('New-model held-out evaluation is locked until validation decision is persisted');
    }
  };
  recallAtK=function(...args) {guard();return originalRecall(...args);};
  recommendFromContext=function(...args) {guard();return originalRecommend(...args);};
  initializeFactors=function(...args) {
    const started=performance.now();
    const value=originalInitialize(...args);
    __experiment.timing.initializationMs=performance.now()-started;
    const diagStarted=performance.now();
    __experiment.diagnostics.initialization=diagnoseState('initialization, before any optimizer update',
      {reg:readHyperparameters().reg,includeTest:!validationFirst});
    __experiment.timing.initialDiagnosticsMs=performance.now()-diagStarted;
    console.log('HW5_EXPERIMENT '+JSON.stringify({type:'initialized',tensors:tf.memory().numTensors}));
    return value;
  };
  computeRMSEFor=function(...args) {
    if(__experiment.evaluationLocked && args[0]?.some(row=>!allowedRows.has(row))) guard();
    const value=originalRMSE(...args);
    if(__experiment.trainingActive) {
      __experiment.metrics.push(value);
      if(__experiment.metrics.length%2===0) {
        console.log('HW5_EXPERIMENT '+JSON.stringify({type:'epoch',epoch:__experiment.metrics.length/2,
          trainRMSE:__experiment.metrics.at(-2),valRMSE:value,
          elapsedTrainingMs:performance.now()-__experiment.timing.trainingStartMs}));
      }
    }
    return value;
  };
  trainMF=function(...args) {
    __experiment.trainingActive=true;
    __experiment.timing.trainingStartMs=performance.now();
    try { return originalTrain(...args); }
    finally {
      __experiment.timing.trainingWallMs=performance.now()-__experiment.timing.trainingStartMs;
      __experiment.trainingActive=false;
      console.log('HW5_EXPERIMENT '+JSON.stringify({type:'training-returned',trainingWallMs:__experiment.timing.trainingWallMs}));
    }
  };
}
