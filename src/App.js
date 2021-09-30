import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => setTodos((todos) => todos.concat(text));
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((_, i) => i !== id));

  return (
    <div className="App">
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
