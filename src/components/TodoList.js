import React from 'react';

import Todo from './Todo';

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
