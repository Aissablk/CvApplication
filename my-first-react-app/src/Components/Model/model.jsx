export function Modele({selfInform}){
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
                        {Object.keys(selfInform || {}).length === 0 ? (  // Add null check
                            <p>No information provided yet.</p>
                        ) : (
                            Object.entries(selfInform).map(([key, value]) => (
                                <p key={`info-${key}`}>  
                                     {value} 
                                </p>
                            ))
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