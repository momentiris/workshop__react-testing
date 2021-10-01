import React from 'react';

const Counter = ({ orderCheeseBurgers }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Add one</button>
      <h1>Count is {count}</h1>
      {count > 0 && (
        <button onClick={() => orderCheeseBurgers(count)}>
          Order {count} cheeseburgers
        </button>
      )}
    </div>
  );
};

export default Counter;
