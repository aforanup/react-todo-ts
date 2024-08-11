interface Prop {
    todos: Array<string>;
    deleteFunction: (index: number) => void;
    editFunction: (index: number) => void;
    completeFunction: (index: number) => void;
}

const TodoList = ({
    todos,
    deleteFunction,
    editFunction,
    completeFunction,
}: Prop) => {
    return (
        <>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li className="list-group-item" key={index}>
                        <span
                            onClick={() => completeFunction(index)}
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                                cursor: "pointer",
                            }}
                        >
                            {todo}
                        </span>
                        <span
                            className="badge text-bg-success"
                            onClick={() => editFunction(index)}
                        >
                            Edit
                        </span>
                        <span
                            className="badge text-bg-danger"
                            onClick={() => deleteFunction(index)}
                        >
                            Delete
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};
{
}

export default TodoList;
