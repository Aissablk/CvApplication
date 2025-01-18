import { useState } from 'react';
import {inputs} from './inputs.js';
import { Buttons } from '../../Utils/Buttons.jsx'
import { Modele } from "../Model/model.jsx";


export default function SelfInputs(){
    const [selfInform,SetselfInform]=useState({});
    const [showInfo,SetshowInfo]=useState(false);

    const handlAdd =(e) => {
        
            e.preventDefault();
            SetshowInfo(true);
        
    }
    return(
        <div>
        <form> 
        <ShowingSelfInputs  SetselfInform={SetselfInform}/>
        <Buttons onClick={handlAdd} />
        </form>
        <Modele  selfInform={showInfo ? selfInform : {}} /> 
        </div> 
        
    )
}

function ShowingSelfInputs({SetselfInform}){
    const { handleChange, errors, message } = StringOnlyInput();
    return (
        
        inputs.map(({id,input}) =>
            
        
             <div key ={id}>    
            <input placeholder={input} onChange={(event) => {handleChange(event, id);
             SetselfInform((prev) => ({ ...prev, [id]: event.target.value })); 
        }}   /> 
             
            {errors[id] && <div style={{ color: 'red' }}>{errors[id]}</div>}
            {message[id] && <div style={{ color: 'green' }}>{message[id]}</div>} 
           
            </div> 

        
            
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
    