import AppTable from './AppTable';
import {useGetList} from "kubb-lib/hooks/useGetList";
import {useDeleteItem} from "kubb-lib/hooks/useDeleteItem";
export default function CaseApiComponent() {
    const { data: dataList = [], isLoading, mutate } = useGetList();
    const { trigger } = useDeleteItem();
    return (
        <AppTable caption="CaseHooksComponent" isLoading={isLoading} list={dataList} onDelete={(id) => {
            trigger({id},{onSuccess: () => {
                mutate(prev => prev?.filter(item => item.id !== id), { revalidate: false })
            }})
        }}>
        </AppTable>
    )
}
