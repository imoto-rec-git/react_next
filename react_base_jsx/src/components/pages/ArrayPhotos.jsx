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
  const handleChange = (e) => {
    setNewUser(e.target.value);
  };
  const addNewUser = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        name: newUser,
      })
      .then((response) => {
        console.log(response.data);
        setUsers([...users, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.log(error));
  };
  const onShuffle = () => {
    const cloneArray = [...users];
    cloneArray.map((user, index) => {
      let rdmIndex = Math.floor(Math.random() * index + 1);
      // 配列の順番を入れ替える
      cloneArray[index] = cloneArray[rdmIndex];
      cloneArray[rdmIndex] = user;
      setUsers(cloneArray);
    });
  };
  return (
    <>
      <h1>Array State</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={onShuffle}>Shuffle</button>
      <div>
        <input type="text" placeholder="お名前" onChange={handleChange} />　
        <button type="submit" onClick={addNewUser}>
          Add
        </button>
      </div>
    </>
  );
};
