/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import Hello from '../molecules/Hello';

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
  const mvStyle = {
    minHeight: '100vh',
    position: 'relative',
  };
  const mvImgStyle = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
  };
  const mvTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    fontSize: '48px',
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
  const ImgPath = 'https://picsum.photos/600/400';

  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
  };
  const [mvFlag, setMvFlag] = useState(false);
  const switchBtn = () => {
    //カプセル化されているのでuseEffectを使わなくてもOK
    setMvFlag(!mvFlag);
  };
  const btnswitchStyle = {
    position: 'fixed',
    left: '0',
    zIndex: '100',
  };
  useEffect(() => {
    //イベントハンドラーで実行ではないので再レンダリングの影響を受けるため、useEffectを使う
    if (num % 3 === 0 && num > 0) {
      //左側がfalseの場合、右側を処理　||
      console.log('3の倍数');
      mvFlag || setMvFlag(true);
    } else {
      //左側がtrueの場合、右側も処理 &&
      console.log('Not3の倍数');
      mvFlag && setMvFlag(false);
    }
    // eslint-disable-next-line
  }, [num]);
  // 第二引数にmvFlagを入れろというWarningが出るが、今回は省きたいので「eslint-disable-next-line」を記入するとWarningが解消される
  console.log('mvFlagの状態は', mvFlag);

  return (
    <div className="App">
      <button onClick={switchBtn} style={btnswitchStyle} id="btn__switch">
        Toggle Switch
      </button>
      {mvFlag && (
        <div style={mvStyle}>
          {/* <a href={LinkPath}>Apple</a> */}
          <img style={mvImgStyle} src={ImgPath} alt="" />
          <h1 style={mvTitleStyle}>Hello World!</h1>
        </div>
      )}
      <div>
        <p style={{ fontSize: '40px', marginTop: '0' }}>{num}</p>
        <button onClick={countUp}>カウントアップ</button>
      </div>

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
    </div>
  );
}

export default Home;
