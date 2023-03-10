/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { MvSwProvider } from '../../providers/MvSwProvider';
import { CountUp } from '../molecules/CountUp';
import Hello from '../molecules/Hello';
import { MainVisual } from '../molecules/MainVisual';

function Home() {
  console.log('Appコンポ最初');
  const h1Style = {
    color: '#FFF',
    fontSize: '42px',
    padding: '1em 2em',
    backgroundImage: 'linear-gradient(90deg, #c9ffbf 0%, #ffafbd 100%)',
    marginBottom: '40px',
    textShadow: '4px 4px 8px rgba(0,0,0,0.7)',
  };
  const name = 'React';
  const user = {
    firstName: '厚志',
    lastName: '安堂',
    height: 170,
  };
  const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
  };

  return (
    <div className="App">
      <MvSwProvider>
        <MainVisual />
        <CountUp />

        <Hello name="Ando" color="blue" />
        <Hello name="John Lennon" h1Style={h1Style}>
          <br />
          <span className="h1style__span">ポール</span>
        </Hello>

        <h1 style={h1Style}>Hello {name}</h1>
        <h1>{formatName(user)}</h1>
        <p>身長：{user.height + 3}</p>
        <h1
          style={{
            color: 'green',
            marginBottom: '40px',
            textShadow: '4px 4px 8px rgba(0,0,0,0.7)',
          }}
        >
          Hello World!
        </h1>
        <p>Welcome to Cafe Du Ando</p>
      </MvSwProvider>
    </div>
  );
}

export default Home;
