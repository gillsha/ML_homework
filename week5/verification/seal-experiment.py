"""Seal a completed named run, or audit its manifest without changing it.

python3 week5/verification/seal-experiment.py RUN_NAME
python3 week5/verification/seal-experiment.py RUN_NAME --check
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import sys

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'experiments'/sys.argv[1]
manifest_path=OUT/'run-manifest.json'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
if '--check' in sys.argv:
    manifest=json.loads(manifest_path.read_text())
    assert sha(manifest_path)==(OUT/'SEAL.sha256').read_text().split()[0]
    for name,details in manifest['files'].items():
        assert sha(OUT/name)==details['sha256'],name
    print(json.dumps({'experiment':OUT.name,'manifestVerified':True,'filesVerified':len(manifest['files'])},indent=2))
else:
    assert not manifest_path.exists(),'Already sealed; refusing overwrite'
    assert not (OUT/'failure.json').exists(),'Failed attempt cannot be sealed as successful'
    assert json.loads((OUT/'status.json').read_text())['type']=='browser-run-complete'
    verified=json.loads((OUT/'independent-verification.json').read_text())
    assert verified['failed']==0
    assert (OUT/'RUN_NOTES.md').is_file()
    files={str(p.relative_to(OUT)):{'sha256':sha(p),'bytes':p.stat().st_size} for p in sorted(OUT.rglob('*')) if p.is_file()}
    manifest={'experiment':OUT.name,'sealedAt':datetime.now(timezone.utc).isoformat(),
              'policy':'Named write-once experiment; runner and derived-file writers refuse overwrite; files and directories made read-only',
              'verificationAuthor':'AI agent; student personal verification pending','files':files}
    with manifest_path.open('x') as f:json.dump(manifest,f,indent=2);f.write('\n')
    with (OUT/'SEAL.sha256').open('x') as f:f.write(sha(manifest_path)+'  run-manifest.json\n')
    for p in OUT.rglob('*'):
        if p.is_file():p.chmod(0o444)
    for p in sorted(OUT.rglob('*'),reverse=True):
        if p.is_dir():p.chmod(0o555)
    OUT.chmod(0o555)
    print(json.dumps({'experiment':OUT.name,'sealed':True,'files':len(files),'manifestSHA256':sha(manifest_path)},indent=2))
