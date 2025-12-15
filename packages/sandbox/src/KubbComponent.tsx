import {useEffect, useState} from 'react'

import type {SuspiciousPaymentPurposeResponseDto} from 'kubb-lib/types/SuspiciousPaymentPurposeResponseDto'
import {deleteSuspiciousPaymentPurposes} from "kubb-lib/api/deleteSuspiciousPaymentPurposes";

function KubbComponent() {

    const [test, setTest] = useState<SuspiciousPaymentPurposeResponseDto>()

    useEffect(() => {
        setTest({
            id: "",
            paymentPurpose: "",
            isAutoRefund: false,
            isActive: false,
        })
        deleteSuspiciousPaymentPurposes('1').then(r=>console.log(r));

    }, [])
    return (
        <>
            {JSON.stringify(test)}
        </>
    )
}

export default KubbComponent
