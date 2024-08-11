import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
    let [content, setContent] = useState<string>("");
    let [todos, setTodos] = useState<{ content: string; completed: boolean }[]>(
        []
    );
    // let [completed, setCompleted] = useState(false);

    const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const submissionFunction = (event: React.FormEvent) => {
        event.preventDefault();
        if (content.trim()) {
            setTodos([...todos, { content, completed: false }]);
            setContent("");
        }
    };

    const deleteFunction = (index: number) => {
        todos.splice(index, 1);
        setTodos([...todos]);
        // todos.splice(index, 1);
    };

    const editFunction = (index: number) => {
        const newTodo = prompt("Edit your todo:", todos[index].content);
        if (newTodo) {
            const updatedTodos = todos.map((todo, i) =>
                i === index ? { ...todo, content: newTodo } : todo
            );
            setTodos(updatedTodos);
        }
    };

    const completeFunction = (index: number) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <>
            <form onSubmit={submissionFunction}>
                <input
                    type="text"
                    placeholder="Anything up for today"
                    value={content}
                    onChange={onClick}
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
