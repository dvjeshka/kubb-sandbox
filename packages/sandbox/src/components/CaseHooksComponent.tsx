import AppTable from './AppTable';
import {useGetList} from "kubb-lib/hooks/useGetList";
import {useDeleteItem} from "kubb-lib/hooks/useDeleteItem";
export default function CaseApiComponent() {
    const { data: dataList = [], isLoading } = useGetList();
    const { trigger } = useDeleteItem();
    return (
        <AppTable caption="CaseHooksComponent" isLoading={isLoading} list={dataList} onDelete={(id) => {
            trigger({id})
        }}>
        </AppTable>
    )
}
