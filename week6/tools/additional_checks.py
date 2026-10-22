"""Bounded independent audits. See README for commands and definitions.
No MF training; exploratory mode evaluates validation only. 165 second hard limit.
"""
import argparse,json,time,signal,itertools
from pathlib import Path
import numpy as np
from core import *
p=argparse.ArgumentParser();p.add_argument('mode',choices=['cohorts','mf','metrics','alpha','explore','convergence']);p.add_argument('--root');p.add_argument('--results',type=Path,default=ROOT/'results');p.add_argument('--output',type=Path,required=True);p.add_argument('--alpha',type=float);p.add_argument('--start',type=int,default=0);p.add_argument('--end',type=int,default=128);p.add_argument('--evidence',type=Path);a=p.parse_args()
signal.signal(signal.SIGALRM,lambda *_:(_ for _ in ()).throw(TimeoutError('165 second job limit')));signal.alarm(165);t=time.perf_counter()
load=lambda f:json.loads((a.results/f).read_text())
def aggregate(rr):return {'users':len(rr),'recall':float(np.mean([r['recall'] for r in rr])) if rr else None}
def normalize(rr,k):
 return [{'userId':r['userId'],'ids':r['ids'],'hits':sorted(set(r['ids'])&relevant(k,r['userId'])),'recall':len(set(r['ids'])&relevant(k,r['userId']))/len(relevant(k,r['userId'])),'meanPopularity':float(np.mean([pop[m] for m in r['ids']]))} for r in rr]
def avg_ranks(x):
 order=np.argsort(x,kind='stable');r=np.empty(len(x),float);i=0
 while i<len(x):
  j=i+1
  while j<len(x) and x[order[i]]==x[order[j]]:j+=1
  r[order[i:j]]=(i+j-1)/2+1;i=j
 return r
if a.mode=='cohorts':
 noedges=set(users)-positive_users;out={'definitions':{'universe':'943 users observed in training; graph includes all, including zero-degree 685.','noPositiveTraining':'No train rating >=4.','noEligibleRelevant':'No split rating >=4 in training candidate pool after split exclusions; can overlap noPositiveTraining.','exclusions':'Validation excludes every train-rated movie; test excludes every train- or validation-rated movie.','absent':'Rating>=4 movie not observed anywhere in training; instances are unique (userId,movieId) pairs.'},'totalUsers':U,'positiveDegreeUsers':len(positive_users),'noPositiveTrainingUsers':sorted(noedges),'splits':{}}
 for k,co in cohorts.items():
  norel={u for u in users if not relevant(k,u)};absent=sorted({(u,m) for u,m,r,_ in splits[k] if r>=4 and m not in mi})
  out['splits'][k]={'noPositiveTraining':len(noedges),'noEligibleRelevant':len(norel),'both':len(noedges&norel),'noPositiveOnly':sorted(noedges-norel),'noRelevantOnly':sorted(norel-noedges),'bothUsers':sorted(noedges&norel),'excludedUsers':sorted(noedges|norel),'excludedTotal':len(noedges|norel),'cohortSize':len(co),'cohortUsers':co,'absentRelevantInstances':len(absent),'absentRelevantDistinctMovies':len({m for _,m in absent}),'absentPairs':absent}
 union=set(cohorts['val'])|set(cohorts['test']);out['convergenceDenominator']={'meaning':'Union of validation and test eligible cohorts, not graph universe.','unionSize':len(union),'intersectionSize':len(set(cohorts['val'])&set(cohorts['test'])),'includedUsers':sorted(union),'excludedUsers':sorted(set(users)-union),'positiveDegreeExcludedUsers':sorted(positive_users-union)}
elif a.mode=='mf':
 out={'formula':'raw mu + dot(P[rawUserId], Q[rawMovieId]); no biases or ranking clip. Padded row0 is unused.','candidatePool':M,'tieRule':'descending float32 score then ascending movie ID','models':[],'pairwise':[]};models={}
 for label in ['hw6-supplied','hw5-default','hw5-reg0005']:
  d=a.results/'models'/label;m=json.loads((d/'model.json').read_text());P=np.fromfile(d/'user-factors.f32',dtype='<f4').reshape(m['userShape']);Q=np.fromfile(d/'item-factors.f32',dtype='<f4').reshape(m['itemShape']);assert sha(d/'user-factors.f32')==m['hashes']['user'];assert sha(d/'item-factors.f32')==m['hashes']['item']
  source=d/'source/script.js';provenance={}
  if source.exists():
   assert 'items.matMul(u, false, true).reshape([ids.length]).add(model.globalMean)' in source.read_text()
   manifest=json.loads((d/'source-provenance.json').read_text())
   for f,recorded in manifest['files'].items():assert sha(d/f)==recorded['sha256'];provenance[f]=recorded['sha256']
  scores=(P[users]@Q[movies].T+np.float32(m['globalMean'])).astype(np.float32);dot=P[users].astype(float)@Q[movies].astype(float).T
  assert np.isfinite(scores).all();std=scores.astype(float).std(axis=1);unique=np.array([len(np.unique(row)) for row in scores]);mean32=np.float32(m['globalMean']);deviation=float(np.max(np.abs(dot)));records={k:[record(scores[ui[u]],k,u) for u in co] for k,co in cohorts.items()};models[label]=records
  row={'label':label,'checkpoint':m['selectedEpoch'],'userShape':m['userShape'],'itemShape':m['itemShape'],'factorHashes':m['hashes'],'provenanceHashesVerified':provenance,'globalMean':m['globalMean'],'float32Mean':float(mean32),'float32MeanUlp':float(np.spacing(mean32)),'maxAbsDotFloat64':deviation,'scoreStdMin':float(std.min()),'scoreStdMax':float(std.max()),'uniqueScoresPerUserMin':int(unique.min()),'uniqueScoresPerUserMax':int(unique.max()),'usersWithAllCandidatesTied':int(sum(unique==1)),'tiedCandidatePairsPerUser':M*(M-1)//2,'norms':{},'splits':{k:{**aggregate(rr),'perUser':rr} for k,rr in records.items()},'user1and2':[{'userId':u,'scoreStd':float(std[ui[u]]),'uniqueScores':int(unique[ui[u]]),'rawDotStdFloat64':float(dot[ui[u]].std())} for u in [1,2]]}
  for name,f in [('users',P),('movies',Q)]:
   f=f.astype(float);norm=np.linalg.norm(f,axis=1);row['norms'][name]={'frobenius':float(np.linalg.norm(f)),'meanRowAllIncludingPadding':float(norm.mean()),'meanRowWithoutPadding':float(norm[1:].mean()),'maxRow':float(norm.max()),'nonzeroEntries':int(np.count_nonzero(f))}
  for k in cohorts:
   reference=normalize(load(f'audit-mf-{k}.json')['perUser'],k);assert [x['ids'] for x in records[k]]==[x['ids'] for x in reference];assert [x['hits'] for x in records[k]]==[x['hits'] for x in reference]
  full={}
  for k in cohorts:
   hsh=hashlib.sha256()
   for u in users:
    ordered=[movies[i] for i in ranked(scores[ui[u]],k,u)];expected=sorted(set(movies)-excluded(k,u));assert ordered==expected
    hsh.update((str(u)+':'+','.join(map(str,ordered))+'\n').encode())
   full[k]=hsh.hexdigest()
  row['fullEligibleRankingSHA256All943Users']=full;row['fullEligibleRankingsAscendingIdForAll943Users']=True
  out['models'].append(row)
 for x,y in itertools.combinations(models,2):
  out['pairwise'].append({'first':x,'second':y,'splits':{k:{'completeOrderedTop10ListsIdentical':all(xx['ids']==yy['ids'] for xx,yy in zip(models[x][k],models[y][k])),'perUserHitsIdentical':all(xx['hits']==yy['hits'] for xx,yy in zip(models[x][k],models[y][k])),'count':len(models[x][k])} for k in cohorts}})
elif a.mode=='metrics':
 methods={m:normalize(load(f'audit-{m}-test.json')['perUser'],'test') for m in ['popularity','pagerank','ppr','mf']}
 extra=load('hw5-extra-comparisons.json')
 for m in extra['models']:methods[m['label']]=normalize(m['splits']['test']['perUser'],'test')
 deg={u:int(du[ui[u]]) for u in cohorts['test']};median=float(np.median(list(deg.values())));light={u for u,d in deg.items() if d<=median};heavy=set(cohorts['test'])-light
 out={'alpha':.5,'cohort':len(deg),'definitions':{'meanPopularity':'Mean positive-training degree over all recommendation slots (10 per user).','coverage':'Distinct recommended movie IDs /1611 training candidates; also /1682 full metadata catalogue.','overlap':'Mean count of common IDs per pair of Top10 lists; fraction = count/10.','groups':'Median positive training degree within shared test cohort; light <= median, heavy > median, no test performance used.'},'medianPositiveDegree':median,'atMedian':sum(d==median for d in deg.values()),'lightUsers':sorted(light),'heavyUsers':sorted(heavy),'methods':{},'pprOverlap':{}}
 for m,rr in methods.items():
  assert [x['userId'] for x in rr]==cohorts['test'];catalog=set(itertools.chain.from_iterable(x['ids'] for x in rr));out['methods'][m]={'recall':aggregate(rr)['recall'],'meanPopularity':float(np.mean([x['meanPopularity'] for x in rr])),'distinctMovies':len(catalog),'candidateCoverage':len(catalog)/M,'fullCatalogueCoverage':len(catalog)/len(meta),'light':aggregate([x for x in rr if x['userId'] in light]),'heavy':aggregate([x for x in rr if x['userId'] in heavy])}
  if m!='ppr':out['pprOverlap'][m]=float(np.mean([len(set(x['ids'])&set(y['ids'])) for x,y in zip(methods['ppr'],rr)]))
 panels=load('diagnostic-panels.json')['records'];out['oneFactor']={}
 for x,y in [(0,1),(0,2)]:
  left=[r['movieId'] for r in panels[x]['rows']];right=[r['movieId'] for r in panels[y]['rows']];common=sorted(set(left)&set(right));out['oneFactor'][panels[x]['setting']['label']+' vs '+panels[y]['setting']['label']]={'overlap':len(common),'commonIds':common,'leftIds':left,'rightIds':right}
elif a.mode=='alpha':
 assert a.alpha in [.5,.7,.85,.95];pp,it,res=propagate(a.alpha,[None]);scores=pp[U:,0];popularity=np.array([pop[m] for m in movies],float);rp=avg_ranks(popularity);rs=avg_ranks(scores);rr=[record(scores,'test',u) for u in cohorts['test']];baseline=[record(popularity,'test',u) for u in cohorts['test']]
 out={'alpha':a.alpha,'precision':'float64 NumPy','spearmanAllTrainingMovieNodes':float(np.corrcoef(rp,rs)[0,1]),'spearmanPositiveDegreeMovies':float(np.corrcoef(avg_ranks(popularity[popularity>0]),avg_ranks(scores[popularity>0]))[0,1]),'movieCount':M,'positiveMovieCount':int(sum(popularity>0)),'averageTestTop10OverlapCount':float(np.mean([len(set(x['ids'])&set(y['ids'])) for x,y in zip(rr,baseline)])),'cohort':len(rr),'iterations':int(it[0]),'residual':float(res[0]),'massError':float(abs(pp.sum()-1)),'definition':'Spearman = Pearson correlation of average ranks including ties. Uniform teleport and dangling redistribution; overlap uses identical test exclusions.'}
elif a.mode=='explore':
 assert a.alpha in [.1,.3];ids=cohorts['val'][a.start:a.end];assert len(ids)<=128;pp,it,res=propagate(a.alpha,ids);rr=[record(pp[U:,i],'val',u) for i,u in enumerate(ids)];out={'alpha':a.alpha,'split':'val','status':'Exploratory only; outside original grid. Primary alpha remains0.50. No test calculation.','start':a.start,'end':min(a.end,len(cohorts['val'])),'perUser':rr,'iterationsMin':int(it.min()),'iterationsMax':int(it.max()),'residualMax':float(res.max()),'massErrorMax':float(np.max(np.abs(pp.sum(0)-1)))}
elif a.mode=='convergence':
 assert a.evidence;records=[]
 for start in range(0,U,128):
  gpu=json.loads((a.evidence/f'propagation-0.95-{start}.json').read_text())['result'];comparison=json.loads((a.evidence/f'numpy-0.95-{start}.json').read_text());cmp={x['userId']:x for x in comparison['comparisons']}
  for row in gpu['rows']:
   u=row['userId'];v=np.asarray(row['p'],float);c=cmp[u];assert row['inValidation']==(u in cohorts['val']) and row['inTest']==(u in cohorts['test']);records.append({'userId':u,'positiveDegree':int(du[ui[u]]),'inValidation':row['inValidation'],'inTest':row['inTest'],'iterations':row['iterations'],'residual':row['residual'],'converged':row['converged'],'massError':float(abs(v.sum()-1)),'minProbability':float(v.min()),**{k:c[k] for k in ['numpyIterations','numpyResidual','numpyConverged','maxAbsDifference','l1Difference','gpuFloat64StationarityResidual','top10Agreement']}})
 assert sorted(x['userId'] for x in records)==users
 groups={'allGraph':set(users),'positiveDegree':positive_users,'evaluationUnion':set(cohorts['val'])|set(cohorts['test']),'validation':set(cohorts['val']),'test':set(cohorts['test']),'outsideEvaluation':set(users)-(set(cohorts['val'])|set(cohorts['test']))}
 out={'alpha':.95,'tolerance':1e-6,'cap':500,'batchSize':128,'provenance':'All eight original GPU batches and independent float64 batches re-audited. Every graph raw user ID1..943 was already propagated; this resolves the misleading907 summary.','groups':{},'perUser':records}
 for name,ids in groups.items():
  rr=[r for r in records if r['userId'] in ids];out['groups'][name]={'users':len(rr),'converged':sum(x['converged'] for x in rr),'capped':sum(not x['converged'] for x in rr),'nonConvergedUsers':sorted(x['userId'] for x in rr if not x['converged']),'residualMin':min(x['residual'] for x in rr),'residualMax':max(x['residual'] for x in rr),'massErrorMax':max(x['massError'] for x in rr),'minProbability':min(x['minProbability'] for x in rr),'numpyConverged':sum(x['numpyConverged'] for x in rr),'numpyResidualMax':max(x['numpyResidual'] for x in rr),'maxAbsDifference':max(x['maxAbsDifference'] for x in rr),'l1DifferenceMax':max(x['l1Difference'] for x in rr),'gpuFloat64StationarityResidualMax':max(x['gpuFloat64StationarityResidual'] for x in rr),'allEvaluatedTop10ExactOrder':all(v['exactOrder'] for x in rr for v in x['top10Agreement'].values())}
else:raise AssertionError(a.mode)
a.output.parent.mkdir(parents=True,exist_ok=True);a.output.write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({'mode':a.mode,'output':a.output.name,'elapsedSeconds':time.perf_counter()-t}));signal.alarm(0)
