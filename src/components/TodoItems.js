import React from 'react';
import { ReactComponent as DelIcon } from '../assets/bin.svg'
import { IconButton } from './Buttons';

function TodoItems({ datas }) {
    return (
        <div className="items-container">
            {
                datas.map(item => <div className="card" key={item.id}>
                    <h2 className="card-title">{item.id}. {item.task}</h2>
                    <span
                        style={{
                            color: item.priority === 'Low' ? 'red' : item.priority === 'Moderate' ? 'orange' : 'green'
                        }}
                        className="card-title">{item.priority}</span>
                    <IconButton colorProp="tomato" className="del-btn">
                        <DelIcon style={delStyle} />
                    </IconButton>
                </div>)
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