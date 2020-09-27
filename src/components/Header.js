import React from 'react';
import { Button } from './Buttons';

function Header(props) {
    return (
        <div className="header">
            <h1 className="header-title">Notes Taker</h1>
            <Button colorProp='#2fce10' hover="#222200" className="header-toggle">Theme</Button>
        </div>
    );
}

export default Header;