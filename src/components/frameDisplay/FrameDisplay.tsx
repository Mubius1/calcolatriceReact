
import styles from "./FrameDisplay.module.css";

export function FrameDisplay(props:any){
 
    return (<div className={styles.frame}>{props.content}</div>)
}