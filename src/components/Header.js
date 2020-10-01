import React from 'react';
import { Button } from './Buttons';
import { ThemeContext } from '../context/themeContext';
function Header() {

    const { toggle, dark } = React.useContext(ThemeContext)

    return (
        <div className="header">
            <h1 className="header-title">Awesome Notes</h1>
            <Button
                border={true}
                hover={
                    !dark ? "#fff" : '#2f2f2f'
                }
                className="header-toggle"
                onClick={toggle}
                style={{
                    color: !dark ? '#000' : '#fff'
                }}
            >
                {!dark ? 'Dark' : 'Light'}
            </Button>
        </div>
    );
}

export default Header;