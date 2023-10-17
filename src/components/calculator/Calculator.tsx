import { useState } from "react";
import styles from "./Calculator.module.css";
import { FrameDisplay } from "../frameDisplay/FrameDisplay";
import { FrameButtons } from "../frameButtons/FrameButtons";

export function Calculator() {
  const [pressedFirstStack, currentpressedFirstStack] = useState([""]);
  const [pressedSecondStack, currentpressedSecondStack] = useState([""]);
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  console.log(operator);

  // riceve i dati dei bottoni dai figli
  const pull_data = (data: any) => {
    switch (detectInput(data)) {
      case "number":
        if (operator) {
          currentpressedSecondStack((prevState) => [...prevState, data]);
        } else {
          currentpressedFirstStack((prevState) => [...prevState, data]);
        }
        break;
      case "string":
        setOperator(data);
        break;
      case "equals":
        doOperation(operator);
        break;
    }

    // console.log(typeof data);
    // console.log(pressedFirstStack);
  };
  // console.log(operator);

  function doOperation(operator: any) {
    let res;
    const first = parseInt(pressedFirstStack.join(""));
    const second = parseInt(pressedSecondStack.join(""));
    console.log(operator);
    switch (operator) {
      // sum
      case "+":
        res = first + second;
        setResult(res);
        resetStacks();
        break;
      case "-":
        res = first - second;
        setResult(res);
        resetStacks();
        break;
      case "x":
        res = first * second;
        setResult(res);
        resetStacks();
        break;
      case "÷":
        res = first / second;
        setResult(res);
        resetStacks();
        break;
      default:
      // code block
    }
  }

  console.log(result);

  function resetStacks() {
    currentpressedSecondStack([""]);
    currentpressedFirstStack([""]);
    setOperator("");
  }
  return (
    <div className={styles.calculatorWrapper}>
      <FrameDisplay
        firstContent={pressedFirstStack}
        operator={operator}
        secondContent={pressedSecondStack}
        result={result}
      />
      <FrameButtons func={pull_data} />
    </div>
  );
}
// pressedFirstStack&&operator&&pressedSecondStack

function detectInput(data: any) {
  console.log(data);
  if (typeof data == "number") {
    return "number";
  } else if (typeof data == "string" && data !== "=") return "string";
  else if (data == "=") return "equals";
}
