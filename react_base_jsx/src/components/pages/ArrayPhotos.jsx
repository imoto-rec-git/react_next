import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import classes from './ArrayPhotos.module.css';

export const ArrayPhotos = () => {
  const { photo_list } = classes;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const newPhotos = [...users];
    console.log(newPhotos);
    for (let i = 20; i < 40; i++) {
      const imgPath = `https://picsum.photos/id/${i}/400/600`;
      newPhotos.push(imgPath);
      setUsers(newPhotos);
    }
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
      <h1>Array Photos</h1>
      <ul className={photo_list}>
        {users.map((user, index) => (
          <li key={index}>
            {/* {user.name} */}
            {/* <button onClick={() => deleteUser(user.id)}>Delete</button> */}
            <img src={user} alt="" />
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
