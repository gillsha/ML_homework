"""Independent raw split/graph/ranking validation of the packaged evidence. No training."""
import argparse,json,signal,time,hashlib
from pathlib import Path
import numpy as np
from core import *
p=argparse.ArgumentParser();p.add_argument('--root');p.add_argument('--output',type=Path,default=Path('results/regenerated/portable-check.json'));a=p.parse_args()
signal.signal(signal.SIGALRM,lambda *_:(_ for _ in ()).throw(TimeoutError('165 second limit')));signal.alarm(165);started=time.perf_counter()
def load(n):return json.loads((ROOT/'results'/n).read_text())
assert U==943 and M==1611 and N==2554 and len(edges)==45602
assert {k:len(v) for k,v in splits.items()}=={'train':79619,'val':9596,'test':10785}
assert [len(cohorts[k]) for k in ['val','test']]==[846,861]
assert [users[i] for i in np.where(du==0)[0]]==[685] and int((dm==0).sum())==253
assert np.allclose(forward.sum(1)[du>0],1) and np.allclose(backward.sum(1)[dm>0],1)
checks=[];metrics=load('additional-analysis.json')['popularityCoverage']
for split in ['val','test']:
 audit=load(f'recommendation-audit-{split}.json')['result']['methods']
 for method,d in audit.items():
  lists=d['lists'];assert sorted(r['userId'] for r in lists)==cohorts[split]
  recalls=[];pops=[];covered=set()
  for r in lists:
   u=r['userId'];ids=r['ids'];assert len(ids)==10 and len(set(ids))==10
   assert set(ids)<=set(movies) and not (set(ids)&excluded(split,u))
   recalls.append(len(set(ids)&relevant(split,u))/len(relevant(split,u)));pops.append(np.mean([pop[m] for m in ids]));covered.update(ids)
  if split=='test':
   ref=next(r for r in metrics if r['method']==('hw6-reference-mf' if method=='mf' else method))
   assert abs(np.mean(recalls)-ref['recall'])<1e-12 and abs(np.mean(pops)-ref['meanListPopularity'])<1e-10
   assert len(covered)==ref['distinctRecommended']
  checks.append({'split':split,'method':method,'users':len(lists),'recall':float(np.mean(recalls)),'distinct':len(covered)})
modelchecks=[]
for name in ['hw6-supplied','hw5-default','hw5-reg0005']:
 folder=ROOT/'results/models'/name;m=json.loads((folder/'model.json').read_text());u=np.fromfile(folder/'user-factors.f32',dtype='<f4').reshape(m['userShape']);v=np.fromfile(folder/'item-factors.f32',dtype='<f4').reshape(m['itemShape'])
 # Match the browser's float32 scoring; float64 dot products change tie behavior.
 scores=(u[np.array(users)]@v[np.array(movies)].T)+np.float32(m['globalMean']);assert np.all(np.ptp(scores,axis=1)==0)
 for split in ['val','test']:
  saved=load(f'recommendation-audit-{split}.json')['result']['methods']['mf']['lists']
  for row in saved:assert record(scores[ui[row['userId']]],split,row['userId'])['ids']==row['ids']
 modelchecks.append({'model':name,'all943ConstantFloat32Rows':True,'validationAndTestTop10Exact':True})
# Independent PPR example and supplied first-update arithmetic.
ppr,it,res=propagate(.5,[1,2]);saved=load('recommendation-panel-analysis.json')['panels']
for col,user in enumerate([1,2]):
 expected=next(x for x in saved if x['label']=='primary' and x['userId']==user and x['method']=='ppr')
 got=record(ppr[U:,col],'test',user);assert got['ids']==[r['movieId'] for r in expected['rows']] and got['hit']==expected['hits'] and got['relevant']==expected['relevant']
q=np.array([[0,.5,.5,0],[0,0,1,0],[1,0,0,0],[0,0,1,0]],dtype=float);first=.85*q.T@np.full(4,.25)+.15*np.full(4,.25);assert np.allclose(first,[.25,.14375,.56875,.0375],rtol=0,atol=1e-15)
result={'checks':checks,'models':modelchecks,'users':U,'movies':M,'nodes':N,'edges':len(edges),'splitSizes':{k:len(v) for k,v in splits.items()},'cohorts':{k:len(v) for k,v in cohorts.items()},'pprUsers1and2PrimaryListsAndHits':True,'referenceFirstUpdate':first.tolist(),'numpy':np.__version__,'elapsedSeconds':time.perf_counter()-started,'trainingPerformed':False}
a.output.parent.mkdir(parents=True,exist_ok=True);a.output.write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({'passed':True,'auditedLists':sum(r['users'] for r in checks),'models':len(modelchecks),'elapsedSeconds':result['elapsedSeconds']}));signal.alarm(0)
