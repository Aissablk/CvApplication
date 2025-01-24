import { useContext } from "react";
import { FormContext } from "../Form/context";
export function Modele(){
    const { selfInform, showInfo,educaInform,showEducate } = useContext(FormContext);
    return(
        <div>
            <header>
                This is Your CV 
            </header> 
            <div>
                <section>
                Self Information
                <div
                        style={{
                            marginTop: "20px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                    >
     {((selfInform && Object.keys(selfInform).length > 0) || 
    (educaInform && Object.keys(educaInform).length > 0)) ? (
    <>
      {showInfo && selfInform && Object.keys(selfInform).length > 0 && 
        Object.entries(selfInform).map(([key, value]) => (
          <p key={`info-${key}`}>{value}</p>
        ))
      }
      {showEducate && educaInform && Object.keys(educaInform).length > 0 && 
        Object.entries(educaInform).map(([key, value]) => (
          <p key={`educate-${key}`}>{value}</p>
        ))
      }
    </>
  ) : (
    <p>No information provided yet.</p>
  )}
                        
                    </div>
        
          </section>
        </div>
       <div>
                <section> 
                    Educationel Information
                </section>
                <section>
                    Work Information 
                </section> 

            </div>
        </div>
    )
}