export type ListItem = {
    id: number
    name: string
    calories: number
}

export type ListProps = {
    items: ListItem[]
    category: string
}

export default function List({ items, category }: ListProps) {
    const listItems = items.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
    ))
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}
