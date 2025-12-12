
export type RequestConfig<TData = unknown> = {
    url?: string
    method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
    params?: object
    data?: TData | FormData
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
    signal?: AbortSignal
    headers?: HeadersInit
}

export type ResponseConfig<TData = unknown> = {
    data: TData
    status: number
    statusText: string
}

export type ResponseErrorConfig<TError = unknown> = TError;

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

export { client as default };