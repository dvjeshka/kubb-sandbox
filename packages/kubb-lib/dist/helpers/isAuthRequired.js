import { endpoints } from '../generated/endpoints.js';

const regexCache = new Map();
function isAuthRequired(config) {
    const { method, url = '' } = config;
    const pathname = new URL(url, 'http://a').pathname;
    for (const endpoint of endpoints) { // ← endpoints — массив, перебираем напрямую
        if (endpoint.method !== method.toUpperCase())
            continue;
        let regex = regexCache.get(endpoint.path);
        if (!regex) {
            const pattern = endpoint.path
                .replace(/\//g, '\\/') // экранируем /
                .replace(/{[^}]+}/g, '[^/]+'); // {id} → [^/]+
            regex = new RegExp('^' + pattern + '$');
            regexCache.set(endpoint.path, regex);
        }
        if (regex.test(pathname)) {
            return endpoint.requiresAuth;
        }
    }
    return false; // не найдено → считаем публичным
}

export { isAuthRequired };
//# sourceMappingURL=isAuthRequired.js.map
