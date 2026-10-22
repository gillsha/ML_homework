# HW6 numerical claim trace

Paths are relative to project root `repository root`. JSON fields use JSON Pointer syntax; list indices are zero-based. Raw values are preserved below; display rounding is specified. Tables and per-item fields are generated from these saved records, without rerunning experiments.

## Reading map

- Body pages1–2: dataset/split/cohort fields; primary popularityCoverage and activityGroups; validationSweep; method source locations.
- Body page3 and supplement: every row from recommendation-panel-analysis.json, with original title/genre/score/popularity/hit fields.
- Body page4: graph-verification-summary.json convergence, fixture, memory, singleVsBatch; current recommendation-checks result supersedes the earlier graph-stage pending check.
- Body page5: subgroup gains, diagnostics, exclusionEffect, MF factor/RMSE fields, exploratory validation files. Proposed online settings are labelled proposals, not empirical claims.
- References: references-verified.json and reference-http-summary.json.

## Values and sources

| Claim / field | Raw or displayed value | Evidence file | Field / line | Derivation / rounding |
|---|---|---|---|---|
| User 1, popularity, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 1: movieId | 100 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 1: title | Fargo (1996) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 1: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 1: score | 377 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 1: popularity | 377 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 1: hit | True | week6/results/recommendation-panel-analysis.json | /panels/0/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: movieId | 258 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: title | Contact (1997) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: score | 307 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: popularity | 307 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 2: hit | True | week6/results/recommendation-panel-analysis.json | /panels/0/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: movieId | 286 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: title | English Patient, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: score | 279 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: popularity | 279 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: movieId | 300 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: title | Air Force One (1997) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: genres | ['Action', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: score | 235 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: popularity | 235 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: movieId | 288 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: title | Scream (1996) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: genres | ['Horror', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: score | 226 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: popularity | 226 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: movieId | 318 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: title | Schindler's List (1993) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: genres | ['Drama', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: score | 224 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: popularity | 224 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: movieId | 313 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: title | Titanic (1997) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: genres | ['Action', 'Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: score | 219 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: popularity | 219 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: movieId | 302 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: title | L.A. Confidential (1997) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: genres | ['Crime', 'Film-Noir', 'Mystery', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: score | 202 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: popularity | 202 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: movieId | 357 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: title | One Flew Over the Cuckoo's Nest (1975) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: score | 202 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: popularity | 202 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: movieId | 483 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: title | Casablanca (1942) | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: score | 197 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: popularity | 197 | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, popularity, primary, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/0/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1 popularity primary meanPopularity | 246.8 | week6/results/recommendation-panel-analysis.json | /panels/0/meanPopularity | Direct evidence; rounded only for presentation. |
| User 1 popularity primary hits | 2 | week6/results/recommendation-panel-analysis.json | /panels/0/hits | Direct evidence; rounded only for presentation. |
| User 1 popularity primary relevant | 19 | week6/results/recommendation-panel-analysis.json | /panels/0/relevant | Direct evidence; rounded only for presentation. |
| User 1, pagerank, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 1: movieId | 258 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 1: title | Contact (1997) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 1: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 1: score | 0.0023751864209771156 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 1: popularity | 307 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 1: hit | True | week6/results/recommendation-panel-analysis.json | /panels/1/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: movieId | 286 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: title | English Patient, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: score | 0.002291253302246332 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: popularity | 279 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 2: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: movieId | 100 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: title | Fargo (1996) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: score | 0.002271695528179407 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: popularity | 377 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 3: hit | True | week6/results/recommendation-panel-analysis.json | /panels/1/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: movieId | 313 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: title | Titanic (1997) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: genres | ['Action', 'Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: score | 0.0020634259562939405 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: popularity | 219 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: movieId | 300 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: title | Air Force One (1997) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: genres | ['Action', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: score | 0.0020034192129969597 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: popularity | 235 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: movieId | 288 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: title | Scream (1996) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: genres | ['Horror', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: score | 0.0018683733651414514 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: popularity | 226 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: movieId | 302 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: title | L.A. Confidential (1997) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: genres | ['Crime', 'Film-Noir', 'Mystery', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: score | 0.001798133598640561 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: popularity | 202 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: movieId | 294 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: title | Liar Liar (1997) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: genres | ['Comedy'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: score | 0.0014883464900776744 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: popularity | 182 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: movieId | 275 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: title | Sense and Sensibility (1995) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: genres | ['Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: score | 0.0012158651370555162 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: popularity | 178 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/1/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: movieId | 222 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: title | Star Trek: First Contact (1996) | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: genres | ['Action', 'Adventure', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: score | 0.0011928167659789324 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: popularity | 189 | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, pagerank, primary, rank 10: hit | True | week6/results/recommendation-panel-analysis.json | /panels/1/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1 pagerank primary meanPopularity | 239.4 | week6/results/recommendation-panel-analysis.json | /panels/1/meanPopularity | Direct evidence; rounded only for presentation. |
| User 1 pagerank primary hits | 3 | week6/results/recommendation-panel-analysis.json | /panels/1/hits | Direct evidence; rounded only for presentation. |
| User 1 pagerank primary relevant | 19 | week6/results/recommendation-panel-analysis.json | /panels/1/relevant | Direct evidence; rounded only for presentation. |
| User 1, ppr, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 1: movieId | 100 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 1: title | Fargo (1996) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 1: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 1: score | 0.0006855191895738244 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 1: popularity | 377 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 1: hit | True | week6/results/recommendation-panel-analysis.json | /panels/2/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: movieId | 258 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: title | Contact (1997) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: score | 0.0004398658056743443 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: popularity | 307 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 2: hit | True | week6/results/recommendation-panel-analysis.json | /panels/2/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: movieId | 286 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: title | English Patient, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: score | 0.00043101841583848 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: popularity | 279 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: movieId | 318 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: title | Schindler's List (1993) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: genres | ['Drama', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: score | 0.0004038166953250766 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: popularity | 224 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: movieId | 357 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: title | One Flew Over the Cuckoo's Nest (1975) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: score | 0.00037716623046435416 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: popularity | 202 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: movieId | 483 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: title | Casablanca (1942) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: score | 0.00035968932206742465 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: popularity | 197 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: movieId | 222 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: title | Star Trek: First Contact (1996) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: genres | ['Action', 'Adventure', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: score | 0.00033278539194725454 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: popularity | 189 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 7: hit | True | week6/results/recommendation-panel-analysis.json | /panels/2/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: movieId | 475 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: title | Trainspotting (1996) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: score | 0.00032809015829116106 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: popularity | 164 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: movieId | 275 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: title | Sense and Sensibility (1995) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: genres | ['Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: score | 0.00032018491765484214 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: popularity | 178 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: movieId | 423 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: title | E.T. the Extra-Terrestrial (1982) | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: genres | ["Children's", 'Drama', 'Fantasy', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: score | 0.00030566827626898885 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: popularity | 167 | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, primary, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/2/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1 ppr primary meanPopularity | 228.4 | week6/results/recommendation-panel-analysis.json | /panels/2/meanPopularity | Direct evidence; rounded only for presentation. |
| User 1 ppr primary hits | 3 | week6/results/recommendation-panel-analysis.json | /panels/2/hits | Direct evidence; rounded only for presentation. |
| User 1 ppr primary relevant | 19 | week6/results/recommendation-panel-analysis.json | /panels/2/relevant | Direct evidence; rounded only for presentation. |
| User 1, mf, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 1: movieId | 5 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 1: title | Copycat (1995) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 1: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 1: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 1: popularity | 28 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 1: hit | False | week6/results/recommendation-panel-analysis.json | /panels/3/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: movieId | 6 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: title | Shanghai Triad (Yao a yao yao dao waipo qiao) (1995) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: popularity | 12 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 2: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: movieId | 18 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: title | White Balloon, The (1995) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: popularity | 1 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 3: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: movieId | 20 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: title | Angels and Insects (1995) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: genres | ['Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: popularity | 31 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 4: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: movieId | 32 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: title | Crumb (1994) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: genres | ['Documentary'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: popularity | 46 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 5: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: movieId | 74 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: title | Faster Pussycat! Kill! Kill! (1965) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: genres | ['Action', 'Comedy', 'Drama'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: popularity | 2 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/3/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: movieId | 100 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: title | Fargo (1996) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: popularity | 377 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 7: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: movieId | 102 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: title | Aristocats, The (1970) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: genres | ['Animation', "Children's"] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: popularity | 18 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/3/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: movieId | 111 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: title | Truth About Cats & Dogs, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: genres | ['Comedy', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: popularity | 131 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 9: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: movieId | 129 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: title | Bound (1996) | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: genres | ['Crime', 'Drama', 'Romance', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: popularity | 76 | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, mf, primary, rank 10: hit | True | week6/results/recommendation-panel-analysis.json | /panels/3/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1 mf primary meanPopularity | 72.2 | week6/results/recommendation-panel-analysis.json | /panels/3/meanPopularity | Direct evidence; rounded only for presentation. |
| User 1 mf primary hits | 7 | week6/results/recommendation-panel-analysis.json | /panels/3/hits | Direct evidence; rounded only for presentation. |
| User 1 mf primary relevant | 19 | week6/results/recommendation-panel-analysis.json | /panels/3/relevant | Direct evidence; rounded only for presentation. |
| User 2, popularity, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 1: movieId | 181 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 1: title | Return of the Jedi (1983) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 1: genres | ['Action', 'Adventure', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 1: score | 339 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 1: popularity | 339 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 1: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: movieId | 174 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: title | Raiders of the Lost Ark (1981) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: genres | ['Action', 'Adventure'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: score | 312 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: popularity | 312 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 2: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: movieId | 98 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: title | Silence of the Lambs, The (1991) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: genres | ['Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: score | 308 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: popularity | 308 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: movieId | 56 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: title | Pulp Fiction (1994) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: genres | ['Crime', 'Drama'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: score | 263 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: popularity | 263 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: movieId | 172 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: title | Empire Strikes Back, The (1980) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: genres | ['Action', 'Adventure', 'Drama', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: score | 261 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: popularity | 261 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: movieId | 7 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: title | Twelve Monkeys (1995) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: score | 234 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: popularity | 234 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: movieId | 79 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: title | Fugitive, The (1993) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: genres | ['Action', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: score | 230 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: popularity | 230 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: movieId | 64 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: title | Shawshank Redemption, The (1994) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: score | 228 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: popularity | 228 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: movieId | 318 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: title | Schindler's List (1993) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: genres | ['Drama', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: score | 224 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: popularity | 224 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: movieId | 173 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: title | Princess Bride, The (1987) | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: genres | ['Action', 'Adventure', 'Comedy', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: score | 222 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: popularity | 222 | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, popularity, primary, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/4/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2 popularity primary meanPopularity | 262.1 | week6/results/recommendation-panel-analysis.json | /panels/4/meanPopularity | Direct evidence; rounded only for presentation. |
| User 2 popularity primary hits | 0 | week6/results/recommendation-panel-analysis.json | /panels/4/hits | Direct evidence; rounded only for presentation. |
| User 2 popularity primary relevant | 2 | week6/results/recommendation-panel-analysis.json | /panels/4/relevant | Direct evidence; rounded only for presentation. |
| User 2, pagerank, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 1: movieId | 181 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 1: title | Return of the Jedi (1983) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 1: genres | ['Action', 'Adventure', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 1: score | 0.0019889404065907 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 1: popularity | 339 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 1: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: movieId | 174 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: title | Raiders of the Lost Ark (1981) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: genres | ['Action', 'Adventure'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: score | 0.0015527261421084404 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: popularity | 312 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 2: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: movieId | 98 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: title | Silence of the Lambs, The (1991) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: genres | ['Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: score | 0.0015255436301231384 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: popularity | 308 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: movieId | 7 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: title | Twelve Monkeys (1995) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: score | 0.001373774721287191 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: popularity | 234 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: movieId | 56 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: title | Pulp Fiction (1994) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: genres | ['Crime', 'Drama'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: score | 0.0013726184843108058 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: popularity | 263 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: movieId | 172 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: title | Empire Strikes Back, The (1980) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: genres | ['Action', 'Adventure', 'Drama', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: score | 0.0013182985130697489 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: popularity | 261 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: movieId | 117 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: title | Rock, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: genres | ['Action', 'Adventure', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: score | 0.0013080037897452712 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: popularity | 215 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: movieId | 121 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: title | Independence Day (ID4) (1996) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: genres | ['Action', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: score | 0.0012972892727702856 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: popularity | 207 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: movieId | 268 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: title | Chasing Amy (1997) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: genres | ['Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: score | 0.0012656085891649127 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: popularity | 146 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: movieId | 222 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: title | Star Trek: First Contact (1996) | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: genres | ['Action', 'Adventure', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: score | 0.0011928167659789324 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: popularity | 189 | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, pagerank, primary, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/5/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2 pagerank primary meanPopularity | 247.4 | week6/results/recommendation-panel-analysis.json | /panels/5/meanPopularity | Direct evidence; rounded only for presentation. |
| User 2 pagerank primary hits | 0 | week6/results/recommendation-panel-analysis.json | /panels/5/hits | Direct evidence; rounded only for presentation. |
| User 2 pagerank primary relevant | 2 | week6/results/recommendation-panel-analysis.json | /panels/5/relevant | Direct evidence; rounded only for presentation. |
| User 2, ppr, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 1: movieId | 181 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 1: title | Return of the Jedi (1983) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 1: genres | ['Action', 'Adventure', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 1: score | 0.0006973391282372177 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 1: popularity | 339 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 1: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: movieId | 9 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: title | Dead Man Walking (1995) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: score | 0.0004976635682396591 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: popularity | 182 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 2: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: movieId | 7 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: title | Twelve Monkeys (1995) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: score | 0.00047437407192774117 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: popularity | 234 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: movieId | 117 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: title | Rock, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: genres | ['Action', 'Adventure', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: score | 0.0004563616821542382 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: popularity | 215 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: movieId | 98 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: title | Silence of the Lambs, The (1991) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: genres | ['Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: score | 0.00044651018106378615 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: popularity | 308 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: movieId | 121 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: title | Independence Day (ID4) (1996) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: genres | ['Action', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: score | 0.00043071250547654927 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: popularity | 207 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: movieId | 174 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: title | Raiders of the Lost Ark (1981) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: genres | ['Action', 'Adventure'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: score | 0.00040285097202286124 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: popularity | 312 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: movieId | 268 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: title | Chasing Amy (1997) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: genres | ['Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: score | 0.00040181103395298123 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: popularity | 146 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: movieId | 475 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: title | Trainspotting (1996) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: score | 0.00040160532807931304 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: popularity | 164 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: movieId | 15 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: title | Mr. Holland's Opus (1995) | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: score | 0.0004009184194728732 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: popularity | 160 | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, primary, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/6/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2 ppr primary meanPopularity | 226.7 | week6/results/recommendation-panel-analysis.json | /panels/6/meanPopularity | Direct evidence; rounded only for presentation. |
| User 2 ppr primary hits | 0 | week6/results/recommendation-panel-analysis.json | /panels/6/hits | Direct evidence; rounded only for presentation. |
| User 2 ppr primary relevant | 2 | week6/results/recommendation-panel-analysis.json | /panels/6/relevant | Direct evidence; rounded only for presentation. |
| User 2, mf, primary, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 1: movieId | 2 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 1: title | GoldenEye (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 1: genres | ['Action', 'Adventure', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 1: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 1: popularity | 41 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 1: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: movieId | 3 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: title | Four Rooms (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: genres | ['Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: popularity | 27 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 2: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: movieId | 4 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: title | Get Shorty (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: genres | ['Action', 'Comedy', 'Drama'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: popularity | 96 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: movieId | 5 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: title | Copycat (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: popularity | 28 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: movieId | 6 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: title | Shanghai Triad (Yao a yao yao dao waipo qiao) (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: popularity | 12 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: movieId | 7 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: title | Twelve Monkeys (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: popularity | 234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: movieId | 8 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: title | Babe (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: genres | ["Children's", 'Comedy', 'Drama'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: popularity | 137 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: movieId | 9 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: title | Dead Man Walking (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: popularity | 182 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: movieId | 11 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: title | Seven (Se7en) (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: genres | ['Crime', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: popularity | 152 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: movieId | 12 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: title | Usual Suspects, The (1995) | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: genres | ['Crime', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: score | 3.5806026458740234 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: popularity | 205 | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, mf, primary, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/7/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2 mf primary meanPopularity | 111.4 | week6/results/recommendation-panel-analysis.json | /panels/7/meanPopularity | Direct evidence; rounded only for presentation. |
| User 2 mf primary hits | 0 | week6/results/recommendation-panel-analysis.json | /panels/7/hits | Direct evidence; rounded only for presentation. |
| User 2 mf primary relevant | 2 | week6/results/recommendation-panel-analysis.json | /panels/7/relevant | Direct evidence; rounded only for presentation. |
| User 1, ppr, baseline, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 1: movieId | 100 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 1: title | Fargo (1996) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 1: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 1: score | 0.002741683041676879 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 1: popularity | 377 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 1: hit | True | week6/results/recommendation-panel-analysis.json | /panels/8/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: movieId | 258 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: title | Contact (1997) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: score | 0.00200196192599833 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: popularity | 307 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 2: hit | True | week6/results/recommendation-panel-analysis.json | /panels/8/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: movieId | 286 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: title | English Patient, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: score | 0.0018735380144789815 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: popularity | 279 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: movieId | 318 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: title | Schindler's List (1993) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: genres | ['Drama', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: score | 0.0016319365240633488 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: popularity | 224 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: movieId | 357 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: title | One Flew Over the Cuckoo's Nest (1975) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: score | 0.001493106479756534 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: popularity | 202 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: movieId | 483 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: title | Casablanca (1942) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: score | 0.0014446371933445334 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: popularity | 197 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: movieId | 288 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: title | Scream (1996) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: genres | ['Horror', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: score | 0.0014287270605564117 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: popularity | 226 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: movieId | 300 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: title | Air Force One (1997) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: genres | ['Action', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: score | 0.0014131064526736736 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: popularity | 235 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: movieId | 222 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: title | Star Trek: First Contact (1996) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: genres | ['Action', 'Adventure', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: score | 0.001352948253042996 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: popularity | 189 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 9: hit | True | week6/results/recommendation-panel-analysis.json | /panels/8/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: movieId | 313 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: title | Titanic (1997) | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: genres | ['Action', 'Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: score | 0.0013183335540816188 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: popularity | 219 | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, baseline, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/8/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1 ppr baseline meanPopularity | 245.5 | week6/results/recommendation-panel-analysis.json | /panels/8/meanPopularity | Direct evidence; rounded only for presentation. |
| User 1 ppr baseline hits | 3 | week6/results/recommendation-panel-analysis.json | /panels/8/hits | Direct evidence; rounded only for presentation. |
| User 1 ppr baseline relevant | 19 | week6/results/recommendation-panel-analysis.json | /panels/8/relevant | Direct evidence; rounded only for presentation. |
| User 2, ppr, seed-only, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 1: movieId | 181 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 1: title | Return of the Jedi (1983) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 1: genres | ['Action', 'Adventure', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 1: score | 0.002600750420242548 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 1: popularity | 339 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 1: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: movieId | 98 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: title | Silence of the Lambs, The (1991) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: genres | ['Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: score | 0.0020272978581488132 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: popularity | 308 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 2: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: movieId | 174 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: title | Raiders of the Lost Ark (1981) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: genres | ['Action', 'Adventure'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: score | 0.0019665774889290333 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: popularity | 312 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: movieId | 7 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: title | Twelve Monkeys (1995) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: score | 0.0017902939580380917 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: popularity | 234 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: movieId | 56 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: title | Pulp Fiction (1994) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: genres | ['Crime', 'Drama'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: score | 0.0017448201542720199 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: popularity | 263 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: movieId | 117 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: title | Rock, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: genres | ['Action', 'Adventure', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: score | 0.001684593502432108 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: popularity | 215 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: movieId | 172 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: title | Empire Strikes Back, The (1980) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: genres | ['Action', 'Adventure', 'Drama', 'Romance', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: score | 0.0016606281278654933 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: popularity | 261 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 7: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: movieId | 9 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: title | Dead Man Walking (1995) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: score | 0.001607951708137989 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: popularity | 182 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: movieId | 121 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: title | Independence Day (ID4) (1996) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: genres | ['Action', 'Sci-Fi', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: score | 0.001602756790816784 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: popularity | 207 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: movieId | 64 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: title | Shawshank Redemption, The (1994) | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: score | 0.0015171804698184133 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: popularity | 228 | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2, ppr, seed-only, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/9/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 2 ppr seed-only meanPopularity | 254.9 | week6/results/recommendation-panel-analysis.json | /panels/9/meanPopularity | Direct evidence; rounded only for presentation. |
| User 2 ppr seed-only hits | 0 | week6/results/recommendation-panel-analysis.json | /panels/9/hits | Direct evidence; rounded only for presentation. |
| User 2 ppr seed-only relevant | 2 | week6/results/recommendation-panel-analysis.json | /panels/9/relevant | Direct evidence; rounded only for presentation. |
| User 1, ppr, alpha-only, rank 1: rank | 1 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 1: movieId | 100 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 1: title | Fargo (1996) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 1: genres | ['Crime', 'Drama', 'Thriller'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 1: score | 0.0006855191895738244 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 1: popularity | 377 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 1: hit | True | week6/results/recommendation-panel-analysis.json | /panels/10/rows/0/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: rank | 2 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: movieId | 258 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: title | Contact (1997) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: genres | ['Drama', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: score | 0.0004398658056743443 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: popularity | 307 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 2: hit | True | week6/results/recommendation-panel-analysis.json | /panels/10/rows/1/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: rank | 3 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: movieId | 286 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: title | English Patient, The (1996) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: score | 0.00043101841583848 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: popularity | 279 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 3: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/2/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: rank | 4 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: movieId | 318 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: title | Schindler's List (1993) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: genres | ['Drama', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: score | 0.0004038166953250766 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: popularity | 224 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 4: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/3/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: rank | 5 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: movieId | 357 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: title | One Flew Over the Cuckoo's Nest (1975) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: score | 0.00037716623046435416 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: popularity | 202 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 5: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/4/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: rank | 6 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: movieId | 483 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: title | Casablanca (1942) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: genres | ['Drama', 'Romance', 'War'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: score | 0.00035968932206742465 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: popularity | 197 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 6: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/5/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: rank | 7 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: movieId | 222 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: title | Star Trek: First Contact (1996) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: genres | ['Action', 'Adventure', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: score | 0.00033278539194725454 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: popularity | 189 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 7: hit | True | week6/results/recommendation-panel-analysis.json | /panels/10/rows/6/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: rank | 8 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: movieId | 475 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: title | Trainspotting (1996) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: genres | ['Drama'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: score | 0.00032809015829116106 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: popularity | 164 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 8: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/7/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: rank | 9 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: movieId | 275 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: title | Sense and Sensibility (1995) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: genres | ['Drama', 'Romance'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: score | 0.00032018491765484214 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: popularity | 178 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 9: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/8/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: rank | 10 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/rank | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: movieId | 423 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/movieId | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: title | E.T. the Extra-Terrestrial (1982) | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/title | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: genres | ["Children's", 'Drama', 'Fantasy', 'Sci-Fi'] | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/genres | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: score | 0.00030566827626898885 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/score | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: popularity | 167 | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/popularity | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1, ppr, alpha-only, rank 10: hit | False | week6/results/recommendation-panel-analysis.json | /panels/10/rows/9/hit | Full raw value; PPR score displayed in units of 10^-4, 3 decimals; MF score6 decimals. Titles/genres preserved. |
| User 1 ppr alpha-only meanPopularity | 228.4 | week6/results/recommendation-panel-analysis.json | /panels/10/meanPopularity | Direct evidence; rounded only for presentation. |
| User 1 ppr alpha-only hits | 3 | week6/results/recommendation-panel-analysis.json | /panels/10/hits | Direct evidence; rounded only for presentation. |
| User 1 ppr alpha-only relevant | 19 | week6/results/recommendation-panel-analysis.json | /panels/10/relevant | Direct evidence; rounded only for presentation. |
| Popularity recall | 0.07602291343770748 | week6/results/additional-analysis.json | /popularityCoverage/0/recall | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Popularity meanListPopularity | 271.99686411149827 | week6/results/additional-analysis.json | /popularityCoverage/0/meanListPopularity | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Popularity distinctRecommended | 82 | week6/results/additional-analysis.json | /popularityCoverage/0/distinctRecommended | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Popularity candidatePool | 1611 | week6/results/additional-analysis.json | /popularityCoverage/0/candidatePool | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Popularity coverage | 0.05090006207324643 | week6/results/additional-analysis.json | /popularityCoverage/0/coverage | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Popularity lightRecall | 0.07539135194307608 | week6/results/additional-analysis.json | /activityGroups/recall/0/lightRecall | 5 decimals. |
| Popularity heavyRecall | 0.07666781778081704 | week6/results/additional-analysis.json | /activityGroups/recall/0/heavyRecall | 5 decimals. |
| Global PageRank recall | 0.07969324149418132 | week6/results/additional-analysis.json | /popularityCoverage/1/recall | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Global PageRank meanListPopularity | 257.820325203252 | week6/results/additional-analysis.json | /popularityCoverage/1/meanListPopularity | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Global PageRank distinctRecommended | 74 | week6/results/additional-analysis.json | /popularityCoverage/1/distinctRecommended | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Global PageRank candidatePool | 1611 | week6/results/additional-analysis.json | /popularityCoverage/1/candidatePool | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Global PageRank coverage | 0.045934202358783364 | week6/results/additional-analysis.json | /popularityCoverage/1/coverage | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| Global PageRank lightRecall | 0.0853138113482941 | week6/results/additional-analysis.json | /activityGroups/recall/1/lightRecall | 5 decimals. |
| Global PageRank heavyRecall | 0.07395392720653096 | week6/results/additional-analysis.json | /activityGroups/recall/1/heavyRecall | 5 decimals. |
| PPR recall | 0.1121885321948605 | week6/results/additional-analysis.json | /popularityCoverage/2/recall | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| PPR meanListPopularity | 244.20673635307782 | week6/results/additional-analysis.json | /popularityCoverage/2/meanListPopularity | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| PPR distinctRecommended | 138 | week6/results/additional-analysis.json | /popularityCoverage/2/distinctRecommended | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| PPR candidatePool | 1611 | week6/results/additional-analysis.json | /popularityCoverage/2/candidatePool | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| PPR coverage | 0.0856610800744879 | week6/results/additional-analysis.json | /popularityCoverage/2/coverage | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| PPR lightRecall | 0.13211548987411054 | week6/results/additional-analysis.json | /activityGroups/recall/2/lightRecall | 5 decimals. |
| PPR heavyRecall | 0.09184058245196428 | week6/results/additional-analysis.json | /activityGroups/recall/2/heavyRecall | 5 decimals. |
| HW6 reference MF recall | 0.021137488852036163 | week6/results/additional-analysis.json | /popularityCoverage/3/recall | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW6 reference MF meanListPopularity | 96.76085946573752 | week6/results/additional-analysis.json | /popularityCoverage/3/meanListPopularity | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW6 reference MF distinctRecommended | 39 | week6/results/additional-analysis.json | /popularityCoverage/3/distinctRecommended | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW6 reference MF candidatePool | 1611 | week6/results/additional-analysis.json | /popularityCoverage/3/candidatePool | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW6 reference MF coverage | 0.024208566108007448 | week6/results/additional-analysis.json | /popularityCoverage/3/coverage | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW6 reference MF lightRecall | 0.02237547892720307 | week6/results/additional-analysis.json | /activityGroups/recall/3/lightRecall | 5 decimals. |
| HW6 reference MF heavyRecall | 0.019873344056971363 | week6/results/additional-analysis.json | /activityGroups/recall/3/heavyRecall | 5 decimals. |
| HW5 default MF recall | 0.021137488852036163 | week6/results/additional-analysis.json | /popularityCoverage/4/recall | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 default MF meanListPopularity | 96.76085946573752 | week6/results/additional-analysis.json | /popularityCoverage/4/meanListPopularity | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 default MF distinctRecommended | 39 | week6/results/additional-analysis.json | /popularityCoverage/4/distinctRecommended | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 default MF candidatePool | 1611 | week6/results/additional-analysis.json | /popularityCoverage/4/candidatePool | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 default MF coverage | 0.024208566108007448 | week6/results/additional-analysis.json | /popularityCoverage/4/coverage | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 default MF lightRecall | 0.02237547892720307 | week6/results/additional-analysis.json | /activityGroups/recall/4/lightRecall | 5 decimals. |
| HW5 default MF heavyRecall | 0.019873344056971363 | week6/results/additional-analysis.json | /activityGroups/recall/4/heavyRecall | 5 decimals. |
| HW5 lower-L2 MF recall | 0.021137488852036163 | week6/results/additional-analysis.json | /popularityCoverage/5/recall | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 lower-L2 MF meanListPopularity | 96.76085946573752 | week6/results/additional-analysis.json | /popularityCoverage/5/meanListPopularity | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 lower-L2 MF distinctRecommended | 39 | week6/results/additional-analysis.json | /popularityCoverage/5/distinctRecommended | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 lower-L2 MF candidatePool | 1611 | week6/results/additional-analysis.json | /popularityCoverage/5/candidatePool | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 lower-L2 MF coverage | 0.024208566108007448 | week6/results/additional-analysis.json | /popularityCoverage/5/coverage | Recall5 decimals; popularity2 decimals; coverage multiplied by100 then2 decimals. |
| HW5 lower-L2 MF lightRecall | 0.02237547892720307 | week6/results/additional-analysis.json | /activityGroups/recall/5/lightRecall | 5 decimals. |
| HW5 lower-L2 MF heavyRecall | 0.019873344056971363 | week6/results/additional-analysis.json | /activityGroups/recall/5/heavyRecall | 5 decimals. |
| Evidence field | 943 | week6/results/additional-analysis.json | /cohortBreakdown/val/startingUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /cohortBreakdown/val/zeroPositiveDegree | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/additional-analysis.json | /cohortBreakdown/val/zeroDegreeIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 97 | week6/results/additional-analysis.json | /cohortBreakdown/val/noEligibleRelevantInclusive | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/additional-analysis.json | /cohortBreakdown/val/overlapZeroAndNoRelevant/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 96 | week6/results/additional-analysis.json | /cohortBreakdown/val/noRelevantAfterZeroRemoval | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /cohortBreakdown/val/mfUnscorableTotal | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /cohortBreakdown/val/mfAdditionalAfterOtherExclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-analysis.json | /cohortBreakdown/val/finalCohort | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/additional-analysis.json | /cohortBreakdown/val/exclusiveWaterfall/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /cohortBreakdown/val/exclusiveWaterfall/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 96 | week6/results/additional-analysis.json | /cohortBreakdown/val/exclusiveWaterfall/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /cohortBreakdown/val/exclusiveWaterfall/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-analysis.json | /cohortBreakdown/val/exclusiveWaterfall/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantInstances | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantDistinctUserMoviePairs | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantDistinctMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 814 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 58 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1106 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 339 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/2/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1526 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/2/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 675 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/3/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1653 | week6/results/additional-analysis.json | /cohortBreakdown/val/unseenRelevantPairs/3/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/additional-analysis.json | /cohortBreakdown/test/startingUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /cohortBreakdown/test/zeroPositiveDegree | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/additional-analysis.json | /cohortBreakdown/test/zeroDegreeIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 82 | week6/results/additional-analysis.json | /cohortBreakdown/test/noEligibleRelevantInclusive | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/additional-analysis.json | /cohortBreakdown/test/overlapZeroAndNoRelevant/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 81 | week6/results/additional-analysis.json | /cohortBreakdown/test/noRelevantAfterZeroRemoval | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /cohortBreakdown/test/mfUnscorableTotal | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /cohortBreakdown/test/mfAdditionalAfterOtherExclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /cohortBreakdown/test/finalCohort | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/additional-analysis.json | /cohortBreakdown/test/exclusiveWaterfall/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /cohortBreakdown/test/exclusiveWaterfall/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 81 | week6/results/additional-analysis.json | /cohortBreakdown/test/exclusiveWaterfall/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /cohortBreakdown/test/exclusiveWaterfall/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /cohortBreakdown/test/exclusiveWaterfall/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantInstances | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantDistinctUserMoviePairs | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantDistinctMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 62 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1130 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 112 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1106 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 234 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/2/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1458 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/2/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 279 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/3/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1498 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/3/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 334 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/4/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1525 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/4/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 489 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/5/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1613 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/5/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 587 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/6/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1625 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/6/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 655 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/7/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 913 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/7/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 655 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/8/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1651 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/8/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 655 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/9/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1645 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/9/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 655 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/10/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1650 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/10/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 828 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/11/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1646 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/11/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 840 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/12/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1674 | week6/results/additional-analysis.json | /cohortBreakdown/test/unseenRelevantPairs/12/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/additional-analysis.json | /pagerankPopularity/0/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.9877010552603759 | week6/results/additional-analysis.json | /pagerankPopularity/0/spearman | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/additional-analysis.json | /pagerankPopularity/0/candidateDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 6.9314750290360045 | week6/results/additional-analysis.json | /pagerankPopularity/0/meanTestTop10Overlap | Direct evidence; rounded only for presentation. |
| Evidence field | 0.6931475029036005 | week6/results/additional-analysis.json | /pagerankPopularity/0/overlapFraction | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pagerankPopularity/0/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/iterationsMin | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/iterationsMax | Direct evidence; rounded only for presentation. |
| Evidence field | 5.651403356061785e-07 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.00020601565718994646 | week6/results/additional-analysis.json | /pagerankPopularity/0/convergence/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.7 | week6/results/additional-analysis.json | /pagerankPopularity/1/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.9926731600635159 | week6/results/additional-analysis.json | /pagerankPopularity/1/spearman | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/additional-analysis.json | /pagerankPopularity/1/candidateDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 7.64692218350755 | week6/results/additional-analysis.json | /pagerankPopularity/1/meanTestTop10Overlap | Direct evidence; rounded only for presentation. |
| Evidence field | 0.764692218350755 | week6/results/additional-analysis.json | /pagerankPopularity/1/overlapFraction | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pagerankPopularity/1/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/iterationsMin | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/iterationsMax | Direct evidence; rounded only for presentation. |
| Evidence field | 7.856980284463508e-07 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.00012625199898998405 | week6/results/additional-analysis.json | /pagerankPopularity/1/convergence/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.85 | week6/results/additional-analysis.json | /pagerankPopularity/2/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.9966467670685603 | week6/results/additional-analysis.json | /pagerankPopularity/2/spearman | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/additional-analysis.json | /pagerankPopularity/2/candidateDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 8.305458768873404 | week6/results/additional-analysis.json | /pagerankPopularity/2/meanTestTop10Overlap | Direct evidence; rounded only for presentation. |
| Evidence field | 0.8305458768873404 | week6/results/additional-analysis.json | /pagerankPopularity/2/overlapFraction | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pagerankPopularity/2/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 78 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/iterationsMin | Direct evidence; rounded only for presentation. |
| Evidence field | 78 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/iterationsMax | Direct evidence; rounded only for presentation. |
| Evidence field | 9.255554202870558e-07 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 6.415465548950005e-05 | week6/results/additional-analysis.json | /pagerankPopularity/2/convergence/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.95 | week6/results/additional-analysis.json | /pagerankPopularity/3/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.9987015880497362 | week6/results/additional-analysis.json | /pagerankPopularity/3/spearman | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/additional-analysis.json | /pagerankPopularity/3/candidateDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 9.289198606271777 | week6/results/additional-analysis.json | /pagerankPopularity/3/meanTestTop10Overlap | Direct evidence; rounded only for presentation. |
| Evidence field | 0.9289198606271777 | week6/results/additional-analysis.json | /pagerankPopularity/3/overlapFraction | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pagerankPopularity/3/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 246 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/iterationsMin | Direct evidence; rounded only for presentation. |
| Evidence field | 246 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/iterationsMax | Direct evidence; rounded only for presentation. |
| Evidence field | 9.81144839325039e-07 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 1.7763568394002505e-15 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 2.1619751805249264e-05 | week6/results/additional-analysis.json | /pagerankPopularity/3/convergence/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 6.392566782810685 | week6/results/additional-analysis.json | /pprOverlap/0/meanCommonTop10 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.6392566782810685 | week6/results/additional-analysis.json | /pprOverlap/0/fractionOf10 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pprOverlap/0/users | Direct evidence; rounded only for presentation. |
| Evidence field | 5.6120789779326365 | week6/results/additional-analysis.json | /pprOverlap/1/meanCommonTop10 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5612078977932636 | week6/results/additional-analysis.json | /pprOverlap/1/fractionOf10 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pprOverlap/1/users | Direct evidence; rounded only for presentation. |
| Evidence field | 0.8989547038327527 | week6/results/additional-analysis.json | /pprOverlap/2/meanCommonTop10 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08989547038327526 | week6/results/additional-analysis.json | /pprOverlap/2/fractionOf10 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pprOverlap/2/users | Direct evidence; rounded only for presentation. |
| Evidence field | 0.8989547038327527 | week6/results/additional-analysis.json | /pprOverlap/3/meanCommonTop10 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08989547038327526 | week6/results/additional-analysis.json | /pprOverlap/3/fractionOf10 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pprOverlap/3/users | Direct evidence; rounded only for presentation. |
| Evidence field | 0.8989547038327527 | week6/results/additional-analysis.json | /pprOverlap/4/meanCommonTop10 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08989547038327526 | week6/results/additional-analysis.json | /pprOverlap/4/fractionOf10 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /pprOverlap/4/users | Direct evidence; rounded only for presentation. |
| Evidence field | 33.0 | week6/results/additional-analysis.json | /activityGroups/medianPositiveDegree | Direct evidence; rounded only for presentation. |
| Evidence field | 435 | week6/results/additional-analysis.json | /activityGroups/lightUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 426 | week6/results/additional-analysis.json | /activityGroups/heavyUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /activityGroups/lightIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /activityGroups/lightIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/additional-analysis.json | /activityGroups/lightIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/additional-analysis.json | /activityGroups/lightIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/additional-analysis.json | /activityGroups/lightIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 15 | week6/results/additional-analysis.json | /activityGroups/lightIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 17 | week6/results/additional-analysis.json | /activityGroups/lightIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/additional-analysis.json | /activityGroups/lightIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/additional-analysis.json | /activityGroups/lightIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 26 | week6/results/additional-analysis.json | /activityGroups/lightIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 27 | week6/results/additional-analysis.json | /activityGroups/lightIds/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 29 | week6/results/additional-analysis.json | /activityGroups/lightIds/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 30 | week6/results/additional-analysis.json | /activityGroups/lightIds/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 31 | week6/results/additional-analysis.json | /activityGroups/lightIds/13 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/additional-analysis.json | /activityGroups/lightIds/14 | Direct evidence; rounded only for presentation. |
| Evidence field | 33 | week6/results/additional-analysis.json | /activityGroups/lightIds/15 | Direct evidence; rounded only for presentation. |
| Evidence field | 34 | week6/results/additional-analysis.json | /activityGroups/lightIds/16 | Direct evidence; rounded only for presentation. |
| Evidence field | 35 | week6/results/additional-analysis.json | /activityGroups/lightIds/17 | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/additional-analysis.json | /activityGroups/lightIds/18 | Direct evidence; rounded only for presentation. |
| Evidence field | 37 | week6/results/additional-analysis.json | /activityGroups/lightIds/19 | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/additional-analysis.json | /activityGroups/lightIds/20 | Direct evidence; rounded only for presentation. |
| Evidence field | 40 | week6/results/additional-analysis.json | /activityGroups/lightIds/21 | Direct evidence; rounded only for presentation. |
| Evidence field | 41 | week6/results/additional-analysis.json | /activityGroups/lightIds/22 | Direct evidence; rounded only for presentation. |
| Evidence field | 45 | week6/results/additional-analysis.json | /activityGroups/lightIds/23 | Direct evidence; rounded only for presentation. |
| Evidence field | 46 | week6/results/additional-analysis.json | /activityGroups/lightIds/24 | Direct evidence; rounded only for presentation. |
| Evidence field | 47 | week6/results/additional-analysis.json | /activityGroups/lightIds/25 | Direct evidence; rounded only for presentation. |
| Evidence field | 48 | week6/results/additional-analysis.json | /activityGroups/lightIds/26 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/additional-analysis.json | /activityGroups/lightIds/27 | Direct evidence; rounded only for presentation. |
| Evidence field | 51 | week6/results/additional-analysis.json | /activityGroups/lightIds/28 | Direct evidence; rounded only for presentation. |
| Evidence field | 53 | week6/results/additional-analysis.json | /activityGroups/lightIds/29 | Direct evidence; rounded only for presentation. |
| Evidence field | 54 | week6/results/additional-analysis.json | /activityGroups/lightIds/30 | Direct evidence; rounded only for presentation. |
| Evidence field | 55 | week6/results/additional-analysis.json | /activityGroups/lightIds/31 | Direct evidence; rounded only for presentation. |
| Evidence field | 63 | week6/results/additional-analysis.json | /activityGroups/lightIds/32 | Direct evidence; rounded only for presentation. |
| Evidence field | 66 | week6/results/additional-analysis.json | /activityGroups/lightIds/33 | Direct evidence; rounded only for presentation. |
| Evidence field | 67 | week6/results/additional-analysis.json | /activityGroups/lightIds/34 | Direct evidence; rounded only for presentation. |
| Evidence field | 68 | week6/results/additional-analysis.json | /activityGroups/lightIds/35 | Direct evidence; rounded only for presentation. |
| Evidence field | 69 | week6/results/additional-analysis.json | /activityGroups/lightIds/36 | Direct evidence; rounded only for presentation. |
| Evidence field | 71 | week6/results/additional-analysis.json | /activityGroups/lightIds/37 | Direct evidence; rounded only for presentation. |
| Evidence field | 74 | week6/results/additional-analysis.json | /activityGroups/lightIds/38 | Direct evidence; rounded only for presentation. |
| Evidence field | 75 | week6/results/additional-analysis.json | /activityGroups/lightIds/39 | Direct evidence; rounded only for presentation. |
| Evidence field | 78 | week6/results/additional-analysis.json | /activityGroups/lightIds/40 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/additional-analysis.json | /activityGroups/lightIds/41 | Direct evidence; rounded only for presentation. |
| Evidence field | 80 | week6/results/additional-analysis.json | /activityGroups/lightIds/42 | Direct evidence; rounded only for presentation. |
| Evidence field | 81 | week6/results/additional-analysis.json | /activityGroups/lightIds/43 | Direct evidence; rounded only for presentation. |
| Evidence field | 86 | week6/results/additional-analysis.json | /activityGroups/lightIds/44 | Direct evidence; rounded only for presentation. |
| Evidence field | 88 | week6/results/additional-analysis.json | /activityGroups/lightIds/45 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/additional-analysis.json | /activityGroups/lightIds/46 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/additional-analysis.json | /activityGroups/lightIds/47 | Direct evidence; rounded only for presentation. |
| Evidence field | 101 | week6/results/additional-analysis.json | /activityGroups/lightIds/48 | Direct evidence; rounded only for presentation. |
| Evidence field | 103 | week6/results/additional-analysis.json | /activityGroups/lightIds/49 | Direct evidence; rounded only for presentation. |
| Evidence field | 104 | week6/results/additional-analysis.json | /activityGroups/lightIds/50 | Direct evidence; rounded only for presentation. |
| Evidence field | 112 | week6/results/additional-analysis.json | /activityGroups/lightIds/51 | Direct evidence; rounded only for presentation. |
| Evidence field | 113 | week6/results/additional-analysis.json | /activityGroups/lightIds/52 | Direct evidence; rounded only for presentation. |
| Evidence field | 114 | week6/results/additional-analysis.json | /activityGroups/lightIds/53 | Direct evidence; rounded only for presentation. |
| Evidence field | 116 | week6/results/additional-analysis.json | /activityGroups/lightIds/54 | Direct evidence; rounded only for presentation. |
| Evidence field | 123 | week6/results/additional-analysis.json | /activityGroups/lightIds/55 | Direct evidence; rounded only for presentation. |
| Evidence field | 124 | week6/results/additional-analysis.json | /activityGroups/lightIds/56 | Direct evidence; rounded only for presentation. |
| Evidence field | 126 | week6/results/additional-analysis.json | /activityGroups/lightIds/57 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/additional-analysis.json | /activityGroups/lightIds/58 | Direct evidence; rounded only for presentation. |
| Evidence field | 131 | week6/results/additional-analysis.json | /activityGroups/lightIds/59 | Direct evidence; rounded only for presentation. |
| Evidence field | 132 | week6/results/additional-analysis.json | /activityGroups/lightIds/60 | Direct evidence; rounded only for presentation. |
| Evidence field | 133 | week6/results/additional-analysis.json | /activityGroups/lightIds/61 | Direct evidence; rounded only for presentation. |
| Evidence field | 134 | week6/results/additional-analysis.json | /activityGroups/lightIds/62 | Direct evidence; rounded only for presentation. |
| Evidence field | 135 | week6/results/additional-analysis.json | /activityGroups/lightIds/63 | Direct evidence; rounded only for presentation. |
| Evidence field | 136 | week6/results/additional-analysis.json | /activityGroups/lightIds/64 | Direct evidence; rounded only for presentation. |
| Evidence field | 137 | week6/results/additional-analysis.json | /activityGroups/lightIds/65 | Direct evidence; rounded only for presentation. |
| Evidence field | 139 | week6/results/additional-analysis.json | /activityGroups/lightIds/66 | Direct evidence; rounded only for presentation. |
| Evidence field | 140 | week6/results/additional-analysis.json | /activityGroups/lightIds/67 | Direct evidence; rounded only for presentation. |
| Evidence field | 142 | week6/results/additional-analysis.json | /activityGroups/lightIds/68 | Direct evidence; rounded only for presentation. |
| Evidence field | 143 | week6/results/additional-analysis.json | /activityGroups/lightIds/69 | Direct evidence; rounded only for presentation. |
| Evidence field | 146 | week6/results/additional-analysis.json | /activityGroups/lightIds/70 | Direct evidence; rounded only for presentation. |
| Evidence field | 147 | week6/results/additional-analysis.json | /activityGroups/lightIds/71 | Direct evidence; rounded only for presentation. |
| Evidence field | 150 | week6/results/additional-analysis.json | /activityGroups/lightIds/72 | Direct evidence; rounded only for presentation. |
| Evidence field | 153 | week6/results/additional-analysis.json | /activityGroups/lightIds/73 | Direct evidence; rounded only for presentation. |
| Evidence field | 154 | week6/results/additional-analysis.json | /activityGroups/lightIds/74 | Direct evidence; rounded only for presentation. |
| Evidence field | 156 | week6/results/additional-analysis.json | /activityGroups/lightIds/75 | Direct evidence; rounded only for presentation. |
| Evidence field | 157 | week6/results/additional-analysis.json | /activityGroups/lightIds/76 | Direct evidence; rounded only for presentation. |
| Evidence field | 162 | week6/results/additional-analysis.json | /activityGroups/lightIds/77 | Direct evidence; rounded only for presentation. |
| Evidence field | 163 | week6/results/additional-analysis.json | /activityGroups/lightIds/78 | Direct evidence; rounded only for presentation. |
| Evidence field | 165 | week6/results/additional-analysis.json | /activityGroups/lightIds/79 | Direct evidence; rounded only for presentation. |
| Evidence field | 166 | week6/results/additional-analysis.json | /activityGroups/lightIds/80 | Direct evidence; rounded only for presentation. |
| Evidence field | 167 | week6/results/additional-analysis.json | /activityGroups/lightIds/81 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/additional-analysis.json | /activityGroups/lightIds/82 | Direct evidence; rounded only for presentation. |
| Evidence field | 169 | week6/results/additional-analysis.json | /activityGroups/lightIds/83 | Direct evidence; rounded only for presentation. |
| Evidence field | 170 | week6/results/additional-analysis.json | /activityGroups/lightIds/84 | Direct evidence; rounded only for presentation. |
| Evidence field | 171 | week6/results/additional-analysis.json | /activityGroups/lightIds/85 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/additional-analysis.json | /activityGroups/lightIds/86 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/additional-analysis.json | /activityGroups/lightIds/87 | Direct evidence; rounded only for presentation. |
| Evidence field | 175 | week6/results/additional-analysis.json | /activityGroups/lightIds/88 | Direct evidence; rounded only for presentation. |
| Evidence field | 176 | week6/results/additional-analysis.json | /activityGroups/lightIds/89 | Direct evidence; rounded only for presentation. |
| Evidence field | 179 | week6/results/additional-analysis.json | /activityGroups/lightIds/90 | Direct evidence; rounded only for presentation. |
| Evidence field | 180 | week6/results/additional-analysis.json | /activityGroups/lightIds/91 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/additional-analysis.json | /activityGroups/lightIds/92 | Direct evidence; rounded only for presentation. |
| Evidence field | 182 | week6/results/additional-analysis.json | /activityGroups/lightIds/93 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/additional-analysis.json | /activityGroups/lightIds/94 | Direct evidence; rounded only for presentation. |
| Evidence field | 185 | week6/results/additional-analysis.json | /activityGroups/lightIds/95 | Direct evidence; rounded only for presentation. |
| Evidence field | 190 | week6/results/additional-analysis.json | /activityGroups/lightIds/96 | Direct evidence; rounded only for presentation. |
| Evidence field | 191 | week6/results/additional-analysis.json | /activityGroups/lightIds/97 | Direct evidence; rounded only for presentation. |
| Evidence field | 192 | week6/results/additional-analysis.json | /activityGroups/lightIds/98 | Direct evidence; rounded only for presentation. |
| Evidence field | 195 | week6/results/additional-analysis.json | /activityGroups/lightIds/99 | Direct evidence; rounded only for presentation. |
| Evidence field | 196 | week6/results/additional-analysis.json | /activityGroups/lightIds/100 | Direct evidence; rounded only for presentation. |
| Evidence field | 199 | week6/results/additional-analysis.json | /activityGroups/lightIds/101 | Direct evidence; rounded only for presentation. |
| Evidence field | 203 | week6/results/additional-analysis.json | /activityGroups/lightIds/102 | Direct evidence; rounded only for presentation. |
| Evidence field | 204 | week6/results/additional-analysis.json | /activityGroups/lightIds/103 | Direct evidence; rounded only for presentation. |
| Evidence field | 205 | week6/results/additional-analysis.json | /activityGroups/lightIds/104 | Direct evidence; rounded only for presentation. |
| Evidence field | 206 | week6/results/additional-analysis.json | /activityGroups/lightIds/105 | Direct evidence; rounded only for presentation. |
| Evidence field | 208 | week6/results/additional-analysis.json | /activityGroups/lightIds/106 | Direct evidence; rounded only for presentation. |
| Evidence field | 211 | week6/results/additional-analysis.json | /activityGroups/lightIds/107 | Direct evidence; rounded only for presentation. |
| Evidence field | 212 | week6/results/additional-analysis.json | /activityGroups/lightIds/108 | Direct evidence; rounded only for presentation. |
| Evidence field | 217 | week6/results/additional-analysis.json | /activityGroups/lightIds/109 | Direct evidence; rounded only for presentation. |
| Evidence field | 218 | week6/results/additional-analysis.json | /activityGroups/lightIds/110 | Direct evidence; rounded only for presentation. |
| Evidence field | 219 | week6/results/additional-analysis.json | /activityGroups/lightIds/111 | Direct evidence; rounded only for presentation. |
| Evidence field | 220 | week6/results/additional-analysis.json | /activityGroups/lightIds/112 | Direct evidence; rounded only for presentation. |
| Evidence field | 223 | week6/results/additional-analysis.json | /activityGroups/lightIds/113 | Direct evidence; rounded only for presentation. |
| Evidence field | 225 | week6/results/additional-analysis.json | /activityGroups/lightIds/114 | Direct evidence; rounded only for presentation. |
| Evidence field | 226 | week6/results/additional-analysis.json | /activityGroups/lightIds/115 | Direct evidence; rounded only for presentation. |
| Evidence field | 227 | week6/results/additional-analysis.json | /activityGroups/lightIds/116 | Direct evidence; rounded only for presentation. |
| Evidence field | 229 | week6/results/additional-analysis.json | /activityGroups/lightIds/117 | Direct evidence; rounded only for presentation. |
| Evidence field | 231 | week6/results/additional-analysis.json | /activityGroups/lightIds/118 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/additional-analysis.json | /activityGroups/lightIds/119 | Direct evidence; rounded only for presentation. |
| Evidence field | 242 | week6/results/additional-analysis.json | /activityGroups/lightIds/120 | Direct evidence; rounded only for presentation. |
| Evidence field | 243 | week6/results/additional-analysis.json | /activityGroups/lightIds/121 | Direct evidence; rounded only for presentation. |
| Evidence field | 245 | week6/results/additional-analysis.json | /activityGroups/lightIds/122 | Direct evidence; rounded only for presentation. |
| Evidence field | 247 | week6/results/additional-analysis.json | /activityGroups/lightIds/123 | Direct evidence; rounded only for presentation. |
| Evidence field | 248 | week6/results/additional-analysis.json | /activityGroups/lightIds/124 | Direct evidence; rounded only for presentation. |
| Evidence field | 252 | week6/results/additional-analysis.json | /activityGroups/lightIds/125 | Direct evidence; rounded only for presentation. |
| Evidence field | 255 | week6/results/additional-analysis.json | /activityGroups/lightIds/126 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/additional-analysis.json | /activityGroups/lightIds/127 | Direct evidence; rounded only for presentation. |
| Evidence field | 259 | week6/results/additional-analysis.json | /activityGroups/lightIds/128 | Direct evidence; rounded only for presentation. |
| Evidence field | 260 | week6/results/additional-analysis.json | /activityGroups/lightIds/129 | Direct evidence; rounded only for presentation. |
| Evidence field | 261 | week6/results/additional-analysis.json | /activityGroups/lightIds/130 | Direct evidence; rounded only for presentation. |
| Evidence field | 265 | week6/results/additional-analysis.json | /activityGroups/lightIds/131 | Direct evidence; rounded only for presentation. |
| Evidence field | 266 | week6/results/additional-analysis.json | /activityGroups/lightIds/132 | Direct evidence; rounded only for presentation. |
| Evidence field | 273 | week6/results/additional-analysis.json | /activityGroups/lightIds/133 | Direct evidence; rounded only for presentation. |
| Evidence field | 275 | week6/results/additional-analysis.json | /activityGroups/lightIds/134 | Direct evidence; rounded only for presentation. |
| Evidence field | 277 | week6/results/additional-analysis.json | /activityGroups/lightIds/135 | Direct evidence; rounded only for presentation. |
| Evidence field | 278 | week6/results/additional-analysis.json | /activityGroups/lightIds/136 | Direct evidence; rounded only for presentation. |
| Evidence field | 282 | week6/results/additional-analysis.json | /activityGroups/lightIds/137 | Direct evidence; rounded only for presentation. |
| Evidence field | 283 | week6/results/additional-analysis.json | /activityGroups/lightIds/138 | Direct evidence; rounded only for presentation. |
| Evidence field | 285 | week6/results/additional-analysis.json | /activityGroups/lightIds/139 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/additional-analysis.json | /activityGroups/lightIds/140 | Direct evidence; rounded only for presentation. |
| Evidence field | 304 | week6/results/additional-analysis.json | /activityGroups/lightIds/141 | Direct evidence; rounded only for presentation. |
| Evidence field | 306 | week6/results/additional-analysis.json | /activityGroups/lightIds/142 | Direct evidence; rounded only for presentation. |
| Evidence field | 310 | week6/results/additional-analysis.json | /activityGroups/lightIds/143 | Direct evidence; rounded only for presentation. |
| Evidence field | 317 | week6/results/additional-analysis.json | /activityGroups/lightIds/144 | Direct evidence; rounded only for presentation. |
| Evidence field | 319 | week6/results/additional-analysis.json | /activityGroups/lightIds/145 | Direct evidence; rounded only for presentation. |
| Evidence field | 322 | week6/results/additional-analysis.json | /activityGroups/lightIds/146 | Direct evidence; rounded only for presentation. |
| Evidence field | 323 | week6/results/additional-analysis.json | /activityGroups/lightIds/147 | Direct evidence; rounded only for presentation. |
| Evidence field | 329 | week6/results/additional-analysis.json | /activityGroups/lightIds/148 | Direct evidence; rounded only for presentation. |
| Evidence field | 331 | week6/results/additional-analysis.json | /activityGroups/lightIds/149 | Direct evidence; rounded only for presentation. |
| Evidence field | 333 | week6/results/additional-analysis.json | /activityGroups/lightIds/150 | Direct evidence; rounded only for presentation. |
| Evidence field | 335 | week6/results/additional-analysis.json | /activityGroups/lightIds/151 | Direct evidence; rounded only for presentation. |
| Evidence field | 336 | week6/results/additional-analysis.json | /activityGroups/lightIds/152 | Direct evidence; rounded only for presentation. |
| Evidence field | 337 | week6/results/additional-analysis.json | /activityGroups/lightIds/153 | Direct evidence; rounded only for presentation. |
| Evidence field | 340 | week6/results/additional-analysis.json | /activityGroups/lightIds/154 | Direct evidence; rounded only for presentation. |
| Evidence field | 341 | week6/results/additional-analysis.json | /activityGroups/lightIds/155 | Direct evidence; rounded only for presentation. |
| Evidence field | 349 | week6/results/additional-analysis.json | /activityGroups/lightIds/156 | Direct evidence; rounded only for presentation. |
| Evidence field | 350 | week6/results/additional-analysis.json | /activityGroups/lightIds/157 | Direct evidence; rounded only for presentation. |
| Evidence field | 351 | week6/results/additional-analysis.json | /activityGroups/lightIds/158 | Direct evidence; rounded only for presentation. |
| Evidence field | 352 | week6/results/additional-analysis.json | /activityGroups/lightIds/159 | Direct evidence; rounded only for presentation. |
| Evidence field | 353 | week6/results/additional-analysis.json | /activityGroups/lightIds/160 | Direct evidence; rounded only for presentation. |
| Evidence field | 355 | week6/results/additional-analysis.json | /activityGroups/lightIds/161 | Direct evidence; rounded only for presentation. |
| Evidence field | 356 | week6/results/additional-analysis.json | /activityGroups/lightIds/162 | Direct evidence; rounded only for presentation. |
| Evidence field | 358 | week6/results/additional-analysis.json | /activityGroups/lightIds/163 | Direct evidence; rounded only for presentation. |
| Evidence field | 359 | week6/results/additional-analysis.json | /activityGroups/lightIds/164 | Direct evidence; rounded only for presentation. |
| Evidence field | 364 | week6/results/additional-analysis.json | /activityGroups/lightIds/165 | Direct evidence; rounded only for presentation. |
| Evidence field | 365 | week6/results/additional-analysis.json | /activityGroups/lightIds/166 | Direct evidence; rounded only for presentation. |
| Evidence field | 366 | week6/results/additional-analysis.json | /activityGroups/lightIds/167 | Direct evidence; rounded only for presentation. |
| Evidence field | 368 | week6/results/additional-analysis.json | /activityGroups/lightIds/168 | Direct evidence; rounded only for presentation. |
| Evidence field | 369 | week6/results/additional-analysis.json | /activityGroups/lightIds/169 | Direct evidence; rounded only for presentation. |
| Evidence field | 370 | week6/results/additional-analysis.json | /activityGroups/lightIds/170 | Direct evidence; rounded only for presentation. |
| Evidence field | 371 | week6/results/additional-analysis.json | /activityGroups/lightIds/171 | Direct evidence; rounded only for presentation. |
| Evidence field | 375 | week6/results/additional-analysis.json | /activityGroups/lightIds/172 | Direct evidence; rounded only for presentation. |
| Evidence field | 376 | week6/results/additional-analysis.json | /activityGroups/lightIds/173 | Direct evidence; rounded only for presentation. |
| Evidence field | 377 | week6/results/additional-analysis.json | /activityGroups/lightIds/174 | Direct evidence; rounded only for presentation. |
| Evidence field | 382 | week6/results/additional-analysis.json | /activityGroups/lightIds/175 | Direct evidence; rounded only for presentation. |
| Evidence field | 384 | week6/results/additional-analysis.json | /activityGroups/lightIds/176 | Direct evidence; rounded only for presentation. |
| Evidence field | 388 | week6/results/additional-analysis.json | /activityGroups/lightIds/177 | Direct evidence; rounded only for presentation. |
| Evidence field | 390 | week6/results/additional-analysis.json | /activityGroups/lightIds/178 | Direct evidence; rounded only for presentation. |
| Evidence field | 396 | week6/results/additional-analysis.json | /activityGroups/lightIds/179 | Direct evidence; rounded only for presentation. |
| Evidence field | 400 | week6/results/additional-analysis.json | /activityGroups/lightIds/180 | Direct evidence; rounded only for presentation. |
| Evidence field | 403 | week6/results/additional-analysis.json | /activityGroups/lightIds/181 | Direct evidence; rounded only for presentation. |
| Evidence field | 404 | week6/results/additional-analysis.json | /activityGroups/lightIds/182 | Direct evidence; rounded only for presentation. |
| Evidence field | 408 | week6/results/additional-analysis.json | /activityGroups/lightIds/183 | Direct evidence; rounded only for presentation. |
| Evidence field | 410 | week6/results/additional-analysis.json | /activityGroups/lightIds/184 | Direct evidence; rounded only for presentation. |
| Evidence field | 411 | week6/results/additional-analysis.json | /activityGroups/lightIds/185 | Direct evidence; rounded only for presentation. |
| Evidence field | 412 | week6/results/additional-analysis.json | /activityGroups/lightIds/186 | Direct evidence; rounded only for presentation. |
| Evidence field | 413 | week6/results/additional-analysis.json | /activityGroups/lightIds/187 | Direct evidence; rounded only for presentation. |
| Evidence field | 414 | week6/results/additional-analysis.json | /activityGroups/lightIds/188 | Direct evidence; rounded only for presentation. |
| Evidence field | 415 | week6/results/additional-analysis.json | /activityGroups/lightIds/189 | Direct evidence; rounded only for presentation. |
| Evidence field | 418 | week6/results/additional-analysis.json | /activityGroups/lightIds/190 | Direct evidence; rounded only for presentation. |
| Evidence field | 419 | week6/results/additional-analysis.json | /activityGroups/lightIds/191 | Direct evidence; rounded only for presentation. |
| Evidence field | 420 | week6/results/additional-analysis.json | /activityGroups/lightIds/192 | Direct evidence; rounded only for presentation. |
| Evidence field | 423 | week6/results/additional-analysis.json | /activityGroups/lightIds/193 | Direct evidence; rounded only for presentation. |
| Evidence field | 424 | week6/results/additional-analysis.json | /activityGroups/lightIds/194 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/additional-analysis.json | /activityGroups/lightIds/195 | Direct evidence; rounded only for presentation. |
| Evidence field | 430 | week6/results/additional-analysis.json | /activityGroups/lightIds/196 | Direct evidence; rounded only for presentation. |
| Evidence field | 431 | week6/results/additional-analysis.json | /activityGroups/lightIds/197 | Direct evidence; rounded only for presentation. |
| Evidence field | 432 | week6/results/additional-analysis.json | /activityGroups/lightIds/198 | Direct evidence; rounded only for presentation. |
| Evidence field | 433 | week6/results/additional-analysis.json | /activityGroups/lightIds/199 | Direct evidence; rounded only for presentation. |
| Evidence field | 434 | week6/results/additional-analysis.json | /activityGroups/lightIds/200 | Direct evidence; rounded only for presentation. |
| Evidence field | 438 | week6/results/additional-analysis.json | /activityGroups/lightIds/201 | Direct evidence; rounded only for presentation. |
| Evidence field | 439 | week6/results/additional-analysis.json | /activityGroups/lightIds/202 | Direct evidence; rounded only for presentation. |
| Evidence field | 440 | week6/results/additional-analysis.json | /activityGroups/lightIds/203 | Direct evidence; rounded only for presentation. |
| Evidence field | 445 | week6/results/additional-analysis.json | /activityGroups/lightIds/204 | Direct evidence; rounded only for presentation. |
| Evidence field | 448 | week6/results/additional-analysis.json | /activityGroups/lightIds/205 | Direct evidence; rounded only for presentation. |
| Evidence field | 460 | week6/results/additional-analysis.json | /activityGroups/lightIds/206 | Direct evidence; rounded only for presentation. |
| Evidence field | 461 | week6/results/additional-analysis.json | /activityGroups/lightIds/207 | Direct evidence; rounded only for presentation. |
| Evidence field | 462 | week6/results/additional-analysis.json | /activityGroups/lightIds/208 | Direct evidence; rounded only for presentation. |
| Evidence field | 464 | week6/results/additional-analysis.json | /activityGroups/lightIds/209 | Direct evidence; rounded only for presentation. |
| Evidence field | 467 | week6/results/additional-analysis.json | /activityGroups/lightIds/210 | Direct evidence; rounded only for presentation. |
| Evidence field | 469 | week6/results/additional-analysis.json | /activityGroups/lightIds/211 | Direct evidence; rounded only for presentation. |
| Evidence field | 470 | week6/results/additional-analysis.json | /activityGroups/lightIds/212 | Direct evidence; rounded only for presentation. |
| Evidence field | 471 | week6/results/additional-analysis.json | /activityGroups/lightIds/213 | Direct evidence; rounded only for presentation. |
| Evidence field | 473 | week6/results/additional-analysis.json | /activityGroups/lightIds/214 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/additional-analysis.json | /activityGroups/lightIds/215 | Direct evidence; rounded only for presentation. |
| Evidence field | 477 | week6/results/additional-analysis.json | /activityGroups/lightIds/216 | Direct evidence; rounded only for presentation. |
| Evidence field | 482 | week6/results/additional-analysis.json | /activityGroups/lightIds/217 | Direct evidence; rounded only for presentation. |
| Evidence field | 483 | week6/results/additional-analysis.json | /activityGroups/lightIds/218 | Direct evidence; rounded only for presentation. |
| Evidence field | 485 | week6/results/additional-analysis.json | /activityGroups/lightIds/219 | Direct evidence; rounded only for presentation. |
| Evidence field | 490 | week6/results/additional-analysis.json | /activityGroups/lightIds/220 | Direct evidence; rounded only for presentation. |
| Evidence field | 491 | week6/results/additional-analysis.json | /activityGroups/lightIds/221 | Direct evidence; rounded only for presentation. |
| Evidence field | 492 | week6/results/additional-analysis.json | /activityGroups/lightIds/222 | Direct evidence; rounded only for presentation. |
| Evidence field | 494 | week6/results/additional-analysis.json | /activityGroups/lightIds/223 | Direct evidence; rounded only for presentation. |
| Evidence field | 496 | week6/results/additional-analysis.json | /activityGroups/lightIds/224 | Direct evidence; rounded only for presentation. |
| Evidence field | 509 | week6/results/additional-analysis.json | /activityGroups/lightIds/225 | Direct evidence; rounded only for presentation. |
| Evidence field | 511 | week6/results/additional-analysis.json | /activityGroups/lightIds/226 | Direct evidence; rounded only for presentation. |
| Evidence field | 512 | week6/results/additional-analysis.json | /activityGroups/lightIds/227 | Direct evidence; rounded only for presentation. |
| Evidence field | 513 | week6/results/additional-analysis.json | /activityGroups/lightIds/228 | Direct evidence; rounded only for presentation. |
| Evidence field | 516 | week6/results/additional-analysis.json | /activityGroups/lightIds/229 | Direct evidence; rounded only for presentation. |
| Evidence field | 517 | week6/results/additional-analysis.json | /activityGroups/lightIds/230 | Direct evidence; rounded only for presentation. |
| Evidence field | 519 | week6/results/additional-analysis.json | /activityGroups/lightIds/231 | Direct evidence; rounded only for presentation. |
| Evidence field | 520 | week6/results/additional-analysis.json | /activityGroups/lightIds/232 | Direct evidence; rounded only for presentation. |
| Evidence field | 522 | week6/results/additional-analysis.json | /activityGroups/lightIds/233 | Direct evidence; rounded only for presentation. |
| Evidence field | 525 | week6/results/additional-analysis.json | /activityGroups/lightIds/234 | Direct evidence; rounded only for presentation. |
| Evidence field | 526 | week6/results/additional-analysis.json | /activityGroups/lightIds/235 | Direct evidence; rounded only for presentation. |
| Evidence field | 528 | week6/results/additional-analysis.json | /activityGroups/lightIds/236 | Direct evidence; rounded only for presentation. |
| Evidence field | 529 | week6/results/additional-analysis.json | /activityGroups/lightIds/237 | Direct evidence; rounded only for presentation. |
| Evidence field | 530 | week6/results/additional-analysis.json | /activityGroups/lightIds/238 | Direct evidence; rounded only for presentation. |
| Evidence field | 531 | week6/results/additional-analysis.json | /activityGroups/lightIds/239 | Direct evidence; rounded only for presentation. |
| Evidence field | 539 | week6/results/additional-analysis.json | /activityGroups/lightIds/240 | Direct evidence; rounded only for presentation. |
| Evidence field | 546 | week6/results/additional-analysis.json | /activityGroups/lightIds/241 | Direct evidence; rounded only for presentation. |
| Evidence field | 547 | week6/results/additional-analysis.json | /activityGroups/lightIds/242 | Direct evidence; rounded only for presentation. |
| Evidence field | 552 | week6/results/additional-analysis.json | /activityGroups/lightIds/243 | Direct evidence; rounded only for presentation. |
| Evidence field | 555 | week6/results/additional-analysis.json | /activityGroups/lightIds/244 | Direct evidence; rounded only for presentation. |
| Evidence field | 556 | week6/results/additional-analysis.json | /activityGroups/lightIds/245 | Direct evidence; rounded only for presentation. |
| Evidence field | 557 | week6/results/additional-analysis.json | /activityGroups/lightIds/246 | Direct evidence; rounded only for presentation. |
| Evidence field | 558 | week6/results/additional-analysis.json | /activityGroups/lightIds/247 | Direct evidence; rounded only for presentation. |
| Evidence field | 563 | week6/results/additional-analysis.json | /activityGroups/lightIds/248 | Direct evidence; rounded only for presentation. |
| Evidence field | 564 | week6/results/additional-analysis.json | /activityGroups/lightIds/249 | Direct evidence; rounded only for presentation. |
| Evidence field | 565 | week6/results/additional-analysis.json | /activityGroups/lightIds/250 | Direct evidence; rounded only for presentation. |
| Evidence field | 568 | week6/results/additional-analysis.json | /activityGroups/lightIds/251 | Direct evidence; rounded only for presentation. |
| Evidence field | 569 | week6/results/additional-analysis.json | /activityGroups/lightIds/252 | Direct evidence; rounded only for presentation. |
| Evidence field | 570 | week6/results/additional-analysis.json | /activityGroups/lightIds/253 | Direct evidence; rounded only for presentation. |
| Evidence field | 571 | week6/results/additional-analysis.json | /activityGroups/lightIds/254 | Direct evidence; rounded only for presentation. |
| Evidence field | 573 | week6/results/additional-analysis.json | /activityGroups/lightIds/255 | Direct evidence; rounded only for presentation. |
| Evidence field | 574 | week6/results/additional-analysis.json | /activityGroups/lightIds/256 | Direct evidence; rounded only for presentation. |
| Evidence field | 575 | week6/results/additional-analysis.json | /activityGroups/lightIds/257 | Direct evidence; rounded only for presentation. |
| Evidence field | 576 | week6/results/additional-analysis.json | /activityGroups/lightIds/258 | Direct evidence; rounded only for presentation. |
| Evidence field | 579 | week6/results/additional-analysis.json | /activityGroups/lightIds/259 | Direct evidence; rounded only for presentation. |
| Evidence field | 581 | week6/results/additional-analysis.json | /activityGroups/lightIds/260 | Direct evidence; rounded only for presentation. |
| Evidence field | 582 | week6/results/additional-analysis.json | /activityGroups/lightIds/261 | Direct evidence; rounded only for presentation. |
| Evidence field | 583 | week6/results/additional-analysis.json | /activityGroups/lightIds/262 | Direct evidence; rounded only for presentation. |
| Evidence field | 589 | week6/results/additional-analysis.json | /activityGroups/lightIds/263 | Direct evidence; rounded only for presentation. |
| Evidence field | 590 | week6/results/additional-analysis.json | /activityGroups/lightIds/264 | Direct evidence; rounded only for presentation. |
| Evidence field | 594 | week6/results/additional-analysis.json | /activityGroups/lightIds/265 | Direct evidence; rounded only for presentation. |
| Evidence field | 595 | week6/results/additional-analysis.json | /activityGroups/lightIds/266 | Direct evidence; rounded only for presentation. |
| Evidence field | 597 | week6/results/additional-analysis.json | /activityGroups/lightIds/267 | Direct evidence; rounded only for presentation. |
| Evidence field | 598 | week6/results/additional-analysis.json | /activityGroups/lightIds/268 | Direct evidence; rounded only for presentation. |
| Evidence field | 599 | week6/results/additional-analysis.json | /activityGroups/lightIds/269 | Direct evidence; rounded only for presentation. |
| Evidence field | 602 | week6/results/additional-analysis.json | /activityGroups/lightIds/270 | Direct evidence; rounded only for presentation. |
| Evidence field | 603 | week6/results/additional-analysis.json | /activityGroups/lightIds/271 | Direct evidence; rounded only for presentation. |
| Evidence field | 604 | week6/results/additional-analysis.json | /activityGroups/lightIds/272 | Direct evidence; rounded only for presentation. |
| Evidence field | 607 | week6/results/additional-analysis.json | /activityGroups/lightIds/273 | Direct evidence; rounded only for presentation. |
| Evidence field | 609 | week6/results/additional-analysis.json | /activityGroups/lightIds/274 | Direct evidence; rounded only for presentation. |
| Evidence field | 611 | week6/results/additional-analysis.json | /activityGroups/lightIds/275 | Direct evidence; rounded only for presentation. |
| Evidence field | 612 | week6/results/additional-analysis.json | /activityGroups/lightIds/276 | Direct evidence; rounded only for presentation. |
| Evidence field | 613 | week6/results/additional-analysis.json | /activityGroups/lightIds/277 | Direct evidence; rounded only for presentation. |
| Evidence field | 614 | week6/results/additional-analysis.json | /activityGroups/lightIds/278 | Direct evidence; rounded only for presentation. |
| Evidence field | 616 | week6/results/additional-analysis.json | /activityGroups/lightIds/279 | Direct evidence; rounded only for presentation. |
| Evidence field | 617 | week6/results/additional-analysis.json | /activityGroups/lightIds/280 | Direct evidence; rounded only for presentation. |
| Evidence field | 623 | week6/results/additional-analysis.json | /activityGroups/lightIds/281 | Direct evidence; rounded only for presentation. |
| Evidence field | 626 | week6/results/additional-analysis.json | /activityGroups/lightIds/282 | Direct evidence; rounded only for presentation. |
| Evidence field | 628 | week6/results/additional-analysis.json | /activityGroups/lightIds/283 | Direct evidence; rounded only for presentation. |
| Evidence field | 633 | week6/results/additional-analysis.json | /activityGroups/lightIds/284 | Direct evidence; rounded only for presentation. |
| Evidence field | 635 | week6/results/additional-analysis.json | /activityGroups/lightIds/285 | Direct evidence; rounded only for presentation. |
| Evidence field | 636 | week6/results/additional-analysis.json | /activityGroups/lightIds/286 | Direct evidence; rounded only for presentation. |
| Evidence field | 637 | week6/results/additional-analysis.json | /activityGroups/lightIds/287 | Direct evidence; rounded only for presentation. |
| Evidence field | 638 | week6/results/additional-analysis.json | /activityGroups/lightIds/288 | Direct evidence; rounded only for presentation. |
| Evidence field | 641 | week6/results/additional-analysis.json | /activityGroups/lightIds/289 | Direct evidence; rounded only for presentation. |
| Evidence field | 644 | week6/results/additional-analysis.json | /activityGroups/lightIds/290 | Direct evidence; rounded only for presentation. |
| Evidence field | 649 | week6/results/additional-analysis.json | /activityGroups/lightIds/291 | Direct evidence; rounded only for presentation. |
| Evidence field | 652 | week6/results/additional-analysis.json | /activityGroups/lightIds/292 | Direct evidence; rounded only for presentation. |
| Evidence field | 657 | week6/results/additional-analysis.json | /activityGroups/lightIds/293 | Direct evidence; rounded only for presentation. |
| Evidence field | 662 | week6/results/additional-analysis.json | /activityGroups/lightIds/294 | Direct evidence; rounded only for presentation. |
| Evidence field | 667 | week6/results/additional-analysis.json | /activityGroups/lightIds/295 | Direct evidence; rounded only for presentation. |
| Evidence field | 668 | week6/results/additional-analysis.json | /activityGroups/lightIds/296 | Direct evidence; rounded only for presentation. |
| Evidence field | 670 | week6/results/additional-analysis.json | /activityGroups/lightIds/297 | Direct evidence; rounded only for presentation. |
| Evidence field | 672 | week6/results/additional-analysis.json | /activityGroups/lightIds/298 | Direct evidence; rounded only for presentation. |
| Evidence field | 673 | week6/results/additional-analysis.json | /activityGroups/lightIds/299 | Direct evidence; rounded only for presentation. |
| Evidence field | 674 | week6/results/additional-analysis.json | /activityGroups/lightIds/300 | Direct evidence; rounded only for presentation. |
| Evidence field | 677 | week6/results/additional-analysis.json | /activityGroups/lightIds/301 | Direct evidence; rounded only for presentation. |
| Evidence field | 678 | week6/results/additional-analysis.json | /activityGroups/lightIds/302 | Direct evidence; rounded only for presentation. |
| Evidence field | 679 | week6/results/additional-analysis.json | /activityGroups/lightIds/303 | Direct evidence; rounded only for presentation. |
| Evidence field | 680 | week6/results/additional-analysis.json | /activityGroups/lightIds/304 | Direct evidence; rounded only for presentation. |
| Evidence field | 681 | week6/results/additional-analysis.json | /activityGroups/lightIds/305 | Direct evidence; rounded only for presentation. |
| Evidence field | 683 | week6/results/additional-analysis.json | /activityGroups/lightIds/306 | Direct evidence; rounded only for presentation. |
| Evidence field | 687 | week6/results/additional-analysis.json | /activityGroups/lightIds/307 | Direct evidence; rounded only for presentation. |
| Evidence field | 688 | week6/results/additional-analysis.json | /activityGroups/lightIds/308 | Direct evidence; rounded only for presentation. |
| Evidence field | 689 | week6/results/additional-analysis.json | /activityGroups/lightIds/309 | Direct evidence; rounded only for presentation. |
| Evidence field | 691 | week6/results/additional-analysis.json | /activityGroups/lightIds/310 | Direct evidence; rounded only for presentation. |
| Evidence field | 692 | week6/results/additional-analysis.json | /activityGroups/lightIds/311 | Direct evidence; rounded only for presentation. |
| Evidence field | 695 | week6/results/additional-analysis.json | /activityGroups/lightIds/312 | Direct evidence; rounded only for presentation. |
| Evidence field | 696 | week6/results/additional-analysis.json | /activityGroups/lightIds/313 | Direct evidence; rounded only for presentation. |
| Evidence field | 700 | week6/results/additional-analysis.json | /activityGroups/lightIds/314 | Direct evidence; rounded only for presentation. |
| Evidence field | 701 | week6/results/additional-analysis.json | /activityGroups/lightIds/315 | Direct evidence; rounded only for presentation. |
| Evidence field | 702 | week6/results/additional-analysis.json | /activityGroups/lightIds/316 | Direct evidence; rounded only for presentation. |
| Evidence field | 703 | week6/results/additional-analysis.json | /activityGroups/lightIds/317 | Direct evidence; rounded only for presentation. |
| Evidence field | 706 | week6/results/additional-analysis.json | /activityGroups/lightIds/318 | Direct evidence; rounded only for presentation. |
| Evidence field | 713 | week6/results/additional-analysis.json | /activityGroups/lightIds/319 | Direct evidence; rounded only for presentation. |
| Evidence field | 714 | week6/results/additional-analysis.json | /activityGroups/lightIds/320 | Direct evidence; rounded only for presentation. |
| Evidence field | 718 | week6/results/additional-analysis.json | /activityGroups/lightIds/321 | Direct evidence; rounded only for presentation. |
| Evidence field | 719 | week6/results/additional-analysis.json | /activityGroups/lightIds/322 | Direct evidence; rounded only for presentation. |
| Evidence field | 720 | week6/results/additional-analysis.json | /activityGroups/lightIds/323 | Direct evidence; rounded only for presentation. |
| Evidence field | 725 | week6/results/additional-analysis.json | /activityGroups/lightIds/324 | Direct evidence; rounded only for presentation. |
| Evidence field | 726 | week6/results/additional-analysis.json | /activityGroups/lightIds/325 | Direct evidence; rounded only for presentation. |
| Evidence field | 728 | week6/results/additional-analysis.json | /activityGroups/lightIds/326 | Direct evidence; rounded only for presentation. |
| Evidence field | 729 | week6/results/additional-analysis.json | /activityGroups/lightIds/327 | Direct evidence; rounded only for presentation. |
| Evidence field | 730 | week6/results/additional-analysis.json | /activityGroups/lightIds/328 | Direct evidence; rounded only for presentation. |
| Evidence field | 735 | week6/results/additional-analysis.json | /activityGroups/lightIds/329 | Direct evidence; rounded only for presentation. |
| Evidence field | 736 | week6/results/additional-analysis.json | /activityGroups/lightIds/330 | Direct evidence; rounded only for presentation. |
| Evidence field | 737 | week6/results/additional-analysis.json | /activityGroups/lightIds/331 | Direct evidence; rounded only for presentation. |
| Evidence field | 739 | week6/results/additional-analysis.json | /activityGroups/lightIds/332 | Direct evidence; rounded only for presentation. |
| Evidence field | 740 | week6/results/additional-analysis.json | /activityGroups/lightIds/333 | Direct evidence; rounded only for presentation. |
| Evidence field | 742 | week6/results/additional-analysis.json | /activityGroups/lightIds/334 | Direct evidence; rounded only for presentation. |
| Evidence field | 743 | week6/results/additional-analysis.json | /activityGroups/lightIds/335 | Direct evidence; rounded only for presentation. |
| Evidence field | 744 | week6/results/additional-analysis.json | /activityGroups/lightIds/336 | Direct evidence; rounded only for presentation. |
| Evidence field | 745 | week6/results/additional-analysis.json | /activityGroups/lightIds/337 | Direct evidence; rounded only for presentation. |
| Evidence field | 746 | week6/results/additional-analysis.json | /activityGroups/lightIds/338 | Direct evidence; rounded only for presentation. |
| Evidence field | 752 | week6/results/additional-analysis.json | /activityGroups/lightIds/339 | Direct evidence; rounded only for presentation. |
| Evidence field | 753 | week6/results/additional-analysis.json | /activityGroups/lightIds/340 | Direct evidence; rounded only for presentation. |
| Evidence field | 755 | week6/results/additional-analysis.json | /activityGroups/lightIds/341 | Direct evidence; rounded only for presentation. |
| Evidence field | 756 | week6/results/additional-analysis.json | /activityGroups/lightIds/342 | Direct evidence; rounded only for presentation. |
| Evidence field | 759 | week6/results/additional-analysis.json | /activityGroups/lightIds/343 | Direct evidence; rounded only for presentation. |
| Evidence field | 760 | week6/results/additional-analysis.json | /activityGroups/lightIds/344 | Direct evidence; rounded only for presentation. |
| Evidence field | 761 | week6/results/additional-analysis.json | /activityGroups/lightIds/345 | Direct evidence; rounded only for presentation. |
| Evidence field | 762 | week6/results/additional-analysis.json | /activityGroups/lightIds/346 | Direct evidence; rounded only for presentation. |
| Evidence field | 765 | week6/results/additional-analysis.json | /activityGroups/lightIds/347 | Direct evidence; rounded only for presentation. |
| Evidence field | 767 | week6/results/additional-analysis.json | /activityGroups/lightIds/348 | Direct evidence; rounded only for presentation. |
| Evidence field | 768 | week6/results/additional-analysis.json | /activityGroups/lightIds/349 | Direct evidence; rounded only for presentation. |
| Evidence field | 772 | week6/results/additional-analysis.json | /activityGroups/lightIds/350 | Direct evidence; rounded only for presentation. |
| Evidence field | 775 | week6/results/additional-analysis.json | /activityGroups/lightIds/351 | Direct evidence; rounded only for presentation. |
| Evidence field | 777 | week6/results/additional-analysis.json | /activityGroups/lightIds/352 | Direct evidence; rounded only for presentation. |
| Evidence field | 778 | week6/results/additional-analysis.json | /activityGroups/lightIds/353 | Direct evidence; rounded only for presentation. |
| Evidence field | 779 | week6/results/additional-analysis.json | /activityGroups/lightIds/354 | Direct evidence; rounded only for presentation. |
| Evidence field | 780 | week6/results/additional-analysis.json | /activityGroups/lightIds/355 | Direct evidence; rounded only for presentation. |
| Evidence field | 781 | week6/results/additional-analysis.json | /activityGroups/lightIds/356 | Direct evidence; rounded only for presentation. |
| Evidence field | 783 | week6/results/additional-analysis.json | /activityGroups/lightIds/357 | Direct evidence; rounded only for presentation. |
| Evidence field | 784 | week6/results/additional-analysis.json | /activityGroups/lightIds/358 | Direct evidence; rounded only for presentation. |
| Evidence field | 785 | week6/results/additional-analysis.json | /activityGroups/lightIds/359 | Direct evidence; rounded only for presentation. |
| Evidence field | 787 | week6/results/additional-analysis.json | /activityGroups/lightIds/360 | Direct evidence; rounded only for presentation. |
| Evidence field | 789 | week6/results/additional-analysis.json | /activityGroups/lightIds/361 | Direct evidence; rounded only for presentation. |
| Evidence field | 791 | week6/results/additional-analysis.json | /activityGroups/lightIds/362 | Direct evidence; rounded only for presentation. |
| Evidence field | 792 | week6/results/additional-analysis.json | /activityGroups/lightIds/363 | Direct evidence; rounded only for presentation. |
| Evidence field | 793 | week6/results/additional-analysis.json | /activityGroups/lightIds/364 | Direct evidence; rounded only for presentation. |
| Evidence field | 794 | week6/results/additional-analysis.json | /activityGroups/lightIds/365 | Direct evidence; rounded only for presentation. |
| Evidence field | 797 | week6/results/additional-analysis.json | /activityGroups/lightIds/366 | Direct evidence; rounded only for presentation. |
| Evidence field | 799 | week6/results/additional-analysis.json | /activityGroups/lightIds/367 | Direct evidence; rounded only for presentation. |
| Evidence field | 800 | week6/results/additional-analysis.json | /activityGroups/lightIds/368 | Direct evidence; rounded only for presentation. |
| Evidence field | 801 | week6/results/additional-analysis.json | /activityGroups/lightIds/369 | Direct evidence; rounded only for presentation. |
| Evidence field | 802 | week6/results/additional-analysis.json | /activityGroups/lightIds/370 | Direct evidence; rounded only for presentation. |
| Evidence field | 803 | week6/results/additional-analysis.json | /activityGroups/lightIds/371 | Direct evidence; rounded only for presentation. |
| Evidence field | 808 | week6/results/additional-analysis.json | /activityGroups/lightIds/372 | Direct evidence; rounded only for presentation. |
| Evidence field | 810 | week6/results/additional-analysis.json | /activityGroups/lightIds/373 | Direct evidence; rounded only for presentation. |
| Evidence field | 811 | week6/results/additional-analysis.json | /activityGroups/lightIds/374 | Direct evidence; rounded only for presentation. |
| Evidence field | 812 | week6/results/additional-analysis.json | /activityGroups/lightIds/375 | Direct evidence; rounded only for presentation. |
| Evidence field | 813 | week6/results/additional-analysis.json | /activityGroups/lightIds/376 | Direct evidence; rounded only for presentation. |
| Evidence field | 816 | week6/results/additional-analysis.json | /activityGroups/lightIds/377 | Direct evidence; rounded only for presentation. |
| Evidence field | 817 | week6/results/additional-analysis.json | /activityGroups/lightIds/378 | Direct evidence; rounded only for presentation. |
| Evidence field | 818 | week6/results/additional-analysis.json | /activityGroups/lightIds/379 | Direct evidence; rounded only for presentation. |
| Evidence field | 819 | week6/results/additional-analysis.json | /activityGroups/lightIds/380 | Direct evidence; rounded only for presentation. |
| Evidence field | 820 | week6/results/additional-analysis.json | /activityGroups/lightIds/381 | Direct evidence; rounded only for presentation. |
| Evidence field | 828 | week6/results/additional-analysis.json | /activityGroups/lightIds/382 | Direct evidence; rounded only for presentation. |
| Evidence field | 829 | week6/results/additional-analysis.json | /activityGroups/lightIds/383 | Direct evidence; rounded only for presentation. |
| Evidence field | 831 | week6/results/additional-analysis.json | /activityGroups/lightIds/384 | Direct evidence; rounded only for presentation. |
| Evidence field | 832 | week6/results/additional-analysis.json | /activityGroups/lightIds/385 | Direct evidence; rounded only for presentation. |
| Evidence field | 834 | week6/results/additional-analysis.json | /activityGroups/lightIds/386 | Direct evidence; rounded only for presentation. |
| Evidence field | 836 | week6/results/additional-analysis.json | /activityGroups/lightIds/387 | Direct evidence; rounded only for presentation. |
| Evidence field | 837 | week6/results/additional-analysis.json | /activityGroups/lightIds/388 | Direct evidence; rounded only for presentation. |
| Evidence field | 839 | week6/results/additional-analysis.json | /activityGroups/lightIds/389 | Direct evidence; rounded only for presentation. |
| Evidence field | 841 | week6/results/additional-analysis.json | /activityGroups/lightIds/390 | Direct evidence; rounded only for presentation. |
| Evidence field | 842 | week6/results/additional-analysis.json | /activityGroups/lightIds/391 | Direct evidence; rounded only for presentation. |
| Evidence field | 843 | week6/results/additional-analysis.json | /activityGroups/lightIds/392 | Direct evidence; rounded only for presentation. |
| Evidence field | 844 | week6/results/additional-analysis.json | /activityGroups/lightIds/393 | Direct evidence; rounded only for presentation. |
| Evidence field | 845 | week6/results/additional-analysis.json | /activityGroups/lightIds/394 | Direct evidence; rounded only for presentation. |
| Evidence field | 849 | week6/results/additional-analysis.json | /activityGroups/lightIds/395 | Direct evidence; rounded only for presentation. |
| Evidence field | 852 | week6/results/additional-analysis.json | /activityGroups/lightIds/396 | Direct evidence; rounded only for presentation. |
| Evidence field | 853 | week6/results/additional-analysis.json | /activityGroups/lightIds/397 | Direct evidence; rounded only for presentation. |
| Evidence field | 855 | week6/results/additional-analysis.json | /activityGroups/lightIds/398 | Direct evidence; rounded only for presentation. |
| Evidence field | 857 | week6/results/additional-analysis.json | /activityGroups/lightIds/399 | Direct evidence; rounded only for presentation. |
| Evidence field | 858 | week6/results/additional-analysis.json | /activityGroups/lightIds/400 | Direct evidence; rounded only for presentation. |
| Evidence field | 859 | week6/results/additional-analysis.json | /activityGroups/lightIds/401 | Direct evidence; rounded only for presentation. |
| Evidence field | 860 | week6/results/additional-analysis.json | /activityGroups/lightIds/402 | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/additional-analysis.json | /activityGroups/lightIds/403 | Direct evidence; rounded only for presentation. |
| Evidence field | 865 | week6/results/additional-analysis.json | /activityGroups/lightIds/404 | Direct evidence; rounded only for presentation. |
| Evidence field | 866 | week6/results/additional-analysis.json | /activityGroups/lightIds/405 | Direct evidence; rounded only for presentation. |
| Evidence field | 869 | week6/results/additional-analysis.json | /activityGroups/lightIds/406 | Direct evidence; rounded only for presentation. |
| Evidence field | 872 | week6/results/additional-analysis.json | /activityGroups/lightIds/407 | Direct evidence; rounded only for presentation. |
| Evidence field | 874 | week6/results/additional-analysis.json | /activityGroups/lightIds/408 | Direct evidence; rounded only for presentation. |
| Evidence field | 876 | week6/results/additional-analysis.json | /activityGroups/lightIds/409 | Direct evidence; rounded only for presentation. |
| Evidence field | 879 | week6/results/additional-analysis.json | /activityGroups/lightIds/410 | Direct evidence; rounded only for presentation. |
| Evidence field | 884 | week6/results/additional-analysis.json | /activityGroups/lightIds/411 | Direct evidence; rounded only for presentation. |
| Evidence field | 888 | week6/results/additional-analysis.json | /activityGroups/lightIds/412 | Direct evidence; rounded only for presentation. |
| Evidence field | 891 | week6/results/additional-analysis.json | /activityGroups/lightIds/413 | Direct evidence; rounded only for presentation. |
| Evidence field | 893 | week6/results/additional-analysis.json | /activityGroups/lightIds/414 | Direct evidence; rounded only for presentation. |
| Evidence field | 895 | week6/results/additional-analysis.json | /activityGroups/lightIds/415 | Direct evidence; rounded only for presentation. |
| Evidence field | 898 | week6/results/additional-analysis.json | /activityGroups/lightIds/416 | Direct evidence; rounded only for presentation. |
| Evidence field | 900 | week6/results/additional-analysis.json | /activityGroups/lightIds/417 | Direct evidence; rounded only for presentation. |
| Evidence field | 902 | week6/results/additional-analysis.json | /activityGroups/lightIds/418 | Direct evidence; rounded only for presentation. |
| Evidence field | 904 | week6/results/additional-analysis.json | /activityGroups/lightIds/419 | Direct evidence; rounded only for presentation. |
| Evidence field | 905 | week6/results/additional-analysis.json | /activityGroups/lightIds/420 | Direct evidence; rounded only for presentation. |
| Evidence field | 906 | week6/results/additional-analysis.json | /activityGroups/lightIds/421 | Direct evidence; rounded only for presentation. |
| Evidence field | 908 | week6/results/additional-analysis.json | /activityGroups/lightIds/422 | Direct evidence; rounded only for presentation. |
| Evidence field | 910 | week6/results/additional-analysis.json | /activityGroups/lightIds/423 | Direct evidence; rounded only for presentation. |
| Evidence field | 912 | week6/results/additional-analysis.json | /activityGroups/lightIds/424 | Direct evidence; rounded only for presentation. |
| Evidence field | 914 | week6/results/additional-analysis.json | /activityGroups/lightIds/425 | Direct evidence; rounded only for presentation. |
| Evidence field | 915 | week6/results/additional-analysis.json | /activityGroups/lightIds/426 | Direct evidence; rounded only for presentation. |
| Evidence field | 917 | week6/results/additional-analysis.json | /activityGroups/lightIds/427 | Direct evidence; rounded only for presentation. |
| Evidence field | 920 | week6/results/additional-analysis.json | /activityGroups/lightIds/428 | Direct evidence; rounded only for presentation. |
| Evidence field | 928 | week6/results/additional-analysis.json | /activityGroups/lightIds/429 | Direct evidence; rounded only for presentation. |
| Evidence field | 929 | week6/results/additional-analysis.json | /activityGroups/lightIds/430 | Direct evidence; rounded only for presentation. |
| Evidence field | 931 | week6/results/additional-analysis.json | /activityGroups/lightIds/431 | Direct evidence; rounded only for presentation. |
| Evidence field | 935 | week6/results/additional-analysis.json | /activityGroups/lightIds/432 | Direct evidence; rounded only for presentation. |
| Evidence field | 937 | week6/results/additional-analysis.json | /activityGroups/lightIds/433 | Direct evidence; rounded only for presentation. |
| Evidence field | 941 | week6/results/additional-analysis.json | /activityGroups/lightIds/434 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /activityGroups/heavyIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/additional-analysis.json | /activityGroups/heavyIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/additional-analysis.json | /activityGroups/heavyIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/additional-analysis.json | /activityGroups/heavyIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/additional-analysis.json | /activityGroups/heavyIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/additional-analysis.json | /activityGroups/heavyIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/additional-analysis.json | /activityGroups/heavyIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-analysis.json | /activityGroups/heavyIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 14 | week6/results/additional-analysis.json | /activityGroups/heavyIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 16 | week6/results/additional-analysis.json | /activityGroups/heavyIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/additional-analysis.json | /activityGroups/heavyIds/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 21 | week6/results/additional-analysis.json | /activityGroups/heavyIds/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/additional-analysis.json | /activityGroups/heavyIds/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 23 | week6/results/additional-analysis.json | /activityGroups/heavyIds/13 | Direct evidence; rounded only for presentation. |
| Evidence field | 24 | week6/results/additional-analysis.json | /activityGroups/heavyIds/14 | Direct evidence; rounded only for presentation. |
| Evidence field | 25 | week6/results/additional-analysis.json | /activityGroups/heavyIds/15 | Direct evidence; rounded only for presentation. |
| Evidence field | 28 | week6/results/additional-analysis.json | /activityGroups/heavyIds/16 | Direct evidence; rounded only for presentation. |
| Evidence field | 38 | week6/results/additional-analysis.json | /activityGroups/heavyIds/17 | Direct evidence; rounded only for presentation. |
| Evidence field | 42 | week6/results/additional-analysis.json | /activityGroups/heavyIds/18 | Direct evidence; rounded only for presentation. |
| Evidence field | 43 | week6/results/additional-analysis.json | /activityGroups/heavyIds/19 | Direct evidence; rounded only for presentation. |
| Evidence field | 44 | week6/results/additional-analysis.json | /activityGroups/heavyIds/20 | Direct evidence; rounded only for presentation. |
| Evidence field | 49 | week6/results/additional-analysis.json | /activityGroups/heavyIds/21 | Direct evidence; rounded only for presentation. |
| Evidence field | 52 | week6/results/additional-analysis.json | /activityGroups/heavyIds/22 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/additional-analysis.json | /activityGroups/heavyIds/23 | Direct evidence; rounded only for presentation. |
| Evidence field | 57 | week6/results/additional-analysis.json | /activityGroups/heavyIds/24 | Direct evidence; rounded only for presentation. |
| Evidence field | 58 | week6/results/additional-analysis.json | /activityGroups/heavyIds/25 | Direct evidence; rounded only for presentation. |
| Evidence field | 59 | week6/results/additional-analysis.json | /activityGroups/heavyIds/26 | Direct evidence; rounded only for presentation. |
| Evidence field | 60 | week6/results/additional-analysis.json | /activityGroups/heavyIds/27 | Direct evidence; rounded only for presentation. |
| Evidence field | 62 | week6/results/additional-analysis.json | /activityGroups/heavyIds/28 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/additional-analysis.json | /activityGroups/heavyIds/29 | Direct evidence; rounded only for presentation. |
| Evidence field | 65 | week6/results/additional-analysis.json | /activityGroups/heavyIds/30 | Direct evidence; rounded only for presentation. |
| Evidence field | 70 | week6/results/additional-analysis.json | /activityGroups/heavyIds/31 | Direct evidence; rounded only for presentation. |
| Evidence field | 72 | week6/results/additional-analysis.json | /activityGroups/heavyIds/32 | Direct evidence; rounded only for presentation. |
| Evidence field | 73 | week6/results/additional-analysis.json | /activityGroups/heavyIds/33 | Direct evidence; rounded only for presentation. |
| Evidence field | 77 | week6/results/additional-analysis.json | /activityGroups/heavyIds/34 | Direct evidence; rounded only for presentation. |
| Evidence field | 83 | week6/results/additional-analysis.json | /activityGroups/heavyIds/35 | Direct evidence; rounded only for presentation. |
| Evidence field | 84 | week6/results/additional-analysis.json | /activityGroups/heavyIds/36 | Direct evidence; rounded only for presentation. |
| Evidence field | 85 | week6/results/additional-analysis.json | /activityGroups/heavyIds/37 | Direct evidence; rounded only for presentation. |
| Evidence field | 87 | week6/results/additional-analysis.json | /activityGroups/heavyIds/38 | Direct evidence; rounded only for presentation. |
| Evidence field | 89 | week6/results/additional-analysis.json | /activityGroups/heavyIds/39 | Direct evidence; rounded only for presentation. |
| Evidence field | 90 | week6/results/additional-analysis.json | /activityGroups/heavyIds/40 | Direct evidence; rounded only for presentation. |
| Evidence field | 91 | week6/results/additional-analysis.json | /activityGroups/heavyIds/41 | Direct evidence; rounded only for presentation. |
| Evidence field | 92 | week6/results/additional-analysis.json | /activityGroups/heavyIds/42 | Direct evidence; rounded only for presentation. |
| Evidence field | 94 | week6/results/additional-analysis.json | /activityGroups/heavyIds/43 | Direct evidence; rounded only for presentation. |
| Evidence field | 95 | week6/results/additional-analysis.json | /activityGroups/heavyIds/44 | Direct evidence; rounded only for presentation. |
| Evidence field | 96 | week6/results/additional-analysis.json | /activityGroups/heavyIds/45 | Direct evidence; rounded only for presentation. |
| Evidence field | 97 | week6/results/additional-analysis.json | /activityGroups/heavyIds/46 | Direct evidence; rounded only for presentation. |
| Evidence field | 99 | week6/results/additional-analysis.json | /activityGroups/heavyIds/47 | Direct evidence; rounded only for presentation. |
| Evidence field | 106 | week6/results/additional-analysis.json | /activityGroups/heavyIds/48 | Direct evidence; rounded only for presentation. |
| Evidence field | 109 | week6/results/additional-analysis.json | /activityGroups/heavyIds/49 | Direct evidence; rounded only for presentation. |
| Evidence field | 115 | week6/results/additional-analysis.json | /activityGroups/heavyIds/50 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/additional-analysis.json | /activityGroups/heavyIds/51 | Direct evidence; rounded only for presentation. |
| Evidence field | 118 | week6/results/additional-analysis.json | /activityGroups/heavyIds/52 | Direct evidence; rounded only for presentation. |
| Evidence field | 119 | week6/results/additional-analysis.json | /activityGroups/heavyIds/53 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/additional-analysis.json | /activityGroups/heavyIds/54 | Direct evidence; rounded only for presentation. |
| Evidence field | 122 | week6/results/additional-analysis.json | /activityGroups/heavyIds/55 | Direct evidence; rounded only for presentation. |
| Evidence field | 125 | week6/results/additional-analysis.json | /activityGroups/heavyIds/56 | Direct evidence; rounded only for presentation. |
| Evidence field | 128 | week6/results/additional-analysis.json | /activityGroups/heavyIds/57 | Direct evidence; rounded only for presentation. |
| Evidence field | 130 | week6/results/additional-analysis.json | /activityGroups/heavyIds/58 | Direct evidence; rounded only for presentation. |
| Evidence field | 138 | week6/results/additional-analysis.json | /activityGroups/heavyIds/59 | Direct evidence; rounded only for presentation. |
| Evidence field | 141 | week6/results/additional-analysis.json | /activityGroups/heavyIds/60 | Direct evidence; rounded only for presentation. |
| Evidence field | 144 | week6/results/additional-analysis.json | /activityGroups/heavyIds/61 | Direct evidence; rounded only for presentation. |
| Evidence field | 145 | week6/results/additional-analysis.json | /activityGroups/heavyIds/62 | Direct evidence; rounded only for presentation. |
| Evidence field | 148 | week6/results/additional-analysis.json | /activityGroups/heavyIds/63 | Direct evidence; rounded only for presentation. |
| Evidence field | 151 | week6/results/additional-analysis.json | /activityGroups/heavyIds/64 | Direct evidence; rounded only for presentation. |
| Evidence field | 152 | week6/results/additional-analysis.json | /activityGroups/heavyIds/65 | Direct evidence; rounded only for presentation. |
| Evidence field | 158 | week6/results/additional-analysis.json | /activityGroups/heavyIds/66 | Direct evidence; rounded only for presentation. |
| Evidence field | 159 | week6/results/additional-analysis.json | /activityGroups/heavyIds/67 | Direct evidence; rounded only for presentation. |
| Evidence field | 160 | week6/results/additional-analysis.json | /activityGroups/heavyIds/68 | Direct evidence; rounded only for presentation. |
| Evidence field | 164 | week6/results/additional-analysis.json | /activityGroups/heavyIds/69 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/additional-analysis.json | /activityGroups/heavyIds/70 | Direct evidence; rounded only for presentation. |
| Evidence field | 177 | week6/results/additional-analysis.json | /activityGroups/heavyIds/71 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/additional-analysis.json | /activityGroups/heavyIds/72 | Direct evidence; rounded only for presentation. |
| Evidence field | 184 | week6/results/additional-analysis.json | /activityGroups/heavyIds/73 | Direct evidence; rounded only for presentation. |
| Evidence field | 186 | week6/results/additional-analysis.json | /activityGroups/heavyIds/74 | Direct evidence; rounded only for presentation. |
| Evidence field | 187 | week6/results/additional-analysis.json | /activityGroups/heavyIds/75 | Direct evidence; rounded only for presentation. |
| Evidence field | 188 | week6/results/additional-analysis.json | /activityGroups/heavyIds/76 | Direct evidence; rounded only for presentation. |
| Evidence field | 189 | week6/results/additional-analysis.json | /activityGroups/heavyIds/77 | Direct evidence; rounded only for presentation. |
| Evidence field | 193 | week6/results/additional-analysis.json | /activityGroups/heavyIds/78 | Direct evidence; rounded only for presentation. |
| Evidence field | 194 | week6/results/additional-analysis.json | /activityGroups/heavyIds/79 | Direct evidence; rounded only for presentation. |
| Evidence field | 197 | week6/results/additional-analysis.json | /activityGroups/heavyIds/80 | Direct evidence; rounded only for presentation. |
| Evidence field | 198 | week6/results/additional-analysis.json | /activityGroups/heavyIds/81 | Direct evidence; rounded only for presentation. |
| Evidence field | 200 | week6/results/additional-analysis.json | /activityGroups/heavyIds/82 | Direct evidence; rounded only for presentation. |
| Evidence field | 201 | week6/results/additional-analysis.json | /activityGroups/heavyIds/83 | Direct evidence; rounded only for presentation. |
| Evidence field | 207 | week6/results/additional-analysis.json | /activityGroups/heavyIds/84 | Direct evidence; rounded only for presentation. |
| Evidence field | 210 | week6/results/additional-analysis.json | /activityGroups/heavyIds/85 | Direct evidence; rounded only for presentation. |
| Evidence field | 213 | week6/results/additional-analysis.json | /activityGroups/heavyIds/86 | Direct evidence; rounded only for presentation. |
| Evidence field | 214 | week6/results/additional-analysis.json | /activityGroups/heavyIds/87 | Direct evidence; rounded only for presentation. |
| Evidence field | 215 | week6/results/additional-analysis.json | /activityGroups/heavyIds/88 | Direct evidence; rounded only for presentation. |
| Evidence field | 216 | week6/results/additional-analysis.json | /activityGroups/heavyIds/89 | Direct evidence; rounded only for presentation. |
| Evidence field | 221 | week6/results/additional-analysis.json | /activityGroups/heavyIds/90 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/additional-analysis.json | /activityGroups/heavyIds/91 | Direct evidence; rounded only for presentation. |
| Evidence field | 224 | week6/results/additional-analysis.json | /activityGroups/heavyIds/92 | Direct evidence; rounded only for presentation. |
| Evidence field | 230 | week6/results/additional-analysis.json | /activityGroups/heavyIds/93 | Direct evidence; rounded only for presentation. |
| Evidence field | 232 | week6/results/additional-analysis.json | /activityGroups/heavyIds/94 | Direct evidence; rounded only for presentation. |
| Evidence field | 233 | week6/results/additional-analysis.json | /activityGroups/heavyIds/95 | Direct evidence; rounded only for presentation. |
| Evidence field | 234 | week6/results/additional-analysis.json | /activityGroups/heavyIds/96 | Direct evidence; rounded only for presentation. |
| Evidence field | 235 | week6/results/additional-analysis.json | /activityGroups/heavyIds/97 | Direct evidence; rounded only for presentation. |
| Evidence field | 236 | week6/results/additional-analysis.json | /activityGroups/heavyIds/98 | Direct evidence; rounded only for presentation. |
| Evidence field | 239 | week6/results/additional-analysis.json | /activityGroups/heavyIds/99 | Direct evidence; rounded only for presentation. |
| Evidence field | 244 | week6/results/additional-analysis.json | /activityGroups/heavyIds/100 | Direct evidence; rounded only for presentation. |
| Evidence field | 246 | week6/results/additional-analysis.json | /activityGroups/heavyIds/101 | Direct evidence; rounded only for presentation. |
| Evidence field | 249 | week6/results/additional-analysis.json | /activityGroups/heavyIds/102 | Direct evidence; rounded only for presentation. |
| Evidence field | 250 | week6/results/additional-analysis.json | /activityGroups/heavyIds/103 | Direct evidence; rounded only for presentation. |
| Evidence field | 251 | week6/results/additional-analysis.json | /activityGroups/heavyIds/104 | Direct evidence; rounded only for presentation. |
| Evidence field | 253 | week6/results/additional-analysis.json | /activityGroups/heavyIds/105 | Direct evidence; rounded only for presentation. |
| Evidence field | 254 | week6/results/additional-analysis.json | /activityGroups/heavyIds/106 | Direct evidence; rounded only for presentation. |
| Evidence field | 256 | week6/results/additional-analysis.json | /activityGroups/heavyIds/107 | Direct evidence; rounded only for presentation. |
| Evidence field | 257 | week6/results/additional-analysis.json | /activityGroups/heavyIds/108 | Direct evidence; rounded only for presentation. |
| Evidence field | 262 | week6/results/additional-analysis.json | /activityGroups/heavyIds/109 | Direct evidence; rounded only for presentation. |
| Evidence field | 263 | week6/results/additional-analysis.json | /activityGroups/heavyIds/110 | Direct evidence; rounded only for presentation. |
| Evidence field | 264 | week6/results/additional-analysis.json | /activityGroups/heavyIds/111 | Direct evidence; rounded only for presentation. |
| Evidence field | 267 | week6/results/additional-analysis.json | /activityGroups/heavyIds/112 | Direct evidence; rounded only for presentation. |
| Evidence field | 268 | week6/results/additional-analysis.json | /activityGroups/heavyIds/113 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/additional-analysis.json | /activityGroups/heavyIds/114 | Direct evidence; rounded only for presentation. |
| Evidence field | 270 | week6/results/additional-analysis.json | /activityGroups/heavyIds/115 | Direct evidence; rounded only for presentation. |
| Evidence field | 271 | week6/results/additional-analysis.json | /activityGroups/heavyIds/116 | Direct evidence; rounded only for presentation. |
| Evidence field | 272 | week6/results/additional-analysis.json | /activityGroups/heavyIds/117 | Direct evidence; rounded only for presentation. |
| Evidence field | 274 | week6/results/additional-analysis.json | /activityGroups/heavyIds/118 | Direct evidence; rounded only for presentation. |
| Evidence field | 276 | week6/results/additional-analysis.json | /activityGroups/heavyIds/119 | Direct evidence; rounded only for presentation. |
| Evidence field | 279 | week6/results/additional-analysis.json | /activityGroups/heavyIds/120 | Direct evidence; rounded only for presentation. |
| Evidence field | 280 | week6/results/additional-analysis.json | /activityGroups/heavyIds/121 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/additional-analysis.json | /activityGroups/heavyIds/122 | Direct evidence; rounded only for presentation. |
| Evidence field | 287 | week6/results/additional-analysis.json | /activityGroups/heavyIds/123 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/additional-analysis.json | /activityGroups/heavyIds/124 | Direct evidence; rounded only for presentation. |
| Evidence field | 290 | week6/results/additional-analysis.json | /activityGroups/heavyIds/125 | Direct evidence; rounded only for presentation. |
| Evidence field | 291 | week6/results/additional-analysis.json | /activityGroups/heavyIds/126 | Direct evidence; rounded only for presentation. |
| Evidence field | 292 | week6/results/additional-analysis.json | /activityGroups/heavyIds/127 | Direct evidence; rounded only for presentation. |
| Evidence field | 294 | week6/results/additional-analysis.json | /activityGroups/heavyIds/128 | Direct evidence; rounded only for presentation. |
| Evidence field | 295 | week6/results/additional-analysis.json | /activityGroups/heavyIds/129 | Direct evidence; rounded only for presentation. |
| Evidence field | 296 | week6/results/additional-analysis.json | /activityGroups/heavyIds/130 | Direct evidence; rounded only for presentation. |
| Evidence field | 297 | week6/results/additional-analysis.json | /activityGroups/heavyIds/131 | Direct evidence; rounded only for presentation. |
| Evidence field | 298 | week6/results/additional-analysis.json | /activityGroups/heavyIds/132 | Direct evidence; rounded only for presentation. |
| Evidence field | 299 | week6/results/additional-analysis.json | /activityGroups/heavyIds/133 | Direct evidence; rounded only for presentation. |
| Evidence field | 301 | week6/results/additional-analysis.json | /activityGroups/heavyIds/134 | Direct evidence; rounded only for presentation. |
| Evidence field | 303 | week6/results/additional-analysis.json | /activityGroups/heavyIds/135 | Direct evidence; rounded only for presentation. |
| Evidence field | 305 | week6/results/additional-analysis.json | /activityGroups/heavyIds/136 | Direct evidence; rounded only for presentation. |
| Evidence field | 307 | week6/results/additional-analysis.json | /activityGroups/heavyIds/137 | Direct evidence; rounded only for presentation. |
| Evidence field | 308 | week6/results/additional-analysis.json | /activityGroups/heavyIds/138 | Direct evidence; rounded only for presentation. |
| Evidence field | 311 | week6/results/additional-analysis.json | /activityGroups/heavyIds/139 | Direct evidence; rounded only for presentation. |
| Evidence field | 312 | week6/results/additional-analysis.json | /activityGroups/heavyIds/140 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/additional-analysis.json | /activityGroups/heavyIds/141 | Direct evidence; rounded only for presentation. |
| Evidence field | 314 | week6/results/additional-analysis.json | /activityGroups/heavyIds/142 | Direct evidence; rounded only for presentation. |
| Evidence field | 315 | week6/results/additional-analysis.json | /activityGroups/heavyIds/143 | Direct evidence; rounded only for presentation. |
| Evidence field | 316 | week6/results/additional-analysis.json | /activityGroups/heavyIds/144 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/additional-analysis.json | /activityGroups/heavyIds/145 | Direct evidence; rounded only for presentation. |
| Evidence field | 320 | week6/results/additional-analysis.json | /activityGroups/heavyIds/146 | Direct evidence; rounded only for presentation. |
| Evidence field | 321 | week6/results/additional-analysis.json | /activityGroups/heavyIds/147 | Direct evidence; rounded only for presentation. |
| Evidence field | 324 | week6/results/additional-analysis.json | /activityGroups/heavyIds/148 | Direct evidence; rounded only for presentation. |
| Evidence field | 325 | week6/results/additional-analysis.json | /activityGroups/heavyIds/149 | Direct evidence; rounded only for presentation. |
| Evidence field | 326 | week6/results/additional-analysis.json | /activityGroups/heavyIds/150 | Direct evidence; rounded only for presentation. |
| Evidence field | 327 | week6/results/additional-analysis.json | /activityGroups/heavyIds/151 | Direct evidence; rounded only for presentation. |
| Evidence field | 328 | week6/results/additional-analysis.json | /activityGroups/heavyIds/152 | Direct evidence; rounded only for presentation. |
| Evidence field | 330 | week6/results/additional-analysis.json | /activityGroups/heavyIds/153 | Direct evidence; rounded only for presentation. |
| Evidence field | 332 | week6/results/additional-analysis.json | /activityGroups/heavyIds/154 | Direct evidence; rounded only for presentation. |
| Evidence field | 334 | week6/results/additional-analysis.json | /activityGroups/heavyIds/155 | Direct evidence; rounded only for presentation. |
| Evidence field | 338 | week6/results/additional-analysis.json | /activityGroups/heavyIds/156 | Direct evidence; rounded only for presentation. |
| Evidence field | 339 | week6/results/additional-analysis.json | /activityGroups/heavyIds/157 | Direct evidence; rounded only for presentation. |
| Evidence field | 342 | week6/results/additional-analysis.json | /activityGroups/heavyIds/158 | Direct evidence; rounded only for presentation. |
| Evidence field | 343 | week6/results/additional-analysis.json | /activityGroups/heavyIds/159 | Direct evidence; rounded only for presentation. |
| Evidence field | 344 | week6/results/additional-analysis.json | /activityGroups/heavyIds/160 | Direct evidence; rounded only for presentation. |
| Evidence field | 345 | week6/results/additional-analysis.json | /activityGroups/heavyIds/161 | Direct evidence; rounded only for presentation. |
| Evidence field | 346 | week6/results/additional-analysis.json | /activityGroups/heavyIds/162 | Direct evidence; rounded only for presentation. |
| Evidence field | 347 | week6/results/additional-analysis.json | /activityGroups/heavyIds/163 | Direct evidence; rounded only for presentation. |
| Evidence field | 348 | week6/results/additional-analysis.json | /activityGroups/heavyIds/164 | Direct evidence; rounded only for presentation. |
| Evidence field | 354 | week6/results/additional-analysis.json | /activityGroups/heavyIds/165 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/additional-analysis.json | /activityGroups/heavyIds/166 | Direct evidence; rounded only for presentation. |
| Evidence field | 360 | week6/results/additional-analysis.json | /activityGroups/heavyIds/167 | Direct evidence; rounded only for presentation. |
| Evidence field | 361 | week6/results/additional-analysis.json | /activityGroups/heavyIds/168 | Direct evidence; rounded only for presentation. |
| Evidence field | 363 | week6/results/additional-analysis.json | /activityGroups/heavyIds/169 | Direct evidence; rounded only for presentation. |
| Evidence field | 367 | week6/results/additional-analysis.json | /activityGroups/heavyIds/170 | Direct evidence; rounded only for presentation. |
| Evidence field | 372 | week6/results/additional-analysis.json | /activityGroups/heavyIds/171 | Direct evidence; rounded only for presentation. |
| Evidence field | 373 | week6/results/additional-analysis.json | /activityGroups/heavyIds/172 | Direct evidence; rounded only for presentation. |
| Evidence field | 374 | week6/results/additional-analysis.json | /activityGroups/heavyIds/173 | Direct evidence; rounded only for presentation. |
| Evidence field | 378 | week6/results/additional-analysis.json | /activityGroups/heavyIds/174 | Direct evidence; rounded only for presentation. |
| Evidence field | 379 | week6/results/additional-analysis.json | /activityGroups/heavyIds/175 | Direct evidence; rounded only for presentation. |
| Evidence field | 381 | week6/results/additional-analysis.json | /activityGroups/heavyIds/176 | Direct evidence; rounded only for presentation. |
| Evidence field | 383 | week6/results/additional-analysis.json | /activityGroups/heavyIds/177 | Direct evidence; rounded only for presentation. |
| Evidence field | 385 | week6/results/additional-analysis.json | /activityGroups/heavyIds/178 | Direct evidence; rounded only for presentation. |
| Evidence field | 387 | week6/results/additional-analysis.json | /activityGroups/heavyIds/179 | Direct evidence; rounded only for presentation. |
| Evidence field | 389 | week6/results/additional-analysis.json | /activityGroups/heavyIds/180 | Direct evidence; rounded only for presentation. |
| Evidence field | 391 | week6/results/additional-analysis.json | /activityGroups/heavyIds/181 | Direct evidence; rounded only for presentation. |
| Evidence field | 392 | week6/results/additional-analysis.json | /activityGroups/heavyIds/182 | Direct evidence; rounded only for presentation. |
| Evidence field | 393 | week6/results/additional-analysis.json | /activityGroups/heavyIds/183 | Direct evidence; rounded only for presentation. |
| Evidence field | 394 | week6/results/additional-analysis.json | /activityGroups/heavyIds/184 | Direct evidence; rounded only for presentation. |
| Evidence field | 397 | week6/results/additional-analysis.json | /activityGroups/heavyIds/185 | Direct evidence; rounded only for presentation. |
| Evidence field | 398 | week6/results/additional-analysis.json | /activityGroups/heavyIds/186 | Direct evidence; rounded only for presentation. |
| Evidence field | 401 | week6/results/additional-analysis.json | /activityGroups/heavyIds/187 | Direct evidence; rounded only for presentation. |
| Evidence field | 402 | week6/results/additional-analysis.json | /activityGroups/heavyIds/188 | Direct evidence; rounded only for presentation. |
| Evidence field | 406 | week6/results/additional-analysis.json | /activityGroups/heavyIds/189 | Direct evidence; rounded only for presentation. |
| Evidence field | 407 | week6/results/additional-analysis.json | /activityGroups/heavyIds/190 | Direct evidence; rounded only for presentation. |
| Evidence field | 409 | week6/results/additional-analysis.json | /activityGroups/heavyIds/191 | Direct evidence; rounded only for presentation. |
| Evidence field | 416 | week6/results/additional-analysis.json | /activityGroups/heavyIds/192 | Direct evidence; rounded only for presentation. |
| Evidence field | 417 | week6/results/additional-analysis.json | /activityGroups/heavyIds/193 | Direct evidence; rounded only for presentation. |
| Evidence field | 421 | week6/results/additional-analysis.json | /activityGroups/heavyIds/194 | Direct evidence; rounded only for presentation. |
| Evidence field | 422 | week6/results/additional-analysis.json | /activityGroups/heavyIds/195 | Direct evidence; rounded only for presentation. |
| Evidence field | 425 | week6/results/additional-analysis.json | /activityGroups/heavyIds/196 | Direct evidence; rounded only for presentation. |
| Evidence field | 426 | week6/results/additional-analysis.json | /activityGroups/heavyIds/197 | Direct evidence; rounded only for presentation. |
| Evidence field | 428 | week6/results/additional-analysis.json | /activityGroups/heavyIds/198 | Direct evidence; rounded only for presentation. |
| Evidence field | 429 | week6/results/additional-analysis.json | /activityGroups/heavyIds/199 | Direct evidence; rounded only for presentation. |
| Evidence field | 435 | week6/results/additional-analysis.json | /activityGroups/heavyIds/200 | Direct evidence; rounded only for presentation. |
| Evidence field | 436 | week6/results/additional-analysis.json | /activityGroups/heavyIds/201 | Direct evidence; rounded only for presentation. |
| Evidence field | 437 | week6/results/additional-analysis.json | /activityGroups/heavyIds/202 | Direct evidence; rounded only for presentation. |
| Evidence field | 442 | week6/results/additional-analysis.json | /activityGroups/heavyIds/203 | Direct evidence; rounded only for presentation. |
| Evidence field | 447 | week6/results/additional-analysis.json | /activityGroups/heavyIds/204 | Direct evidence; rounded only for presentation. |
| Evidence field | 449 | week6/results/additional-analysis.json | /activityGroups/heavyIds/205 | Direct evidence; rounded only for presentation. |
| Evidence field | 450 | week6/results/additional-analysis.json | /activityGroups/heavyIds/206 | Direct evidence; rounded only for presentation. |
| Evidence field | 451 | week6/results/additional-analysis.json | /activityGroups/heavyIds/207 | Direct evidence; rounded only for presentation. |
| Evidence field | 452 | week6/results/additional-analysis.json | /activityGroups/heavyIds/208 | Direct evidence; rounded only for presentation. |
| Evidence field | 454 | week6/results/additional-analysis.json | /activityGroups/heavyIds/209 | Direct evidence; rounded only for presentation. |
| Evidence field | 455 | week6/results/additional-analysis.json | /activityGroups/heavyIds/210 | Direct evidence; rounded only for presentation. |
| Evidence field | 456 | week6/results/additional-analysis.json | /activityGroups/heavyIds/211 | Direct evidence; rounded only for presentation. |
| Evidence field | 457 | week6/results/additional-analysis.json | /activityGroups/heavyIds/212 | Direct evidence; rounded only for presentation. |
| Evidence field | 458 | week6/results/additional-analysis.json | /activityGroups/heavyIds/213 | Direct evidence; rounded only for presentation. |
| Evidence field | 459 | week6/results/additional-analysis.json | /activityGroups/heavyIds/214 | Direct evidence; rounded only for presentation. |
| Evidence field | 463 | week6/results/additional-analysis.json | /activityGroups/heavyIds/215 | Direct evidence; rounded only for presentation. |
| Evidence field | 466 | week6/results/additional-analysis.json | /activityGroups/heavyIds/216 | Direct evidence; rounded only for presentation. |
| Evidence field | 468 | week6/results/additional-analysis.json | /activityGroups/heavyIds/217 | Direct evidence; rounded only for presentation. |
| Evidence field | 472 | week6/results/additional-analysis.json | /activityGroups/heavyIds/218 | Direct evidence; rounded only for presentation. |
| Evidence field | 474 | week6/results/additional-analysis.json | /activityGroups/heavyIds/219 | Direct evidence; rounded only for presentation. |
| Evidence field | 476 | week6/results/additional-analysis.json | /activityGroups/heavyIds/220 | Direct evidence; rounded only for presentation. |
| Evidence field | 478 | week6/results/additional-analysis.json | /activityGroups/heavyIds/221 | Direct evidence; rounded only for presentation. |
| Evidence field | 479 | week6/results/additional-analysis.json | /activityGroups/heavyIds/222 | Direct evidence; rounded only for presentation. |
| Evidence field | 480 | week6/results/additional-analysis.json | /activityGroups/heavyIds/223 | Direct evidence; rounded only for presentation. |
| Evidence field | 481 | week6/results/additional-analysis.json | /activityGroups/heavyIds/224 | Direct evidence; rounded only for presentation. |
| Evidence field | 484 | week6/results/additional-analysis.json | /activityGroups/heavyIds/225 | Direct evidence; rounded only for presentation. |
| Evidence field | 486 | week6/results/additional-analysis.json | /activityGroups/heavyIds/226 | Direct evidence; rounded only for presentation. |
| Evidence field | 487 | week6/results/additional-analysis.json | /activityGroups/heavyIds/227 | Direct evidence; rounded only for presentation. |
| Evidence field | 488 | week6/results/additional-analysis.json | /activityGroups/heavyIds/228 | Direct evidence; rounded only for presentation. |
| Evidence field | 489 | week6/results/additional-analysis.json | /activityGroups/heavyIds/229 | Direct evidence; rounded only for presentation. |
| Evidence field | 493 | week6/results/additional-analysis.json | /activityGroups/heavyIds/230 | Direct evidence; rounded only for presentation. |
| Evidence field | 495 | week6/results/additional-analysis.json | /activityGroups/heavyIds/231 | Direct evidence; rounded only for presentation. |
| Evidence field | 497 | week6/results/additional-analysis.json | /activityGroups/heavyIds/232 | Direct evidence; rounded only for presentation. |
| Evidence field | 498 | week6/results/additional-analysis.json | /activityGroups/heavyIds/233 | Direct evidence; rounded only for presentation. |
| Evidence field | 499 | week6/results/additional-analysis.json | /activityGroups/heavyIds/234 | Direct evidence; rounded only for presentation. |
| Evidence field | 500 | week6/results/additional-analysis.json | /activityGroups/heavyIds/235 | Direct evidence; rounded only for presentation. |
| Evidence field | 501 | week6/results/additional-analysis.json | /activityGroups/heavyIds/236 | Direct evidence; rounded only for presentation. |
| Evidence field | 503 | week6/results/additional-analysis.json | /activityGroups/heavyIds/237 | Direct evidence; rounded only for presentation. |
| Evidence field | 504 | week6/results/additional-analysis.json | /activityGroups/heavyIds/238 | Direct evidence; rounded only for presentation. |
| Evidence field | 505 | week6/results/additional-analysis.json | /activityGroups/heavyIds/239 | Direct evidence; rounded only for presentation. |
| Evidence field | 506 | week6/results/additional-analysis.json | /activityGroups/heavyIds/240 | Direct evidence; rounded only for presentation. |
| Evidence field | 507 | week6/results/additional-analysis.json | /activityGroups/heavyIds/241 | Direct evidence; rounded only for presentation. |
| Evidence field | 508 | week6/results/additional-analysis.json | /activityGroups/heavyIds/242 | Direct evidence; rounded only for presentation. |
| Evidence field | 514 | week6/results/additional-analysis.json | /activityGroups/heavyIds/243 | Direct evidence; rounded only for presentation. |
| Evidence field | 518 | week6/results/additional-analysis.json | /activityGroups/heavyIds/244 | Direct evidence; rounded only for presentation. |
| Evidence field | 521 | week6/results/additional-analysis.json | /activityGroups/heavyIds/245 | Direct evidence; rounded only for presentation. |
| Evidence field | 524 | week6/results/additional-analysis.json | /activityGroups/heavyIds/246 | Direct evidence; rounded only for presentation. |
| Evidence field | 527 | week6/results/additional-analysis.json | /activityGroups/heavyIds/247 | Direct evidence; rounded only for presentation. |
| Evidence field | 532 | week6/results/additional-analysis.json | /activityGroups/heavyIds/248 | Direct evidence; rounded only for presentation. |
| Evidence field | 533 | week6/results/additional-analysis.json | /activityGroups/heavyIds/249 | Direct evidence; rounded only for presentation. |
| Evidence field | 534 | week6/results/additional-analysis.json | /activityGroups/heavyIds/250 | Direct evidence; rounded only for presentation. |
| Evidence field | 535 | week6/results/additional-analysis.json | /activityGroups/heavyIds/251 | Direct evidence; rounded only for presentation. |
| Evidence field | 536 | week6/results/additional-analysis.json | /activityGroups/heavyIds/252 | Direct evidence; rounded only for presentation. |
| Evidence field | 537 | week6/results/additional-analysis.json | /activityGroups/heavyIds/253 | Direct evidence; rounded only for presentation. |
| Evidence field | 538 | week6/results/additional-analysis.json | /activityGroups/heavyIds/254 | Direct evidence; rounded only for presentation. |
| Evidence field | 540 | week6/results/additional-analysis.json | /activityGroups/heavyIds/255 | Direct evidence; rounded only for presentation. |
| Evidence field | 541 | week6/results/additional-analysis.json | /activityGroups/heavyIds/256 | Direct evidence; rounded only for presentation. |
| Evidence field | 542 | week6/results/additional-analysis.json | /activityGroups/heavyIds/257 | Direct evidence; rounded only for presentation. |
| Evidence field | 543 | week6/results/additional-analysis.json | /activityGroups/heavyIds/258 | Direct evidence; rounded only for presentation. |
| Evidence field | 545 | week6/results/additional-analysis.json | /activityGroups/heavyIds/259 | Direct evidence; rounded only for presentation. |
| Evidence field | 548 | week6/results/additional-analysis.json | /activityGroups/heavyIds/260 | Direct evidence; rounded only for presentation. |
| Evidence field | 551 | week6/results/additional-analysis.json | /activityGroups/heavyIds/261 | Direct evidence; rounded only for presentation. |
| Evidence field | 553 | week6/results/additional-analysis.json | /activityGroups/heavyIds/262 | Direct evidence; rounded only for presentation. |
| Evidence field | 554 | week6/results/additional-analysis.json | /activityGroups/heavyIds/263 | Direct evidence; rounded only for presentation. |
| Evidence field | 559 | week6/results/additional-analysis.json | /activityGroups/heavyIds/264 | Direct evidence; rounded only for presentation. |
| Evidence field | 560 | week6/results/additional-analysis.json | /activityGroups/heavyIds/265 | Direct evidence; rounded only for presentation. |
| Evidence field | 561 | week6/results/additional-analysis.json | /activityGroups/heavyIds/266 | Direct evidence; rounded only for presentation. |
| Evidence field | 562 | week6/results/additional-analysis.json | /activityGroups/heavyIds/267 | Direct evidence; rounded only for presentation. |
| Evidence field | 566 | week6/results/additional-analysis.json | /activityGroups/heavyIds/268 | Direct evidence; rounded only for presentation. |
| Evidence field | 567 | week6/results/additional-analysis.json | /activityGroups/heavyIds/269 | Direct evidence; rounded only for presentation. |
| Evidence field | 577 | week6/results/additional-analysis.json | /activityGroups/heavyIds/270 | Direct evidence; rounded only for presentation. |
| Evidence field | 585 | week6/results/additional-analysis.json | /activityGroups/heavyIds/271 | Direct evidence; rounded only for presentation. |
| Evidence field | 586 | week6/results/additional-analysis.json | /activityGroups/heavyIds/272 | Direct evidence; rounded only for presentation. |
| Evidence field | 588 | week6/results/additional-analysis.json | /activityGroups/heavyIds/273 | Direct evidence; rounded only for presentation. |
| Evidence field | 591 | week6/results/additional-analysis.json | /activityGroups/heavyIds/274 | Direct evidence; rounded only for presentation. |
| Evidence field | 592 | week6/results/additional-analysis.json | /activityGroups/heavyIds/275 | Direct evidence; rounded only for presentation. |
| Evidence field | 593 | week6/results/additional-analysis.json | /activityGroups/heavyIds/276 | Direct evidence; rounded only for presentation. |
| Evidence field | 600 | week6/results/additional-analysis.json | /activityGroups/heavyIds/277 | Direct evidence; rounded only for presentation. |
| Evidence field | 601 | week6/results/additional-analysis.json | /activityGroups/heavyIds/278 | Direct evidence; rounded only for presentation. |
| Evidence field | 605 | week6/results/additional-analysis.json | /activityGroups/heavyIds/279 | Direct evidence; rounded only for presentation. |
| Evidence field | 606 | week6/results/additional-analysis.json | /activityGroups/heavyIds/280 | Direct evidence; rounded only for presentation. |
| Evidence field | 608 | week6/results/additional-analysis.json | /activityGroups/heavyIds/281 | Direct evidence; rounded only for presentation. |
| Evidence field | 610 | week6/results/additional-analysis.json | /activityGroups/heavyIds/282 | Direct evidence; rounded only for presentation. |
| Evidence field | 615 | week6/results/additional-analysis.json | /activityGroups/heavyIds/283 | Direct evidence; rounded only for presentation. |
| Evidence field | 618 | week6/results/additional-analysis.json | /activityGroups/heavyIds/284 | Direct evidence; rounded only for presentation. |
| Evidence field | 619 | week6/results/additional-analysis.json | /activityGroups/heavyIds/285 | Direct evidence; rounded only for presentation. |
| Evidence field | 620 | week6/results/additional-analysis.json | /activityGroups/heavyIds/286 | Direct evidence; rounded only for presentation. |
| Evidence field | 621 | week6/results/additional-analysis.json | /activityGroups/heavyIds/287 | Direct evidence; rounded only for presentation. |
| Evidence field | 622 | week6/results/additional-analysis.json | /activityGroups/heavyIds/288 | Direct evidence; rounded only for presentation. |
| Evidence field | 624 | week6/results/additional-analysis.json | /activityGroups/heavyIds/289 | Direct evidence; rounded only for presentation. |
| Evidence field | 625 | week6/results/additional-analysis.json | /activityGroups/heavyIds/290 | Direct evidence; rounded only for presentation. |
| Evidence field | 627 | week6/results/additional-analysis.json | /activityGroups/heavyIds/291 | Direct evidence; rounded only for presentation. |
| Evidence field | 629 | week6/results/additional-analysis.json | /activityGroups/heavyIds/292 | Direct evidence; rounded only for presentation. |
| Evidence field | 630 | week6/results/additional-analysis.json | /activityGroups/heavyIds/293 | Direct evidence; rounded only for presentation. |
| Evidence field | 632 | week6/results/additional-analysis.json | /activityGroups/heavyIds/294 | Direct evidence; rounded only for presentation. |
| Evidence field | 634 | week6/results/additional-analysis.json | /activityGroups/heavyIds/295 | Direct evidence; rounded only for presentation. |
| Evidence field | 639 | week6/results/additional-analysis.json | /activityGroups/heavyIds/296 | Direct evidence; rounded only for presentation. |
| Evidence field | 640 | week6/results/additional-analysis.json | /activityGroups/heavyIds/297 | Direct evidence; rounded only for presentation. |
| Evidence field | 642 | week6/results/additional-analysis.json | /activityGroups/heavyIds/298 | Direct evidence; rounded only for presentation. |
| Evidence field | 643 | week6/results/additional-analysis.json | /activityGroups/heavyIds/299 | Direct evidence; rounded only for presentation. |
| Evidence field | 645 | week6/results/additional-analysis.json | /activityGroups/heavyIds/300 | Direct evidence; rounded only for presentation. |
| Evidence field | 648 | week6/results/additional-analysis.json | /activityGroups/heavyIds/301 | Direct evidence; rounded only for presentation. |
| Evidence field | 650 | week6/results/additional-analysis.json | /activityGroups/heavyIds/302 | Direct evidence; rounded only for presentation. |
| Evidence field | 653 | week6/results/additional-analysis.json | /activityGroups/heavyIds/303 | Direct evidence; rounded only for presentation. |
| Evidence field | 654 | week6/results/additional-analysis.json | /activityGroups/heavyIds/304 | Direct evidence; rounded only for presentation. |
| Evidence field | 655 | week6/results/additional-analysis.json | /activityGroups/heavyIds/305 | Direct evidence; rounded only for presentation. |
| Evidence field | 658 | week6/results/additional-analysis.json | /activityGroups/heavyIds/306 | Direct evidence; rounded only for presentation. |
| Evidence field | 659 | week6/results/additional-analysis.json | /activityGroups/heavyIds/307 | Direct evidence; rounded only for presentation. |
| Evidence field | 660 | week6/results/additional-analysis.json | /activityGroups/heavyIds/308 | Direct evidence; rounded only for presentation. |
| Evidence field | 661 | week6/results/additional-analysis.json | /activityGroups/heavyIds/309 | Direct evidence; rounded only for presentation. |
| Evidence field | 663 | week6/results/additional-analysis.json | /activityGroups/heavyIds/310 | Direct evidence; rounded only for presentation. |
| Evidence field | 664 | week6/results/additional-analysis.json | /activityGroups/heavyIds/311 | Direct evidence; rounded only for presentation. |
| Evidence field | 665 | week6/results/additional-analysis.json | /activityGroups/heavyIds/312 | Direct evidence; rounded only for presentation. |
| Evidence field | 666 | week6/results/additional-analysis.json | /activityGroups/heavyIds/313 | Direct evidence; rounded only for presentation. |
| Evidence field | 669 | week6/results/additional-analysis.json | /activityGroups/heavyIds/314 | Direct evidence; rounded only for presentation. |
| Evidence field | 671 | week6/results/additional-analysis.json | /activityGroups/heavyIds/315 | Direct evidence; rounded only for presentation. |
| Evidence field | 676 | week6/results/additional-analysis.json | /activityGroups/heavyIds/316 | Direct evidence; rounded only for presentation. |
| Evidence field | 682 | week6/results/additional-analysis.json | /activityGroups/heavyIds/317 | Direct evidence; rounded only for presentation. |
| Evidence field | 684 | week6/results/additional-analysis.json | /activityGroups/heavyIds/318 | Direct evidence; rounded only for presentation. |
| Evidence field | 686 | week6/results/additional-analysis.json | /activityGroups/heavyIds/319 | Direct evidence; rounded only for presentation. |
| Evidence field | 690 | week6/results/additional-analysis.json | /activityGroups/heavyIds/320 | Direct evidence; rounded only for presentation. |
| Evidence field | 693 | week6/results/additional-analysis.json | /activityGroups/heavyIds/321 | Direct evidence; rounded only for presentation. |
| Evidence field | 694 | week6/results/additional-analysis.json | /activityGroups/heavyIds/322 | Direct evidence; rounded only for presentation. |
| Evidence field | 697 | week6/results/additional-analysis.json | /activityGroups/heavyIds/323 | Direct evidence; rounded only for presentation. |
| Evidence field | 699 | week6/results/additional-analysis.json | /activityGroups/heavyIds/324 | Direct evidence; rounded only for presentation. |
| Evidence field | 704 | week6/results/additional-analysis.json | /activityGroups/heavyIds/325 | Direct evidence; rounded only for presentation. |
| Evidence field | 705 | week6/results/additional-analysis.json | /activityGroups/heavyIds/326 | Direct evidence; rounded only for presentation. |
| Evidence field | 707 | week6/results/additional-analysis.json | /activityGroups/heavyIds/327 | Direct evidence; rounded only for presentation. |
| Evidence field | 708 | week6/results/additional-analysis.json | /activityGroups/heavyIds/328 | Direct evidence; rounded only for presentation. |
| Evidence field | 709 | week6/results/additional-analysis.json | /activityGroups/heavyIds/329 | Direct evidence; rounded only for presentation. |
| Evidence field | 710 | week6/results/additional-analysis.json | /activityGroups/heavyIds/330 | Direct evidence; rounded only for presentation. |
| Evidence field | 711 | week6/results/additional-analysis.json | /activityGroups/heavyIds/331 | Direct evidence; rounded only for presentation. |
| Evidence field | 712 | week6/results/additional-analysis.json | /activityGroups/heavyIds/332 | Direct evidence; rounded only for presentation. |
| Evidence field | 715 | week6/results/additional-analysis.json | /activityGroups/heavyIds/333 | Direct evidence; rounded only for presentation. |
| Evidence field | 716 | week6/results/additional-analysis.json | /activityGroups/heavyIds/334 | Direct evidence; rounded only for presentation. |
| Evidence field | 717 | week6/results/additional-analysis.json | /activityGroups/heavyIds/335 | Direct evidence; rounded only for presentation. |
| Evidence field | 721 | week6/results/additional-analysis.json | /activityGroups/heavyIds/336 | Direct evidence; rounded only for presentation. |
| Evidence field | 727 | week6/results/additional-analysis.json | /activityGroups/heavyIds/337 | Direct evidence; rounded only for presentation. |
| Evidence field | 731 | week6/results/additional-analysis.json | /activityGroups/heavyIds/338 | Direct evidence; rounded only for presentation. |
| Evidence field | 734 | week6/results/additional-analysis.json | /activityGroups/heavyIds/339 | Direct evidence; rounded only for presentation. |
| Evidence field | 738 | week6/results/additional-analysis.json | /activityGroups/heavyIds/340 | Direct evidence; rounded only for presentation. |
| Evidence field | 741 | week6/results/additional-analysis.json | /activityGroups/heavyIds/341 | Direct evidence; rounded only for presentation. |
| Evidence field | 747 | week6/results/additional-analysis.json | /activityGroups/heavyIds/342 | Direct evidence; rounded only for presentation. |
| Evidence field | 748 | week6/results/additional-analysis.json | /activityGroups/heavyIds/343 | Direct evidence; rounded only for presentation. |
| Evidence field | 749 | week6/results/additional-analysis.json | /activityGroups/heavyIds/344 | Direct evidence; rounded only for presentation. |
| Evidence field | 751 | week6/results/additional-analysis.json | /activityGroups/heavyIds/345 | Direct evidence; rounded only for presentation. |
| Evidence field | 757 | week6/results/additional-analysis.json | /activityGroups/heavyIds/346 | Direct evidence; rounded only for presentation. |
| Evidence field | 758 | week6/results/additional-analysis.json | /activityGroups/heavyIds/347 | Direct evidence; rounded only for presentation. |
| Evidence field | 763 | week6/results/additional-analysis.json | /activityGroups/heavyIds/348 | Direct evidence; rounded only for presentation. |
| Evidence field | 764 | week6/results/additional-analysis.json | /activityGroups/heavyIds/349 | Direct evidence; rounded only for presentation. |
| Evidence field | 766 | week6/results/additional-analysis.json | /activityGroups/heavyIds/350 | Direct evidence; rounded only for presentation. |
| Evidence field | 770 | week6/results/additional-analysis.json | /activityGroups/heavyIds/351 | Direct evidence; rounded only for presentation. |
| Evidence field | 771 | week6/results/additional-analysis.json | /activityGroups/heavyIds/352 | Direct evidence; rounded only for presentation. |
| Evidence field | 773 | week6/results/additional-analysis.json | /activityGroups/heavyIds/353 | Direct evidence; rounded only for presentation. |
| Evidence field | 776 | week6/results/additional-analysis.json | /activityGroups/heavyIds/354 | Direct evidence; rounded only for presentation. |
| Evidence field | 786 | week6/results/additional-analysis.json | /activityGroups/heavyIds/355 | Direct evidence; rounded only for presentation. |
| Evidence field | 788 | week6/results/additional-analysis.json | /activityGroups/heavyIds/356 | Direct evidence; rounded only for presentation. |
| Evidence field | 790 | week6/results/additional-analysis.json | /activityGroups/heavyIds/357 | Direct evidence; rounded only for presentation. |
| Evidence field | 795 | week6/results/additional-analysis.json | /activityGroups/heavyIds/358 | Direct evidence; rounded only for presentation. |
| Evidence field | 796 | week6/results/additional-analysis.json | /activityGroups/heavyIds/359 | Direct evidence; rounded only for presentation. |
| Evidence field | 798 | week6/results/additional-analysis.json | /activityGroups/heavyIds/360 | Direct evidence; rounded only for presentation. |
| Evidence field | 804 | week6/results/additional-analysis.json | /activityGroups/heavyIds/361 | Direct evidence; rounded only for presentation. |
| Evidence field | 805 | week6/results/additional-analysis.json | /activityGroups/heavyIds/362 | Direct evidence; rounded only for presentation. |
| Evidence field | 806 | week6/results/additional-analysis.json | /activityGroups/heavyIds/363 | Direct evidence; rounded only for presentation. |
| Evidence field | 807 | week6/results/additional-analysis.json | /activityGroups/heavyIds/364 | Direct evidence; rounded only for presentation. |
| Evidence field | 815 | week6/results/additional-analysis.json | /activityGroups/heavyIds/365 | Direct evidence; rounded only for presentation. |
| Evidence field | 821 | week6/results/additional-analysis.json | /activityGroups/heavyIds/366 | Direct evidence; rounded only for presentation. |
| Evidence field | 823 | week6/results/additional-analysis.json | /activityGroups/heavyIds/367 | Direct evidence; rounded only for presentation. |
| Evidence field | 825 | week6/results/additional-analysis.json | /activityGroups/heavyIds/368 | Direct evidence; rounded only for presentation. |
| Evidence field | 826 | week6/results/additional-analysis.json | /activityGroups/heavyIds/369 | Direct evidence; rounded only for presentation. |
| Evidence field | 830 | week6/results/additional-analysis.json | /activityGroups/heavyIds/370 | Direct evidence; rounded only for presentation. |
| Evidence field | 833 | week6/results/additional-analysis.json | /activityGroups/heavyIds/371 | Direct evidence; rounded only for presentation. |
| Evidence field | 835 | week6/results/additional-analysis.json | /activityGroups/heavyIds/372 | Direct evidence; rounded only for presentation. |
| Evidence field | 838 | week6/results/additional-analysis.json | /activityGroups/heavyIds/373 | Direct evidence; rounded only for presentation. |
| Evidence field | 840 | week6/results/additional-analysis.json | /activityGroups/heavyIds/374 | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-analysis.json | /activityGroups/heavyIds/375 | Direct evidence; rounded only for presentation. |
| Evidence field | 847 | week6/results/additional-analysis.json | /activityGroups/heavyIds/376 | Direct evidence; rounded only for presentation. |
| Evidence field | 848 | week6/results/additional-analysis.json | /activityGroups/heavyIds/377 | Direct evidence; rounded only for presentation. |
| Evidence field | 850 | week6/results/additional-analysis.json | /activityGroups/heavyIds/378 | Direct evidence; rounded only for presentation. |
| Evidence field | 851 | week6/results/additional-analysis.json | /activityGroups/heavyIds/379 | Direct evidence; rounded only for presentation. |
| Evidence field | 854 | week6/results/additional-analysis.json | /activityGroups/heavyIds/380 | Direct evidence; rounded only for presentation. |
| Evidence field | 862 | week6/results/additional-analysis.json | /activityGroups/heavyIds/381 | Direct evidence; rounded only for presentation. |
| Evidence field | 863 | week6/results/additional-analysis.json | /activityGroups/heavyIds/382 | Direct evidence; rounded only for presentation. |
| Evidence field | 864 | week6/results/additional-analysis.json | /activityGroups/heavyIds/383 | Direct evidence; rounded only for presentation. |
| Evidence field | 867 | week6/results/additional-analysis.json | /activityGroups/heavyIds/384 | Direct evidence; rounded only for presentation. |
| Evidence field | 868 | week6/results/additional-analysis.json | /activityGroups/heavyIds/385 | Direct evidence; rounded only for presentation. |
| Evidence field | 870 | week6/results/additional-analysis.json | /activityGroups/heavyIds/386 | Direct evidence; rounded only for presentation. |
| Evidence field | 871 | week6/results/additional-analysis.json | /activityGroups/heavyIds/387 | Direct evidence; rounded only for presentation. |
| Evidence field | 875 | week6/results/additional-analysis.json | /activityGroups/heavyIds/388 | Direct evidence; rounded only for presentation. |
| Evidence field | 877 | week6/results/additional-analysis.json | /activityGroups/heavyIds/389 | Direct evidence; rounded only for presentation. |
| Evidence field | 878 | week6/results/additional-analysis.json | /activityGroups/heavyIds/390 | Direct evidence; rounded only for presentation. |
| Evidence field | 880 | week6/results/additional-analysis.json | /activityGroups/heavyIds/391 | Direct evidence; rounded only for presentation. |
| Evidence field | 881 | week6/results/additional-analysis.json | /activityGroups/heavyIds/392 | Direct evidence; rounded only for presentation. |
| Evidence field | 882 | week6/results/additional-analysis.json | /activityGroups/heavyIds/393 | Direct evidence; rounded only for presentation. |
| Evidence field | 883 | week6/results/additional-analysis.json | /activityGroups/heavyIds/394 | Direct evidence; rounded only for presentation. |
| Evidence field | 885 | week6/results/additional-analysis.json | /activityGroups/heavyIds/395 | Direct evidence; rounded only for presentation. |
| Evidence field | 886 | week6/results/additional-analysis.json | /activityGroups/heavyIds/396 | Direct evidence; rounded only for presentation. |
| Evidence field | 887 | week6/results/additional-analysis.json | /activityGroups/heavyIds/397 | Direct evidence; rounded only for presentation. |
| Evidence field | 889 | week6/results/additional-analysis.json | /activityGroups/heavyIds/398 | Direct evidence; rounded only for presentation. |
| Evidence field | 890 | week6/results/additional-analysis.json | /activityGroups/heavyIds/399 | Direct evidence; rounded only for presentation. |
| Evidence field | 892 | week6/results/additional-analysis.json | /activityGroups/heavyIds/400 | Direct evidence; rounded only for presentation. |
| Evidence field | 894 | week6/results/additional-analysis.json | /activityGroups/heavyIds/401 | Direct evidence; rounded only for presentation. |
| Evidence field | 896 | week6/results/additional-analysis.json | /activityGroups/heavyIds/402 | Direct evidence; rounded only for presentation. |
| Evidence field | 897 | week6/results/additional-analysis.json | /activityGroups/heavyIds/403 | Direct evidence; rounded only for presentation. |
| Evidence field | 899 | week6/results/additional-analysis.json | /activityGroups/heavyIds/404 | Direct evidence; rounded only for presentation. |
| Evidence field | 901 | week6/results/additional-analysis.json | /activityGroups/heavyIds/405 | Direct evidence; rounded only for presentation. |
| Evidence field | 903 | week6/results/additional-analysis.json | /activityGroups/heavyIds/406 | Direct evidence; rounded only for presentation. |
| Evidence field | 907 | week6/results/additional-analysis.json | /activityGroups/heavyIds/407 | Direct evidence; rounded only for presentation. |
| Evidence field | 911 | week6/results/additional-analysis.json | /activityGroups/heavyIds/408 | Direct evidence; rounded only for presentation. |
| Evidence field | 913 | week6/results/additional-analysis.json | /activityGroups/heavyIds/409 | Direct evidence; rounded only for presentation. |
| Evidence field | 916 | week6/results/additional-analysis.json | /activityGroups/heavyIds/410 | Direct evidence; rounded only for presentation. |
| Evidence field | 918 | week6/results/additional-analysis.json | /activityGroups/heavyIds/411 | Direct evidence; rounded only for presentation. |
| Evidence field | 919 | week6/results/additional-analysis.json | /activityGroups/heavyIds/412 | Direct evidence; rounded only for presentation. |
| Evidence field | 921 | week6/results/additional-analysis.json | /activityGroups/heavyIds/413 | Direct evidence; rounded only for presentation. |
| Evidence field | 922 | week6/results/additional-analysis.json | /activityGroups/heavyIds/414 | Direct evidence; rounded only for presentation. |
| Evidence field | 923 | week6/results/additional-analysis.json | /activityGroups/heavyIds/415 | Direct evidence; rounded only for presentation. |
| Evidence field | 924 | week6/results/additional-analysis.json | /activityGroups/heavyIds/416 | Direct evidence; rounded only for presentation. |
| Evidence field | 927 | week6/results/additional-analysis.json | /activityGroups/heavyIds/417 | Direct evidence; rounded only for presentation. |
| Evidence field | 932 | week6/results/additional-analysis.json | /activityGroups/heavyIds/418 | Direct evidence; rounded only for presentation. |
| Evidence field | 934 | week6/results/additional-analysis.json | /activityGroups/heavyIds/419 | Direct evidence; rounded only for presentation. |
| Evidence field | 936 | week6/results/additional-analysis.json | /activityGroups/heavyIds/420 | Direct evidence; rounded only for presentation. |
| Evidence field | 938 | week6/results/additional-analysis.json | /activityGroups/heavyIds/421 | Direct evidence; rounded only for presentation. |
| Evidence field | 939 | week6/results/additional-analysis.json | /activityGroups/heavyIds/422 | Direct evidence; rounded only for presentation. |
| Evidence field | 940 | week6/results/additional-analysis.json | /activityGroups/heavyIds/423 | Direct evidence; rounded only for presentation. |
| Evidence field | 942 | week6/results/additional-analysis.json | /activityGroups/heavyIds/424 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/additional-analysis.json | /activityGroups/heavyIds/425 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07539135194307608 | week6/results/additional-analysis.json | /activityGroups/recall/0/lightRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07666781778081704 | week6/results/additional-analysis.json | /activityGroups/recall/0/heavyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0012764658377409505 | week6/results/additional-analysis.json | /activityGroups/recall/0/heavyMinusLightAbsolute | Direct evidence; rounded only for presentation. |
| Evidence field | 1.6931197078210447 | week6/results/additional-analysis.json | /activityGroups/recall/0/heavyVsLightRelativePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0853138113482941 | week6/results/additional-analysis.json | /activityGroups/recall/1/lightRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07395392720653096 | week6/results/additional-analysis.json | /activityGroups/recall/1/heavyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -0.011359884141763144 | week6/results/additional-analysis.json | /activityGroups/recall/1/heavyMinusLightAbsolute | Direct evidence; rounded only for presentation. |
| Evidence field | -13.315410438511943 | week6/results/additional-analysis.json | /activityGroups/recall/1/heavyVsLightRelativePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.13211548987411054 | week6/results/additional-analysis.json | /activityGroups/recall/2/lightRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09184058245196428 | week6/results/additional-analysis.json | /activityGroups/recall/2/heavyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -0.04027490742214626 | week6/results/additional-analysis.json | /activityGroups/recall/2/heavyMinusLightAbsolute | Direct evidence; rounded only for presentation. |
| Evidence field | -30.48462179606887 | week6/results/additional-analysis.json | /activityGroups/recall/2/heavyVsLightRelativePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02237547892720307 | week6/results/additional-analysis.json | /activityGroups/recall/3/lightRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.019873344056971363 | week6/results/additional-analysis.json | /activityGroups/recall/3/heavyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -0.0025021348702317057 | week6/results/additional-analysis.json | /activityGroups/recall/3/heavyMinusLightAbsolute | Direct evidence; rounded only for presentation. |
| Evidence field | -11.182486320727314 | week6/results/additional-analysis.json | /activityGroups/recall/3/heavyVsLightRelativePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02237547892720307 | week6/results/additional-analysis.json | /activityGroups/recall/4/lightRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.019873344056971363 | week6/results/additional-analysis.json | /activityGroups/recall/4/heavyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -0.0025021348702317057 | week6/results/additional-analysis.json | /activityGroups/recall/4/heavyMinusLightAbsolute | Direct evidence; rounded only for presentation. |
| Evidence field | -11.182486320727314 | week6/results/additional-analysis.json | /activityGroups/recall/4/heavyVsLightRelativePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02237547892720307 | week6/results/additional-analysis.json | /activityGroups/recall/5/lightRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.019873344056971363 | week6/results/additional-analysis.json | /activityGroups/recall/5/heavyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -0.0025021348702317057 | week6/results/additional-analysis.json | /activityGroups/recall/5/heavyMinusLightAbsolute | Direct evidence; rounded only for presentation. |
| Evidence field | -11.182486320727314 | week6/results/additional-analysis.json | /activityGroups/recall/5/heavyVsLightRelativePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.05672413793103445 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/0/light/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 75.2395818208218 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/0/light/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.01517276467114724 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/0/heavy/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 19.790265472957813 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/0/heavy/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.04680167852581643 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/1/light/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 54.85826712716928 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/1/light/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.017886655245433314 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/1/heavy/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 24.186214202636314 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/1/heavy/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.10974001094690747 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/2/light/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 490.44765166340494 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/2/light/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07196723839499292 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/2/heavy/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 362.12948454312874 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/2/heavy/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.10974001094690747 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/3/light/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 490.44765166340494 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/3/light/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07196723839499292 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/3/heavy/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 362.12948454312874 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/3/heavy/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.10974001094690747 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/4/light/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 490.44765166340494 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/4/light/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07196723839499292 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/4/heavy/absoluteRecallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 362.12948454312874 | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/4/heavy/relativeChangePercent | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 217 | week6/results/additional-analysis.json | /users/0/trainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 131 | week6/results/additional-analysis.json | /users/0/positiveTrainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 131 | week6/results/additional-analysis.json | /users/0/positiveGenreDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/additional-analysis.json | /users/0/positiveGenres/Action/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.2748091603053435 | week6/results/additional-analysis.json | /users/0/positiveGenres/Action/share | Direct evidence; rounded only for presentation. |
| Evidence field | 15 | week6/results/additional-analysis.json | /users/0/positiveGenres/Adventure/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11450381679389313 | week6/results/additional-analysis.json | /users/0/positiveGenres/Adventure/share | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/additional-analysis.json | /users/0/positiveGenres/Animation/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.030534351145038167 | week6/results/additional-analysis.json | /users/0/positiveGenres/Animation/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/additional-analysis.json | /users/0/positiveGenres/Children's/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03816793893129771 | week6/results/additional-analysis.json | /users/0/positiveGenres/Children's/share | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/additional-analysis.json | /users/0/positiveGenres/Comedy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.29770992366412213 | week6/results/additional-analysis.json | /users/0/positiveGenres/Comedy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/additional-analysis.json | /users/0/positiveGenres/Crime/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08396946564885496 | week6/results/additional-analysis.json | /users/0/positiveGenres/Crime/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/0/positiveGenres/Documentary/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.022900763358778626 | week6/results/additional-analysis.json | /users/0/positiveGenres/Documentary/share | Direct evidence; rounded only for presentation. |
| Evidence field | 61 | week6/results/additional-analysis.json | /users/0/positiveGenres/Drama/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.46564885496183206 | week6/results/additional-analysis.json | /users/0/positiveGenres/Drama/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/positiveGenres/Fantasy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.007633587786259542 | week6/results/additional-analysis.json | /users/0/positiveGenres/Fantasy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/positiveGenres/Film-Noir/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.007633587786259542 | week6/results/additional-analysis.json | /users/0/positiveGenres/Film-Noir/share | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/additional-analysis.json | /users/0/positiveGenres/Horror/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.04580152671755725 | week6/results/additional-analysis.json | /users/0/positiveGenres/Horror/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/additional-analysis.json | /users/0/positiveGenres/Musical/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03816793893129771 | week6/results/additional-analysis.json | /users/0/positiveGenres/Musical/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/0/positiveGenres/Mystery/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.022900763358778626 | week6/results/additional-analysis.json | /users/0/positiveGenres/Mystery/share | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/additional-analysis.json | /users/0/positiveGenres/Romance/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.16793893129770993 | week6/results/additional-analysis.json | /users/0/positiveGenres/Romance/share | Direct evidence; rounded only for presentation. |
| Evidence field | 27 | week6/results/additional-analysis.json | /users/0/positiveGenres/Sci-Fi/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.20610687022900764 | week6/results/additional-analysis.json | /users/0/positiveGenres/Sci-Fi/share | Direct evidence; rounded only for presentation. |
| Evidence field | 25 | week6/results/additional-analysis.json | /users/0/positiveGenres/Thriller/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.19083969465648856 | week6/results/additional-analysis.json | /users/0/positiveGenres/Thriller/share | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-analysis.json | /users/0/positiveGenres/War/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09923664122137404 | week6/results/additional-analysis.json | /users/0/positiveGenres/War/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/0/positiveGenres/Western/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.015267175572519083 | week6/results/additional-analysis.json | /users/0/positiveGenres/Western/share | Direct evidence; rounded only for presentation. |
| Evidence field | 106.97709923664122 | week6/results/additional-analysis.json | /users/0/positiveMovieMeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Crime | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Drama | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Thriller | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Sci-Fi | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Romance | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/0/recommendationGenres/War | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Action | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Adventure | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Children's | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/0/recommendationGenres/Fantasy | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/additional-analysis.json | /users/0/recommendationGenreDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 228.4 | week6/results/additional-analysis.json | /users/0/meanRecommendationPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/0/hits | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/additional-analysis.json | /users/0/relevant | Direct evidence; rounded only for presentation. |
| Evidence field | 217 | week6/results/additional-analysis.json | /users/0/trainExcludedMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 244 | week6/results/additional-analysis.json | /users/0/testExcludedMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 1367 | week6/results/additional-analysis.json | /users/0/eligibleTestCandidates | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 49 | week6/results/additional-analysis.json | /users/1/trainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/additional-analysis.json | /users/1/positiveTrainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/additional-analysis.json | /users/1/positiveGenreDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/additional-analysis.json | /users/1/positiveGenres/Action/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15625 | week6/results/additional-analysis.json | /users/1/positiveGenres/Action/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/positiveGenres/Adventure/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0625 | week6/results/additional-analysis.json | /users/1/positiveGenres/Adventure/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/1/positiveGenres/Animation/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03125 | week6/results/additional-analysis.json | /users/1/positiveGenres/Animation/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/1/positiveGenres/Children's/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03125 | week6/results/additional-analysis.json | /users/1/positiveGenres/Children's/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/additional-analysis.json | /users/1/positiveGenres/Comedy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.34375 | week6/results/additional-analysis.json | /users/1/positiveGenres/Comedy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/additional-analysis.json | /users/1/positiveGenres/Crime/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15625 | week6/results/additional-analysis.json | /users/1/positiveGenres/Crime/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Documentary/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Documentary/share | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/additional-analysis.json | /users/1/positiveGenres/Drama/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5625 | week6/results/additional-analysis.json | /users/1/positiveGenres/Drama/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Fantasy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Fantasy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/additional-analysis.json | /users/1/positiveGenres/Film-Noir/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03125 | week6/results/additional-analysis.json | /users/1/positiveGenres/Film-Noir/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Horror/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Horror/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Musical/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Musical/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Mystery/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Mystery/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/additional-analysis.json | /users/1/positiveGenres/Romance/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.34375 | week6/results/additional-analysis.json | /users/1/positiveGenres/Romance/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/positiveGenres/Sci-Fi/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0625 | week6/results/additional-analysis.json | /users/1/positiveGenres/Sci-Fi/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/1/positiveGenres/Thriller/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09375 | week6/results/additional-analysis.json | /users/1/positiveGenres/Thriller/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/positiveGenres/War/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0625 | week6/results/additional-analysis.json | /users/1/positiveGenres/War/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Western/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-analysis.json | /users/1/positiveGenres/Western/share | Direct evidence; rounded only for presentation. |
| Evidence field | 132.78125 | week6/results/additional-analysis.json | /users/1/positiveMovieMeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/additional-analysis.json | /users/1/recommendationGenres/Action | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/1/recommendationGenres/Adventure | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/recommendationGenres/Romance | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/additional-analysis.json | /users/1/recommendationGenres/Sci-Fi | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/recommendationGenres/War | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/additional-analysis.json | /users/1/recommendationGenres/Drama | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/recommendationGenres/Thriller | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/additional-analysis.json | /users/1/recommendationGenreDenominator | Direct evidence; rounded only for presentation. |
| Evidence field | 226.7 | week6/results/additional-analysis.json | /users/1/meanRecommendationPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/additional-analysis.json | /users/1/hits | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/additional-analysis.json | /users/1/relevant | Direct evidence; rounded only for presentation. |
| Evidence field | 49 | week6/results/additional-analysis.json | /users/1/trainExcludedMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 55 | week6/results/additional-analysis.json | /users/1/testExcludedMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 1556 | week6/results/additional-analysis.json | /users/1/eligibleTestCandidates | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/additional-analysis.json | /exclusionEffect/user1Baseline85ListExcludedForUser2/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/additional-analysis.json | /exclusionEffect/user1Baseline85ListExcludedForUser2/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/additional-analysis.json | /exclusionEffect/user1Baseline85ListExcludedForUser2/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/additional-analysis.json | /exclusionEffect/user1Baseline85ListExcludedForUser2/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/additional-analysis.json | /exclusionEffect/user1Baseline85ListExcludedForUser2/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/additional-analysis.json | /exclusionEffect/user1Baseline85ListExcludedForUser2/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/additional-analysis.json | /exclusionEffect/user2Baseline85ListExcludedForUser1/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 1324 | week6/results/additional-analysis.json | /exclusionEffect/commonEligibleCandidates | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 483 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 423 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 496 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 603 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 515 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/0/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 483 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 515 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 328 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 742 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 423 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Lists/1/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/additional-analysis.json | /exclusionEffect/commonPool85Overlap | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/additional-analysis.json | /primaryAlpha | Direct evidence; rounded only for presentation. |
| Evidence field | 2300 | week6/results/additional-components.json | /nontrivialComponentSizes/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 254 | week6/results/additional-components.json | /isolates | Direct evidence; rounded only for presentation. |
| Evidence field | 17 | week6/results/additional-components.json | /combinedHeldoutOutsidePool/ratingInstances | Direct evidence; rounded only for presentation. |
| Evidence field | 17 | week6/results/additional-components.json | /combinedHeldoutOutsidePool/distinctUserMoviePairs | Direct evidence; rounded only for presentation. |
| Evidence field | 16 | week6/results/additional-components.json | /combinedHeldoutOutsidePool/distinctMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 153.0.8010.12 | week6/results/graph-verification-summary.json | /runtime/browser | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /graph/nUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/graph-verification-summary.json | /graph/nMovies | Direct evidence; rounded only for presentation. |
| Evidence field | 2554 | week6/results/graph-verification-summary.json | /graph/nodeCount | Direct evidence; rounded only for presentation. |
| Evidence field | 45602 | week6/results/graph-verification-summary.json | /graph/positiveEdges | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/graph-verification-summary.json | /graph/zeroDegreeUsers/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 91204 | week6/results/graph-verification-summary.json | /graph/positiveEntries | Direct evidence; rounded only for presentation. |
| Evidence field | 7.993605777301127e-15 | week6/results/graph-verification-summary.json | /graph/maxRowError | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /graph/negativeEntries | Direct evidence; rounded only for presentation. |
| Evidence field | 253 | week6/results/graph-verification-summary.json | /zeroDegreeMovieCount | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/graph-verification-summary.json | /convergence/0/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/graph-verification-summary.json | /convergence/0/global/iterations | Direct evidence; rounded only for presentation. |
| Evidence field | 5.435867933556437e-07 | week6/results/graph-verification-summary.json | /convergence/0/global/residual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /convergence/0/global/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 7.930793799459934e-09 | week6/results/graph-verification-summary.json | /convergence/0/global/massError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0002060156548395753 | week6/results/graph-verification-summary.json | /convergence/0/global/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 2019.0999999940395 | week6/results/graph-verification-summary.json | /convergence/0/global/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/0/ppr/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/0/ppr/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /convergence/0/ppr/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/graph-verification-summary.json | /convergence/0/ppr/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.994369065680075e-07 | week6/results/graph-verification-summary.json | /convergence/0/ppr/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 2.595209878109017e-07 | week6/results/graph-verification-summary.json | /convergence/0/ppr/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /convergence/0/ppr/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0004768967628479004 | week6/results/graph-verification-summary.json | /convergence/0/ppr/minimumSeedBoundMargin | Direct evidence; rounded only for presentation. |
| Evidence field | 1934.6000000089407 | week6/results/graph-verification-summary.json | /convergence/0/ppr/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.7 | week6/results/graph-verification-summary.json | /convergence/1/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/graph-verification-summary.json | /convergence/1/global/iterations | Direct evidence; rounded only for presentation. |
| Evidence field | 7.796770660206676e-07 | week6/results/graph-verification-summary.json | /convergence/1/global/residual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /convergence/1/global/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 7.08969309926033e-08 | week6/results/graph-verification-summary.json | /convergence/1/global/massError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.00012625199451576918 | week6/results/graph-verification-summary.json | /convergence/1/global/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 211.40000000596046 | week6/results/graph-verification-summary.json | /convergence/1/global/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/1/ppr/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/1/ppr/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /convergence/1/ppr/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 42 | week6/results/graph-verification-summary.json | /convergence/1/ppr/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.999436088037328e-07 | week6/results/graph-verification-summary.json | /convergence/1/ppr/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 2.9453485694830306e-07 | week6/results/graph-verification-summary.json | /convergence/1/ppr/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /convergence/1/ppr/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0005741238594054732 | week6/results/graph-verification-summary.json | /convergence/1/ppr/minimumSeedBoundMargin | Direct evidence; rounded only for presentation. |
| Evidence field | 840 | week6/results/graph-verification-summary.json | /convergence/1/ppr/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.85 | week6/results/graph-verification-summary.json | /convergence/2/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 78 | week6/results/graph-verification-summary.json | /convergence/2/global/iterations | Direct evidence; rounded only for presentation. |
| Evidence field | 9.414216037839651e-07 | week6/results/graph-verification-summary.json | /convergence/2/global/residual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /convergence/2/global/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 2.9897637432441115e-07 | week6/results/graph-verification-summary.json | /convergence/2/global/massError | Direct evidence; rounded only for presentation. |
| Evidence field | 6.415466486942023e-05 | week6/results/graph-verification-summary.json | /convergence/2/global/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 347.20000000298023 | week6/results/graph-verification-summary.json | /convergence/2/global/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/2/ppr/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/2/ppr/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /convergence/2/ppr/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 95 | week6/results/graph-verification-summary.json | /convergence/2/ppr/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.997056622523814e-07 | week6/results/graph-verification-summary.json | /convergence/2/ppr/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 6.238828973437194e-07 | week6/results/graph-verification-summary.json | /convergence/2/ppr/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /convergence/2/ppr/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.00044283866882322 | week6/results/graph-verification-summary.json | /convergence/2/ppr/minimumSeedBoundMargin | Direct evidence; rounded only for presentation. |
| Evidence field | 1699.5 | week6/results/graph-verification-summary.json | /convergence/2/ppr/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.95 | week6/results/graph-verification-summary.json | /convergence/3/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 242 | week6/results/graph-verification-summary.json | /convergence/3/global/iterations | Direct evidence; rounded only for presentation. |
| Evidence field | 9.773466445039958e-07 | week6/results/graph-verification-summary.json | /convergence/3/global/residual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /convergence/3/global/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 4.4516127672977746e-07 | week6/results/graph-verification-summary.json | /convergence/3/global/massError | Direct evidence; rounded only for presentation. |
| Evidence field | 2.161974953196477e-05 | week6/results/graph-verification-summary.json | /convergence/3/global/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 947.8999999910593 | week6/results/graph-verification-summary.json | /convergence/3/global/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /convergence/3/ppr/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 914 | week6/results/graph-verification-summary.json | /convergence/3/ppr/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /convergence/3/ppr/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 500 | week6/results/graph-verification-summary.json | /convergence/3/ppr/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.8227419786853716e-06 | week6/results/graph-verification-summary.json | /convergence/3/ppr/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 8.401502782362513e-07 | week6/results/graph-verification-summary.json | /convergence/3/ppr/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /convergence/3/ppr/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.00021207034587855667 | week6/results/graph-verification-summary.json | /convergence/3/ppr/minimumSeedBoundMargin | Direct evidence; rounded only for presentation. |
| Evidence field | 8679.800000011921 | week6/results/graph-verification-summary.json | /convergence/3/ppr/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 54 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 161 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 202 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 295 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 310 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 351 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 367 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 386 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 401 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 410 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 426 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/13 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/14 | Direct evidence; rounded only for presentation. |
| Evidence field | 519 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/15 | Direct evidence; rounded only for presentation. |
| Evidence field | 566 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/16 | Direct evidence; rounded only for presentation. |
| Evidence field | 572 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/17 | Direct evidence; rounded only for presentation. |
| Evidence field | 595 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/18 | Direct evidence; rounded only for presentation. |
| Evidence field | 648 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/19 | Direct evidence; rounded only for presentation. |
| Evidence field | 708 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/20 | Direct evidence; rounded only for presentation. |
| Evidence field | 710 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/21 | Direct evidence; rounded only for presentation. |
| Evidence field | 760 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/22 | Direct evidence; rounded only for presentation. |
| Evidence field | 812 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/23 | Direct evidence; rounded only for presentation. |
| Evidence field | 840 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/24 | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/25 | Direct evidence; rounded only for presentation. |
| Evidence field | 847 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/26 | Direct evidence; rounded only for presentation. |
| Evidence field | 903 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/27 | Direct evidence; rounded only for presentation. |
| Evidence field | 931 | week6/results/graph-verification-summary.json | /convergence/3/ppr/nonConvergedRawIds/28 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/graph-verification-summary.json | /numpy/0/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/0/all943Converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /numpy/0/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 21 | week6/results/graph-verification-summary.json | /numpy/0/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 3.787614744066303e-08 | week6/results/graph-verification-summary.json | /numpy/0/vectorComparison/maxAbs | Direct evidence; rounded only for presentation. |
| Evidence field | 6.030493186880972e-07 | week6/results/graph-verification-summary.json | /numpy/0/vectorComparison/maxL1 | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-06 | week6/results/graph-verification-summary.json | /numpy/0/vectorComparison/absoluteTolerance | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-05 | week6/results/graph-verification-summary.json | /numpy/0/vectorComparison/l1Tolerance | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/0/vectorComparison/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /numpy/0/top10ExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 923 | week6/results/graph-verification-summary.json | /numpy/0/fullRankingExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 1.831112745630313e-10 | week6/results/graph-verification-summary.json | /numpy/0/maxNearTieInversion | Direct evidence; rounded only for presentation. |
| Evidence field | 0.7 | week6/results/graph-verification-summary.json | /numpy/1/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/1/all943Converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /numpy/1/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 41 | week6/results/graph-verification-summary.json | /numpy/1/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 3.621375850582087e-08 | week6/results/graph-verification-summary.json | /numpy/1/vectorComparison/maxAbs | Direct evidence; rounded only for presentation. |
| Evidence field | 7.578636925567821e-07 | week6/results/graph-verification-summary.json | /numpy/1/vectorComparison/maxL1 | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-06 | week6/results/graph-verification-summary.json | /numpy/1/vectorComparison/absoluteTolerance | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-05 | week6/results/graph-verification-summary.json | /numpy/1/vectorComparison/l1Tolerance | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/1/vectorComparison/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /numpy/1/top10ExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 933 | week6/results/graph-verification-summary.json | /numpy/1/fullRankingExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 2.5478039952309475e-11 | week6/results/graph-verification-summary.json | /numpy/1/maxNearTieInversion | Direct evidence; rounded only for presentation. |
| Evidence field | 0.85 | week6/results/graph-verification-summary.json | /numpy/2/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/2/all943Converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /numpy/2/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 90 | week6/results/graph-verification-summary.json | /numpy/2/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 3.233356458270942e-08 | week6/results/graph-verification-summary.json | /numpy/2/vectorComparison/maxAbs | Direct evidence; rounded only for presentation. |
| Evidence field | 9.38510014650324e-07 | week6/results/graph-verification-summary.json | /numpy/2/vectorComparison/maxL1 | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-06 | week6/results/graph-verification-summary.json | /numpy/2/vectorComparison/absoluteTolerance | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-05 | week6/results/graph-verification-summary.json | /numpy/2/vectorComparison/l1Tolerance | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/2/vectorComparison/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /numpy/2/top10ExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 919 | week6/results/graph-verification-summary.json | /numpy/2/fullRankingExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 1.450394532124047e-10 | week6/results/graph-verification-summary.json | /numpy/2/maxNearTieInversion | Direct evidence; rounded only for presentation. |
| Evidence field | 0.95 | week6/results/graph-verification-summary.json | /numpy/3/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/3/all943Converged | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /numpy/3/iterationsRange/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 283 | week6/results/graph-verification-summary.json | /numpy/3/iterationsRange/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.537551625602207e-08 | week6/results/graph-verification-summary.json | /numpy/3/vectorComparison/maxAbs | Direct evidence; rounded only for presentation. |
| Evidence field | 1.4004029457607984e-06 | week6/results/graph-verification-summary.json | /numpy/3/vectorComparison/maxL1 | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-06 | week6/results/graph-verification-summary.json | /numpy/3/vectorComparison/absoluteTolerance | Direct evidence; rounded only for presentation. |
| Evidence field | 2e-05 | week6/results/graph-verification-summary.json | /numpy/3/vectorComparison/l1Tolerance | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /numpy/3/vectorComparison/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /numpy/3/top10ExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 915 | week6/results/graph-verification-summary.json | /numpy/3/fullRankingExactMatches | Direct evidence; rounded only for presentation. |
| Evidence field | 1.3961929854443278e-10 | week6/results/graph-verification-summary.json | /numpy/3/maxNearTieInversion | Direct evidence; rounded only for presentation. |
| Evidence field | 0.85 | week6/results/graph-verification-summary.json | /singleVsBatch/0/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 196 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 684 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 686 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 942 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /singleVsBatch/0/userIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 4.190951585769653e-09 | week6/results/graph-verification-summary.json | /singleVsBatch/0/maxAbs | Direct evidence; rounded only for presentation. |
| Evidence field | 8.915098987927195e-07 | week6/results/graph-verification-summary.json | /singleVsBatch/0/maxL1 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /singleVsBatch/0/allTop10Equal | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /singleVsBatch/0/finalLiveTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 245648904 | week6/results/graph-verification-summary.json | /singleVsBatch/0/allocatedGpuPoolBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 245648904 | week6/results/graph-verification-summary.json | /singleVsBatch/0/poolFreeBytes | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /singleVsBatch/0/cacheCopyProtected | Direct evidence; rounded only for presentation. |
| Evidence field | 0.95 | week6/results/graph-verification-summary.json | /singleVsBatch/1/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 196 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 684 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 686 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 942 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/graph-verification-summary.json | /singleVsBatch/1/userIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 6.28642737865448e-09 | week6/results/graph-verification-summary.json | /singleVsBatch/1/maxAbs | Direct evidence; rounded only for presentation. |
| Evidence field | 1.102071109926328e-06 | week6/results/graph-verification-summary.json | /singleVsBatch/1/maxL1 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /singleVsBatch/1/allTop10Equal | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /singleVsBatch/1/finalLiveTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 245648904 | week6/results/graph-verification-summary.json | /singleVsBatch/1/allocatedGpuPoolBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 245648904 | week6/results/graph-verification-summary.json | /singleVsBatch/1/poolFreeBytes | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /singleVsBatch/1/cacheCopyProtected | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3725268513 | week6/results/graph-verification-summary.json | /fixture/uniform/assignment/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1958239118 | week6/results/graph-verification-summary.json | /fixture/uniform/assignment/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3941492369 | week6/results/graph-verification-summary.json | /fixture/uniform/assignment/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0375 | week6/results/graph-verification-summary.json | /fixture/uniform/assignment/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.37252694368362427 | week6/results/graph-verification-summary.json | /fixture/uniform/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1958237588405609 | week6/results/graph-verification-summary.json | /fixture/uniform/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3941493332386017 | week6/results/graph-verification-summary.json | /fixture/uniform/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03750000149011612 | week6/results/graph-verification-summary.json | /fixture/uniform/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.5295943908699705e-07 | week6/results/graph-verification-summary.json | /fixture/uniform/maxAbsError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.4522328999 | week6/results/graph-verification-summary.json | /fixture/seeded/assignment/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1921989825 | week6/results/graph-verification-summary.json | /fixture/seeded/assignment/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3555681176 | week6/results/graph-verification-summary.json | /fixture/seeded/assignment/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/seeded/assignment/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.4522329568862915 | week6/results/graph-verification-summary.json | /fixture/seeded/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.19219909608364105 | week6/results/graph-verification-summary.json | /fixture/seeded/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.35556817054748535 | week6/results/graph-verification-summary.json | /fixture/seeded/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /fixture/seeded/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1358364104818719e-07 | week6/results/graph-verification-summary.json | /fixture/seeded/maxAbsError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/0/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/0/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/1/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/2/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/2/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/2/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/2/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/3/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/3/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/3/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/Q/3/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.25 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformIncoming/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.125 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformIncoming/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.625 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformIncoming/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformIncoming/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.25 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformFirst/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.14375 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformFirst/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.56875 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformFirst/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0375 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniformFirst/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedFirst/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.425 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedFirst/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.425 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedFirst/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedFirst/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.37252693031282125 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniform/p/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.19582373990738838 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniform/p/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3941493297797897 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniform/p/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0375 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniform/p/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 28 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniform/iterations | Direct evidence; rounded only for presentation. |
| Evidence field | 9.669438148229847e-07 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/uniform/residual | Direct evidence; rounded only for presentation. |
| Evidence field | 0.4522328618993243 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedA/p/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.19219906527794117 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedA/p/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.35556807282273445 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedA/p/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedA/p/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 30 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedA/iterations | Direct evidence; rounded only for presentation. |
| Evidence field | 4.657446040501334e-07 | week6/results/graph-verification-summary.json | /fixture/independentFirstUpdate/seedA/residual | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/graph-verification-summary.json | /memory/allAlphaCPUCache/entries | Direct evidence; rounded only for presentation. |
| Evidence field | 3776 | week6/results/graph-verification-summary.json | /memory/allAlphaCPUCache/vectors | Direct evidence; rounded only for presentation. |
| Evidence field | 77151232 | week6/results/graph-verification-summary.json | /memory/allAlphaCPUCache/vectorBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /memory/allAlphaCPUCache/retainedGpuTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /memory/liveTensorsAfterCacheClear | Direct evidence; rounded only for presentation. |
| Evidence field | 131354871 | week6/results/graph-verification-summary.json | /memory/peakLogicalTensorBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 3772 | week6/results/graph-verification-summary.json | /memory/perIterationReadbackBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 33.20129999999702 | week6/results/graph-verification-summary.json | /mf/runtimeSeconds | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/checkpoint | Direct evidence; rounded only for presentation. |
| Evidence field | 16 | week6/results/graph-verification-summary.json | /mf/config/factors | Direct evidence; rounded only for presentation. |
| Evidence field | 30 | week6/results/graph-verification-summary.json | /mf/config/epochs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.01 | week6/results/graph-verification-summary.json | /mf/config/learningRate | Direct evidence; rounded only for presentation. |
| Evidence field | 0.05 | week6/results/graph-verification-summary.json | /mf/config/regularization | Direct evidence; rounded only for presentation. |
| Evidence field | 512 | week6/results/graph-verification-summary.json | /mf/config/batchSize | Direct evidence; rounded only for presentation. |
| Evidence field | 20261013 | week6/results/graph-verification-summary.json | /mf/config/seed | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/config/checkpoint | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829944264078285 | week6/results/graph-verification-summary.json | /mf/config/validationRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1052078640164102 | week6/results/graph-verification-summary.json | /mf/rmse/train | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829944264078285 | week6/results/graph-verification-summary.json | /mf/rmse/val | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2288999214179168 | week6/results/graph-verification-summary.json | /mf/rmse/test | Direct evidence; rounded only for presentation. |
| Evidence field | 1.105208514257592 | week6/results/graph-verification-summary.json | /mf/meanOnlyBaselineRMSE/train | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829947710600353 | week6/results/graph-verification-summary.json | /mf/meanOnlyBaselineRMSE/val | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2289001371836759 | week6/results/graph-verification-summary.json | /mf/meanOnlyBaselineRMSE/test | Direct evidence; rounded only for presentation. |
| Evidence field | 944 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/user/count | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2136971010673814e-05 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/user/min | Direct evidence; rounded only for presentation. |
| Evidence field | 6.210006860201328e-05 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/user/max | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5270232702794553e-05 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/user/mean | Direct evidence; rounded only for presentation. |
| Evidence field | 9.01767025220469e-06 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/user/std | Direct evidence; rounded only for presentation. |
| Evidence field | 944 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/user/unique | Direct evidence; rounded only for presentation. |
| Evidence field | 1683 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/item/count | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2808970314427065e-05 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/item/min | Direct evidence; rounded only for presentation. |
| Evidence field | 6.821378863562136e-05 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/item/max | Direct evidence; rounded only for presentation. |
| Evidence field | 3.516457869566678e-05 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/item/mean | Direct evidence; rounded only for presentation. |
| Evidence field | 8.878339193446817e-06 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/item/std | Direct evidence; rounded only for presentation. |
| Evidence field | 1683 | week6/results/graph-verification-summary.json | /mf/factorRowNormSummary/item/unique | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/allCandidates/count | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/allCandidates/min | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/allCandidates/max | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/allCandidates/mean | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/allCandidates/std | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/allCandidates/unique | Direct evidence; rounded only for presentation. |
| Evidence field | 1367 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/testEligible/count | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/testEligible/min | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/testEligible/max | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/testEligible/mean | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/testEligible/std | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/testEligible/unique | Direct evidence; rounded only for presentation. |
| Evidence field | 3.532285919848931e-05 | week6/results/graph-verification-summary.json | /mf/analysisUsers/0/userRowNorm | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/allCandidates/count | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/allCandidates/min | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/allCandidates/max | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/allCandidates/mean | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/allCandidates/std | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/allCandidates/unique | Direct evidence; rounded only for presentation. |
| Evidence field | 1556 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/testEligible/count | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/testEligible/min | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/testEligible/max | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026458740234 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/testEligible/mean | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/testEligible/std | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/testEligible/unique | Direct evidence; rounded only for presentation. |
| Evidence field | 3.6864118101294774e-05 | week6/results/graph-verification-summary.json | /mf/analysisUsers/1/userRowNorm | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/graph-verification-summary.json | /mf/tensorCounts/before | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/graph-verification-summary.json | /mf/tensorCounts/afterTraining | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/graph-verification-summary.json | /mf/tensorCounts/afterReuse | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/graph-verification-summary.json | /mf/tensorCounts/afterSuppliedDisposal | Direct evidence; rounded only for presentation. |
| Evidence field | 504392 | week6/results/graph-verification-summary.json | /mf/afterDisposalLogicalBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 3.5806026199776437 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/globalMean | Direct evidence; rounded only for presentation. |
| Evidence field | 79619 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/rows | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1052085142560844 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/float64RMSE | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1052085142573125 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/meanOnlyRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | -1.2281287098403482e-12 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/mfMinusMeanOnly | Direct evidence; rounded only for presentation. |
| Evidence field | 2.176212998107343e-09 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/maximumAbsDotProduct | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1052078640164102 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/browserRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | -6.502396741048244e-07 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/train/browserMinusFloat64 | Direct evidence; rounded only for presentation. |
| Evidence field | 9596 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/rows | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829947710659372 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/float64RMSE | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829947710600115 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/meanOnlyRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | 5.9257043716343105e-12 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/mfMinusMeanOnly | Direct evidence; rounded only for presentation. |
| Evidence field | 1.6495155860184372e-09 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/maximumAbsDotProduct | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829944264078285 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/browserRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | -3.446581087196421e-07 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/val/browserMinusFloat64 | Direct evidence; rounded only for presentation. |
| Evidence field | 10785 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/rows | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2289001371845054 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/float64RMSE | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2289001371836488 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/meanOnlyRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | 8.566480858007708e-13 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/mfMinusMeanOnly | Direct evidence; rounded only for presentation. |
| Evidence field | 1.7621286652731195e-09 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/maximumAbsDotProduct | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2288999214179168 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/browserRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | -2.157665885960114e-07 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/metrics/test/browserMinusFloat64 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/selectedEpoch | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /mf/independentEvaluation/checkpointMatchesEarliestValidationMinimum | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /mf/independentEvaluation/all30EpochsRecorded | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /mf/independentEvaluation/uniqueValidationRMSE | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/0/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/1/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/2/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/3/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/4/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/5/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/6/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/7/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/8/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/graph-verification-summary.json | /focusedChecks/9/status | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/cacheHit | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/identityIsolation | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/iterationCapKey | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/toleranceKey | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/batchSizeKey | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/batchSizeNumericallyConsistent | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/independentFreezing | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /cacheChecks/rawBoundaryIDMapsCorrectly | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/graph-verification-summary.json | /analysisUsers/0/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 45 | week6/results/graph-verification-summary.json | /analysisUsers/0/reportLines/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 131 | week6/results/graph-verification-summary.json | /analysisUsers/0/positiveTrainDegree | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantCount | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 16 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 44 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 51 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 58 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 66 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 75 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 76 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 86 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 87 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 208 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 241 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligibleRelevantMovieIds/12 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/val/eligible | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantCount | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 111 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 129 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 154 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 169 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 171 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 209 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 221 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/13 | Direct evidence; rounded only for presentation. |
| Evidence field | 228 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/14 | Direct evidence; rounded only for presentation. |
| Evidence field | 242 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/15 | Direct evidence; rounded only for presentation. |
| Evidence field | 256 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/16 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/17 | Direct evidence; rounded only for presentation. |
| Evidence field | 270 | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligibleRelevantMovieIds/18 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /analysisUsers/0/splits/test/eligible | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/graph-verification-summary.json | /analysisUsers/1/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 58 | week6/results/graph-verification-summary.json | /analysisUsers/1/reportLines/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/graph-verification-summary.json | /analysisUsers/1/positiveTrainDegree | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantCount | Direct evidence; rounded only for presentation. |
| Evidence field | 272 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantMovieIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantMovieIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 310 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantMovieIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 311 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantMovieIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligibleRelevantMovieIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/val/eligible | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/test/eligibleRelevantCount | Direct evidence; rounded only for presentation. |
| Evidence field | 304 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/test/eligibleRelevantMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 316 | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/test/eligibleRelevantMovieIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/graph-verification-summary.json | /analysisUsers/1/splits/test/eligible | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/recommendation-experiment-summary.json | /validationSweep/0/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11448315913208877 | week6/results/recommendation-experiment-summary.json | /validationSweep/0/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /validationSweep/0/cohortSize | Direct evidence; rounded only for presentation. |
| Evidence field | 0.7 | week6/results/recommendation-experiment-summary.json | /validationSweep/1/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1047969507641043 | week6/results/recommendation-experiment-summary.json | /validationSweep/1/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /validationSweep/1/cohortSize | Direct evidence; rounded only for presentation. |
| Evidence field | 0.85 | week6/results/recommendation-experiment-summary.json | /validationSweep/2/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09002077155336492 | week6/results/recommendation-experiment-summary.json | /validationSweep/2/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /validationSweep/2/cohortSize | Direct evidence; rounded only for presentation. |
| Evidence field | 0.95 | week6/results/recommendation-experiment-summary.json | /validationSweep/3/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07375030387909676 | week6/results/recommendation-experiment-summary.json | /validationSweep/3/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /validationSweep/3/cohortSize | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/0/commonMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/0/count | Direct evidence; rounded only for presentation. |
| Evidence field | 246.8 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/0/user1MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 262.1 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/0/user2MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/1/commonMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/1/count | Direct evidence; rounded only for presentation. |
| Evidence field | 239.4 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/1/user1MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 247.4 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/1/user2MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/2/commonMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/2/count | Direct evidence; rounded only for presentation. |
| Evidence field | 228.4 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/2/user1MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 226.7 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/2/user2MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/3/commonMovieIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/3/commonMovieIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/3/count | Direct evidence; rounded only for presentation. |
| Evidence field | 72.2 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/3/user1MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 111.4 | week6/results/recommendation-experiment-summary.json | /primaryUserOverlap/3/user2MeanPopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /mfDispersion/val/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /mfDispersion/val/constantScores | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /mfDispersion/val/ascendingFullRankings | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /mfDispersion/test/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /mfDispersion/test/constantScores | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /mfDispersion/test/ascendingFullRankings | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /hw5Equality/val/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Equality/val/completeRankingsEqual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Equality/val/perUserHitsEqual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Equality/val/allScoresConstant | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /hw5Equality/test/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Equality/test/completeRankingsEqual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Equality/test/perUserHitsEqual | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Equality/test/allScoresConstant | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/candidateUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/cohortSize | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/excludedUnseen | Direct evidence; rounded only for presentation. |
| Evidence field | 97 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/excludedNoEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/excludedNoPositiveEdge | Direct evidence; rounded only for presentation. |
| Evidence field | 814 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/unseenIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1106 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/unseenIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1526 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/unseenIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1653 | week6/results/recommendation-experiment-summary.json | /audit/val/exclusions/unseenIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.06977315415726622 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 389.5 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/popularity/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.06410361078377284 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 615.7000000029802 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/pagerank/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11448315913208877 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 1005.7000000029802 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/ppr/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0272148428542038 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 5265.0999999940395 | week6/results/recommendation-experiment-summary.json | /audit/val/methods/mf/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/candidateUsers | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/cohortSize | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/excludedUnseen | Direct evidence; rounded only for presentation. |
| Evidence field | 82 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/excludedNoEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/excludedNoPositiveEdge | Direct evidence; rounded only for presentation. |
| Evidence field | 913 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1106 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1130 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1458 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1498 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 1525 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1613 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 1625 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1645 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 1646 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 1650 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 1651 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 1674 | week6/results/recommendation-experiment-summary.json | /audit/test/exclusions/unseenIds/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07602291343770759 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 374.1000000089407 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/popularity/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07969324149418144 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 631.6999999880791 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/pagerank/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11218853219486066 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 1019.8000000119209 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/ppr/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/outOfPool | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/exclusionViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/shortLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/zeroScoreInclusions | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/zeroScoreLists | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/duplicateItems | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/counts/orderingViolations | Direct evidence; rounded only for presentation. |
| Evidence field | 0.021137488852036153 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 5308.899999991059 | week6/results/recommendation-experiment-summary.json | /audit/test/methods/mf/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/recommendation-experiment-summary.json | /independent/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/recommendation-experiment-summary.json | /independent/globalIterations | Direct evidence; rounded only for presentation. |
| Evidence field | 5.651403356061785e-07 | week6/results/recommendation-experiment-summary.json | /independent/globalResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/popularity/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/popularity/cohortIdentical | Direct evidence; rounded only for presentation. |
| Evidence field | 0.06977315415726612 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/popularity/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.06977315415726622 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/popularity/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -9.71445146547012e-17 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/popularity/recallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/pagerank/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/pagerank/cohortIdentical | Direct evidence; rounded only for presentation. |
| Evidence field | 0.06410361078377277 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/pagerank/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.06410361078377284 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/pagerank/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -6.938893903907228e-17 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/pagerank/recallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/ppr/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/ppr/cohortIdentical | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11448315913208877 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/ppr/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11448315913208877 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/ppr/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/val/ppr/recallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/popularity/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/popularity/cohortIdentical | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07602291343770748 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/popularity/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07602291343770759 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/popularity/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -1.1102230246251565e-16 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/popularity/recallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/pagerank/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/pagerank/cohortIdentical | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07969324149418132 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/pagerank/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07969324149418144 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/pagerank/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -1.249000902703301e-16 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/pagerank/recallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/ppr/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/ppr/cohortIdentical | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1121885321948605 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/ppr/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11218853219486066 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/ppr/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | -1.6653345369377348e-16 | week6/results/recommendation-experiment-summary.json | /independent/comparisons/test/ppr/recallDifference | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/0/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11448315913208877 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/0/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11448315913208877 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/0/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/0/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 0.7 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/1/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.10479695076410428 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/1/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1047969507641043 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/1/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/1/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 0.85 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/2/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09002077155336485 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/2/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09002077155336492 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/2/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/2/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 0.95 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/3/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0737503038790967 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/3/numpyRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 0.07375030387909676 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/3/browserRecall | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/validationSweep/3/cohort | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/0/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 54 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/1/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 161 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/userId | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/2/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 210 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 191 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 185 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 132 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 496 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 151 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 210 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 191 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 185 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 132 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 496 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 151 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 191 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 185 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 132 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 496 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 151 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 515 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 603 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 191 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 185 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 132 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 496 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 151 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 515 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 603 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/3/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 202 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/4/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 295 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 89 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 89 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 89 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 89 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/5/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 310 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/6/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/7/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 351 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/8/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 367 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/9/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 386 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/10/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 401 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/11/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 410 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/12/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 426 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/13/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/14/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 519 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/15/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 566 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/16/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 572 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/userId | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/17/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 595 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/18/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 648 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 269 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 427 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/19/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 708 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/20/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 710 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 69 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 69 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 69 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 69 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 183 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/21/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 760 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/22/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 812 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/23/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 840 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 302 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/24/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/25/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 847 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 79 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 313 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/26/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 903 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 173 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 237 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 168 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/27/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 931 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/userId | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/val/identical | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/cohortEligible | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/numpy/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 300 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 56 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 172 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/browser/9 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /independent/nonconverged95/28/test/identical | Direct evidence; rounded only for presentation. |
| Evidence field | 9.452593374997377 | week6/results/recommendation-experiment-summary.json | /independent/runtimeSeconds | Direct evidence; rounded only for presentation. |
| Evidence field | History titles decoded independently as Latin-1 from raw u.item; native app/export titles preserve supplied UTF-8 decoding, including existing replacement characters. | week6/results/recommendation-experiment-summary.json | /independent/titlePolicy | Direct evidence; rounded only for presentation. |
| Evidence field | default-20261016-01 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/label | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/checkpoint | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/validationTieEarliestEpochVerified | Direct evidence; rounded only for presentation. |
| Evidence field | 117004.5 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0272148428542038 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/splitRecall/val | Direct evidence; rounded only for presentation. |
| Evidence field | 0.021137488852036153 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/splitRecall/test | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/cohorts/val | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /hw5Additional/0/cohorts/test | Direct evidence; rounded only for presentation. |
| Evidence field | reg-0005-20261016-01 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/label | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/checkpoint | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/validationTieEarliestEpochVerified | Direct evidence; rounded only for presentation. |
| Evidence field | 2366 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/wallMs | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0272148428542038 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/splitRecall/val | Direct evidence; rounded only for presentation. |
| Evidence field | 0.021137488852036153 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/splitRecall/test | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/cohorts/val | Direct evidence; rounded only for presentation. |
| Evidence field | 861 | week6/results/recommendation-experiment-summary.json | /hw5Additional/1/cohorts/test | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/recommendation-checks.json | /result/supplied/passed | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-checks.json | /result/supplied/failed | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-checks.json | /result/supplied/pending | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/0/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/1/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/2/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/3/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/4/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/5/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/6/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/7/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/8/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/9/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/10/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/supplied/checks/11/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/0/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/1/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/2/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/3/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/4/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/5/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/6/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/7/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/8/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/9/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/10/status | Direct evidence; rounded only for presentation. |
| Evidence field | PASS | week6/results/recommendation-checks.json | /result/focused/11/status | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-checks.json | /result/memory/unreliable | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-checks.json | /result/memory/numBytesInGPU | Direct evidence; rounded only for presentation. |
| Evidence field | 2272 | week6/results/recommendation-checks.json | /result/memory/numBytesInGPUAllocated | Direct evidence; rounded only for presentation. |
| Evidence field | 2272 | week6/results/recommendation-checks.json | /result/memory/numBytesInGPUFree | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-checks.json | /result/memory/numTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-checks.json | /result/memory/numDataBuffers | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-checks.json | /result/memory/numBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 0.12400183850892417 | week6/results/additional-exploratory-0.1.json | /recall | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/additional-exploratory-0.1.json | /testEvaluated | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/additional-exploratory-0.1.json | /convergence/iterationsMin | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/additional-exploratory-0.1.json | /convergence/iterationsMax | Direct evidence; rounded only for presentation. |
| Evidence field | 2.0000000017561846e-07 | week6/results/additional-exploratory-0.1.json | /convergence/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-exploratory-0.1.json | /convergence/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-exploratory-0.1.json | /convergence/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 4.440892098500626e-16 | week6/results/additional-exploratory-0.1.json | /convergence/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-exploratory-0.1.json | /convergence/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 0.12136130364321202 | week6/results/additional-exploratory-0.3.json | /recall | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/additional-exploratory-0.3.json | /testEvaluated | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-exploratory-0.3.json | /convergence/iterationsMin | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/additional-exploratory-0.3.json | /convergence/iterationsMax | Direct evidence; rounded only for presentation. |
| Evidence field | 3.1886460037050687e-07 | week6/results/additional-exploratory-0.3.json | /convergence/maxResidual | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-exploratory-0.3.json | /convergence/converged | Direct evidence; rounded only for presentation. |
| Evidence field | 846 | week6/results/additional-exploratory-0.3.json | /convergence/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 4.440892098500626e-16 | week6/results/additional-exploratory-0.3.json | /convergence/maxMassError | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/additional-exploratory-0.3.json | /convergence/minimum | Direct evidence; rounded only for presentation. |
| Evidence field | 6076692 | week6/results/performance-estimates.json | /memory/RFloat32Bytes | Direct evidence; rounded only for presentation. |
| Evidence field | 12153384 | week6/results/performance-estimates.json | /memory/twoFloat32BlocksBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 26091664 | week6/results/performance-estimates.json | /memory/denseQFloat32Bytes | Direct evidence; rounded only for presentation. |
| Evidence field | 52183328 | week6/results/performance-estimates.json | /memory/denseQJSNumericPayloadBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 12153384 | week6/results/performance-estimates.json | /memory/RJSNumericPayloadBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 19267376 | week6/results/performance-estimates.json | /memory/allUserNodeScoresFloat64OneAlphaBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 77069504 | week6/results/performance-estimates.json | /memory/allUserNodeScoresFloat64FourAlphaBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 25344068 | week6/results/performance-estimates.json | /memory/benchmarkSampledPeakLogicalBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 110989848 | week6/results/performance-estimates.json | /memory/benchmarkFinalGpuAllocatedCacheBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/performance-estimates.json | /memory/benchmarkFinalLiveTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/matmul-benchmark.json | /rows/0/batch | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/0/products/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/0/products/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/matmul-benchmark.json | /rows/0/products/0/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/0/products/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/0/products/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/matmul-benchmark.json | /rows/0/products/1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 6076692 | week6/results/matmul-benchmark.json | /rows/0/flopsPerPair | Direct evidence; rounded only for presentation. |
| Evidence field | 619.2000000029802 | week6/results/matmul-benchmark.json | /rows/0/coldPairMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/0/warmFullRead/count | Direct evidence; rounded only for presentation. |
| Evidence field | 9.900000005960464 | week6/results/matmul-benchmark.json | /rows/0/warmFullRead/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.599999994039536 | week6/results/matmul-benchmark.json | /rows/0/warmFullRead/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.700000002980232 | week6/results/matmul-benchmark.json | /rows/0/warmFullRead/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/0/warmScalarBarrier/count | Direct evidence; rounded only for presentation. |
| Evidence field | 4.4000000059604645 | week6/results/matmul-benchmark.json | /rows/0/warmScalarBarrier/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5.299999997019768 | week6/results/matmul-benchmark.json | /rows/0/warmScalarBarrier/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5.5 | week6/results/matmul-benchmark.json | /rows/0/warmScalarBarrier/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.700000002980232 | week6/results/matmul-benchmark.json | /rows/0/fullReadSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.599999994039536 | week6/results/matmul-benchmark.json | /rows/0/fullReadSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.900000005960464 | week6/results/matmul-benchmark.json | /rows/0/fullReadSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.599999994039536 | week6/results/matmul-benchmark.json | /rows/0/fullReadSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.400000005960464 | week6/results/matmul-benchmark.json | /rows/0/fullReadSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.5 | week6/results/matmul-benchmark.json | /rows/0/scalarSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.399999991059303 | week6/results/matmul-benchmark.json | /rows/0/scalarSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 4.4000000059604645 | week6/results/matmul-benchmark.json | /rows/0/scalarSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 4.4000000059604645 | week6/results/matmul-benchmark.json | /rows/0/scalarSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.299999997019768 | week6/results/matmul-benchmark.json | /rows/0/scalarSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.38672447204589844 | week6/results/matmul-benchmark.json | /rows/0/checksum | Direct evidence; rounded only for presentation. |
| Evidence field | 6097124 | week6/results/matmul-benchmark.json | /rows/0/residentInputAndOutputBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/matmul-benchmark.json | /rows/1/batch | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/1/products/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/1/products/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/matmul-benchmark.json | /rows/1/products/0/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/1/products/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/1/products/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/matmul-benchmark.json | /rows/1/products/1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 194454144 | week6/results/matmul-benchmark.json | /rows/1/flopsPerPair | Direct evidence; rounded only for presentation. |
| Evidence field | 359.70000000298023 | week6/results/matmul-benchmark.json | /rows/1/coldPairMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/1/warmFullRead/count | Direct evidence; rounded only for presentation. |
| Evidence field | 9.799999997019768 | week6/results/matmul-benchmark.json | /rows/1/warmFullRead/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.5 | week6/results/matmul-benchmark.json | /rows/1/warmFullRead/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.600000008940697 | week6/results/matmul-benchmark.json | /rows/1/warmFullRead/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/1/warmScalarBarrier/count | Direct evidence; rounded only for presentation. |
| Evidence field | 5.300000011920929 | week6/results/matmul-benchmark.json | /rows/1/warmScalarBarrier/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5.399999991059303 | week6/results/matmul-benchmark.json | /rows/1/warmScalarBarrier/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 9.200000002980232 | week6/results/matmul-benchmark.json | /rows/1/warmScalarBarrier/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.600000008940697 | week6/results/matmul-benchmark.json | /rows/1/fullReadSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.599999994039536 | week6/results/matmul-benchmark.json | /rows/1/fullReadSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.5 | week6/results/matmul-benchmark.json | /rows/1/fullReadSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.400000005960464 | week6/results/matmul-benchmark.json | /rows/1/fullReadSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.799999997019768 | week6/results/matmul-benchmark.json | /rows/1/fullReadSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.200000002980232 | week6/results/matmul-benchmark.json | /rows/1/scalarSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.399999991059303 | week6/results/matmul-benchmark.json | /rows/1/scalarSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.5 | week6/results/matmul-benchmark.json | /rows/1/scalarSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.300000011920929 | week6/results/matmul-benchmark.json | /rows/1/scalarSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.399999991059303 | week6/results/matmul-benchmark.json | /rows/1/scalarSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.38672444969415665 | week6/results/matmul-benchmark.json | /rows/1/checksum | Direct evidence; rounded only for presentation. |
| Evidence field | 6730516 | week6/results/matmul-benchmark.json | /rows/1/residentInputAndOutputBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 128 | week6/results/matmul-benchmark.json | /rows/2/batch | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/2/products/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/2/products/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 128 | week6/results/matmul-benchmark.json | /rows/2/products/0/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/2/products/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/2/products/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 128 | week6/results/matmul-benchmark.json | /rows/2/products/1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 777816576 | week6/results/matmul-benchmark.json | /rows/2/flopsPerPair | Direct evidence; rounded only for presentation. |
| Evidence field | 363.59999999403954 | week6/results/matmul-benchmark.json | /rows/2/coldPairMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/2/warmFullRead/count | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/matmul-benchmark.json | /rows/2/warmFullRead/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 15.800000011920929 | week6/results/matmul-benchmark.json | /rows/2/warmFullRead/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 16.099999994039536 | week6/results/matmul-benchmark.json | /rows/2/warmFullRead/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/2/warmScalarBarrier/count | Direct evidence; rounded only for presentation. |
| Evidence field | 5.0999999940395355 | week6/results/matmul-benchmark.json | /rows/2/warmScalarBarrier/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/matmul-benchmark.json | /rows/2/warmScalarBarrier/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 10.400000005960464 | week6/results/matmul-benchmark.json | /rows/2/warmScalarBarrier/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 16.099999994039536 | week6/results/matmul-benchmark.json | /rows/2/fullReadSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 16 | week6/results/matmul-benchmark.json | /rows/2/fullReadSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 15.800000011920929 | week6/results/matmul-benchmark.json | /rows/2/fullReadSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/matmul-benchmark.json | /rows/2/fullReadSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.899999991059303 | week6/results/matmul-benchmark.json | /rows/2/fullReadSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 9.5 | week6/results/matmul-benchmark.json | /rows/2/scalarSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.400000005960464 | week6/results/matmul-benchmark.json | /rows/2/scalarSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 10.299999997019768 | week6/results/matmul-benchmark.json | /rows/2/scalarSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 10 | week6/results/matmul-benchmark.json | /rows/2/scalarSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 5.0999999940395355 | week6/results/matmul-benchmark.json | /rows/2/scalarSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.38672444969415665 | week6/results/matmul-benchmark.json | /rows/2/checksum | Direct evidence; rounded only for presentation. |
| Evidence field | 8691988 | week6/results/matmul-benchmark.json | /rows/2/residentInputAndOutputBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/3/batch | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/3/products/0/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/3/products/0/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/3/products/0/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 1611 | week6/results/matmul-benchmark.json | /rows/3/products/1/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/3/products/1/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/matmul-benchmark.json | /rows/3/products/1/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 5730320556 | week6/results/matmul-benchmark.json | /rows/3/flopsPerPair | Direct evidence; rounded only for presentation. |
| Evidence field | 385.29999999701977 | week6/results/matmul-benchmark.json | /rows/3/coldPairMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/3/warmFullRead/count | Direct evidence; rounded only for presentation. |
| Evidence field | 24.200000002980232 | week6/results/matmul-benchmark.json | /rows/3/warmFullRead/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 28.599999994039536 | week6/results/matmul-benchmark.json | /rows/3/warmFullRead/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 30.299999997019768 | week6/results/matmul-benchmark.json | /rows/3/warmFullRead/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/matmul-benchmark.json | /rows/3/warmScalarBarrier/count | Direct evidence; rounded only for presentation. |
| Evidence field | 14.399999991059303 | week6/results/matmul-benchmark.json | /rows/3/warmScalarBarrier/minMs | Direct evidence; rounded only for presentation. |
| Evidence field | 14.700000002980232 | week6/results/matmul-benchmark.json | /rows/3/warmScalarBarrier/medianMs | Direct evidence; rounded only for presentation. |
| Evidence field | 20.400000005960464 | week6/results/matmul-benchmark.json | /rows/3/warmScalarBarrier/maxMs | Direct evidence; rounded only for presentation. |
| Evidence field | 28.599999994039536 | week6/results/matmul-benchmark.json | /rows/3/fullReadSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 24.200000002980232 | week6/results/matmul-benchmark.json | /rows/3/fullReadSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 24.200000002980232 | week6/results/matmul-benchmark.json | /rows/3/fullReadSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 29.599999994039536 | week6/results/matmul-benchmark.json | /rows/3/fullReadSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 30.299999997019768 | week6/results/matmul-benchmark.json | /rows/3/fullReadSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 14.700000002980232 | week6/results/matmul-benchmark.json | /rows/3/scalarSamplesMs/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 14.399999991059303 | week6/results/matmul-benchmark.json | /rows/3/scalarSamplesMs/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 15.400000005960464 | week6/results/matmul-benchmark.json | /rows/3/scalarSamplesMs/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 14.5 | week6/results/matmul-benchmark.json | /rows/3/scalarSamplesMs/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 20.400000005960464 | week6/results/matmul-benchmark.json | /rows/3/scalarSamplesMs/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.38672444969415665 | week6/results/matmul-benchmark.json | /rows/3/checksum | Direct evidence; rounded only for presentation. |
| Evidence field | 25344068 | week6/results/matmul-benchmark.json | /rows/3/residentInputAndOutputBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5 | week6/results/recommendation-primary.json | /validationSelection/alpha | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/recommendation-primary.json | /validationSelection/selectedBeforeTest | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-primary.json | /restoration/checkpoint | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1052078640164102 | week6/results/recommendation-primary.json | /restoration/rmse/train | Direct evidence; rounded only for presentation. |
| Evidence field | 1.1829944264078285 | week6/results/recommendation-primary.json | /restoration/rmse/val | Direct evidence; rounded only for presentation. |
| Evidence field | 1.2288999214179168 | week6/results/recommendation-primary.json | /restoration/rmse/test | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-primary.json | /restoration/memory/unreliable | Direct evidence; rounded only for presentation. |
| Evidence field | 168128 | week6/results/recommendation-primary.json | /restoration/memory/numBytesInGPU | Direct evidence; rounded only for presentation. |
| Evidence field | 48487156 | week6/results/recommendation-primary.json | /restoration/memory/numBytesInGPUAllocated | Direct evidence; rounded only for presentation. |
| Evidence field | 48319028 | week6/results/recommendation-primary.json | /restoration/memory/numBytesInGPUFree | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-primary.json | /restoration/memory/numTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-primary.json | /restoration/memory/numDataBuffers | Direct evidence; rounded only for presentation. |
| Evidence field | 168128 | week6/results/recommendation-primary.json | /restoration/memory/numBytes | Direct evidence; rounded only for presentation. |
| Evidence field | False | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/unreliable | Direct evidence; rounded only for presentation. |
| Evidence field | 504512 | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/numBytesInGPU | Direct evidence; rounded only for presentation. |
| Evidence field | 53750620 | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/numBytesInGPUAllocated | Direct evidence; rounded only for presentation. |
| Evidence field | 53246108 | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/numBytesInGPUFree | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/numTensors | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/numDataBuffers | Direct evidence; rounded only for presentation. |
| Evidence field | 504392 | week6/results/recommendation-primary.json | /restoration/originalProbeTensorLeftovers/numBytes | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /0/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 217 | week6/results/recommendation-histories.json | /0/totalTrainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 131 | week6/results/recommendation-histories.json | /0/positiveTrainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-histories.json | /0/positiveThreshold | Direct evidence; rounded only for presentation. |
| Evidence field | 217 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 64 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Action/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.29493087557603687 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Action/share | Direct evidence; rounded only for presentation. |
| Evidence field | 34 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Adventure/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15668202764976957 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Adventure/share | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Animation/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.041474654377880185 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Animation/share | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Children's/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08294930875576037 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Children's/share | Direct evidence; rounded only for presentation. |
| Evidence field | 72 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Comedy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3317972350230415 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Comedy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Crime/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09216589861751152 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Crime/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Documentary/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.013824884792626729 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Documentary/share | Direct evidence; rounded only for presentation. |
| Evidence field | 82 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Drama/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3778801843317972 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Drama/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Fantasy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.009216589861751152 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Fantasy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Film-Noir/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.004608294930875576 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Film-Noir/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Horror/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.05069124423963134 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Horror/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Musical/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.05069124423963134 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Musical/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Mystery/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02304147465437788 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Mystery/share | Direct evidence; rounded only for presentation. |
| Evidence field | 34 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Romance/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15668202764976957 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Romance/share | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Sci-Fi/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.16589861751152074 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Sci-Fi/share | Direct evidence; rounded only for presentation. |
| Evidence field | 42 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Thriller/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.1935483870967742 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Thriller/share | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/War/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.10138248847926268 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/War/share | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Western/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.018433179723502304 | week6/results/recommendation-histories.json | /0/genreComposition/allTrain/shares/Western/share | Direct evidence; rounded only for presentation. |
| Evidence field | 131 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 36 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Action/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.2748091603053435 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Action/share | Direct evidence; rounded only for presentation. |
| Evidence field | 15 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Adventure/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.11450381679389313 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Adventure/share | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Animation/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.030534351145038167 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Animation/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Children's/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03816793893129771 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Children's/share | Direct evidence; rounded only for presentation. |
| Evidence field | 39 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Comedy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.29770992366412213 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Comedy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Crime/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08396946564885496 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Crime/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Documentary/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.022900763358778626 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Documentary/share | Direct evidence; rounded only for presentation. |
| Evidence field | 61 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Drama/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.46564885496183206 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Drama/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Fantasy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.007633587786259542 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Fantasy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Film-Noir/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.007633587786259542 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Film-Noir/share | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Horror/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.04580152671755725 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Horror/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Musical/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03816793893129771 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Musical/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Mystery/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.022900763358778626 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Mystery/share | Direct evidence; rounded only for presentation. |
| Evidence field | 22 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Romance/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.16793893129770993 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Romance/share | Direct evidence; rounded only for presentation. |
| Evidence field | 27 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Sci-Fi/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.20610687022900764 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Sci-Fi/share | Direct evidence; rounded only for presentation. |
| Evidence field | 25 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Thriller/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.19083969465648856 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Thriller/share | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/War/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09923664122137404 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/War/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Western/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.015267175572519083 | week6/results/recommendation-histories.json | /0/genreComposition/positiveTrain/shares/Western/share | Direct evidence; rounded only for presentation. |
| Evidence field | 106.97709923664122 | week6/results/recommendation-histories.json | /0/meanPositiveMoviePopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-histories.json | /0/mostPopularPositive/0/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Star Wars (1977) | week6/results/recommendation-histories.json | /0/mostPopularPositive/0/title | Direct evidence; rounded only for presentation. |
| Evidence field | 449 | week6/results/recommendation-histories.json | /0/mostPopularPositive/0/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/recommendation-histories.json | /0/mostPopularPositive/1/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Return of the Jedi (1983) | week6/results/recommendation-histories.json | /0/mostPopularPositive/1/title | Direct evidence; rounded only for presentation. |
| Evidence field | 339 | week6/results/recommendation-histories.json | /0/mostPopularPositive/1/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/recommendation-histories.json | /0/mostPopularPositive/2/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Raiders of the Lost Ark (1981) | week6/results/recommendation-histories.json | /0/mostPopularPositive/2/title | Direct evidence; rounded only for presentation. |
| Evidence field | 312 | week6/results/recommendation-histories.json | /0/mostPopularPositive/2/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/recommendation-histories.json | /0/mostPopularPositive/3/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Silence of the Lambs, The (1991) | week6/results/recommendation-histories.json | /0/mostPopularPositive/3/title | Direct evidence; rounded only for presentation. |
| Evidence field | 308 | week6/results/recommendation-histories.json | /0/mostPopularPositive/3/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-histories.json | /0/mostPopularPositive/4/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Godfather, The (1972) | week6/results/recommendation-histories.json | /0/mostPopularPositive/4/title | Direct evidence; rounded only for presentation. |
| Evidence field | 308 | week6/results/recommendation-histories.json | /0/mostPopularPositive/4/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 146 | week6/results/recommendation-histories.json | /0/leastPopularPositive/0/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Unhook the Stars (1996) | week6/results/recommendation-histories.json | /0/leastPopularPositive/0/title | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /0/leastPopularPositive/0/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 119 | week6/results/recommendation-histories.json | /0/leastPopularPositive/1/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Maya Lin: A Strong Clear Vision (1994) | week6/results/recommendation-histories.json | /0/leastPopularPositive/1/title | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /0/leastPopularPositive/1/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 84 | week6/results/recommendation-histories.json | /0/leastPopularPositive/2/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Robert A. Heinlein's The Puppet Masters (1994) | week6/results/recommendation-histories.json | /0/leastPopularPositive/2/title | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-histories.json | /0/leastPopularPositive/2/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 267 | week6/results/recommendation-histories.json | /0/leastPopularPositive/3/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | unknown | week6/results/recommendation-histories.json | /0/leastPopularPositive/3/title | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-histories.json | /0/leastPopularPositive/3/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 43 | week6/results/recommendation-histories.json | /0/leastPopularPositive/4/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Disclosure (1994) | week6/results/recommendation-histories.json | /0/leastPopularPositive/4/title | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-histories.json | /0/leastPopularPositive/4/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /1/userId | Direct evidence; rounded only for presentation. |
| Evidence field | 49 | week6/results/recommendation-histories.json | /1/totalTrainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/recommendation-histories.json | /1/positiveTrainRatings | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-histories.json | /1/positiveThreshold | Direct evidence; rounded only for presentation. |
| Evidence field | 49 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Action/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.12244897959183673 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Action/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Adventure/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.04081632653061224 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Adventure/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Animation/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02040816326530612 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Animation/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Children's/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02040816326530612 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Children's/share | Direct evidence; rounded only for presentation. |
| Evidence field | 15 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Comedy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.30612244897959184 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Comedy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Crime/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.14285714285714285 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Crime/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Documentary/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Documentary/share | Direct evidence; rounded only for presentation. |
| Evidence field | 28 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Drama/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5714285714285714 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Drama/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Fantasy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Fantasy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Film-Noir/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.02040816326530612 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Film-Noir/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Horror/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.04081632653061224 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Horror/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Musical/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Musical/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Mystery/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.061224489795918366 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Mystery/share | Direct evidence; rounded only for presentation. |
| Evidence field | 14 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Romance/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.2857142857142857 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Romance/share | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Sci-Fi/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.08163265306122448 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Sci-Fi/share | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Thriller/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.16326530612244897 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Thriller/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/War/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.061224489795918366 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/War/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Western/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/allTrain/shares/Western/share | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Action/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15625 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Action/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Adventure/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0625 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Adventure/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Animation/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03125 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Animation/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Children's/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03125 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Children's/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Comedy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.34375 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Comedy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Crime/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15625 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Crime/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Documentary/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Documentary/share | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Drama/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.5625 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Drama/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Fantasy/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Fantasy/share | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Film-Noir/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.03125 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Film-Noir/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Horror/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Horror/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Musical/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Musical/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Mystery/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Mystery/share | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Romance/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.34375 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Romance/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Sci-Fi/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0625 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Sci-Fi/share | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Thriller/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.09375 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Thriller/share | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/War/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0625 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/War/share | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Western/count | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/recommendation-histories.json | /1/genreComposition/positiveTrain/shares/Western/share | Direct evidence; rounded only for presentation. |
| Evidence field | 132.78125 | week6/results/recommendation-histories.json | /1/meanPositiveMoviePopularity | Direct evidence; rounded only for presentation. |
| Evidence field | 50 | week6/results/recommendation-histories.json | /1/mostPopularPositive/0/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Star Wars (1977) | week6/results/recommendation-histories.json | /1/mostPopularPositive/0/title | Direct evidence; rounded only for presentation. |
| Evidence field | 449 | week6/results/recommendation-histories.json | /1/mostPopularPositive/0/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/recommendation-histories.json | /1/mostPopularPositive/1/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Fargo (1996) | week6/results/recommendation-histories.json | /1/mostPopularPositive/1/title | Direct evidence; rounded only for presentation. |
| Evidence field | 377 | week6/results/recommendation-histories.json | /1/mostPopularPositive/1/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 127 | week6/results/recommendation-histories.json | /1/mostPopularPositive/2/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Godfather, The (1972) | week6/results/recommendation-histories.json | /1/mostPopularPositive/2/title | Direct evidence; rounded only for presentation. |
| Evidence field | 308 | week6/results/recommendation-histories.json | /1/mostPopularPositive/2/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/recommendation-histories.json | /1/mostPopularPositive/3/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Toy Story (1995) | week6/results/recommendation-histories.json | /1/mostPopularPositive/3/title | Direct evidence; rounded only for presentation. |
| Evidence field | 288 | week6/results/recommendation-histories.json | /1/mostPopularPositive/3/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/recommendation-histories.json | /1/mostPopularPositive/4/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | English Patient, The (1996) | week6/results/recommendation-histories.json | /1/mostPopularPositive/4/title | Direct evidence; rounded only for presentation. |
| Evidence field | 279 | week6/results/recommendation-histories.json | /1/mostPopularPositive/4/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 279 | week6/results/recommendation-histories.json | /1/leastPopularPositive/0/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Once Upon a Time... When We Were Colored (1995) | week6/results/recommendation-histories.json | /1/leastPopularPositive/0/title | Direct evidence; rounded only for presentation. |
| Evidence field | 13 | week6/results/recommendation-histories.json | /1/leastPopularPositive/0/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 299 | week6/results/recommendation-histories.json | /1/leastPopularPositive/1/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Hoodlum (1997) | week6/results/recommendation-histories.json | /1/leastPopularPositive/1/title | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/recommendation-histories.json | /1/leastPopularPositive/1/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 295 | week6/results/recommendation-histories.json | /1/leastPopularPositive/2/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Breakdown (1997) | week6/results/recommendation-histories.json | /1/leastPopularPositive/2/title | Direct evidence; rounded only for presentation. |
| Evidence field | 27 | week6/results/recommendation-histories.json | /1/leastPopularPositive/2/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 251 | week6/results/recommendation-histories.json | /1/leastPopularPositive/3/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Shall We Dance? (1996) | week6/results/recommendation-histories.json | /1/leastPopularPositive/3/title | Direct evidence; rounded only for presentation. |
| Evidence field | 30 | week6/results/recommendation-histories.json | /1/leastPopularPositive/3/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 297 | week6/results/recommendation-histories.json | /1/leastPopularPositive/4/movieId | Direct evidence; rounded only for presentation. |
| Evidence field | Ulee's Gold (1997) | week6/results/recommendation-histories.json | /1/leastPopularPositive/4/title | Direct evidence; rounded only for presentation. |
| Evidence field | 30 | week6/results/recommendation-histories.json | /1/leastPopularPositive/4/popularity | Direct evidence; rounded only for presentation. |
| Evidence field | 79619 | week6/results/split-comparison.json | /week5/splits/train/rows | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/split-comparison.json | /week5/splits/train/matchesIndependent | Direct evidence; rounded only for presentation. |
| Evidence field | 9596 | week6/results/split-comparison.json | /week5/splits/val/rows | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/split-comparison.json | /week5/splits/val/matchesIndependent | Direct evidence; rounded only for presentation. |
| Evidence field | 10785 | week6/results/split-comparison.json | /week5/splits/test/rows | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/split-comparison.json | /week5/splits/test/matchesIndependent | Direct evidence; rounded only for presentation. |
| Evidence field | 79619 | week6/results/split-comparison.json | /week6/splits/train/rows | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/split-comparison.json | /week6/splits/train/matchesIndependent | Direct evidence; rounded only for presentation. |
| Evidence field | 9596 | week6/results/split-comparison.json | /week6/splits/val/rows | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/split-comparison.json | /week6/splits/val/matchesIndependent | Direct evidence; rounded only for presentation. |
| Evidence field | 10785 | week6/results/split-comparison.json | /week6/splits/test/rows | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/split-comparison.json | /week6/splits/test/matchesIndependent | Direct evidence; rounded only for presentation. |
| Evidence field | 0.25 | week6/results/hw6_independent_recheck.json | /fixture_first_update/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.14375 | week6/results/hw6_independent_recheck.json | /fixture_first_update/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.56875 | week6/results/hw6_independent_recheck.json | /fixture_first_update/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0375 | week6/results/hw6_independent_recheck.json | /fixture_first_update/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/hw6_independent_recheck.json | /recall_checks/0/user | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 111 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 129 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 154 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 169 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 171 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 209 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 221 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/13 | Direct evidence; rounded only for presentation. |
| Evidence field | 228 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/14 | Direct evidence; rounded only for presentation. |
| Evidence field | 242 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/15 | Direct evidence; rounded only for presentation. |
| Evidence field | 256 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/16 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/17 | Direct evidence; rounded only for presentation. |
| Evidence field | 270 | week6/results/hw6_independent_recheck.json | /recall_checks/0/relevant_ids/18 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 286 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 318 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 357 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 483 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 275 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 423 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recommended_ids/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/hw6_independent_recheck.json | /recall_checks/0/hits/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/hw6_independent_recheck.json | /recall_checks/0/hits/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/hw6_independent_recheck.json | /recall_checks/0/hits/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/hw6_independent_recheck.json | /recall_checks/0/numerator | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/hw6_independent_recheck.json | /recall_checks/0/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.15789473684210525 | week6/results/hw6_independent_recheck.json | /recall_checks/0/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/hw6_independent_recheck.json | /recall_checks/1/user | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 111 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 129 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 154 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 169 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 171 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 178 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/10 | Direct evidence; rounded only for presentation. |
| Evidence field | 209 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/11 | Direct evidence; rounded only for presentation. |
| Evidence field | 221 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/12 | Direct evidence; rounded only for presentation. |
| Evidence field | 222 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/13 | Direct evidence; rounded only for presentation. |
| Evidence field | 228 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/14 | Direct evidence; rounded only for presentation. |
| Evidence field | 242 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/15 | Direct evidence; rounded only for presentation. |
| Evidence field | 256 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/16 | Direct evidence; rounded only for presentation. |
| Evidence field | 258 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/17 | Direct evidence; rounded only for presentation. |
| Evidence field | 270 | week6/results/hw6_independent_recheck.json | /recall_checks/1/relevant_ids/18 | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 74 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 102 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 111 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 129 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recommended_ids/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 18 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 20 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 32 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 100 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 111 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 129 | week6/results/hw6_independent_recheck.json | /recall_checks/1/hits/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/hw6_independent_recheck.json | /recall_checks/1/numerator | Direct evidence; rounded only for presentation. |
| Evidence field | 19 | week6/results/hw6_independent_recheck.json | /recall_checks/1/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.3684210526315789 | week6/results/hw6_independent_recheck.json | /recall_checks/1/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/hw6_independent_recheck.json | /recall_checks/2/user | Direct evidence; rounded only for presentation. |
| Evidence field | 304 | week6/results/hw6_independent_recheck.json | /recall_checks/2/relevant_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 316 | week6/results/hw6_independent_recheck.json | /recall_checks/2/relevant_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 181 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 117 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 98 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 121 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 174 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 268 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 475 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 15 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recommended_ids/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/hw6_independent_recheck.json | /recall_checks/2/numerator | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/hw6_independent_recheck.json | /recall_checks/2/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/hw6_independent_recheck.json | /recall_checks/2/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/hw6_independent_recheck.json | /recall_checks/3/user | Direct evidence; rounded only for presentation. |
| Evidence field | 304 | week6/results/hw6_independent_recheck.json | /recall_checks/3/relevant_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 316 | week6/results/hw6_independent_recheck.json | /recall_checks/3/relevant_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 3 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 4 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/2 | Direct evidence; rounded only for presentation. |
| Evidence field | 5 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/3 | Direct evidence; rounded only for presentation. |
| Evidence field | 6 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/4 | Direct evidence; rounded only for presentation. |
| Evidence field | 7 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/5 | Direct evidence; rounded only for presentation. |
| Evidence field | 8 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/6 | Direct evidence; rounded only for presentation. |
| Evidence field | 9 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/7 | Direct evidence; rounded only for presentation. |
| Evidence field | 11 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/8 | Direct evidence; rounded only for presentation. |
| Evidence field | 12 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recommended_ids/9 | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/hw6_independent_recheck.json | /recall_checks/3/numerator | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/hw6_independent_recheck.json | /recall_checks/3/denominator | Direct evidence; rounded only for presentation. |
| Evidence field | 0.0 | week6/results/hw6_independent_recheck.json | /recall_checks/3/recall | Direct evidence; rounded only for presentation. |
| Evidence field | 45602 | week6/results/hw6_independent_recheck.json | /positive_edges | Direct evidence; rounded only for presentation. |
| Evidence field | 3.729655473350135e-17 | week6/results/hw6_independent_recheck.json | /undamped_stationary_distribution_max_residual | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/hw6_seed_contract_recheck.json | /tests/0/rawId | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/hw6_seed_contract_recheck.json | /tests/0/nodeIndex | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /tests/0/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 2 | week6/results/hw6_seed_contract_recheck.json | /tests/1/rawId | Direct evidence; rounded only for presentation. |
| Evidence field | 1 | week6/results/hw6_seed_contract_recheck.json | /tests/1/nodeIndex | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /tests/1/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 685 | week6/results/hw6_seed_contract_recheck.json | /tests/2/rawId | Direct evidence; rounded only for presentation. |
| Evidence field | 684 | week6/results/hw6_seed_contract_recheck.json | /tests/2/nodeIndex | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /tests/2/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 943 | week6/results/hw6_seed_contract_recheck.json | /tests/3/rawId | Direct evidence; rounded only for presentation. |
| Evidence field | 942 | week6/results/hw6_seed_contract_recheck.json | /tests/3/nodeIndex | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /tests/3/pass | Direct evidence; rounded only for presentation. |
| Evidence field | 0 | week6/results/hw6_seed_contract_recheck.json | /invalidRawIdsRejected/0 | Direct evidence; rounded only for presentation. |
| Evidence field | 944 | week6/results/hw6_seed_contract_recheck.json | /invalidRawIdsRejected/1 | Direct evidence; rounded only for presentation. |
| Evidence field | 1.5 | week6/results/hw6_seed_contract_recheck.json | /invalidRawIdsRejected/2 | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /fixtureIndex3Accepted | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /fixtureIndex4Rejected | Direct evidence; rounded only for presentation. |
| Evidence field | True | week6/results/hw6_seed_contract_recheck.json | /adapterPassesRaw943 | Direct evidence; rounded only for presentation. |
| Raw dataset counts and sparsity | 943 users;1682 movies;100000 ratings;93.6953% | week6/results/independent_stats.txt | lines6–18,44; /users,/moviesRated,/ratings,/unpaddedSparsity | 1−100000/(943×1682), multiplied by100; no zero-ID padding. |
| PPR gain vs popularity | 3.62 percentage points;47.6% relative | week6/results/additional-analysis.json | /popularityCoverage/2/recall and /popularityCoverage/0/recall | 100*(PPR−pop) vs100*(PPR/pop−1);2/1 decimals respectively. |
| Subgroup gains | 5.67pp/75.2%;1.52pp/19.8% | week6/results/additional-analysis.json | /activityGroups/pprVsBaselines/0/light and /heavy | AbsoluteRecallDifference×100; relativeChangePercent directly. |
| Alpha-only popularity change | −17.1 | week6/results/recommendation-panel-analysis.json | /diagnostics/2/meanPopularityChange | 228.4−245.5; arithmetic difference, not relative percent. |
| All audited lists | 6828 | week6/results/recommendation-experiment-summary.json | /audit/val and /audit/test | 4 methods ×(846+861). |
| Maximum mass error across grid | 8.41e−7 | week6/results/graph-verification-summary.json | /convergence/3/ppr/maxMassError | Upper rounding of8.401502782362513e−7. |
| MF configurations and source | HW6 versus both labelled HW5 models | week6/script.js; week5/submission/a05_report.html | script.js:128–134,891–1004; prior report lines28–39; HW5 model.json /selectedEpoch | Original settings unchanged; configuration records and selected checkpoint verification retained. |
| Method contracts and cache | tol1e−6/cap500; seed mapping; rectangular ops; cache key | week6/graph.js | lines416–636 | Public adapter/JSDoc, graphPropagationConfig, graphPropagationKey, graphPropagateColumns. |
| Split and tie rules | 80/10/remainder; timestamp then movie ID | week6/data.js | lines134–180 | Protocol, not a newly selected experiment setting. |
| Report builder version | Playwright1.62.1 | week6/report/pdf-build.json | /playwright | Renderer version, not an inferred experiment harness version. |
| Seed tolerance | 2e−7; two float32 ulps near1 | week6/results/graph-alpha-0.5.json | /result/assertions/seedTolerance and /seedToleranceReason | Recorded test bound; all seed margins were positive. |
| Rectangular/dense payload estimates | 6.08MB /26.09MB | week6/results/performance-estimates.json | /memory/RFloat32Bytes and /denseQFloat32Bytes | Divide bytes by1,000,000; round2 decimals. Payload estimates exclude overhead. |
| Propagation times in seconds | Table4.3 all alphas | week6/results/graph-verification-summary.json | /convergence/{0,1,2,3}/global/wallMs and /ppr/wallMs | Divide measured milliseconds by1000; round3 decimals, not kernel extrapolations. |
| Kernel timing proxies | 5.3ms /14.7ms | week6/results/matmul-benchmark.json | /rows/0/warmScalarBarrier/medianMs and /rows/3/warmScalarBarrier/medianMs | Direct measured two-matmul medians,1 decimal; not full propagation. |
| Author and date | Elizaveta Gill; eagill@edu.hse.ru;2026-10-22 | week5/submission/a05_report.html; client date context | title block; current date | Author copied from own prior report; date is report preparation date. |
| Guidelines | five-body-page stricter limit; four sentences;50–150 words; name-prefixed PDF | week6/report/sources/homework_guidelines.txt | PDF pages3–5 and12 | Conflicting six-page text on pages4–5; stricter page3/FAQ12 used. Current week6 title overrides older topic ordering. |
| Screenshot | local comparison after test evaluation | week6/results/recommendation-primary-page.png | whole screenshot; CSS viewport of Method comparison | Original image copied byte-for-byte. No app rerun, redraw or score changes. |
| PPR recall user1/user2 | 3/19=.157895;0/2=0 | week6/results/recommendation-panel-analysis.json | /panels/2/hits,/relevant; /panels/6/hits,/relevant | Macro recall denominators are eligible relevant items, not10. |
| MF recall user1 | 7/19=.368421 | week6/results/recommendation-panel-analysis.json | /panels/3/hits,/relevant | Contrasts aggregate result without hiding this individual MF advantage. |
| Reference 1 | F. M. Harper and J. A. Konstan, “The MovieLens datasets: History and context,” ACM Trans. Interact. Intell. Syst., vol.5, no.4, Art.19, pp.1–19, Dec.2015. https://doi.org/10.1145/2827872 | week6/results/references-verified.json | /0 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 2 | L. Page, S. Brin, R. Motwani, and T. Winograd, “The PageRank citation ranking: Bringing order to the Web,” Stanford University, technical report manuscript, Jan.29,1998. https://ethw-images.s3.us-east-va.perf.cloud.ovh.us/ethw/6/64/Ref13-PageEtAl1998-PageRankCitationRanking.pdf | week6/results/references-verified.json | /1 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 3 | T. H. Haveliwala, “Topic-sensitive PageRank,” in Proc.11th Int.Conf.World Wide Web (WWW), 2002, pp.517–526. https://doi.org/10.1145/511446.511513 | week6/results/references-verified.json | /2 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 4 | G. Jeh and J. Widom, “Scaling personalized web search,” in Proc.12th Int.Conf.World Wide Web (WWW), 2003, pp.271–279. https://doi.org/10.1145/775152.775191 | week6/results/references-verified.json | /3 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 5 | F. Fouss, A. Pirotte, J.-M. Renders, and M. Saerens, “Random-walk computation of similarities between nodes of a graph with application to collaborative recommendation,” IEEE Trans.Knowl.Data Eng., vol.19, no.3, pp.355–369, Mar.2007. https://doi.org/10.1109/TKDE.2007.46 | week6/results/references-verified.json | /4 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 6 | Y. Koren, R. Bell, and C. Volinsky, “Matrix factorization techniques for recommender systems,” Computer, vol.42, no.8, pp.30–37, Aug.2009. https://doi.org/10.1109/MC.2009.263 | week6/results/references-verified.json | /5 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 7 | D. Smilkov et al., “TensorFlow.js: Machine learning for the Web and beyond,” Proc.Mach.Learn.Syst., vol.1, pp.309–321, 2019. https://proceedings.mlsys.org/paper_files/paper/2019/hash/acd593d2db87a799a8d3da5a860c028e-Abstract.html | week6/results/references-verified.json | /6 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Reference 8 | TensorFlow, “TensorFlow.js API, version4.22.0.” [Online]. Available: https://js.tensorflow.org/api/4.22.0/ | week6/results/references-verified.json | /7 | DOI/source metadata and access status in reference-http-summary.json; 1998 manuscript kept distinct from1999 record. |
| Submission JSON records | 2466 | week6/results/submission-json-verification.json | /records | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON jsonBytes | 31372577 | week6/results/submission-json-verification.json | /jsonBytes | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON gzipBytes | 19109433 | week6/results/submission-json-verification.json | /gzipBytes | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON firstTimestamp | 2026-10-22T09:39:25.371Z | week6/results/submission-json-verification.json | /firstTimestamp | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON lastTimestamp | 2026-10-22T12:54:42.671Z | week6/results/submission-json-verification.json | /lastTimestamp | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON nativeParts | 4 | week6/results/submission-json-verification.json | /nativeParts | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON replacements | 0 | week6/results/submission-json-verification.json | /replacements | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON redactions | 0 | week6/results/submission-json-verification.json | /redactions | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON omittedRecords | 0 | week6/results/submission-json-verification.json | /omittedRecords | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON formatChanged | True | week6/results/submission-json-verification.json | /formatChanged | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON nativeFileByteIdentical | False | week6/results/submission-json-verification.json | /nativeFileByteIdentical | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON jsonSHA256 | 6f3a3b4463d13a041bb9d1c6c3287b5317d363d69c0aba75c60718b2cd2c9f85 | week6/results/submission-json-verification.json | /jsonSHA256 | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON gzipSHA256 | c737c04cbafcd6c00be5ecdb2b93701977067048ab413b91108848bb6db70b2d | week6/results/submission-json-verification.json | /gzipSHA256 | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON sourceRecordCorrespondence | True | week6/results/submission-json-verification.json | /sourceRecordCorrespondence | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON sourceOrderPreserved | True | week6/results/submission-json-verification.json | /sourceOrderPreserved | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON timestampOrderVerified | True | week6/results/submission-json-verification.json | /timestampOrderVerified | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON builtFreshFromNativeFiles | True | week6/results/submission-json-verification.json | /builtFreshFromNativeFiles | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON oldExportAppended | False | week6/results/submission-json-verification.json | /oldExportAppended | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Submission JSON serializedRecordsByteIdenticalToNativeLines | True | week6/results/submission-json-verification.json | /serializedRecordsByteIdenticalToNativeLines | Fresh frozen native snapshot; every record wrapped once as a JSON array; serialized content and order unchanged; format changed. |
| Completed seed contract correction | 1→0;685→684;943→942; reject0,944,1.5; fixture3/4 accept/reject | week6/results/hw6_seed_contract_recheck.json | /tests; /invalidRawIdsRejected; /fixtureIndex3Accepted; /fixtureIndex4Rejected; /adapterPassesRaw943 | Actual functions executed with mocked propagation; no GPU convergence inference. |
| Starter documentation contradiction | node index, not a raw user id | week6/results/contract-inventory.json | /contradictionsAndTensions/0/evidence/0; instructor4b9598b4 week6/graph.js:453–460 | Archived starter quote; current correction graph.js:427–456; unchanged adapter script.js:1432–1464. |
| Undamped stationarity check | 3.73e−17 | week6/results/hw6_independent_recheck.json | /undamped_stationary_distribution_max_residual | Maximum coordinate residual3.729655473350135e−17 rounded3 significant figures; undamped walk, not finite-alpha PageRank. |
| Rechecked user recalls | PPR3/19;MF7/19;both user2 0/2 | week6/results/hw6_independent_recheck.json | /recall_checks/{0,1,2,3}/hits,/numerator,/denominator | Raw chronological split reconstructed, then set intersection against saved recommendations; no new ranking experiment. |
| Rechecked reference arithmetic | (.25,.14375,.56875,.0375) | week6/results/hw6_independent_recheck.json | /fixture_incoming; /fixture_first_update | Exact rational update .85*(1/4,1/8,5/8,0)+.15*(1/4,1/4,1/4,1/4). |
| Student-confirmed verification | Recall calculations, reference-graph update, stationarity and user-ID mapping: agreement confirmed | week6/results/student-review-confirmation.json | /personallyConfirmedChecks; /reportedOutcome | Direct student confirmation; no inference of unaided calculation, full paper reading or other checks. |
