import React, { useEffect, useState, useContext } from 'react';
import { MvSwContext } from '../../providers/MvSwProvider';

export const CountUp = () => {
  const { mvFlag, setMvFlag } = useContext(MvSwContext);
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
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

  return (
    <>
      <div>
        <p style={{ fontSize: '40px', marginTop: '0' }}>{num}</p>
        <button onClick={countUp}>カウントアップ</button>
      </div>
    </>
  );
};
