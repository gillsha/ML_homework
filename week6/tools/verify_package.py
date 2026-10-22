"""Verify publication hashes and reproduce deterministic CPU checks in bounded jobs."""
from pathlib import Path
import argparse,hashlib,json,subprocess,sys,tempfile,os,time
p=argparse.ArgumentParser();p.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[1]);p.add_argument('--output',type=Path,required=True);a=p.parse_args();root=a.root.resolve();t=time.perf_counter()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
prov=json.loads((root/'results/import-provenance.json').read_text())
for file,digest in prov['testedAppHashes'].items():assert sha(root/file)==digest,file+' app hash changed'
assert sha(root/'assignment.md')==prov['assignmentSHA256'],'Assignment changed'
for name in ['u.data','u.item']:assert sha(root/name)==prov['testedAppHashes'][name]
manifest=root/'results/publication-manifest.json'
if manifest.exists():
 for file,rec in json.loads(manifest.read_text())['files'].items():assert sha(root/file)==rec['sha256'],file+' package hash changed'
def compare(x,y,path='root'):
 if isinstance(x,(int,float)) and not isinstance(x,bool) and isinstance(y,(int,float)) and not isinstance(y,bool):assert abs(x-y)<=1e-12*max(1,abs(x),abs(y)),path
 elif isinstance(x,dict):
  assert set(x)==set(y),path
  for k in x:compare(x[k],y[k],path+'.'+k)
 elif isinstance(x,list):
  assert len(x)==len(y),path
  for i,(xx,yy) in enumerate(zip(x,y)):compare(xx,yy,path+f'[{i}]')
 else:assert x==y,path
jobs=[('cohorts','cohort-breakdown.json',[]),('mf','mf-equality.json',[]),('metrics','additional-metrics.json',[])]+[('alpha',f'global-alpha-{alpha}.json',['--alpha',str(alpha)]) for alpha in [.5,.7,.85,.95]]
runs=[];env=os.environ.copy();env.update(OPENBLAS_NUM_THREADS='1',VECLIB_MAXIMUM_THREADS='1',OMP_NUM_THREADS='1',PYTHONDONTWRITEBYTECODE='1')
with tempfile.TemporaryDirectory(prefix='hw6-verify-') as tmp:
 for mode,file,extra in jobs:
  dest=Path(tmp)/file;start=time.perf_counter();cmd=[sys.executable,str(root/'tools/additional_checks.py'),mode,'--root',str(root),'--results',str(root/'results'),'--output',str(dest),*extra];subprocess.run(cmd,check=True,timeout=170,env=env,capture_output=True,text=True);compare(json.loads(dest.read_text()),json.loads((root/'results'/file).read_text()));runs.append({'mode':mode,'file':file,'matches':True,'seconds':time.perf_counter()-start})
 # All943 coverage and summary are checked without republishing full vectors.
 c=json.loads((root/'results/all943-convergence.json').read_text());rows=c['perUser'];assert sorted(r['userId'] for r in rows)==list(range(1,944));assert sum(r['converged'] for r in rows)==914;assert sum(r['numpyConverged'] for r in rows)==943
out={'appHashesMatchTestedVersion':True,'assignmentByteIdentical':True,'dataHashesMatch':True,'all943EvidenceComplete':True,'deterministicChecks':runs,'elapsedSeconds':time.perf_counter()-t,'note':'All numerical comparisons allow1e-12 relative/absolute float64 rounding. GPU checking is separate; no MF training.'};a.output.parent.mkdir(parents=True,exist_ok=True);a.output.write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
