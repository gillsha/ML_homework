# Verified reference entries

Checked 22 October2026 against Crossref, authors' university pages, official conference proceedings and versioned project documentation. Retrieval status and source URLs are in [reference-verification.json](reference-verification.json). Titles and metadata below were not copied unverified from the course README.

[1] F. M. Harper and J. A. Konstan, “The MovieLens datasets: History and context,” *ACM Transactions on Interactive Intelligent Systems*, vol.5, no.4, Art.19, Dec.2015, doi: [10.1145/2827872](https://doi.org/10.1145/2827872).

[2] L. Page, S. Brin, R. Motwani, and T. Winograd, “The PageRank citation ranking: Bringing order to the Web,” Stanford Digital Libraries, Stanford University, technical report, 1998. [Author's publication list](https://theory.stanford.edu/~rajeev/papers.html). See the version caveat below; no DOI was verified.

[3] T. H. Haveliwala, “Topic-sensitive PageRank,” in *Proceedings of the 11th International Conference on World Wide Web (WWW '02)*, 2002, pp.517–526, doi: [10.1145/511446.511513](https://doi.org/10.1145/511446.511513).

[4] G. Jeh and J. Widom, “Scaling personalized web search,” in *Proceedings of the 12th International Conference on World Wide Web (WWW '03)*, 2003, pp.271–279, doi: [10.1145/775152.775191](https://doi.org/10.1145/775152.775191).

[5] F. Fouss, A. Pirotte, J.-M. Renders, and M. Saerens, “Random-walk computation of similarities between nodes of a graph with application to collaborative recommendation,” *IEEE Transactions on Knowledge and Data Engineering*, vol.19, no.3, pp.355–369, Mar.2007, doi: [10.1109/TKDE.2007.46](https://doi.org/10.1109/TKDE.2007.46).

[6] Y. Koren, R. Bell, and C. Volinsky, “Matrix factorization techniques for recommender systems,” *Computer*, vol.42, no.8, pp.30–37, Aug.2009, doi: [10.1109/MC.2009.263](https://doi.org/10.1109/MC.2009.263).

[7] D. Smilkov *et al.*, “TensorFlow.js: Machine learning for the Web and beyond,” *Proceedings of Machine Learning and Systems*, vol.1, pp.309–321, 2019. [Official proceedings](https://proceedings.mlsys.org/paper_files/paper/2019/hash/acd593d2db87a799a8d3da5a860c028e-Abstract.html).

[8] TensorFlow, “TensorFlow.js API,” ver.4.22.0, online documentation. Accessed: Oct.22,2026. [Versioned API reference](https://js.tensorflow.org/api/4.22.0/).

## Verification notes

- **Harper–Konstan:** Crossref200 separates the title and subtitle and gives pages1–19; the [authors' university record](https://experts.umn.edu/en/publications/the-movielens-datasets-history-and-context/)200 identifies article19. ACM returned403 on this check. Article19 is not a nineteen-volume identifier. Use the final DOI, not placeholder metadata from a prepublication PDF.
- **PageRank:** Motwani's own publication list returned200 and explicitly labels this work “Technical Report, Stanford Digital Libraries, 1998.” The [Stanford course page](https://graphics.stanford.edu/courses/cs208-11-spring/) also lists the four authors and1998. The commonly cited1999-66 catalogue version could not be revalidated from the primary catalogue: HTTPS timed out; the HTTP redirect returned200 with a “Failed to connect to database” error body; the original PDF returned500. Its Stanford course mirror also returned500. Entry[2] deliberately cites the verified1998 author-listed version; the precise1999 catalogue date/report number remains unconfirmed in this retrieval. HTTP200 alone is not evidence that metadata was available. Do not substitute Brin and Page's different paper, *The Anatomy of a Large-Scale Hypertextual Web Search Engine*.
- **Haveliwala:** Crossref initially429, successful retry200. Entry[3] is the2002 WWW conference paper. The expanded2003 IEEE article with the subtitle “A context-sensitive ranking algorithm for web search” is a different bibliographic record.
- **Jeh–Widom:** Both queried DOI forms returned200; the alternate `10.1145/775189.775191` resolves in Crossref metadata to canonical `10.1145/775152.775191`. Crossref reports only start page271; [Widom's publication page](https://cs.stanford.edu/people/widom/pubs.html), retrieved through the web tool, confirms271–279 and May2003. A separate direct HTTP request to that page timed out. The [original WWW paper archive](https://areto.ethz.ch/CDstore/www2003/papers/refereed/p185/html/p185-jeh.html) returned200 and confirms authors/title/venue.
- **Fouss:** Crossref initially429, retry200. Crossref confirms all four authors, including J.-M. Renders. The university repository display duplicates Saerens and omits Renders, so it was not used for the final author list.
- **Koren–Bell–Volinsky:** Crossref initially429, retry200; IEEE's indexed publisher record independently confirms42(8),30–37,2009 and DOI.
- **Smilkov:** Official proceedings, official BibTeX and arXiv each returned200. Use the published proceedings entry with pages309–321, rather than treating the arXiv identifier as a DOI. The official BibTeX spells one coauthor “Soegel,” while other versions use “Soergel”; the conventional first-author *et al.* entry avoids silently merging inconsistent author strings. No journal/conference DOI was verified.
- **TF.js:** The actual app requests4.22.0; the versioned documentation and `tfjs-v4.22.0` tagged `mat_mul.ts` source both returned200. Relevant APIs include `tf.matMul`, `tf.tidy`, `tf.dispose`, `tf.memory`, `tf.getBackend`, and tensor data access. This is the version used, not a claim about the newest release.
