import React from 'react';
import './App.scss';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';

function App() {

  const [toggle, setToggle] = React.useState(false);

  const themeHandler = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <button className="theme-toggle" onClick={themeHandler}>Theme</button>
      <div className="container-body">
        <Header />
        <TodoInput />
        <TodoItems />
      </div>
    </div>
  );
}

export default App;
