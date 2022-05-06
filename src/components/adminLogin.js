import React, { useState } from 'react';
import './styles/adminLogin.css';
import axios from 'axios';
import image from './imgs/logo.png';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
    const [data, setData] = useState({ username: '', password: '' })
    const history = useHistory()
    const inputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const sendLogin = async () => {
        const API_CRUD = "http://129.146.169.60:1441"
        const resp = await axios.post(`${API_CRUD}/admin/login`,
            {
                "username": data.username, "password": data.password
            })
            .then(
                resp => {
                    history.push('/admins')
                }
            )
    }

    return (
        <div >
            <div className='loginApp'></div>
            {/*<div id="mySidenav" class="sidenav">
                    <a href="/" id="about">Inicio</a>
                </div>*/}
            <div id='formLogin'>
                <form className='newBox'>
                    <img className="icon" src={image} />
                    <div id='title'>
                        <h1>Inicio de Sesión</h1>
                    </div>
                    <div id='boxes'>
                        <input id="loginI" type="text" name="username" placeholder="USUARIO / CORREO" onChange={inputChange}></input>
                        <input id="loginI" type="password" name="password" placeholder="CONTRASEÑA" onChange={inputChange}></input>
                        <input type="button" name="" value="Iniciar" onClick={sendLogin}></input>
                        <a href="/" >
                            <input type="button" name="" value="Regresar"></input>
                        </a>
                    </div>
                    {/* <a href="#">Forgot your password?</a><br /> */}
                    {/* <a href="#">Create an account</a> */}
                </form>
            </div>
        </div>
    )

}

export default AdminLogin