import { Buttons } from '../../Utils/Buttons.jsx';
import {inputs_work} from './inputs.js';

export default function AllInputsWork(){
    return(
        <form> 
        <ShowingInputsWork />
        <Buttons />
        </form> 
    )
}

function ShowingInputsWork(){
    return (
        inputs_work.map((item) =>
            
        <form>
             <div key ={item.id}>    
            <input placeholder={item.label} /> 
            </div> 

        </form>
            
    )
    )
}