import { useState } from "react";
import { Count } from "./Count";
import { Reset } from "./Reset";
import { Title } from "./Title";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "animate.css";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Fav!");
  const [btnAnimation, setBtnAnimation] = useState(false);
  const [ttlAnimation, setTtlAnimation] = useState(false);

  const btnAnimationEffect = () => {
    setBtnAnimation(true);
    setTimeout(() => {
      setBtnAnimation(false);
    }, 500);
  };
  const ttlAnimationEffect = () => {
    setTtlAnimation(true);
    setTimeout(() => {
      setTtlAnimation(false);
    }, 2000);
  };
  const changeText = () => {
    if ((count + 1) % 5 === 0) {
      ttlAnimationEffect();
      setText(`${count + 1}達成です。おめでとうございます！`);
    } else {
      setText("Fav!");
    }
  };
  const plus = () => {
    setCount(count + 1);
    btnAnimationEffect();
    changeText();
  };
  const reset = () => {
    setCount(0);
    setText("Fav!");
    btnAnimationEffect();
  };

  const Container = css`
    position: relative;
    max-width: 600px;
    min-height: 100vh;
    min-height: 100dvh;
    margin: 0 auto;
  `;
  const CounterWrapper = css`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <div css={Container}>
      <div css={CounterWrapper}>
        <Title ttlAnimation={ttlAnimation} text={text} />
        <Count btnAnimation={btnAnimation} plus={plus} count={count} />
      </div>
      <Reset reset={reset} />
    </div>
  );
};

export default App;
