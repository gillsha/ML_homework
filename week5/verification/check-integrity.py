"""Verify preserved files and that saved browser results match current sources."""
from pathlib import Path
import hashlib
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]
provenance = json.loads((ROOT/'evidence/provenance.json').read_text())
results = json.loads((ROOT/'evidence/correctness-results.json').read_text())
checks = []

def verify(name, expected):
    digest = hashlib.sha256((ROOT/name).read_bytes()).hexdigest()
    assert digest == expected, f'Hash mismatch: {name}'
    checks.append({'path':name, 'sha256':digest, 'passed':True})

for name, digest in provenance['legacySHA256'].items():
    verify('legacy-pagerank/'+name, digest)
for name in ['readme.md','style.css','u.data','u.item']:
    verify(name, provenance['upstreamSHA256'][name])
for name, digest in results['sourceSHA256'].items():
    verify(name, digest)
subprocess.run(['git','diff','--check'],cwd=ROOT.parent,check=True)
staged = subprocess.check_output(['git','diff','--cached','--name-only'],cwd=ROOT.parent,text=True)
assert not staged, 'Unexpected staged changes'
report = {'checks':checks,'passed':len(checks),'stagedFiles':[],
          'verificationAuthor':'AI agent', 'scope':'Archive/upstream preservation and executed-source hashes'}
(ROOT/'evidence/integrity-results.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
