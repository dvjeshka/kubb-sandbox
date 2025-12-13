export type * from 'kubb-lib/apiClient';
import type { ClientFunction } from 'kubb-lib/apiClient'
import {isAuthRequired} from 'kubb-lib/helpers/isAuthRequired'


export const client: ClientFunction = async (config) => {
    // 🔑 Проверяем, нужна ли авторизация
    const requiresAuth = isAuthRequired({
        method: config.method,
        url: config.url,
    });

    // Копируем headers, чтобы не мутировать входящий объект
    const headers = new Headers(config.headers);

    // Добавляем токен, если требуется
    if (requiresAuth) {
        const token = localStorage.getItem('token'); // или из context/store
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        } else {
            // Можно выбросить ошибку или делегировать серверу (401)
            // throw new Error('Auth required but no token');
        }
    }

    const response = await fetch(config.url, {
        method: config.method.toUpperCase(),
        body: config.data ? JSON.stringify(config.data) : undefined,
        signal: config.signal,
        headers,
    });

    const data = await response.json();

    return {
        data,
        status: response.status,
        statusText: response.statusText,
    };
};

export { client as default };