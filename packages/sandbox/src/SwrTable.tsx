
import { mutate } from 'swr';
import {
    getSuspiciousPaymentPurposesQueryKey,
    useGetSuspiciousPaymentPurposes,
} from "kubb-lib/hooks/useGetSuspiciousPaymentPurposes";
import {useDeleteSuspiciousPaymentPurposes} from "kubb-lib/hooks/useDeleteSuspiciousPaymentPurposes";


const SwrTable = () => {
    const { data: paymentPurposes, isLoading } = useGetSuspiciousPaymentPurposes();
    const { trigger: deletePaymentPurpose } = useDeleteSuspiciousPaymentPurposes('1');
    if (isLoading) return <div>Loading (SWR)...</div>;

    return (
        <table>
            <caption>SWR Table</caption>
            <tbody>
            {paymentPurposes?.map((purpose) => (
                <tr key={purpose.id}>
                    <td>
                        <button onClick={async () => {
                            await deletePaymentPurpose();
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