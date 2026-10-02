importScripts('cf.js');

let model;
let source;

self.onmessage = function(event) {
    const { type, userId } = event.data;
    const progress = message => self.postMessage({ type: 'progress', message });
    try {
        if (type === 'init') {
            source = event.data.data;
            model = CF.buildModel(source.movies, source.ratings, progress);
            const { data } = model;
            self.postMessage({
                type: 'ready', users: data.userIds.map((id, u) => ({ id, count: data.userStats[u].count })),
                movies: data.movieIds.length, ratings: data.ratingCount,
                unratedMovies: data.movieStats.filter(stats => !stats.count).length,
                sparsity: 1 - data.ratingCount / (data.movieIds.length * data.userIds.length), timing: model.timing
            });
        } else if (type === 'recommend') {
            if (!model) throw new Error('Модель ещё не готова.');
            self.postMessage({ type: 'recommendations', userId,
                user: CF.recommend(model, userId, 'user'), item: CF.recommend(model, userId, 'item') });
        } else if (type === 'evaluate') {
            if (!model) throw new Error('Модель ещё не готова.');
            self.postMessage({ type: 'evaluation', report: CF.evaluate(source.movies, source.ratings, progress) });
        } else {
            throw new Error('Неизвестная команда.');
        }
    } catch (error) {
        self.postMessage({ type: 'error', message: error.message });
    }
};
