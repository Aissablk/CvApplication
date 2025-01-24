import {inputs_education} from './inputs.js';
import { Buttons } from '../../Utils/Buttons.jsx'
import { useContext } from 'react';
import { FormContext } from './context.jsx';
export default function AllInputsEducations(){
    const { educaInform, updateEducate, toggleShowEducate } = useContext(FormContext);
  

    const handlAdd =(e) => {
        
            e.preventDefault();
            toggleShowEducate();
           
        
    }
    return(
        <div>
        <form>
           <ShowingInputsEducation  updateEducate={updateEducate} educaInform={educaInform}/>
           
           <Buttons onClick={handlAdd}/>
           </form >

           </div>
    )

}

function ShowingInputsEducation({educaInform, updateEducate}){
    return (
        inputs_education.map((item) =>
            
        
             <div key ={item.id}>    
            <input placeholder={item.label} onChange={(event ) =>
            { updateEducate((prev) => ({ ...educaInform, [item.id]: event.target.value }))}} /> 
           
            </div> 

        
            
    )
    )
}