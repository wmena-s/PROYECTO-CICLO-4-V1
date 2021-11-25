import './New.css';
import React from 'react';
import Constantes from "../../Constantes";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipo: {
                "nombre": "",
                "usuario": "",
                "correo": "",
                "contraseña": "",
                "nombreEquipo": "",
            },
        };
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }


    render(){
        return (
            <div className="App">
              <header className="App-header">
                <h1>
                  REGISTRO DE EQUIPOS
                </h1>
                <div>
                    <p>registra aqui tu equipo de futbol</p>
                    <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                        <div className="formulario-n1">
                            <label className="label" htmlFor="nombre">Nombre:</label> 
                            <input className="form-control" placeholder="Nombre" id="nombre" name="nombre" onChange={this.manejarCambio} value={this.state.equipo.nombre} ></input>
                        </div>
                        <div className="formulario-n1">
                            <label className="label" htmlFor="usuario">usuario:</label><input placeholder="Usuario" id="usuario"  name="usuario" onChange={this.manejarCambio} value={this.state.equipo.usuario} ></input>
                        </div>
                        <div className="formulario-n1">
                            <label className="label" htmlFor="correo">Correo:</label>
                            <input className="form-control" placeholder="Correo" id="correo"  name="correo" onChange={this.manejarCambio} value={this.state.equipo.correo} ></input>
                        </div>
                        <div className="formulario-n1">
                            <label className="label" htmlFor="contraseña">contraseña:</label>
                            <input className="form-control" placeholder="contraseña" id="contraseña" name="contraseña" onChange={this.manejarCambio} value={this.state.equipo.contraseña} ></input>
                        </div>
                        <div className="formulario-n1">
                            <label className="label" htmlFor="nombreEquipo">nombreEquipo:</label> 
                            <input className="form-control" placeholder="nombreEquipo" id="nombreEquipo"  name="nombreEquipo" onChange={this.manejarCambio} value={this.state.equipo.nombreEquipo} ></input>
                        </div>
                        <button className="btn btn-dark">Guardar</button>
                    </form>
                </div>
             
              </header>
            </div>
          );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();

        const respuesta = await fetch(`${Constantes.RUTA_API}`, {
            method: 'POST',
            body: JSON.stringify(this.state.equipo),
            headers: {
                'Content-Type' : 'application/json',
            }
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Videojuego guardado', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                equipo: {
                    nombre: "",
                    usuario: "",
                    correo: "",
                    contraseña: "",
                    nombreEquipo: "p"
                }
            });
        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
    }
    
    manejarCambio(evento) {
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const equipoActualizado = state.equipo;
            equipoActualizado[clave] = valor;
            return {
                equipo: equipoActualizado,
            }
        });
    }
}

export default New;
