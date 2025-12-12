import type{RequestConfig, ResponseConfig,ResponseErrorConfig} from 'kubb-lib/apiClient'




export const client = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
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

export {RequestConfig, ResponseConfig,ResponseErrorConfig}