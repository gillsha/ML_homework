"""Independent float64 raw MovieLens split, graph and ranking. No application imports."""
from pathlib import Path
from collections import defaultdict, Counter
import json,sys,hashlib
import numpy as np
ROOT=Path(__file__).resolve().parents[1]
if '--root' in sys.argv: ROOT=Path(sys.argv[sys.argv.index('--root')+1]).resolve()
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
rows=[tuple(map(int,s.split())) for s in (ROOT/'u.data').read_text().splitlines()]
h=defaultdict(list)
for row in rows:h[row[0]].append(row)
splits={k:[] for k in ['train','val','test']}
for u,rr in sorted(h.items()):
    rr=sorted(rr,key=lambda r:(r[3],r[1]));n=len(rr)
    if n<5:continue
    a,b=8*n//10,n//10
    for k,part in [('train',rr[:a]),('val',rr[a:a+b]),('test',rr[a+b:])]:splits[k].extend(part)
users=sorted({r[0] for r in splits['train']});movies=sorted({r[1] for r in splits['train']});ui={u:i for i,u in enumerate(users)};mi={m:i for i,m in enumerate(movies)};U,M=len(users),len(movies);N=U+M
edges={(u,m) for u,m,r,t in splits['train'] if r>=4};positive_users={u for u,m in edges};pop=Counter(m for u,m in edges)
by={k:defaultdict(list) for k in splits};seen={k:defaultdict(set) for k in splits}
for k,rr in splits.items():
    for row in rr:by[k][row[0]].append(row);seen[k][row[0]].add(row[1])
excluded=lambda k,u:seen['train'][u]|(seen['val'][u] if k=='test' else set())
relevant=lambda k,u:{m for _,m,r,_ in by[k][u] if r>=4 and m in mi and m not in excluded(k,u)}
cohorts={k:[u for u in users if u in positive_users and relevant(k,u)] for k in ['val','test']}
genres=['unknown','Action','Adventure','Animation',"Children's",'Comedy','Crime','Documentary','Drama','Fantasy','Film-Noir','Horror','Musical','Mystery','Romance','Sci-Fi','Thriller','War','Western']
meta={}
for line in (ROOT/'u.item').read_text(encoding='latin1').splitlines():
    f=line.split('|');meta[int(f[0])]={'title':f[1],'genres':[g for g,flag in zip(genres,f[5:]) if flag=='1']}
def ranked(scores,k,u):
    eligible=np.array([i for i,m in enumerate(movies) if m not in excluded(k,u)],dtype=int)
    return eligible[np.lexsort((np.array(movies)[eligible],-scores[eligible]))]
def record(scores,k,u):
    order=ranked(scores,k,u);ids=[movies[i] for i in order[:10]];rel=relevant(k,u);hits=sorted(rel&set(ids))
    return {'userId':u,'ids':ids,'relevant':len(rel),'hit':len(hits),'hits':hits,'recall':len(hits)/len(rel) if rel else None,'meanPopularity':float(np.mean([pop[m] for m in ids])) if ids else None}
def details(scores,k,u):
    order=ranked(scores,k,u);ranks={movies[i]:rank for rank,i in enumerate(order,1)};rel=relevant(k,u)
    return {'userId':u,'eligibleRelevant':[{'movieId':m,**meta[m],'rank':ranks[m],'score':float(scores[mi[m]]),'hit':ranks[m]<=10} for m in sorted(rel)],'top10':[{'rank':j,'movieId':movies[i],**meta[movies[i]],'score':float(scores[i]),'trainingPopularity':pop[movies[i]],'hit':movies[i] in rel} for j,i in enumerate(order[:10],1)],'calculation':record(scores,k,u)}

mat=np.zeros((U,M),dtype=np.float64)
for u,m in edges:mat[ui[u],mi[m]]=1
du=mat.sum(1);dm=mat.sum(0);degree=np.r_[du,dm];dangling=degree==0
forward=np.divide(mat,du[:,None],out=np.zeros_like(mat),where=du[:,None]!=0)
backward=np.divide(mat.T,dm[:,None],out=np.zeros((M,U)),where=dm[:,None]!=0)
def propagate(alpha,seeds):
    v=np.zeros((N,len(seeds)))
    for col,u in enumerate(seeds):
        if u is None:v[:,col]=1/N
        else:v[ui[u],col]=1
    p=v.copy();active=np.ones(len(seeds),dtype=bool);iters=np.zeros(len(seeds),dtype=int);residual=np.full(len(seeds),np.inf)
    def step(x):return alpha*(np.concatenate((backward.T@x[U:],forward.T@x[:U]),axis=0)+v*x[dangling].sum(0))+(1-alpha)*v
    for iteration in range(1,501):
        nxt=step(p);nxt[:,~active]=p[:,~active];delta=np.abs(nxt-p).sum(0)
        iters[active]=iteration;residual[active]=delta[active];active &= delta>=1e-6;p=nxt
        if not active.any():break
    return p,iters,residual
