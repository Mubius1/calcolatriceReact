// import { useEffect } from "react";
import styles from "./Button.module.css";

export function Button(props:any) {
  const audio = new Audio("src/assets/sounds/beep.mp3")

  const pressedButton = () => {
    audio.play()
    props.func(props.textButton);
  }
    return (
      <button onClick={pressedButton} className={styles.buttonStyle}>{props.textButton}</button>
    );
  }

  // useEffect(() => {
  //   console.log("I run everytime my condition is changed")
  // }, [props.textButton]);
   

