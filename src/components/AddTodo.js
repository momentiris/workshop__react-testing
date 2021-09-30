import React from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, set] = React.useState('');

  const onChange = (e) => set(e.currentTarget.value);
  const onClick = () => {
    if (!text) return;

    addTodo(text);
    set('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        placeholder="Write something..."
        onChange={onChange}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};

export default AddTodo;
