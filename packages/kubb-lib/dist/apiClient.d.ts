export type RequestConfig<TData = unknown> = {
    url?: string;
    method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';
    params?: object;
    data?: TData | FormData;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    signal?: AbortSignal;
    headers?: HeadersInit;
};
export type ResponseConfig<TData = unknown> = {
    data: TData;
    status: number;
    statusText: string;
};
export type ResponseErrorConfig<TError = unknown> = TError;
export declare const client: <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>) => Promise<ResponseConfig<TData>>;
export { client as default };
