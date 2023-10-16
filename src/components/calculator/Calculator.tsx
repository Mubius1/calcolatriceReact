
import { useState } from "react"
import styles from "./Calculator.module.css";
import { FrameDisplay } from "../frameDisplay/FrameDisplay";
import { FrameButtons } from "../frameButtons/FrameButtons";


export function Calculator() {

  const [pressedStack, currentPressedStack] = useState(['']);
  const [operator,setOperator]= useState('');
  
console.log(operator)

 // riceve i dati dei bottoni dai figli
  const pull_data = (data:any) => {
    switch(detectInput(data)) {
      case 'number':       
          currentPressedStack(prevState => [...prevState, data]);   
          break;
          case 'string':
            setOperator(data)
            break
          }
        console.log(typeof(data))
        console.log(pressedStack)
      }
      console.log(operator)
      // const detectInput = (data:any) =>{
    
  //   if(typeof(data)=='number'){ 
  //     console.log('sono un numero')
  //   }
  //   else if (typeof(data)=='string'){
  //     console.log(data)
  //     console.log('sono una stringa')
  //   }
  
  // }

  // useEffect(() => {
  
  // detectInput(pressedStack)
  // console.log('ci entro')
    
  // }, [pull_data]);

  console.log(parseInt(pressedStack.join('')));

    return (
        <div className={styles.calculatorWrapper}>
          <FrameDisplay content={ (pressedStack + operator).replace(",", "") }/>
        <FrameButtons func={pull_data} />
        </div>
      
    );
  }

  function detectInput(data:any){
   
    if(typeof(data) =='number'){

      return 'number'
    }
    else return 'string'
  }

  

 