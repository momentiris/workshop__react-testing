import React from 'react';

// You can test that the value of the input changes
// You can test that this function prop is called on click with correct arguments
// You can test that the value is reset after button click
// You can test that the button is disabled until input has value

const AddTodo = ({ addTodo }) => {
  const [text, set] = React.useState('');

  const onChange = (e) => set(e.currentTarget.value);
  const onClick = () => {
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
      <button disabled={!Boolean(text)} onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
