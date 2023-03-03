import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "animate.css";

export const Count = (props: {
  btnAnimation: any;
  plus: React.MouseEventHandler<HTMLButtonElement> | undefined;
  count:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const btn = css`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    position: relative;
  `;
  const iconFav = css`
    width: 200px;
    height: auto;
  `;
  const iconFavPath = css`
    fill: rgb(255 154 185);
  `;
  const favCount = css`
    position: absolute;
    top: 62%;
    left: 50%;
    right: 0;
    transform: translate(-50%, -100%);
    font-size: 44px;
    font-weight: bold;
    color: #fff;
    margin: auto;
    text-align: center;
  `;
  return (
    <>
      <button
        css={btn}
        className={
          props.btnAnimation ? "animate__animated animate__rubberBand" : ""
        }
        onClick={props.plus}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          css={iconFav}
          className="bi bi-chat-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            css={iconFavPath}
            d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
          />
        </svg>
        <span css={favCount}>{props.count}</span>
      </button>
    </>
  );
};
