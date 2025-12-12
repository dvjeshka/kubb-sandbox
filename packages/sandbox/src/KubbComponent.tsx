import {useEffect, useState} from 'react'

import './App.css'

import {getSuspiciousPaymentPurposes} from 'kubb-lib/api/getSuspiciousPaymentPurposes'
import type {SuspiciousPaymentPurposeResponseDto} from 'kubb-lib/types/SuspiciousPaymentPurposeResponseDto'
import {useGetSuspiciousPaymentPurposes} from 'kubb-lib/hooks/useGetSuspiciousPaymentPurposes'

function KubbComponent() {

    const [test, setTest] = useState<SuspiciousPaymentPurposeResponseDto>()
    setTest({
        id: "",
        paymentPurpose: "",
        isAutoRefund: false,
        isActive: false,
    })
    console.log(test);
    useEffect(() => {
        console.log(getSuspiciousPaymentPurposes());
        console.log(useGetSuspiciousPaymentPurposes);
    }, [])
    return (
        <>
            {JSON.stringify(test)}
        </>
    )
}

export default KubbComponent
