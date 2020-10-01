import React from 'react';
import { ReactComponent as DelIcon } from '../assets/bin.svg'
import { TodoContext } from '../context/todoItemsContext';
import { IconButton } from './Buttons';

function TodoItems() {

    const { todos, removeTodo } = React.useContext(TodoContext);

    console.log(todos);

    return (
        <div className="items-container">
            {
                todos.map(todo =>
                    <div className="card" key={todo.id}>
                        <h2 className="card-title">{todo.todo}</h2>
                        <div className="card-footer">
                            <span
                                style={{
                                    color: todo.priority === 'low' ? 'green' : todo.priority === 'moderate' ? 'orange' : 'red'
                                }}
                                className="card-priority">{todo.priority[0].toUpperCase() + todo.priority.slice(1)}</span>
                            <IconButton
                                colorProp="tomato"
                                className="card-btn"
                                onClick={() => removeTodo(todo.id)}
                            >
                                <DelIcon style={delStyle} />
                            </IconButton>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

const delStyle = {
    width: 20,
    height: 20,
    fill: 'white'
}

export default TodoItems;