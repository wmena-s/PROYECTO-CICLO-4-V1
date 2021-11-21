import './usuarioInterno.css'
import React, { useState, Fragment } from 'react';
import Constantes from "../Constantes";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const UsuarioInterno = () => {


    //state
    const [datos, setDatos] = useState({
        nombre: '',
        usuario: '',
        correo: '',
        contraseña: '',
    });
    
    //agregar valores
    const  manejarcambio=(evento)=>{
        setDatos({
            ...datos,
            [evento.target.name]: evento.target.value
        });
    }

    //enviar datos
    const enviarDatos=async (evento)=>{
     try {
        evento.preventDefault();
        console.log(datos)
        await Axios.post(`${Constantes.RUTA_API2}`, 
            {
                body: 
                     {
                        "nombre": "asdfa",
                        "usuario": "asdf",
                        "correo": "asdf",
                        "contraseña": "asf"
                      },
                    
               
                headers: {'Content-Type' : 'application/json'},
            });
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="formularioV1">
            <h1> USUARIOS INTERNOS</h1>
            <div className="contenedor-formulario">
            <h2>FORMULARIO </h2>  
                <form className="form container mt-5" onSubmit={enviarDatos}>   
                    <label className="label" htmlFor="nombre">Nombre:</label> 
                    <input 
                    name="nombre" 
                    id="nombre" 
                    className="form-control"
                    placeholder='ingresa tu nombre' 
                    value={datos.nombre}
                    onChange={manejarcambio}>
                    </input>
                    
                    <label className="label" htmlFor="usuario">usuario:</label>
                    <input
                    name="usuario" 
                    className="form-control"
                    id="usuario"

                    placeholder='ingresa tu nombre de usuario' 
                    value={datos.usuario}
                    onChange={manejarcambio}>
                    </input><br/>
                   
                    <label className="label" htmlFor="correo">Correo:</label>
                    <input 
                    name="correo" 
                    id="correo"
                    className="form-control"
                    placeholder='ingresa tu correo' 
                    value={datos.correo}
                    onChange={manejarcambio}>
                    </input><br/>
                    
                    <label className="label" htmlFor="contraseña">contraseña:</label>
                    <input 
                    name="contraseña" 
                    id="contraseña"
                    className="form-control"
                    placeholder='ingresa tu contraseña' 
                    value={datos.contraseña} 
                    onChange={manejarcambio}>
                    </input><br/>
                    <button type="submit" className="btn btn-dark" >enviar</button>            
                </form>
                
                <div>
                    <img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZiu8USwv9x4Az1wTRRLs5xFMkYwP1b6lpQ&usqp=CAU'></img>
                </div>
            </div>
        </div>
        
    )

    
}



export default UsuarioInterno;
