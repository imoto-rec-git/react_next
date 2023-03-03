import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sTitle = css`
  color: #fff;
`;

export const Title = (props: {
  ttlAnimation: any;
  text:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <h1
      css={sTitle}
      className={
        props.ttlAnimation
          ? "animate__animated animate__flip animate__slow"
          : ""
      }
    >
      {props.text}
    </h1>
  );
};
