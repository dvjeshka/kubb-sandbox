'use strict';

const endpoints = [
    {
        operationId: 'getSuspiciousPaymentPurposes',
        method: 'GET',
        path: '/api/v1/suspicious-payment-purposes',
        requiresAuth: false,
        tags: ["suspicious-payment-purposes-v1"],
        deprecated: false,
    },
    {
        operationId: 'deleteSuspiciousPaymentPurposes',
        method: 'DELETE',
        path: '/api/v1/suspicious-payment-purposes/{id}',
        requiresAuth: false,
        tags: ["suspicious-payment-purposes-v1"],
        deprecated: false,
    }
];

exports.endpoints = endpoints;
//# sourceMappingURL=endpoints.cjs.map
