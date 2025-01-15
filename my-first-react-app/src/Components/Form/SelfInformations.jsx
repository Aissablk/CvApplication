import { useState } from 'react';
import {inputs} from './inputs.js';
import { Buttons } from '../../Utils/Buttons.jsx'



export default function SelfInputs(){
    return(
        <div> 
        <ShowingSelfInputs />
        <Buttons />
        </div>
    )
}

function ShowingSelfInputs(){
    const { handleChange, errors, message } = StringOnlyInput();
    return (
        
        inputs.map(({id,input}) =>
            
        <form>
             <div key ={id}>    
            <input placeholder={input} onChange={(event) => handleChange(event, id)}   /> 
             
            {errors[id] && <div style={{ color: 'red' }}>{errors[id]}</div>}
            {message[id] && <div style={{ color: 'green' }}>{message[id]}</div>} 
           
            </div> 

        </form>
            
    )
    )
}

function StringOnlyInput() {
    const [errors, setErrors] = useState({}); 
    const [message, setMessage] = useState({});
  const handleChange = (event, id) => {
    const value = event.target.value;

    if( id === 0 || id == 1) {
         if (!/^[a-zA-Z]+$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [id]: 'You must enter a valid string' }));
            setMessage((prevMessage) => ({ ...prevMessage, [id]: '' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [id]: '' })); 
            setMessage((prevMessage) => ({ ...prevMessage, [id]: 'Keep going!' }));
        }
    }
}
return {handleChange,errors,message}
}
    