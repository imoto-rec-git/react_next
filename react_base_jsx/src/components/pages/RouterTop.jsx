import React, { useContext } from 'react';
import { CounterContext } from '../../providers/CounterProvider';

export const RouterTop = () => {
  const test = useContext(CounterContext);
  console.log(test);
  return (
    <>
      <h1>Router Top</h1>
    </>
  );
};
