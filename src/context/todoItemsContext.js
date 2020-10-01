import React, { useState } from 'react';

export const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const [todos, setTodos] = useState(() => {
        const items = localStorage.getItem("todoItems");
        return items ? JSON.parse(items) : []
    });

    localStorage.setItem('todoItems', JSON.stringify(todos));

    const addTodo = (todo, priority, id) => {
        setTodos([...todos, { todo, priority, id }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;