export type * from 'kubb-lib/apiClient';
import type { ClientFunction } from 'kubb-lib/apiClient'

export const client:ClientFunction = async (config) => {
    const response = await fetch('https://example.org/post', {
        method: config.method.toUpperCase(),
        body: JSON.stringify(config.data),
        signal: config.signal,
        headers: config.headers,
    })

    const data = await response.json()

    return {
        data,
        status: response.status,
        statusText: response.statusText,
    }
}

export { client as default };