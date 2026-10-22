"""Obtain original MovieLens files directly from GroupLens, never overwrite differences."""
from pathlib import Path
import hashlib,urllib.request,signal,json
ROOT=Path(__file__).resolve().parents[1]
EXPECTED={'u.data':'06416e597f82b7342361e41163890c81036900f418ad91315590814211dca490','u.item':'553841ebc7de3a0fd0d6b62a204ea30c1e651aacfb2814c7a6584ac52f2c5701'}
signal.signal(signal.SIGALRM,lambda *_:(_ for _ in ()).throw(TimeoutError('165 second job limit')));signal.alarm(165)
for name,digest in EXPECTED.items():
 p=ROOT/name
 if p.exists():
  assert hashlib.sha256(p.read_bytes()).hexdigest()==digest,'Existing '+name+' differs; preserved without overwrite'
  print(name+': existing checksum verified');continue
 url='https://files.grouplens.org/datasets/movielens/ml-100k/'+name
 with urllib.request.urlopen(url,timeout=45) as r:data=r.read()
 assert hashlib.sha256(data).hexdigest()==digest,'Download checksum mismatch'
 with p.open('xb') as f:f.write(data)
 print(name+': downloaded and checksum verified')
signal.alarm(0)
