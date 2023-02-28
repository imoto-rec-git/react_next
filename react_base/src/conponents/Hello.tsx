import React from "react";

const Hello = (props) => {
  // console.log(props);
  const { name, color, h1Style, children } = props;
  return (
    <h1 style={h1Style || { color: color }}>
      {name}　{children}
    </h1>
  );
};

export default Hello;
