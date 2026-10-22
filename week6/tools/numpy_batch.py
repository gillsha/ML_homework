"""Rebuild raw-data float64 graph and compare one saved GPU batch (<=128 users)."""
import argparse,json,signal,time
from pathlib import Path
import numpy as np
from core import *
p=argparse.ArgumentParser();p.add_argument('--root');p.add_argument('--gpu',type=Path,required=True);p.add_argument('--output',type=Path,required=True);a=p.parse_args();signal.signal(signal.SIGALRM,lambda *_:(_ for _ in ()).throw(TimeoutError('165 second job limit')));signal.alarm(165);t=time.perf_counter()
gpu=json.loads(a.gpu.read_text());gpu=gpu.get('result',gpu);rows=gpu['rows'];ids=[r['userId'] for r in rows];assert len(ids)<=128 and len(set(ids))==len(ids);alpha=gpu['alpha'];pp,it,res=propagate(alpha,ids);comparisons=[];peruser={k:[] for k in cohorts}
for col,(u,row) in enumerate(zip(ids,rows)):
 gp=np.asarray(row['p'],float);v=np.zeros(N);v[ui[u]]=1;step=alpha*(np.r_[backward.T@gp[U:],forward.T@gp[:U]]+v*gp[dangling].sum())+(1-alpha)*v;diff=np.abs(pp[:,col]-gp)
 c={'userId':u,'gpuIterations':row['iterations'],'gpuResidual':row['residual'],'gpuConverged':row['converged'],'numpyIterations':int(it[col]),'numpyResidual':float(res[col]),'numpyConverged':bool(res[col]<1e-6 and it[col]<500),'maxAbsDifference':float(diff.max()),'l1Difference':float(diff.sum()),'gpuFloat64StationarityResidual':float(np.abs(step-gp).sum()),'top10Agreement':{}}
 for k in cohorts:
  if u not in cohorts[k]:continue
  rr=record(pp[U:,col],k,u);gg=record(gp[U:],k,u);peruser[k].append(rr);c['top10Agreement'][k]={'exactOrder':rr['ids']==gg['ids'],'sameSet':set(rr['ids'])==set(gg['ids']),'numpyIds':rr['ids'],'gpuIds':gg['ids'],'numpyHit':rr['hit'],'gpuHit':gg['hit']}
 comparisons.append(c)
out={'alpha':alpha,'start':gpu['start'],'end':gpu['end'],'source':'Independent raw-file split and float64 graph. L1 tolerance1e-6, cap500, per-column freeze.','comparisons':comparisons,'perUser':peruser,'numpyVersion':np.__version__};a.output.parent.mkdir(parents=True,exist_ok=True);a.output.write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({'output':a.output.name,'users':len(ids),'elapsedSeconds':time.perf_counter()-t}));signal.alarm(0)
