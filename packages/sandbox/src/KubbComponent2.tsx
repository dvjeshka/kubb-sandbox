
import './App.css'

import {deleteSuspiciousPaymentPurposes} from 'kubb-lib/api/deleteSuspiciousPaymentPurposes'



function KubbComponent2() {


    console.log(deleteSuspiciousPaymentPurposes('1'));
    return (
        <>
            {KubbComponent2}
        </>
    )
}

export default KubbComponent2
