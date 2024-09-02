import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [str, setStr] = useState("");

  let concatStr = (name) => {
    if (name === "C") {
      str = "";
    } else if (name === "=") {
      str = eval(str);
    } else {
      str = str.concat(name);
    }
    setStr(str);
  };

  // let inputStr = (str) => {};

  return (
    <>
      <div className={styles.calculator}>
        <Display text={str}></Display>
        <ButtonsContainer handleStr={concatStr}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
