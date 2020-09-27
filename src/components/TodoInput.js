import React, { useRef, useEffect } from 'react';
import { Button } from './Buttons';
import { ReactComponent as Plus } from '../assets/plus.svg';

function TodoInput() {

    const refContainer = useRef(null);

    useEffect(() => {
        refContainer.current.focus();
        return undefined;
    }, [refContainer])

    return (
        <div className="input-container">
            <input type="text" ref={refContainer} name="todoInput" placeholder="Enter your Task" className="todo-input" />
            <select name="priority" id="priority" className="priority">
                <option value="high">High</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
            </select>
            <Button colorProp='cornflowerblue' hover="#33548f" style={styles.btn}>Add <Plus style={styles.plus} /> </Button>
        </div>
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