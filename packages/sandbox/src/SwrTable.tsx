
import { mutate } from 'swr';
import {
    getSuspiciousPaymentPurposesQueryKey,
    useGetSuspiciousPaymentPurposes,
} from "kubb-lib/hooks/useGetSuspiciousPaymentPurposes";
import {useDeleteSuspiciousPaymentPurposes} from "kubb-lib/hooks/useDeleteSuspiciousPaymentPurposes";


const SwrTable = () => {
    const { data: paymentPurposes, isLoading } = useGetSuspiciousPaymentPurposes();
    const { trigger: deletePaymentPurpose } = useDeleteSuspiciousPaymentPurposes();
    if (isLoading) return <div>Loading (SWR)...</div>;
    console.log(paymentPurposes);
    return (
        <table>
            <caption>SWR Table</caption>
            <tbody>
            {paymentPurposes?.map((purpose) => (
                <tr key={purpose.id}>
                    <td>
                        {purpose.paymentPurpose}
                    </td>
                    <td>
                        {purpose.statusTest}
                    </td>
                    <td>
                        <button onClick={async () => {
                            await deletePaymentPurpose({id: purpose.id as string});
                            mutate(getSuspiciousPaymentPurposesQueryKey);
                        }}>
                            Delete {purpose.id}
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


export default SwrTable