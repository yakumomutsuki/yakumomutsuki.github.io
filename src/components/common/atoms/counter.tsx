import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p data-testid="counter-count">count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
