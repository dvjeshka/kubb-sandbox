import {useEffect, useState} from 'react'

import {getSuspiciousPaymentPurposes} from 'kubb-lib/api/getSuspiciousPaymentPurposes'
import type {SuspiciousPaymentPurposeResponseDto} from 'kubb-lib/types/SuspiciousPaymentPurposeResponseDto'
import {useGetSuspiciousPaymentPurposes} from 'kubb-lib/hooks/useGetSuspiciousPaymentPurposes'

function KubbComponent() {

    const [test, setTest] = useState<SuspiciousPaymentPurposeResponseDto>()

    useEffect(() => {
        setTest({
            id: "",
            paymentPurpose: "",
            isAutoRefund: false,
            isActive: false,
        })

    }, [])
    return (
        <>
            {JSON.stringify(test)}
        </>
    )
}

export default KubbComponent
