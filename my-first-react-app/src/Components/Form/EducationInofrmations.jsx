import {inputs_education} from './inputs.js';
export default function AllInputsEducations(){
    return(
        <ShowingInputsEducation />
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