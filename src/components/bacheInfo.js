import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import './styles/info.css'

function BacheInfo () {
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
            {/* 
            <div id="bacheLogs" style={{'justifyContent':'end', 'position':'absolute','bottom':'0'}}>
                <ul>

                    <li id="bacheName">Actualizaciones</li>
                    <li id="fechaB">Noticia #1   </li>
                    <li id="ultiB">Noticia #2 </li>
                    <li id="numB">Noticia #3 </li>
                    <li id="ultiB">Noticia #4 </li>
                    <li id="numB">Noticia #5 </li>
                </ul>
            </div> 
        */}
        </div>
    )
}

export default BacheInfo
