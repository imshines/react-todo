import React from 'react';
import { Button } from './Buttons';
import { ReactComponent as Plus } from '../assets/plus.svg';

function TodoInput() {

    return (
        <div className="input-container">
            <input type="text" name="todoInput" placeholder="Enter your Task" className="todo-input" />
            <Button colorProp='cornflowerblue' hover="#33548f" style={{ marginLeft: 20 }}>Add <Plus style={{ width: '25px', height: '25px', fill: 'white', marginLeft: 10 }} /> </Button>
        </div>
    )
}

export default TodoInput;