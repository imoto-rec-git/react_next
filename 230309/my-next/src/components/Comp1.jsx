import { useState, useEffect } from 'react';
import styles from './Comp1.module.css';

export default function Comp1() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchDogs = async () => {
      const responce = await fetch('/api/dog');
      const data = await responce.json();
      setDogs(data.dogs.message);
    };
    fetchDogs();
  }, []);
  return (
    <>
      <p>Comp1</p>
      {dogs.map((dog, index) => {
        return (
          <img className={styles.dogimg} src={dog} alt="dog" key={index} />
        );
      })}
    </>
  );
}
