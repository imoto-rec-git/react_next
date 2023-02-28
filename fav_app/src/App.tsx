import { useState } from 'react';
import './App.css';
import 'animate.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Fav!')
  const [btnAnimation, setBtnAnimation] = useState(false)
  const [ttlAnimation, setTtlAnimation] = useState(false)

  const btnAnimationEffect = () => {
    setBtnAnimation(true)
    setTimeout(()=> {
      setBtnAnimation(false)
    }, 500)
  }
  const ttlAnimationEffect = () => {
    setTtlAnimation(true)
    setTimeout(() => {
      setTtlAnimation(false)
    }, 2000)
  }
  const changeText = () => {
    if((count+1) % 5 === 0) {
      ttlAnimationEffect()
      setText(`${count+1}達成です。おめでとうございます！`)
    } else {
      setText('Fav!')
    }
  }
  const plus = () => {
    setCount(count + 1)
    btnAnimationEffect()
    changeText()
  }
  const reset = () => {
    setCount(0)
    setText('Fav!')
    btnAnimationEffect()
  }

  return (
    <div id="container">
      <div className="counter__wrapper">
        <h1 className={ttlAnimation ? "animate__animated animate__flip animate__slow" : "title"}>{text}</h1>
        <button className={btnAnimation ? "btn btnbtn__fav animate__animated animate__rubberBand" : "btn btnbtn__fav"} onClick={plus} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-chat-heart-fill icon__fav" viewBox="0 0 16 16">
            <path className="icon__fav__path"
              d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg>
          <span className="fav__count">{count}</span>
        </button>
      </div>
      <button className="btn btn__reset" onClick={reset}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          className="bi bi-arrow-clockwise icon__reset" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
          <path
            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </button>
    </div>
  )
}

export default App;
