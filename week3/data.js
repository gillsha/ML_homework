// MovieLens loaders shared by the browser and the Node.js checks.
const CFData = (() => {
    function positiveId(value) {
        return /^\d+$/.test(value) && Number.isSafeInteger(Number(value)) && Number(value) > 0;
    }

    function parseItemData(text) {
        const movies = [];
        const ids = new Set();
        text.split(/\r?\n/).forEach((line, index) => {
            if (!line.trim()) return;
            const parts = line.split('|');
            if (parts.length < 2 || !positiveId(parts[0]) || !parts[1].trim()) {
                throw new Error(`u.item, строка ${index + 1}: некорректный ID или название.`);
            }
            const id = Number(parts[0]);
            if (ids.has(id)) throw new Error(`u.item, строка ${index + 1}: повторный ID ${id}.`);
            ids.add(id);
            const match = parts[1].match(/^(.*\S)\s+\((\d{4})\)$/);
            movies.push({ id, title: match ? match[1] : parts[1].trim(), year: match ? Number(match[2]) : null });
        });
        if (!movies.length) throw new Error('u.item: файл не содержит фильмов.');
        return movies.sort((a, b) => a.id - b.id);
    }

    function parseRatingData(text) {
        const ratings = [];
        const pairs = new Set();
        text.split(/\r?\n/).forEach((line, index) => {
            if (!line.trim()) return;
            const parts = line.split('\t');
            if (parts.length !== 4 || !positiveId(parts[0]) || !positiveId(parts[1]) ||
                !/^[1-5]$/.test(parts[2]) || !/^\d+$/.test(parts[3]) || !Number.isSafeInteger(Number(parts[3]))) {
                throw new Error(`u.data, строка ${index + 1}: ожидаются user ID, movie ID, оценка 1–5 и timestamp.`);
            }
            const userId = Number(parts[0]);
            const movieId = Number(parts[1]);
            const key = `${userId}:${movieId}`;
            if (pairs.has(key)) throw new Error(`u.data, строка ${index + 1}: повторная пара ${key}.`);
            pairs.add(key);
            ratings.push({ userId, movieId, rating: Number(parts[2]), timestamp: Number(parts[3]) });
        });
        if (!ratings.length) throw new Error('u.data: файл не содержит оценок.');
        return ratings;
    }

    function validateReferences(movies, ratings) {
        const ids = new Set(movies.map(movie => movie.id));
        ratings.forEach(rating => {
            if (!ids.has(rating.movieId)) throw new Error(`u.data: неизвестный movie ID ${rating.movieId}.`);
        });
    }

    async function loadData(fetcher = fetch) {
        const responses = await Promise.all(['u.item', 'u.data'].map(async path => {
            const response = await fetcher(path);
            if (!response.ok) throw new Error(`${path}: HTTP ${response.status}.`);
            return response;
        }));
        // Response.text() always uses UTF-8; original MovieLens titles are Latin-1.
        const movies = parseItemData(new TextDecoder('iso-8859-1').decode(await responses[0].arrayBuffer()));
        const ratings = parseRatingData(await responses[1].text());
        validateReferences(movies, ratings);
        return { movies, ratings };
    }

    return { parseItemData, parseRatingData, validateReferences, loadData };
})();

if (typeof module !== 'undefined') module.exports = CFData;
