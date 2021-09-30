import React from 'react';

const Todo = ({ text, removeTodo }) => (
  <div className="todo" key={text}>
    <span>{text}</span>
    <button onClick={removeTodo}>X</button>
  </div>
);

export default Todo;
