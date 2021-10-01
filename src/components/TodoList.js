import React from 'react';
import Todo from './Todo';

// You can test that this list renders correcly by asserting
// on the length and output of list elements

const TodoList = ({ todos = [], removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, i) => (
        <Todo key={todo + i} text={todo} removeTodo={() => removeTodo(i)} />
      ))}
    </div>
  );
};

export default TodoList;
