import React from "react";

export const InlineStyle = () => {
  const inlineStyle = {
    color: "blue",
    backgroundColor: "#eee",
    padding: "20px",
  };
  return (
    <>
      <h1 style={inlineStyle}>InlineStyle</h1>
      <p
        style={{
          display: "inline-block",
          borderRight: "solid 10px #ccc",
          borderLeft: "solid 10px #ccc",
          padding: "0.2em 0.5em",
        }}
      >
        インラインスタイル
      </p>
    </>
  );
};
