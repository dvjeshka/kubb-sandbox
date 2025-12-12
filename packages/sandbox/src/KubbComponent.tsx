import { useState } from 'react'

import './App.css'

import {getSuspiciousPaymentPurposes} from 'kubb-lib/clients/getSuspiciousPaymentPurposes'
import {type SuspiciousPaymentPurposeResponseDto} from 'kubb-lib/types/SuspiciousPaymentPurposeResponseDto'
import {useGetSuspiciousPaymentPurposes} from 'kubb-lib/hooks/useGetSuspiciousPaymentPurposes'

function KubbComponent() {

    const [test, setTest] = useState<SuspiciousPaymentPurposeResponseDto>({
        id: "",
        paymentPurpose: "",
        isAutoRefund: false,
        isActive: false,
    })
    setTest({
        id: "",
        paymentPurpose: "",
        isAutoRefund: false,
        isActive: false,
    })
    console.log(test);
    console.log(getSuspiciousPaymentPurposes);
    console.log(useGetSuspiciousPaymentPurposes);
    return (
        <>
            {JSON.stringify(test)}
        </>
    )
}

export default KubbComponent
