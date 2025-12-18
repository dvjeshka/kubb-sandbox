import {useEffect, useState} from 'react'
import AppTable from './AppTable';
import type {ListDto} from 'kubb-lib/types/ListDto'
import {deleteItem} from "kubb-lib/api/deleteItem";
import {getList} from "kubb-lib/api/getList";

export default function CaseApiComponent() {
    const [loading, setLoading] = useState(true)
    const [dataList, setDataList] = useState<ListDto[]>([])
    useEffect(() => {
        getList().then(list=>setDataList(list)).finally(()=>setLoading(false))
    }, [])
    return (
        <AppTable caption="CaseApiComponent" isLoading={loading} list={dataList} onDelete={(id) => {
            deleteItem(id).then(()=>{
                setDataList(dataList.filter(item=>item.id!==id))
            });
        }}>
        </AppTable>
    )
}
