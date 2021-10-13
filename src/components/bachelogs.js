import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import './styles/info.css'
import './styles/crud.css'
import axios from 'axios'

const elimiBache= async(bache) =>{
    try {
        console.log(bache)
        const API_CRUD="http://129.146.169.60:1441"
        const resp = await axios.delete(`${API_CRUD}/api/potholes/${bache._id}`)
    } catch (error) {
        
    }
}

function BacheCRUD() {
    const { bache } = useContext(BacheContext)
    return (

                <div className="infoBaches">
            <div className="card cyan">
                <h4>Nombre</h4>
                <p>{bache.name}</p>
            </div>
            <br />
            <div className="card cyan">
                <h4>Fecha de nacimiento</h4>
                <p>{bache.firstIncident?.toString().substring(0,10)}</p>
            </div>
            <br />
                <div className="card cyan">
                <h4>Ultimo incidente</h4>
                <p>{bache.lastIncident?.toString().substring(0,10)}</p>
            </div>
            <br />
                <div className="card cyan">
                <h4>Numero de incidentes</h4>
                <p>{bache.numIncidents}</p>
            </div>
                 <div className="bacheCRUD">
                    <button id="elimiButton" className="crudButton" onClick={()=>elimiBache(bache)}>Eliminar</button>
                </div>
            </div>

        
            // <div className="infoBaches">
            //     <ul>
            //         {/* <li>{bache.name}</li> */}
            //         <li id="bacheName">{bache.name}</li>
            //         <li id="fechaB">Fecha de nacimiento:  {bache.firstIncident?.toString().substring(0,10)}</li>
            //         <li id="ultiB">Ultimo incidente: {bache.lastIncident?.toString().substring(0,10)}</li>
            //         <li id="numB">Numero de incidentes: {bache.numIncidents}</li>

            //     </ul>
            //     <div className="bacheCRUD">
            //         <button id="elimiButton" className="crudButton" onClick={()=>elimiBache(bache)}>Eliminar</button>
            //     </div>
            // </div>
    
    )
}

export default BacheCRUD