import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CounterContext } from '../../providers/CounterProvider';

export const Page1 = () => {
  const test = useContext(CounterContext);
  console.log(test);
  return (
    <>
      <ul>
        <li>
          <Link to="/page1/detailA">Detail A</Link>
        </li>
        <li>
          <Link to="/page1/detailB">Detail B</Link>
        </li>
      </ul>
      <h1>Page1</h1>
    </>
  );
};
