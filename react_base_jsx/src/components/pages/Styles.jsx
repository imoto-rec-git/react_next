import React from 'react';
import { CssModules } from '../styles/CssModules';
import { Emotion } from '../styles/Emotion';
import { InlineStyle } from '../styles/InlineStyle';
import { StyledComponents } from '../styles/StyledComponents';
import { StyledJsx } from '../styles/StyledJsx';

export const Styles = () => {
  console.log('Stylesコンポ最初');
  return (
    <>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
};
