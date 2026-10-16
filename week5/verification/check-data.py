"""Independent stdlib-only MovieLens audit; never imports application code."""
from pathlib import Path
from collections import defaultdict, Counter
import hashlib
import json
import math

ROOT = Path(__file__).resolve().parents[1]
rows = [tuple(map(int, line.split())) for line in (ROOT/'u.data').read_text().splitlines()]
raw_items = (ROOT/'u.item').read_bytes()
items = [line.split('|') for line in raw_items.decode('latin-1').splitlines()]
by_user = defaultdict(list)
for r in rows:
    by_user[r[0]].append(r)
splits = {'train': [], 'validation': [], 'test': []}
skipped = []
ties = {'trainValidation': 0, 'validationTest': 0}
for u, history in by_user.items():
    history.sort(key=lambda r: (r[3], r[1]))
    n = len(history)
    if n < 5:
        skipped.append(u)
        continue
    a, b = math.floor(.8*n), math.floor(.1*n)
    splits['train'] += history[:a]
    splits['validation'] += history[a:a+b]
    splits['test'] += history[a+b:]
    ties['trainValidation'] += history[a-1][3] == history[a][3]
    ties['validationTest'] += history[a+b-1][3] == history[a+b][3]
train_users = {r[0] for r in splits['train']}
train_items = {r[1] for r in splits['train']}
metadata = {int(r[0]) for r in items}
mean = sum(r[2] for r in splits['train']) / len(splits['train'])
stats = {}
for name, split in splits.items():
    eligible = [r for r in split if r[0] in train_users and r[1] in train_items]
    stats[name] = {
        'rawRows':len(split), 'eligibleRows':len(eligible), 'excludedRows':len(split)-len(eligible),
        'missingUserIds':sorted({r[0] for r in split}-train_users),
        'missingItemIds':sorted({r[1] for r in split}-train_items),
        'missingUserRows':sum(r[0] not in train_users for r in split),
        'missingItemRows':sum(r[1] not in train_items for r in split),
        'baselineRMSE':math.sqrt(math.fsum((mean-r[2])**2 for r in eligible)/len(eligible)),
    }
seen = defaultdict(set)
for r in splits['train']+splits['validation']:
    seen[r[0]].add(r[1])
relevant = defaultdict(set)
test_users = {r[0] for r in splits['test']}
for u, i, value, _ in splits['test']:
    if value >= 4 and u in train_users and i in train_items & metadata and i not in seen[u]:
        relevant[u].add(i)
pairs = Counter((r[0], r[1]) for r in rows)
report = {
    'verificationAuthor':'AI agent; independent Python calculations',
    'ratings':len(rows), 'users':len(by_user), 'ratedMovies':len({r[1] for r in rows}),
    'metadataMovies':len(items), 'duplicatePairs':sum(v>1 for v in pairs.values()),
    'missingMetadataRows':sum(r[1] not in metadata for r in rows),
    'realMatrixCells':len(by_user)*len(metadata), 'sparsity':1-len(pairs)/(len(by_user)*len(metadata)),
    'trainingUsers':len(train_users), 'trainingMovies':len(train_items),
    'trainingRatingSum':sum(r[2] for r in splits['train']), 'trainingMean':mean,
    'splits':stats, 'splitSkippedUsers':skipped, 'boundaryTimestampTies':ties,
    'retrievalEligibility':{'relevantTestRows':sum(r[2]>=4 for r in splits['test']),
        'eligibleRelevantItems':sum(map(len,relevant.values())), 'evaluableUsers':len(relevant),
        'usersWithoutRelevant':sorted(test_users-set(relevant)),
        'unseenRelevantIds':sorted({r[1] for r in splits['test'] if r[2]>=4}-train_items)},
    'genreSchema':{'fieldCount':dict(Counter(map(len,items))), 'unknownFlagIndex':5,
        'namedGenreIndices':[6,23], 'namedGenres':["Action","Adventure","Animation","Children's","Comedy","Crime","Documentary","Drama","Fantasy","Film-Noir","Horror","Musical","Mystery","Romance","Sci-Fi","Thriller","War","Western"]},
    'encoding':{'decodedAs':'ISO-8859-1', 'bytesIn80to9f':sum(0x80<=b<=0x9f for b in raw_items),
        'accentedTitles':[{'movieId':int(r[0]),'title':r[1]} for r in items if any(ord(c)>127 for c in r[1])]},
    'sha256':{n:hashlib.sha256((ROOT/n).read_bytes()).hexdigest() for n in ['u.data','u.item']},
}
assert sum(s['rawRows'] for s in stats.values()) == len(rows) == 100000
assert all(s['eligibleRows']+s['excludedRows']==s['rawRows'] for s in stats.values())
assert not skipped and report['encoding']['bytesIn80to9f'] == 0
(ROOT/'evidence'/'data-statistics.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({'counts':{k:report[k] for k in ['ratings','users','ratedMovies','sparsity','trainingMean']},
                  'splits':stats},indent=2))
