import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { CssModules } from "./components/styles/CssModules";
import { Emotion } from "./components/styles/Emotion";
import { InlineStyle } from "./components/styles/InlineStyle";
import { StyledComponents } from "./components/styles/StyledComponents";
import { StyledJsx } from "./components/styles/StyledJsx";

function App() {
  console.log("Appコンポ最初");
  return (
    <div className="App">
      {/* <Home /> */}
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

export default App;
