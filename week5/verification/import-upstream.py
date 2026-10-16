"""One-time, non-overwriting import of the pinned instructor starter.

Retained for provenance. Refuses to overwrite an existing active implementation.
Run from any directory with Python 3; no third-party dependencies.
"""
from pathlib import Path
import hashlib
import json
import subprocess
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
REVISION = '00c032fb58ca5f7bec05218b5bebee01e462e532'
OLD_COMMIT = '045cea54457ebf1c6ea8ffc2172bf1bcd8f5d20f'
EXPECTED = {
    'readme.md': '85e54120c27265b0b15d416d4897a78a9f72c6e313cf117bf4f2fa1310452c12',
    'index.html': '40ddedd0ab50ab3f682b2aca025d18744ecb8701a1604280549da91eb5a4534e',
    'style.css': '6ce27df0f3cb462d66ebebea5c1c0ee8edf4e3444265608fb2b6caeb46ab0fdc',
    'data.js': 'eb33f8441f652938cce07e7fc7fe1e36f38acd0b296234074ac90d367e2678cd',
    'script.js': 'ebf3cc9edeab75a0952e477f78287ae03f83cb8fba1ef5334b3949a68166c4b1',
    'u.data': '06416e597f82b7342361e41163890c81036900f418ad91315590814211dca490',
    'u.item': '553841ebc7de3a0fd0d6b62a204ea30c1e651aacfb2814c7a6584ac52f2c5701',
}

if __name__ == '__main__':
    assert all(not (ROOT/name).exists() for name in EXPECTED), 'Active files already exist; refusing overwrite'
    legacy = {}
    for name in ['app.js', 'graph.js', 'pagerank.js', 'index.html', 'readme.md', 'data/karate.csv']:
        original = subprocess.check_output(['git', 'show', f'{OLD_COMMIT}:week5/{name}'], cwd=ROOT)
        archived = (ROOT/'legacy-pagerank'/name).read_bytes()
        assert original == archived, f'Archive mismatch: {name}'
        legacy[name] = hashlib.sha256(archived).hexdigest()
    contents = {}
    for name, digest in EXPECTED.items():
        url = f'https://raw.githubusercontent.com/dryjins/RecSys-LLMs/{REVISION}/week5/{name}'
        raw = urllib.request.urlopen(url).read()
        assert hashlib.sha256(raw).hexdigest() == digest, name
        contents[name] = raw
    for name, raw in contents.items():
        (ROOT/name).write_bytes(raw)
    evidence = ROOT/'evidence'
    evidence.mkdir(exist_ok=True)
    manifest = {'upstreamRevision':REVISION, 'upstreamSHA256':EXPECTED,
                'legacySourceCommit':OLD_COMMIT, 'legacySHA256':legacy,
                'archiveVerifiedByteIdentical':True,
                'agentDisclosure':{'tool':'OpenCode','cliVersion':'1.19.0','model':'openai/gpt-6-astra'},
                'verificationAuthor':'AI agent; not student personal verification'}
    (evidence/'provenance.json').write_text(json.dumps(manifest, indent=2)+'\n')
    print(json.dumps(manifest, indent=2))
