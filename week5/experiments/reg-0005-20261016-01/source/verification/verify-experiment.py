"""Independent stdlib-only verification of an existing browser experiment.

Usage: python3 week5/verification/verify-experiment.py default-20261016-01
Does not execute TensorFlow.js, train, or modify the saved model/browser results.
New verification/analysis files are created exclusively; existing files are never overwritten.
"""
from pathlib import Path
from collections import defaultdict, Counter
import hashlib
import json
import math
import struct
import sys

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT/'experiments'/sys.argv[1]
load = lambda name: json.loads((OUT/name).read_text())
setup, model = load('setup.json'), load('model.json')
browser, exported, recall = load('training.json'), load('exported-results.json'), load('recall.json')
checks = []
def check(name, ok, **detail):
    checks.append({'name':name,'passed':bool(ok),**detail})
    if not ok:
        raise AssertionError(name)
def near(name, a, b, tolerance=2e-6):
    check(name,abs(a-b)<=tolerance,independent=a,browser=b,absoluteDifference=abs(a-b),tolerance=tolerance)
def save(name, value):
    with (OUT/name).open('x') as f:
        json.dump(value,f,indent=2,ensure_ascii=False);f.write('\n')
def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

for name in ['u.data','u.item']:
    check('Dataset hash '+name,digest(ROOT/name)==setup['sourceAndDataSHA256'][name])
for name in ['user','item']:
    check('Saved factor hash '+name,digest(OUT/(name+'-factors.f32'))==model['hashes'][name])
def floats(name):
    raw=(OUT/(name+'-factors.f32')).read_bytes()
    return struct.unpack('<'+'f'*(len(raw)//4),raw)
P,Q=floats('user'),floats('item')
F=model['userShape'][1];mu=model['globalMean']
check('Factor count and finite values',F==16 and all(map(math.isfinite,P+Q)))
ratings=[tuple(map(int,line.split())) for line in (ROOT/'u.data').read_text().splitlines()]
genre_names=["Action","Adventure","Animation","Children's","Comedy","Crime","Documentary","Drama","Fantasy","Film-Noir","Horror","Musical","Mystery","Romance","Sci-Fi","Thriller","War","Western"]
metadata={}
for line in (ROOT/'u.item').read_bytes().decode('latin-1').splitlines():
    fields=line.split('|')
    metadata[int(fields[0])]={'title':fields[1],'genres':[g for g,v in zip(genre_names,fields[6:24]) if v=='1']}
by_user=defaultdict(list)
for r in ratings:by_user[r[0]].append(r)
splits={'train':[],'validation':[],'test':[]}
for user,rows in by_user.items():
    rows.sort(key=lambda r:(r[3],r[1]))
    if len(rows)<5:continue
    a,b=math.floor(.8*len(rows)),math.floor(.1*len(rows))
    splits['train']+=rows[:a];splits['validation']+=rows[a:a+b];splits['test']+=rows[a+b:]
train_users={r[0] for r in splits['train']};train_items={r[1] for r in splits['train']}
near('Training-only mean',sum(r[2] for r in splits['train'])/len(splits['train']),mu,1e-14)
def dot(u,i):return math.fsum(P[u*F+f]*Q[i*F+f] for f in range(F))
def raw(u,i):return mu+dot(u,i)
def f32(x):return struct.unpack('<f',struct.pack('<f',x))[0]
def score32(u,i):
    value=0.0
    for f in range(F):value=f32(value+f32(P[u*F+f]*Q[i*F+f]))
    return f32(f32(mu)+value)
metrics={}
for name,rows in splits.items():
    eligible=[r for r in rows if r[0] in train_users and r[1] in train_items]
    baseline=math.sqrt(math.fsum((mu-r[2])**2 for r in eligible)/len(eligible))
    rmse=math.sqrt(math.fsum((max(1,min(5,raw(r[0],r[1])))-r[2])**2 for r in eligible)/len(eligible))
    b=browser['lastRun']['splits'][name]
    check(name+' eligible population',len(eligible)==b['eligibleRows'])
    near(name+' baseline RMSE',baseline,b['baselineRMSE'],1e-12)
    near(name+' saved-factor clipped RMSE',rmse,b['mfRMSE'])
    metrics[name]={'rawRows':len(rows),'eligibleRows':len(eligible),'baselineRMSE':baseline,
        'independentDoublePrecisionMFRMSE':rmse,'browserMFRMSE':b['mfRMSE'],
        'absoluteDifferenceMFMinusBaseline':b['mfRMSE']-b['baselineRMSE'],
        'relativeDifferencePercent':100*(b['mfRMSE']-b['baselineRMSE'])/b['baselineRMSE']}
check('Exactly 10732 warm-start test rows',metrics['test']['eligibleRows']==10732)
check('All ratings accounted for',sum(len(v) for v in splits.values())==100000)
history=browser['lastRun']['history']
selected=min(history,key=lambda r:(r['valRMSE'],r['epoch']))
check('Validation-only selected epoch',model['selectedEpoch']==selected['epoch']==browser['lastRun']['selectedEpoch'])
near('Restored validation RMSE agrees with selected history row',browser['restoredValidationRMSE'],selected['valRMSE'],1e-7)
for key in ['history','selectedEpoch','splits','options','seeds','trainingMean']:
    check('Actual UI-exported JSON matches browser '+key,exported[key]==browser['lastRun'][key])
display=load('browser-display.json')
check('Displayed test RMSE matches JSON',f"{browser['lastRun']['splits']['test']['mfRMSE']:.8f}" in display['ratingResults'])
check('Displayed matched test population','10732' in display['ratingResults'])
if (OUT/'validation-decision.json').exists():
    decision=load('validation-decision.json');validation_only=load('validation-only.json')
    events=[json.loads(line) for line in (OUT/'progress.ndjson').read_text().splitlines()]
    decision_index=next(i for i,e in enumerate(events) if e['type']=='validation-decision-persisted')
    test_index=next(i for i,e in enumerate(events) if e['type']=='new-model-test-evaluation-starting')
    check('Validation decision persisted before new-model test evaluation',decision_index<test_index)
    check('Decision guard was locked with no blocked attempts',validation_only['evaluationLocked'] and validation_only['blockedEvaluationAttempts']==0)
    check('No new-model test or recall metrics at decision',not decision['newModelTestMetricsComputed'] and not decision['newModelRecallComputed'])
    check('Prior default test inspection disclosed',decision['defaultTestAlreadyObserved'])
    check('Validation-only history matches complete saved history',validation_only['history']==history)
    check('Validation-phase diagnostics did not score test rows','test' not in validation_only['restoredDiagnostics']['predictionDistributions'] and 'test' not in validation_only['initializationDiagnostics']['predictionDistributions'])
    check('Export refers to exact persisted validation decision',exported['validationDecisionSHA256']==digest(OUT/'validation-decision.json'))
    delta=decision['newValidationRMSE']-decision['defaultValidationRMSE']
    expected='neither-demonstrated-improvement' if abs(delta)<=decision['numericalTieTolerance'] else 'reg-0.005' if delta<0 else 'default-reg-0.05'
    check('Preference follows predeclared validation-only rule',decision['preference']==expected)
    near('Decision value agrees with restored validation metric',decision['newValidationRMSE'],browser['restoredValidationRMSE'],1e-12)

seen=defaultdict(set)
for r in splits['train']+splits['validation']:seen[r[0]].add(r[1])
pool=train_items & set(metadata)
relevant=defaultdict(set)
for u,i,r,t in splits['test']:
    if r>=4 and u in train_users and i in pool-seen[u]:relevant[u].add(i)
check('Independent eligible user count',len(relevant)==861==recall['evaluatedUsers'])
check('Saved recall user IDs equal independently eligible IDs',{r['userId'] for r in recall['perUser']}==set(relevant))
for r in recall['perUser']:
    check(f"Recall denominator user {r['userId']}",r['relevant']==len(relevant[r['userId']]) and 0<=r['hit']<=min(10,r['relevant']))
    near(f"Saved per-user recall {r['userId']}",r['hit']/r['relevant'],r['recall'],1e-14)
macro=math.fsum(r['hit']/r['relevant'] for r in recall['perUser'])/len(recall['perUser'])
near('Independent macro Recall@10 from saved hits and denominators',macro,recall['overallRecall'],1e-12)
near('Exported JSON recall',macro,exported['retrieval']['overallRecall'],1e-12)
check('Displayed recall matches JSON',f'{macro:.4f}' in display['recallSummary'])
without=sorted({r[0] for r in splits['test']}-set(relevant))
check('Excluded users match independently',without==recall['excluded']['usersWithoutRelevant'])
unseen=sorted({r[1] for r in splits['test'] if r[2]>=4}-train_items)
check('Unseen relevant IDs match independently',unseen==recall['excluded']['unseenIds'])

user_analysis=[]
selection=load('preselection.json')
for u in selection['chosenUsers']:
    saved=load(f'user-{u}.json')
    candidates=sorted(pool-seen[u]);browser_scores={r['movieId']:r['score'] for r in saved['candidateScores']}
    check(f'User {u} complete candidate set',set(candidates)==set(browser_scores) and len(candidates)==saved['candidateCount'])
    independent64={i:raw(u,i) for i in candidates};independent32={i:score32(u,i) for i in candidates}
    max_error=max(abs(independent64[i]-browser_scores[i]) for i in candidates)
    check(f'User {u} all raw candidate scores agree within tolerance',max_error<=2e-6,maxAbsoluteError=max_error,tolerance=2e-6)
    ranked64=sorted(candidates,key=lambda i:(-independent64[i],i))
    ranked32=sorted(candidates,key=lambda i:(-independent32[i],i))
    actual=[r['movieId'] for r in saved['recommendations']]
    check(f'User {u} ten eligible distinct recommendations',len(actual)==len(set(actual))==10 and set(actual)<=set(candidates))
    check(f'User {u} no training/validation overlap',not(set(actual)&seen[u]) and saved['noTrainingValidationOverlap'])
    cutoff=min(independent64[i] for i in actual)
    missed_strict=[i for i in candidates if i not in actual and independent64[i]>cutoff+2e-6]
    check(f'User {u} no rank violations beyond numerical tolerance',not missed_strict,scoreTolerance=2e-6)
    relevant_ids=relevant[u];hits=set(actual)&relevant_ids
    r=next(r for r in recall['perUser'] if r['userId']==u)
    check(f'User {u} independently recomputed hits',len(hits)==r['hit'] and len(relevant_ids)==r['relevant'])
    check(f'User {u} saved relevant IDs',relevant_ids=={r['movieId'] for r in saved['eligibleRelevantTest']})
    check(f'User {u} exported Top10',actual==[r['movieId'] for r in exported['recommendations'][str(u)]['items']])
    for rec in saved['recommendations']:
        check(f"User {u} movie {rec['movieId']} metadata and hit",rec['title']==metadata[rec['movieId']]['title'] and rec['genres']==metadata[rec['movieId']]['genres'] and rec['eligibleRelevantTestHit']==(rec['movieId'] in relevant_ids))
    past=[r for r in splits['train']+splits['validation'] if r[0]==u]
    for name,key in [('train','trainingHistory'),('validation','validationHistory')]:
        check(f'User {u} full {name} history',[(r['userId'],r['movieId'],r['rating'],r['timestamp']) for r in saved[key]]==[r for r in splits[name] if r[0]==u])
    genres=defaultdict(list)
    for _,i,r,_ in past:
        for genre in metadata[i]['genres']:genres[genre].append(r)
    genre_summary=sorted([{'genre':g,'ratedMovies':len(v),'likedMovies':sum(x>=4 for x in v),'meanRating':sum(v)/len(v)} for g,v in genres.items()],key=lambda x:(-x['likedMovies'],-x['ratedMovies'],x['genre']))
    liked_examples=[{'movieId':i,**metadata[i],'rating':r,'timestamp':t} for _,i,r,t in sorted(past,key=lambda r:(-r[2],-r[3],r[1]))[:15]]
    near_cutoff=[{'movieId':i,'browserScore':browser_scores[i],'independentDoubleScore':independent64[i]} for i in ranked64 if abs(independent64[i]-independent64[ranked64[9]])<=2e-6]
    user_analysis.append({'userId':u,'historyCount':len(past),'historyLikedCount':sum(r[2]>=4 for r in past),'historyMeanRating':sum(r[2] for r in past)/len(past),
        'preferenceGenres':genre_summary,'highRatedHistoryExamples':liked_examples,
        'recommendations':saved['recommendations'],'eligibleRelevantTest':saved['eligibleRelevantTest'],
        'recommendationGenreCounts':dict(Counter(g for rec in saved['recommendations'] for g in rec['genres'])),
        'genresAbsentFromRatedHistory':sorted({g for rec in saved['recommendations'] for g in rec['genres']}-set(genres)),
        'hitMovieIds':sorted(hits),'recall':len(hits)/len(relevant_ids),
        'rankingVerification':{'browserTop10':actual,'independentFloat32Top10':ranked32[:10],
          'independentDoubleTop10':ranked64[:10], 'float32OrderMatches':actual==ranked32[:10],
          'doubleOrderMatches':actual==ranked64[:10],'maximumScoreError':max_error,'scoreTolerance':2e-6,
          'nearCutoffCandidateCount':len(near_cutoff),'nearCutoffCandidates':near_cutoff,
          'note':'Float32 scoring can tie distinctions visible in double precision; differing orders are reported, not hidden.'}})

report={'verificationAuthor':'Independent Python script executed by AI agent; student verification pending',
    'passed':len(checks),'failed':0,'checks':checks,'metrics':metrics,
    'deltaFormulas':{'absolute':'MF_RMSE - baseline_RMSE; negative is improvement','relativePercent':'100 * (MF_RMSE - baseline_RMSE) / baseline_RMSE'},
    'independentMacroRecall':macro,'evaluatedUsers':len(relevant),'excludedUsers':len(without),
    'totalHits':sum(r['hit'] for r in recall['perUser']),'totalEligibleRelevant':sum(r['relevant'] for r in recall['perUser']),
    'numericalMethod':'Python double precision from exact stored float32 factors; sequential float32 emulation additionally used for Top-K comparison'}
save('independent-verification.json',report)
save('user-analysis.json',user_analysis)
print(json.dumps({'passed':len(checks),'failed':0,'metrics':metrics,'macroRecall':macro,
    'users':[{'userId':u['userId'],'hits':u['hitMovieIds'],'recall':u['recall'],'float32RankingMatches':u['rankingVerification']['float32OrderMatches'],'doubleRankingMatches':u['rankingVerification']['doubleOrderMatches']} for u in user_analysis]},indent=2))
