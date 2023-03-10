import React, { createContext } from 'react';
import { useState } from 'react';

export const MvSwContext = createContext({
  mvFlag: false,
  setMvFlag: () => {},
});
export const MvSwProvider = (props) => {
  const { children } = props;
  const [mvFlag, setMvFlag] = useState(false);
  return (
    <>
      <MvSwContext.Provider value={{ mvFlag, setMvFlag }}>
        {children}
      </MvSwContext.Provider>
    </>
  );
};
