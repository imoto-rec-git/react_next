import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line

import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
  const Title = css`
    color: yellow;
    background-color: #eee;
    padding: 20px;
  `;
  return (
    <>
      <h1 css={Title}>Emotion</h1>
      <Ptag>エモーション</Ptag>
    </>
  );
};

const Ptag = styled.p`
  border-right: solid 10px #ccc;
  border-left: solid 10px #ccc;
  display: inline-block;
  padding: 0.2em 0.5em;
`;
