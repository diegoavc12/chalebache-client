import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import './styles/info.css'
import './styles/crud.css'
import axios from 'axios'

const elimiBache= async(bache) =>{
    try {
        console.log(bache)
        const resp = await axios.delete(`http://localhost:3030/api/potholes/${bache._id}`)
    } catch (error) {
        
    }
}

function BacheCRUD() {
    const { bache } = useContext(BacheContext)
    return (
            <div className="infoBaches">
                <ul>
                    {/* <li>{bache.name}</li> */}
                    <li id="bacheName">{bache.name}</li>
                    <li id="fechaB">Fecha de nacimiento:  {bache.firstIncident?.toString().substring(0,10)}</li>
                    <li id="ultiB">Ultimo incidente: {bache.lastIncident?.toString().substring(0,10)}</li>
                    <li id="numB">Numero de incidentes: {bache.numIncidents}</li>

                </ul>
                <div className="bacheCRUD">
                    <button id="elimiButton" className="crudButton" onClick={()=>elimiBache(bache)}>Eliminar</button>
                </div>
            </div>
    
    )
}

export default BacheCRUD