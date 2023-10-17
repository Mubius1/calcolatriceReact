import styles from "./FrameDisplay.module.css";

export function FrameDisplay(props: any) {
  return (
    <div className={styles.frame}>
      {props.firstContent}
      {props.operator}
      {props.secondContent}
      {props.result}
    </div>
  );
}
