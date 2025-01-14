import { useState } from 'react';
import { inputs } from './inputs.js';

export default function SelfInputs() {
  return <ShowingSelfInputs />;
}

function ShowingSelfInputs() {
  const [errors, setErrors] = useState({}); // Pour stocker les erreurs par ID
  const handleChange = (event, id) => {
    const value = event.target.value;

return ( id === 0 || id === 1) && /\d/.test(value)? 
      setErrors((errors="u must enter a string") ): setErrors("same error")
    } 
  });

  return (
    <form>
      {inputs.map(({ id, input }) => (
        <div key={id}>
          <input
            placeholder={input}
            onChange={(event) => handleChange(event, id)} // Gérer les changements
          />
          {/* Affichage des erreurs spécifiques à cet ID */}
          {errors[id] && <p style={{ color: "red" }}>{errors[id]}</p>}
        </div>
      ))}
    </form>
  );
}
