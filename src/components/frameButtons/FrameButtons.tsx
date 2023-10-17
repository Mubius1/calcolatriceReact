import { Button } from "../button/Button";
import styles from "./FrameButtons.module.css";

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "=",
  "+",
  "-",
  "x",
  "÷",
  "reset",
];

export function FrameButtons(props: any) {
  const dataToParent = (data: any) => {
    props.func(data);
  };
  return (
    <div className={styles.asd}>
      {numbers.map((num) => (
        <Button func={dataToParent} textButton={num} key={num} />
      ))}
    </div>
  );
}

//
