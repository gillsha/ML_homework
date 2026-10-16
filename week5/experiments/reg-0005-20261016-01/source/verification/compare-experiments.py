"""Post-evaluation descriptive comparison. Cannot change the persisted model preference.
Writes new files exclusively. No training and no hyperparameter selection.
"""
from pathlib import Path
import hashlib
import json
import sys

ROOT=Path(__file__).resolve().parents[1]
OLD=ROOT/'experiments'/'default-20261016-01'
NEW=ROOT/'experiments'/sys.argv[1]
load=lambda root,name:json.loads((root/name).read_text())
a,b=load(OLD,'summary.json'),load(NEW,'summary.json')
old_setup,new_setup=load(OLD,'setup.json'),load(NEW,'setup.json')
decision=load(NEW,'validation-decision.json')
changed=[k for k in a['config'] if a['config'][k]!=b['config'][k]]
assert changed==['reg'] and a['config']['reg']==.05 and b['config']['reg']==.005
checks=[]
def check(name,condition):
    assert condition,name
    checks.append({'name':name,'passed':True})
check('Only reg differs in model/training configuration',changed==['reg'])
for file in ['script.js','data.js','index.html','style.css','readme.md','u.data','u.item','verification/correctness.js']:
    check('Same application/data '+file,old_setup['sourceAndDataSHA256'][file]==new_setup['sourceAndDataSHA256'][file])
for key in ['browser','backend','tfjs']:
    check('Same runtime '+key,a['environment'][key]==b['environment'][key])
old_training,new_training=load(OLD,'training.json'),load(NEW,'training.json')
check('Identical fixed diagnostic batch',old_training['initializationDiagnostics']['fixedBatch']['rows']==new_training['initializationDiagnostics']['fixedBatch']['rows'])
check('Diagnostic regularization is actual setting',new_training['initializationDiagnostics']['fixedBatch']['regularization']==.005 and load(NEW,'restored-diagnostics.json')['fixedBatch']['regularization']==.005)
for key in ['userFrobenius','itemFrobenius']:
    check('Same initial norm '+key,abs(a['initialNorms'][key]-b['initialNorms'][key])<=2e-6)
check('Exactly same fixed users',[u['userId'] for u in a['users']]==[u['userId'] for u in b['users']]==[1,2])
assert decision['preference']==b['validationDecision']['preference']
by_user=[]
for old,new in zip(a['users'],b['users']):
    old_ids=[r['movieId'] for r in old['recommendations']];new_ids=[r['movieId'] for r in new['recommendations']]
    by_user.append({'userId':new['userId'],'defaultIds':old_ids,'newIds':new_ids,'sameOrderedList':old_ids==new_ids,
        'overlapCount':len(set(old_ids)&set(new_ids)),'addedIds':sorted(set(new_ids)-set(old_ids)),'removedIds':sorted(set(old_ids)-set(new_ids)),
        'defaultRecall':old['recall'],'newRecall':new['recall'],'defaultHitIds':old['hitMovieIds'],'newHitIds':new['hitMovieIds'],
        'newRecommendations':new['recommendations'],'newGenresAbsentFromRatedHistory':new['genresAbsentFromRatedHistory'],
        'trainingValidationRows':[new['trainingRows'],new['validationRows']],
        'sameHistory':load(OLD,f"user-{new['userId']}.json")['trainingHistory']==load(NEW,f"user-{new['userId']}.json")['trainingHistory'] and load(OLD,f"user-{new['userId']}.json")['validationHistory']==load(NEW,f"user-{new['userId']}.json")['validationHistory'],
        'defaultCandidateScoreRange':[min(r['score'] for r in load(OLD,f"user-{new['userId']}.json")['candidateScores']),max(r['score'] for r in load(OLD,f"user-{new['userId']}.json")['candidateScores'])],
        'newCandidateScoreRange':[min(r['score'] for r in load(NEW,f"user-{new['userId']}.json")['candidateScores']),max(r['score'] for r in load(NEW,f"user-{new['userId']}.json")['candidateScores'])]})
def row(summary):
    distribution=summary['restoredPredictionDistributions']['validation']
    return {'config':summary['config'],'selectedEpoch':summary['selectedEpoch'],
        'trainRMSE':summary['metrics']['train']['browserMFRMSE'],'validationRMSE':summary['metrics']['validation']['browserMFRMSE'],
        'independentValidationRMSE':summary['metrics']['validation']['independentDoublePrecisionMFRMSE'],
        'testRMSE':summary['metrics']['test']['browserMFRMSE'],'independentTestRMSE':summary['metrics']['test']['independentDoublePrecisionMFRMSE'],
        'macroRecall':summary['macroRecall'],'trainingWallSeconds':summary['trainingWallSeconds'],
        'norms':summary['restoredNormsFromStoredFactorsDouble'],
        'validationDotRMS':distribution['dotCorrections']['rms'],
        'validationRawRange':[distribution['rawPredictions']['min'],distribution['rawPredictions']['max']],
        'validationClippingFraction':distribution['outsideRatingRangeFraction'],
        'fixedBatch':summary['fixedBatch'],'evaluatedUsers':summary['evaluatedUsers'],
        'excludedUsers':summary['excludedUserCount'],'excludedRelevantItems':summary['excludedRelevantItemCount']}
result={'referenceRun':OLD.name,'newRun':NEW.name,'onlyChangedTrainingParameter':'reg',
    'chronology':'Default test results were known. Model preference below was recorded using validation only before new-model test/Recall evaluation.',
    'validationDecision':decision,'default':row(a),'reg0005':row(b),'userComparisons':by_user,
    'hypothesisComponents':{'validationImprovedBeyondPredeclaredTolerance':decision['preference']=='reg-0.005',
        'validationRawScoresVary':b['restoredPredictionDistributions']['validation']['rawPredictions']['standardDeviation']>0,
        'factorNormsLargerThanDefault':b['restoredNormsFromStoredFactorsDouble']['user']>a['restoredNormsFromStoredFactorsDouble']['user'] and b['restoredNormsFromStoredFactorsDouble']['item']>a['restoredNormsFromStoredFactorsDouble']['item']},
    'checks':checks,'passed':len(checks),'scope':'Controlled one-seed comparison; not a universal coefficient claim',
    'studentPersonalVerification':'pending','aiAssistedCrossCheck':'evidence/ai-assisted-recall-cross-check.json'}
with (NEW/'comparison.json').open('x') as f:json.dump(result,f,indent=2,ensure_ascii=False);f.write('\n')
print(json.dumps({k:result[k] for k in ['validationDecision','default','reg0005','hypothesisComponents','passed']},indent=2))
