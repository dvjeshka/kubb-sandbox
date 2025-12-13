export type Endpoint = {
  operationId: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  requiresAuth: boolean;
  tags: string[];
  deprecated: boolean;
};

export const endpoints = [
  {
  operationId: 'getSuspiciousPaymentPurposes',
  method: 'GET' as const,
  path: '/api/v1/suspicious-payment-purposes',
  requiresAuth: false,
  tags: ["suspicious-payment-purposes-v1"],
  deprecated: false,
},
  {
  operationId: 'deleteSuspiciousPaymentPurposes',
  method: 'DELETE' as const,
  path: '/api/v1/suspicious-payment-purposes/{id}',
  requiresAuth: false,
  tags: ["suspicious-payment-purposes-v1"],
  deprecated: false,
}
] as const;