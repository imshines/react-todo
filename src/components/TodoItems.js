import React from 'react';
import { ReactComponent as DelIcon } from '../assets/bin.svg'
import { IconButton } from './Buttons';

function TodoItems(props) {

    return (
        <div className="items-container">
            <div className="card">
                <h2 className="card-title">Eat!</h2>
                <IconButton colorProp="tomato" className="del-btn">
                    <DelIcon style={delStyle} />
                </IconButton>
            </div>
            <div className="card">
                <h2 className="card-title">Sleep!</h2>
                <IconButton colorProp="tomato" className="del-btn">
                    <DelIcon style={delStyle} />
                </IconButton>
            </div>
            <div className="card">
                <h2 className="card-title">Code!</h2>
                <IconButton colorProp="tomato" className="del-btn">
                    <DelIcon style={delStyle} />
                </IconButton>
            </div>
        </div>
    );
}

const delStyle = {
    width: 20,
    height: 20,
    fill: 'white'
}

export default TodoItems;