import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
    let [content, setContent] = useState<string>("");
    let [todos, setTodos] = useState<{ string?: null; boolean?: false }[]>([]);

    const onClick2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const submissionFunction2 = (event: React.FormEvent) => {
        event.preventDefault();
        if (content.trim()) {
            setTodos([...todos, content]);
            setContent("");
        }
    };

    const deleteFunction = (index: number) => {
        todos.splice(index, 1);
        setTodos([...todos]);
        // todos.splice(index, 1);
    };

    const editFunction = (index: number) => {
        const newTodo = prompt("Edit your todo:", todos[index]);
        if (newTodo) {
            const updatedTodos = todos.map((todo, i) =>
                i === index ? newTodo : todo
            );
            setTodos(updatedTodos);
        }
    };

    const completeFunction = (index: number) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? `${todo} (completed)` : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <>
            <form onSubmit={submissionFunction2}>
                <input
                    type="text"
                    placeholder="Anything up for today"
                    value={content}
                    onChange={onClick2}
                />
                <button className="btn btn-warning">Add</button>
            </form>
            <TodoList
                todos={todos}
                deleteFunction={deleteFunction}
                editFunction={editFunction}
                completeFunction={completeFunction}
            />
        </>
    );
};

export default TodoForm;
