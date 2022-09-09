export function List({items}) {
    return (<ul>
        {items.map((item) => (
            <li key={item.field}>
                <span>{item.field}: {item.value}</span>
            </li>))}
    </ul>)
}