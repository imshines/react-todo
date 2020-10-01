import React, { useRef, useEffect, useContext, useState } from 'react';
import { Button } from './Buttons';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { TodoContext } from '../context/todoItemsContext';

function TodoInput() {

    const { addTodo } = useContext(TodoContext);

    const [todo, setTodo] = useState('');
    const [priority, setPriority] = useState('high');
    const [id, setId] = useState(0);

    const todoHandler = (event) => {
        setTodo(event.target.value)
    }
    const priorityHandler = (event) => {
        setPriority(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setId((prev) => prev + 1);
        addTodo(todo, priority, id);
        setTodo('');
    }

    const refContainer = useRef(null);
    useEffect(() => {
        refContainer.current.focus();
        return undefined;
    }, [refContainer])

    return (
        <form onSubmit={submitHandler}>
            <div className="input-container">
                <input
                    type="text"
                    ref={refContainer}
                    name="todoInput"
                    placeholder="Enter your Task" className="todo-input"
                    value={todo}
                    onChange={todoHandler}
                    required
                />
                <select name="priority" id="priority" className="priority" value={priority} onChange={priorityHandler}>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                </select>
                <Button
                    colorProp='cornflowerblue'
                    hover="#33548f"
                    style={styles.btn}
                    border={false}
                > Add <Plus style={styles.plus} /> </Button>
            </div>
        </form>
    )
}

const styles = {
    plus: {
        width: '25px',
        height: '25px',
        fill: 'white',
        marginLeft: 10,
    },
    btn: {
        marginLeft: 10,
    }
}

export default TodoInput;