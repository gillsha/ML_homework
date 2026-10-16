"""Capture native OpenCode stdout verbatim; never transform transcript JSON."""
from pathlib import Path
import json
import subprocess
import hashlib
import re

ROOT=Path(__file__).resolve().parent
SESSION='ses_ebb479496ffeyOcoiDSoFy24l3'
target=ROOT/'a05_session.json'
with target.open('wb') as out:
    result=subprocess.run(['opencode','export',SESSION],cwd='/Users/lizagill',stdout=out,stderr=subprocess.PIPE)
if result.returncode:
    raise SystemExit(result.stderr.decode(errors='replace'))
raw=target.read_bytes(); data=json.loads(raw)
assert data['info']['id']==SESSION
text=raw.decode()
for marker in ['From Ratings to Recommendations','reg-0005-20261016-01','a05_report.html','build-pdf.cjs']:
    assert marker in text,marker
# Report only matched credential categories, never values. The export is unmodified.
patterns={
 'private_key':r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',
 'github_token':r'\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b',
 'openai_style_key':r'\bsk-(?:proj-)?[A-Za-z0-9_-]{30,}\b',
 'aws_access_key':r'\bAKIA[0-9A-Z]{16}\b',
 'bearer_credential':r'(?i)authorization[\s\\"\x27:]+bearer\s+[A-Za-z0-9._-]{20,}'
}
findings=[name for name,pattern in patterns.items() if re.search(pattern,text)]
summary={'sessionId':SESSION,'nativeCommand':['opencode','export',SESSION],
 'validJSON':True,'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),
 'containsSubstantiveWorkAndReportGeneration':True,'credentialPatternFindings':findings,
 'transcriptModified':False,'messages':len(data.get('messages',[]))}
(ROOT/'session-export-check.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps(summary,indent=2))
print(str(target))
