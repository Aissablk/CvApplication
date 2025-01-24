import { useState } from 'react';
import {inputs} from './inputs.js';
import { Buttons } from '../../Utils/Buttons.jsx'
import { Modele } from "../Model/model.jsx";
import { useContext } from 'react';
import { FormContext } from './context.jsx';
export default function SelfInputs(){
    const { selfInform, updateSelfInform, toggleShowInfo } = useContext(FormContext);
  

    const handlAdd =(e) => {
        
            e.preventDefault();
            toggleShowInfo();
           
        
    }
    return( 
        <div> 
        <form > 
        <ShowingSelfInputs  updateSelfInform={updateSelfInform} selfInform={selfInform}/>
        <Buttons onClick={handlAdd} />
        </form>
        
        </div> 
        
    )
}

function ShowingSelfInputs({updateSelfInform,selfInform}){
    const { handleChange, errors, message } = StringOnlyInput();
    return (
        
        inputs.map((item) =>
            
        
             <div key ={item.id}>    
            <input placeholder={item.label} onChange={(event) => {handleChange(event, item); 
             updateSelfInform((prev) => ({ ...selfInform, [item.id]: event.target.value })); 
        }}   /> 
             
            {errors[item.id] && <div style={{ color: 'red' }}>{errors[item.id]}</div>}
            {message[item.id] && <div style={{ color: 'green' }}>{message[item.id]}</div>} 
           
            </div> 

        
            
    )
    )
}

function StringOnlyInput() {
    const [errors, setErrors] = useState({}); 
    const [message, setMessage] = useState({});
  const handleChange = (event, input ) => {
    const value = event.target.value;
 
    if( input.labelname === "nom" ||  input.labelname === "prenom" ) { 
         if (!/^[a-zA-Z]+$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [input.id]: 'You must enter a valid string' }));
            setMessage((prevMessage) => ({ ...prevMessage, [input.id]: '' })); 
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [input.id]: '' })); 
            setMessage((prevMessage) => ({ ...prevMessage, [input.id]: 'Keep going!' }));
        }
    }
}
return {handleChange,errors,message}
}
    