import { React, useState } from 'react';

export const CounterPage = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>CounterPage</h1>
      <p>カウント:{count}</p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={increase}>+</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
};
