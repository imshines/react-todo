import React from 'react';
import './App.scss'
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import { ThemeContext } from './context/themeContext';

function App() {

  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="container" style={{
      color: theme.color,
      backgroundColor: theme.backgroundColor
    }}>
      <Header />
      <TodoInput />
      <TodoItems />
    </div>
  );
}

export default App;
