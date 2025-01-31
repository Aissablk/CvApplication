import { createContext, useState } from 'react';

export const FormContext = createContext();

export function FormProvider({ children }) {
    const [selfInform, setSelfInform] = useState({});
    const [showInfo, setShowInfo] = useState(false);
    const [educaInform, setEducat] = useState({});
    const [showEducate, setShowEducate] = useState(false);
    const[selfWork,setSelfWork]=useState({})
    const[showWork,setShowWork]=useState(false)
    const updateSelfInform = (newInfo) => {
        setSelfInform(newInfo);
    };
    const updateEducate=(newInfo)=>{
        setEducat(newInfo)
    }
    const updateSelfWork=(newInfo)=>{
        setSelfWork(newInfo );
    }
    const toggleShowInfo = () => {
        setShowInfo(true);
    };
    const toggleShowEducate=()=>{
        setShowEducate(true)
    }
    const toggleShowWork=()=>{
        setShowWork(true)
    }


    return (
        <FormContext.Provider value={{ showWork,selfWork,selfInform, showInfo, educaInform,showEducate,updateSelfInform, toggleShowInfo,toggleShowEducate,updateEducate,updateSelfWork,toggleShowWork }}>
            {children}
        </FormContext.Provider>
    );
}
