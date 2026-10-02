let worker;
let moviesById = new Map();
let ready = false;

const element = id => document.getElementById(id);
const milliseconds = value => `${value.toFixed(1)} мс`;

function updateStatus(message, isError = false) {
    element('status').textContent = message;
    element('status').className = isError ? 'status error' : 'status';
}

function setBusy(busy) {
    element('user-select').disabled = busy || !ready;
    element('recommend-btn').disabled = busy || !ready;
    element('evaluate-btn').disabled = busy || !ready;
    element('app').setAttribute('aria-busy', String(busy));
}

function fail(message) {
    ready = false;
    if (worker) worker.terminate();
    worker = null;
    setBusy(false);
    element('recommendations').hidden = true;
    element('evaluation').hidden = true;
    element('stats').textContent = '';
    element('retry-btn').hidden = false;
    updateStatus(`Ошибка: ${message} Исправьте причину и нажмите «Повторить загрузку».`, true);
}

function movieTitle(id) {
    const movie = moviesById.get(id);
    return movie ? `${movie.title}${movie.year ? ` (${movie.year})` : ''}` : `Фильм ${id}`;
}

function renderList(method, result, shared) {
    const body = element(`${method}-results`);
    body.replaceChildren();
    result.items.forEach((item, index) => {
        const row = document.createElement('tr');
        if (shared.has(item.movieId)) row.className = 'shared';
        const values = [
            `${index + 1}. ${movieTitle(item.movieId)}${shared.has(item.movieId) ? ' ★' : ''}`,
            `${item.score.toFixed(3)} / 5 (score ${item.rawScore.toFixed(3)})`,
            item.fallback ? `Fallback: ${item.reason}` : `${item.neighbors} соседей; ${item.strongestCommon} общих оценок с ближайшим`,
            item.count
        ];
        values.forEach(value => {
            const cell = document.createElement('td');
            // Titles and errors are text, never HTML from a dataset.
            cell.textContent = String(value);
            row.appendChild(cell);
        });
        body.appendChild(row);
    });
    element(`${method}-summary`).textContent = result.items.length
        ? `${result.candidates} кандидатов · расчёт и сортировка: ${milliseconds(result.ms)} · fallback в топе: ${result.items.filter(item => item.fallback).length}`
        : 'Нет доступных неоценённых фильмов с обучающими оценками.';
}

function renderRecommendations(message) {
    const shared = new Set(message.user.items.filter(userItem => message.item.items.some(item => item.movieId === userItem.movieId)).map(item => item.movieId));
    renderList('user', message.user, shared);
    renderList('item', message.item, shared);
    const size = Math.min(message.user.items.length, message.item.items.length);
    element('comparison').textContent = `${message.userId === null ? 'Новый пользователь' : `Пользователь ${message.userId}`} · общих фильмов в двух топах: ${shared.size}/${size}. ★ — есть в обоих списках. ` +
        'Порядок определяется исходным конечным score без clipping; при равенстве — ID фильма. Оценка для показа ограничена 1–5. Совпадение списков не является метрикой качества.';
    element('recommendations').hidden = false;
    setBusy(false);
    updateStatus('Рекомендации готовы. Уже оценённые фильмы исключены.');
}

function renderEvaluation(report) {
    const body = element('metrics');
    body.replaceChildren();
    const names = { baseline: 'Baseline (без соседей)', user: 'User-based CF', item: 'Item-based CF' };
    Object.entries(report.results).forEach(([method, result]) => {
        const row = document.createElement('tr');
        const values = [
            names[method], result.rmse.toFixed(4), result.mae.toFixed(4),
            result.warmRmse === null ? '—' : result.warmRmse.toFixed(4),
            method === 'baseline' ? '—' : `${(100 * (1 - result.fallbackCount / report.test)).toFixed(2)}%`,
            method === 'baseline' ? '—' : milliseconds(report.timing[`${method}Ms`]), milliseconds(result.ms)
        ];
        values.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        body.appendChild(row);
    });
    element('evaluation-summary').textContent = `Train: ${report.train.toLocaleString('ru-RU')}; test: ${report.test.toLocaleString('ru-RU')}. ` +
        `Test-оценок cold-start фильмов: ${report.coldItems}. Общая подготовка разреженных данных: ${milliseconds(report.timing.dataMs)}. ` +
        'Всё сходство, средние и fallback пересчитаны только на train. RMSE/MAE: меньше — лучше; покрытие — доля прогнозов с соседями. Warm RMSE исключает фильмы без train-оценок. Время зависит от устройства.';
    element('evaluation').hidden = false;
    setBusy(false);
    updateStatus('Test-эксперимент завершён. Рекомендации выше по-прежнему используют полный датасет.');
}

function requestRecommendations() {
    if (!ready || !worker) return;
    setBusy(true);
    element('recommendations').hidden = true;
    updateStatus('Подбираем фильмы двумя методами…');
    const value = element('user-select').value;
    worker.postMessage({ type: 'recommend', userId: value === 'new' ? null : Number(value) });
}

async function initialize() {
    ready = false;
    if (worker) worker.terminate();
    worker = null;
    setBusy(true);
    element('retry-btn').hidden = true;
    element('recommendations').hidden = true;
    element('evaluation').hidden = true;
    element('stats').textContent = '';
    element('user-select').replaceChildren();
    updateStatus('Загружаем и проверяем MovieLens 100K…');
    try {
        if (location.protocol === 'file:') throw new Error('Откройте приложение через HTTP: python3 -m http.server 8000 (см. README).');
        const data = await CFData.loadData();
        moviesById = new Map(data.movies.map(movie => [movie.id, movie]));
        worker = new Worker('worker.js');
        worker.onerror = event => { event.preventDefault(); fail(event.message || 'Не удалось запустить Web Worker.'); };
        worker.onmessageerror = () => fail('Не удалось прочитать ответ Web Worker.');
        worker.onmessage = event => {
            const message = event.data;
            if (message.type === 'progress') updateStatus(message.message);
            else if (message.type === 'error') fail(message.message);
            else if (message.type === 'ready') {
                message.users.forEach(user => {
                    const option = document.createElement('option');
                    option.value = user.id;
                    option.textContent = `Пользователь ${user.id} · ${user.count} оценок`;
                    element('user-select').appendChild(option);
                });
                const option = document.createElement('option');
                option.value = 'new';
                option.textContent = 'Новый пользователь · cold start';
                element('user-select').appendChild(option);
                element('stats').textContent = `${message.users.length} пользователей · ${message.movies} фильмов · ${message.ratings.toLocaleString('ru-RU')} оценок · ` +
                    `пропусков ${(100 * message.sparsity).toFixed(2)}% · фильмов без оценок: ${message.unratedMovies}. ` +
                    `Подготовка полного датасета: ${milliseconds(message.timing.dataMs)}; сходство user: ${milliseconds(message.timing.userMs)}, item: ${milliseconds(message.timing.itemMs)}.`;
                ready = true;
                requestRecommendations();
            } else if (message.type === 'recommendations') renderRecommendations(message);
            else if (message.type === 'evaluation') renderEvaluation(message.report);
        };
        worker.postMessage({ type: 'init', data });
    } catch (error) {
        fail(error.message);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    element('recommend-btn').addEventListener('click', requestRecommendations);
    element('user-select').addEventListener('change', requestRecommendations);
    element('retry-btn').addEventListener('click', initialize);
    element('evaluate-btn').addEventListener('click', () => {
        if (!ready || !worker) return;
        setBusy(true);
        element('evaluation').hidden = true;
        updateStatus('Готовим независимый train/test-эксперимент…');
        worker.postMessage({ type: 'evaluate' });
    });
    initialize();
});
