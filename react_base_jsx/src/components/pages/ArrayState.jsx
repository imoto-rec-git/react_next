import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const ArrayState = () => {
  const [users, setUsers] = useState([]); //配列の場合は初期値に空の配列を入れる
  // useEffectで第２引数の配列を空にすると、初回時のみ通過
  // これを利用してAppコンポーネントのマウント時だけにaxiosで取得したデータを利用できるようにする
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [newUser, setNewUser] = useState('');
  const handleChange = () => {};
  const addNewUser = () => {};
  return (
    <>
      <h1>Array State</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="お名前" onChange={handleChange} />　
        <button type="submit" onClick={addNewUser}>
          Add
        </button>
      </div>
    </>
  );
};
