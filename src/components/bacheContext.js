import React,{createContext, useState} from 'react';

export const BacheContext = createContext();

export const BacheProvider = ({children})=>{
    const  [bache, setBache] = useState({})
    return (
        <BacheContext.Provider value={{bache, setBache}}>
            {children}
        </BacheContext.Provider>)
    }