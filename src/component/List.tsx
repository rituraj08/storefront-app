interface ListProps {
    list: any;
}
const List = ({list}: ListProps) => {
    return (
        <div className="list">
           {list.map((item: any) => (
            <div key={item.id}>
                <h1>{item.title}</h1>
            </div>
           ))}
        </div>
    )
}

export default List;