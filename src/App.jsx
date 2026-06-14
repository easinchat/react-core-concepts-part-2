import Counter from "./counter";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Batsman from "./Batsman";
import Bowling from "./bowling";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }
  const handleClick2 = () => {
    alert("Second time i am clicked");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <Bowling></Bowling>
      <Batsman></Batsman>
      <h1>Get started</h1>
      <Counter></Counter>
      <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick2}>Click me</button>
        <button onClick={() => handleAdd5(10)}>Click Me</button>
      </div>
    </>
  );
}

export default App;
