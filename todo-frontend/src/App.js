import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="bg-gray-900">
      <h1 className='m-4 p-4 text-4xl font-bold text-white text-center'>My Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
    );
  };

export default App;
