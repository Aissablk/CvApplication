import { useContext, useState } from 'react';
import { Buttons } from '../../Utils/Buttons.jsx';
import {inputs_work} from './inputs.js';
import { FormContext } from './context.jsx';

export default function AllInputsWork(){
    const{selfWork,updateSelfWork,toggleShowWork}=useContext(FormContext)
    
    const handlAdd =(e) => {
        
        e.preventDefault();
        toggleShowWork();
    } 
    
    return(
        <form> 
        <ShowingInputsWork  selfWork={selfWork} updateSelfWork={updateSelfWork}/>
        <Buttons onClick={handlAdd} />
        </form> 
    )
}

function ShowingInputsWork({selfWork,updateSelfWork}){
    return (
        inputs_work.map((item) =>
            
        <form>
             <div key ={item.id}>    
            <input placeholder={item.label}  onChange={(event ) =>
            { updateSelfWork((prev) => ({ ...selfWork, [item.id]: event.target.value }))}} /> 
            </div> 

        </form>
            
    )
    )
}