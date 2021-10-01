import React from 'react';

// You can test that this component renders correctly with the text prop
// You can test that removeTodo is called on click with the right arguments

const Todo = ({ text, removeTodo }) => (
  <div className="todo" key={text}>
    <span>{text}</span>
    <button onClick={removeTodo}>X</button>
  </div>
);

export default Todo;
