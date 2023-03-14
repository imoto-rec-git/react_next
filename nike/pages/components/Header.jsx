import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.gnav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/mylist">My Llist</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
