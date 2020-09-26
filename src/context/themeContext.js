import React from 'react';

export const themes = {
    light: {
        color: '#000',
        backgroundColor: '#fff'
    },
    dark: {
        color: '#fff',
        backgroundColor: '#000'
    }
}

const ThemeContext = React.createContext(themes);

export default ThemeContext;