'use strict';

var generated_hooks_useDeleteSuspiciousPaymentPurposes = require('./useDeleteSuspiciousPaymentPurposes.cjs');
var generated_hooks_useGetSuspiciousPaymentPurposes = require('./useGetSuspiciousPaymentPurposes.cjs');
require('swr/mutation');
require('../clients/deleteSuspiciousPaymentPurposes.cjs');
require('@kubb/plugin-client/clients/axios');
require('swr');
require('../clients/getSuspiciousPaymentPurposes.cjs');



exports.deleteSuspiciousPaymentPurposesMutationKey = generated_hooks_useDeleteSuspiciousPaymentPurposes.deleteSuspiciousPaymentPurposesMutationKey;
exports.useDeleteSuspiciousPaymentPurposes = generated_hooks_useDeleteSuspiciousPaymentPurposes.useDeleteSuspiciousPaymentPurposes;
exports.getSuspiciousPaymentPurposesQueryKey = generated_hooks_useGetSuspiciousPaymentPurposes.getSuspiciousPaymentPurposesQueryKey;
exports.getSuspiciousPaymentPurposesQueryOptions = generated_hooks_useGetSuspiciousPaymentPurposes.getSuspiciousPaymentPurposesQueryOptions;
exports.useGetSuspiciousPaymentPurposes = generated_hooks_useGetSuspiciousPaymentPurposes.useGetSuspiciousPaymentPurposes;
//# sourceMappingURL=index.cjs.map
