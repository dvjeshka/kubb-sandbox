
import './App.css'

import {deleteSuspiciousPaymentPurposes} from 'kubb-lib/api/deleteSuspiciousPaymentPurposes'
import {useEffect} from "react";



function KubbComponent2() {

    useEffect(()=>{
        console.log(deleteSuspiciousPaymentPurposes('1'));
    },[])

    return (
        <>
            {KubbComponent2}
        </>
    )
}

export default KubbComponent2
