"""Compact post-run summary and double-precision underflow diagnostics.
Read-only with respect to the model and original browser evidence. No training.
"""
from pathlib import Path
from collections import Counter
import json
import math
import struct
import sys

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'experiments'/sys.argv[1]
load=lambda name:json.loads((OUT/name).read_text())
training=load('training.json');restored=load('restored-diagnostics.json')
model=load('model.json');verified=load('independent-verification.json')
config=load('setup.json')['config'];reg=config['reg']
analysis=load('user-analysis.json');recall=load('recall.json')
def floats(name):
    data=(OUT/(name+'-factors.f32')).read_bytes()
    return struct.unpack('<'+'f'*(len(data)//4),data)
P,Q=floats('user'),floats('item');F=model['userShape'][1]
ps=math.fsum(x*x for x in P);qs=math.fsum(x*x for x in Q)
batch=training['initializationDiagnostics']['fixedBatch']['rows']
assert batch==restored['fixedBatch']['rows']
dot=lambda u,i:math.fsum(P[u*F+f]*Q[i*F+f] for f in range(F))
batch_mse=math.fsum((model['globalMean']+dot(r['userId'],r['movieId'])-r['rating'])**2 for r in batch)/len(batch)
compact_users=[]
for a in analysis:
    saved=load(f"user-{a['userId']}.json")
    scores=[r['score'] for r in saved['candidateScores']]
    corrections=[dot(a['userId'],r['movieId']) for r in saved['candidateScores']]
    ranking=a['rankingVerification']
    compact_users.append({k:a[k] for k in ['userId','historyCount','historyLikedCount','historyMeanRating','preferenceGenres','highRatedHistoryExamples','recommendations','eligibleRelevantTest','recommendationGenreCounts','genresAbsentFromRatedHistory','hitMovieIds','recall']} | {
        'trainingRows':len(saved['trainingHistory']),'validationRows':len(saved['validationHistory']),
        'candidateCount':saved['candidateCount'],'noTrainingValidationOverlap':saved['noTrainingValidationOverlap'],
        'allCandidateBrowserScoresExactlyEqual':len(set(scores))==1,'commonRawScore':scores[0],
        'selectedTop10AreLowestEligibleMovieIds':[r['movieId'] for r in saved['recommendations']]==sorted(r['movieId'] for r in saved['candidateScores'])[:10],
        'savedFactorDotCorrectionDoubleRange':[min(corrections),max(corrections)],
        'rankingVerification':{k:ranking[k] for k in ['float32OrderMatches','doubleOrderMatches','maximumScoreError','scoreTolerance','nearCutoffCandidateCount']}})
summary={'name':OUT.name,'config':load('setup.json')['config'],'environment':load('environment.json'),
    'selectedEpoch':model['selectedEpoch'],'allEpochMetricsIdentical':len({(r['trainRMSE'],r['valRMSE']) for r in training['lastRun']['history']})==1,
    'trainingWallSeconds':training['timing']['trainingWallMs']/1000,
    'loadingSeconds':training['loadingMs']/1000,'testsSeconds':training['testsMs']/1000,
    'initializationSeconds':training['timing']['initializationMs']/1000,
    'initialDiagnosticsSeconds':training['timing']['initialDiagnosticsMs']/1000,
    'recallEvaluationSeconds':recall['evaluationWallMs']/1000,
    'metrics':verified['metrics'],'deltaFormulas':verified['deltaFormulas'],
    'macroRecall':recall['overallRecall'],'evaluatedUsers':recall['evaluatedUsers'],
    'excludedUserCount':len(recall['excluded']['usersWithoutRelevant']),
    'excludedRelevantItemCount':len(recall['excluded']['unseenIds']),
    'excludedRelevantRows':recall['excluded']['excludedRelevantRows'],
    'coldStartUsers':len(recall['excluded']['unknownUsers']),
    'missingMetadataRelevantIds':len(recall['excluded']['missingMetadataIds']),
    'alreadySeenRelevantRows':recall['excluded']['seenRelevantRows'],
    'totalHits':verified['totalHits'],'totalEligibleRelevant':verified['totalEligibleRelevant'],
    'initialNorms':training['initializationDiagnostics']['norms'],
    'restoredNormsBrowser':restored['norms'],
    'restoredNormsFromStoredFactorsDouble':{'user':math.sqrt(ps),'item':math.sqrt(qs),'scaledWholeMatrixL2':reg*(ps+qs)},
    'fixedBatch':{'size':len(batch),'definition':restored['fixedBatch']['definition'],
        'userCounts':dict(Counter(r['userId'] for r in batch)),
        'initialDataMSE':training['initializationDiagnostics']['fixedBatch']['dataMSE'],
        'initialScaledL2':training['initializationDiagnostics']['fixedBatch']['scaledWholeMatrixL2'],
        'initialL2ToDataMseRatio':training['initializationDiagnostics']['fixedBatch']['l2ToDataMseRatio'],
        'restoredDataMSEBrowser':restored['fixedBatch']['dataMSE'],'restoredScaledL2Browser':restored['fixedBatch']['scaledWholeMatrixL2'],
        'restoredDataMSEDouble':batch_mse,'restoredScaledL2Double':reg*(ps+qs)},
    'initialPredictionDistributions':training['initializationDiagnostics']['predictionDistributions'],
    'restoredPredictionDistributions':restored['predictionDistributions'],
    'users':compact_users,'independentChecksPassed':verified['passed'],'finiteAndMemory':load('final-state.json'),
    'meanBaselineNumericallyEquivalent':all(abs(v['independentDoublePrecisionMFRMSE']-v['baselineRMSE'])<=2e-6 for v in verified['metrics'].values()),
    'validationDecision':load('validation-decision.json') if (OUT/'validation-decision.json').exists() else None,
    'interpretationScope':'Observed outcomes for one fixed seed/configuration; loss-value ratios do not establish gradient dominance or a universally optimal coefficient.'}
with (OUT/'summary.json').open('x') as f:json.dump(summary,f,indent=2,ensure_ascii=False);f.write('\n')
print(json.dumps({k:summary[k] for k in ['trainingWallSeconds','selectedEpoch','macroRecall','restoredNormsFromStoredFactorsDouble','fixedBatch']},indent=2))
