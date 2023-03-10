import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Top</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
