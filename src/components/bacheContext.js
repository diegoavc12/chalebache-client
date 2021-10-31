import React,{createContext, useState} from 'react';

export const BacheContext = createContext();

export const BacheProvider = ({children})=>{
    const  [bache, setBache] = useState({})
    const [data, setData] = useState([])
    const value = {
        bache, 
        setBache,
        data,
        setData,
    }
    return (
        <BacheContext.Provider value={value}>
            {children}
        </BacheContext.Provider>)
    }