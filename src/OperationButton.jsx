import { ACTIONS } from "./CalculatorApp"

export default function OperationButton({ dispatch, operator}){
    
    let class_name = ""
    if(operator === "/"){
        class_name = "span"    
    }else{
        class_name = "span-two"
    }
  return (


    <button 
        className={class_name}
        onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION, payload:{operator}})}
    >
        {operator}
    </button>

  )
}
