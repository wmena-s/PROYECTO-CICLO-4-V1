import React, {createContext, useState, useEffect} from 'react';
import Constantes from '../Constantes';

export const DataContext = createContext();

export const DataProvider = ({children})=>{

    const [userr, setUser] = useState([]);

    useEffect(()=>{
       fetch(`${Constantes.RUTA_API3}`)
        .then(res => res.json())
        .then(data=> setUser(data))
    },[]);

    const hola ="hola"

    const data = {hola, userr}
    console.log(userr)
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>

    )
}