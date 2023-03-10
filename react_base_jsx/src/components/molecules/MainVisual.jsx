import React, { useContext } from 'react';
import { MvSwContext } from '../../providers/MvSwProvider';

export const MainVisual = () => {
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
  const btnswitchStyle = {
    position: 'fixed',
    left: '0',
    zIndex: '100',
  };

  const ImgPath = 'https://picsum.photos/600/400';
  // const [mvFlag, setMvFlag] = useState(false);
  const { mvFlag, setMvFlag } = useContext(MvSwContext);

  const switchBtn = () => {
    //カプセル化されているのでuseEffectを使わなくてもOK
    setMvFlag(!mvFlag);
  };
  return (
    <>
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
    </>
  );
};
