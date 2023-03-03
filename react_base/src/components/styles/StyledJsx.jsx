import React from "react";

export const StyledJsx = () => {
  return (
    <>
      <h1 className="title">Styled JSX</h1>
      <p id="ptag">スタイルドジェーエスエックス</p>
      <style jsx="true">{`
        .title {
          color: green;
          background-color: #eee;
          padding: 20px;
        }
        #ptag {
          border-right: solid 10px #ccc;
          border-left: solid 10px #ccc;
          display: inline-block;
          padding: 0.2em 0.5em;
        }
      `}</style>
    </>
  );
};
