export type * from 'kubb-lib/apiClient';
import type { ClientFunction } from 'kubb-lib/apiClient'
import { isAuthRequired } from 'kubb-lib/helpers/isAuthRequired'
import { ofetch } from "ofetch";
export const client: ClientFunction = async (config) => {
    const url = config.url ?? ''
    const requiresAuth = isAuthRequired({ method: config.method, url });
    // Копируем headers, чтобы не мутировать входящий объект
    const headers = new Headers(config.headers);
    // Добавляем токен, если требуется
    if (requiresAuth) {
        const token = localStorage.getItem('token'); // или из context/store
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
    }
    const response = await ofetch(url, {
        method: config.method.toUpperCase(),
        body: config.data ? JSON.stringify(config.data) : undefined,
        signal: config.signal,
        headers,
        async onRequest({ request, options }) {
            // Log request
            console.log("[fetch request]", request, options);
        },
    });


    return { data:response, status: response?.status, statusText: response?.statusText, };
};

export { client as default };