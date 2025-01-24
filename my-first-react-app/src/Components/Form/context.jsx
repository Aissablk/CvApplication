import { createContext, useState } from 'react';

export const FormContext = createContext();

export function FormProvider({ children }) {
    const [selfInform, setSelfInform] = useState({});
    const [showInfo, setShowInfo] = useState(false);
    const [educaInform, setEducat] = useState({});
    const [showEducate, setShowEducate] = useState(false);

    const updateSelfInform = (newInfo) => {
        setSelfInform(newInfo);
    };
    const updateEducate=(newInfo)=>{
        setEducat(newInfo)
    }
    const toggleShowInfo = () => {
        setShowInfo(true);
    };
    const toggleShowEducate=()=>{
        setShowEducate(true)
    }

    return (
        <FormContext.Provider value={{ selfInform, showInfo, educaInform,showEducate,updateSelfInform, toggleShowInfo,toggleShowEducate,updateEducate }}>
            {children}
        </FormContext.Provider>
    );
}
