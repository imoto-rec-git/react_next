import React from "react";
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Title>StyledComponents</Title>
      <Ptag>スタイルドコンポーネンツ</Ptag>
    </>
  );
};

const Title = styled.h1`
  color: orange;
  background-color: #eee;
  padding: 20px;
`;
const Ptag = styled.p`
  border-right: solid 10px #ccc;
  border-left: solid 10px #ccc;
  display: inline-block;
  padding: 0.2em 0.5em;
`;
