import {useEffect, useState} from 'react'

import type {SuspiciousPaymentPurposeResponseDto} from 'kubb-lib/types/SuspiciousPaymentPurposeResponseDto'

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
