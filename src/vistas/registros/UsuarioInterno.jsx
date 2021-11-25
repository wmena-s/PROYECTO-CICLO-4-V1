import './usuarioInterno.css';
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
                  REGISTRO DE USUARIOS INTERNOS
                </h1>
                <div className="contanedorgeneral">
                <div>
                    <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                         <div className="form-group">
                            <label className="label" htmlFor="nombre">Nombre:</label> 
                            <input className="form-control" placeholder="Nombre" id="nombre" name="nombre" onChange={this.manejarCambio} value={this.state.equipo.nombre} ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="usuario">usuario:</label>
                            <input className="form-control" placeholder="Usuario" id="usuario"  name="usuario" onChange={this.manejarCambio} value={this.state.equipo.usuario} ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="correo">Correo:</label>
                            <input className="form-control" placeholder="Correo" id="correo"  name="correo" onChange={this.manejarCambio} value={this.state.equipo.correo} ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="contraseña">contraseña:</label>
                            <input className="form-control" placeholder="contraseña" id="contraseña" name="contraseña" onChange={this.manejarCambio} value={this.state.equipo.contraseña} ></input>
                        </div>
                        <button className="btn btn-dark">Guardar</button>
                    </form>
                </div>

                <div>
                    
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://concepto.de/wp-content/uploads/2019/12/basquetbol-baloncesto-e1575657106339.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqSgOW6enXddpUafvNM7OAKsqQ0MQX8Uftw&usqp=CAUg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://previews.123rf.com/images/adzicnatasa/adzicnatasa1706/adzicnatasa170600487/80635572-fondo-de-baloncesto-ilustraci%C3%B3n-.jpg" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>

                </div>
                </div>
             
              </header>
            </div>
          );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();

        const respuesta = await fetch(`${Constantes.RUTA_API2}`, {
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
                    contraseña: ""
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
