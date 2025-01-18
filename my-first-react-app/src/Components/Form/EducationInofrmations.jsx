import {inputs_education} from './inputs.js';
import { Buttons } from '../../Utils/Buttons.jsx'
export default function AllInputsEducations(){
    return(
        <form>
           <ShowingInputsEducation />
           <Buttons />
           </form >
    )

}

function ShowingInputsEducation(){
    return (
        inputs_education.map(({id,input}) =>
            
        <form>
             <div key ={id}>    
            <input placeholder={input} /> 
            </div> 

        </form>
            
    )
    )
}