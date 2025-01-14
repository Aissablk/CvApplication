import {inputs_work} from './inputs.js';
export default function AllInputsWork(){
    return(
        <ShowingInputsWork />
    )
}

function ShowingInputsWork(){
    return (
        inputs_work.map(({id,input}) =>
            
        <form>
             <div key ={id}>    
            <input placeholder={input} /> 
            </div> 

        </form>
            
    )
    )
}