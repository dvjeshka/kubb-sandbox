import type { ListDto } from "kubb-lib/types/ListDto";

export default function AppTable ({list, onDelete, isLoading,caption}:{
    list: ListDto[],
    onDelete: (id: string) => void,
    isLoading: boolean,
    caption: string
}) {
    if (isLoading) return <div>Loading ...</div>;
    return (
        <table>
            <caption>{caption}</caption>
            <thead>
                <tr>
                    <th>id</th>
                    <th>isActive</th>
                    <th>text</th>
                    <th>status</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
            {list?.map((item) => (
                <tr key={item.id}>
                    <td>
                        {item.id}
                    </td>
                    <td>
                        {item.isActive ? 'active' : ''}
                    </td>
                    <td>
                        {item.text}
                    </td>
                    <td>
                        {item.status}
                    </td>
                    <td>
                        <button onClick={async () => {
                            onDelete(item.id);
                        }}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};