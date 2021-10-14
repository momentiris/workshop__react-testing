import React from 'react';

const Counter2 = () => {
  const [count, set] = React.useState(0);

  const onClick = () => set((count) => count + 1);

  return (
    <div>
      <button onClick={onClick}>Add one</button>
      <div>Count is {count}</div>
    </div>
  );
};

export default Counter2;
