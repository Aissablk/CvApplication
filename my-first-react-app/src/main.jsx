import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllInputs from './Components/Form/SelfInformations.jsx'
import SelfInputs from './Components/Form/SelfInformations.jsx'
import AllInputsEducations from './Components/Form/EducationInofrmations.jsx'
import AllInputsWork from './Components/Form/WorkExperience.jsx'
import { Modal } from '@mui/material'
import { Modele } from './Components/Model/model.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelfInputs />
    <AllInputsEducations />
    <AllInputsWork />
    <Modele /> 
  </StrictMode>,
)
