import { useState } from 'react';
import {inputs} from './inputs.js';
export default function SelfInputs(){
    return(
        <ShowingSelfInputs />
    )
}

function ShowingSelfInputs(){
    const { handleChange, errors } = StringOnlyInput();
    return (
        
        inputs.map(({id,input}) =>
            
        <form>
             <div key ={id}>    
            <input placeholder={input} onChange={(event) => handleChange(event, id)} /> 
            {errors && id <= 1 && <div style={{ color: 'red' }}>{errors}</div>}
            </div> 

        </form>
            
    )
    )
}

function StringOnlyInput() {
    const [errors, setErrors] = useState(""); 
  const handleChange = (event, id) => {
    const value = event.target.value;

return (( id === 0 || id === 1) && !/^[a-zA-Z]+$/test(value)? 
      setErrors("u must enter a string" ): setErrors("enter a string"))
    } 
  return {handleChange,errors}
}
    