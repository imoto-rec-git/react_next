// 全体で扱いたいデータをproviders/○○Provider.jsxを作成する

// createContentをimportする
import React, { createContext } from 'react';

// createContent()を定数に代入する
export const CounterContext = createContext();
export const CounterProvider = (props) => {
  const { children } = props;
  return (
    <>
      {/* データはvalueを通して渡す */}
      <CounterContext.Provider value={100}>{children}</CounterContext.Provider>
    </>
  );
};

// 提供するデータの範囲を囲む
// 例：App.jsx内にCounterProvide.jsxをimportしCounterProvider関数を提供したい値の範囲を囲む
