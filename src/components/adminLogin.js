import React, { Component, useState } from 'react'
import './styles/adminLogin.css'
import axios from 'axios'
import { Route } from 'react-router'
import {useHistory} from 'react-router-dom'

const AdminLogin =  () =>  {
        const [data, setData] = useState({username:'',password:''})
        const history = useHistory()
        const inputChange = (event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }

        const sendLogin = async() =>{

            const resp = await axios.post(`${process.env.API_CRUD}/admin/login`,
            {
                "username": data.username, "password":data.password
            })
            .then(
                resp =>
                {
                    history.push('/admins')
                }
            )
        }

        return (
            <div >
                <div className='loginApp'></div>
                <div id='formLogin'>
                    <form className='box'>
                        <h1>Inicio de Sesión</h1>
                        <input id="loginI" type="text" name="username" placeholder="USUARIO / CORREO" onChange={inputChange}></input>
                        <input id="loginI" type="password" name="password" placeholder="CONTRASEÑA" onChange={inputChange}></input>
                        <input type="button" name="" value="Iniciar" onClick={sendLogin}></input>
                    </form>
                
                </div>
            </div>
        )
    
}

export default AdminLogin