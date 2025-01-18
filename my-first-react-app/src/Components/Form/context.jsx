import { createContext, useState } from 'react';

export const FormContext = createContext();

export function FormProvider({ children }) {
    const [selfInform, setSelfInform] = useState({});
    const [showInfo, setShowInfo] = useState(false);

    const updateSelfInform = (newInfo) => {
        setSelfInform(newInfo);
    };

    const toggleShowInfo = () => {
        setShowInfo(true);
    };

    return (
        <FormContext.Provider value={{ selfInform, showInfo, updateSelfInform, toggleShowInfo }}>
            {children}
        </FormContext.Provider>
    );
}
