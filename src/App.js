import React from 'react';
import './App.scss'
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';

import datas from './constants/data.json';

function App() {

  return (
    <div className="container">
      <Header />
      <TodoInput />
      <TodoItems datas={datas} />
    </div>
  );
}

export default App;
