export type Endpoint = {
    operationId: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    requiresAuth: boolean;
    tags: string[];
    deprecated: boolean;
};
export declare const endpoints: readonly [{
    readonly operationId: "getSuspiciousPaymentPurposes";
    readonly method: "GET";
    readonly path: "/api/v1/suspicious-payment-purposes";
    readonly requiresAuth: false;
    readonly tags: readonly ["suspicious-payment-purposes-v1"];
    readonly deprecated: false;
}, {
    readonly operationId: "deleteSuspiciousPaymentPurposes";
    readonly method: "DELETE";
    readonly path: "/api/v1/suspicious-payment-purposes/{id}";
    readonly requiresAuth: false;
    readonly tags: readonly ["suspicious-payment-purposes-v1"];
    readonly deprecated: false;
}];
