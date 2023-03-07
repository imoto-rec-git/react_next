import React from 'react';
import { useState } from 'react';
import classes from './ObjState.module.css';

export const ObjState = () => {
  const { dl, dt, dd } = classes;
  const personObj = {
    name: '山田太郎',
    height: 175,
  };
  const [person, setPerson] = useState(personObj);
  const onChangeName = (e) => {
    // console.log({ ...person }); //スプレッド構文にすると新しい配列として認識（元の配列から複製）
    // setPerson({ name: e.target.value, height: person.height });  //左の場合だと、問題なく動くが変更したくないプロパティも書く必要がある
    setPerson({ ...person, name: e.target.value }); //左の場合だと、変更したいプロパティのみ変更可能
  };
  const onChangeHeight = (e) => {
    setPerson({ ...person, height: e.target.value });
  };
  const onClickReset = (e) => {
    setPerson({ name: '', height: 0 });
  };
  return (
    <>
      <h1>ObjState</h1>
      <dl style={dl}>
        <dt style={dt}>名前：</dt>
        <dd style={dd}>{person.name}</dd>
        <dt style={dt}>身長：</dt>
        <dd style={dd}>{person.height}cm</dd>
      </dl>
      <div style={{ marginBottom: '40px' }}>
        <input
          onChange={onChangeName}
          type="text"
          value={person.name}
          placeholder="名前"
        />
        　
        <input
          onChange={onChangeHeight}
          type="number"
          value={person.height}
          placeholder="身長"
        />
      </div>
      <div>
        <button onClick={onClickReset}>Reset</button>
      </div>
    </>
  );
};
