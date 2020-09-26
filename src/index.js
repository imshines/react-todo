import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import ThemeContext from './context/themeContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={themes}> */}
    <App />
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
