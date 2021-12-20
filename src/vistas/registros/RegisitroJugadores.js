import React from 'react';
import Constantes from "../../Constantes";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Formularios from '../plantillas/Formularios'
import './registroJugador.css';
import {DataContext} from "../../funcionalidades/DataContext";

class RegisitroJugadores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jugador: {
                "nombre": "",
                "cedula": "",
                "edad": "",
                "campeonato": "",
                "equipo":"ninguno"
            },
               ///renderizado prueba  lista desplegable
               items:[],
               ///renderizado prueba
        };
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

 
    componentDidMount() {
        fetch(`${Constantes.RUTA_API}`)
        .then(result=>result.json())
        .then(items=>{
           
            this.setState({
            
                items:items
            })
        })
    }

    render(){

        return (
            <div className="App">
              <header className="App-header">
                <h1>
                  REGISTRO DE JUGADORES
                </h1>

                <div className="contanedorgeneral">
                     <div className="row">
                    <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                         <div className="form-group">
                            <label className="label" htmlFor="nombre">Nombre:</label> 
                            <input className="form-control" placeholder="Nombre" id="nombre" name="nombre" onChange={this.manejarCambio} value={this.state.jugador.nombre} ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="cedula">cedula:</label>
                            <input className="form-control" placeholder="cedula" id="cedula"  name="cedula" onChange={this.manejarCambio} value={this.state.jugador.cedula} ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="edad">edad:</label>
                            <input className="form-control" placeholder="edad" id="edad"  name="edad" onChange={this.manejarCambio} value={this.state.jugador.edad} ></input>
                        </div>
                        {/* <div className="form-group">
                            <label className="label" htmlFor="campeonato">campeonato:</label>
                            <input className="form-control" placeholder="campeonato" id="campeonato" name="campeonato" onChange={this.manejarCambio} value={this.state.jugador.campeonato} ></input>
                        </div> */}
                        <div className="form-group">
                            <label className="label" htmlFor="equipo">equipo:</label>
{/* prueba de renderizado- lista desplegable */}
                    <select className="form-control" id="equipo" name="equipo" onChange={this.manejarCambio}>
                        <option>seleccionar</option>
                        {this.state.items.map((item1)=>{
                        return(                      
                            <option key={item1._id} value={item1._id}>{item1.nombre}</option >
                        )
                        })}
                    </select>
{/* prueba de renderizado */} 
{/* desbloquear el siguiente codigo si no funciona */}
                            {/* <input className="form-control" placeholder="equipo" id="equipo" name="equipo" onChange={this.manejarCambio} value={this.state.jugador.equipo} ></input>
                         */}
                        </div>
                        <button className="btn btn-dark">Guardar</button>
                    </form>
                     </div>
         

                    <div className="row">
                    <Formularios src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqSgOW6enXddpUafvNM7OAKsqQ0MQX8Uftw&usqp=CAUg" />
                    </div>
                </div>
             
              </header>
            </div>
          );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();

        const respuesta = await fetch(`${Constantes.RUTA_API3}`, {
            method: 'POST',
            body: JSON.stringify(this.state.jugador),
            headers: {
                'Content-Type' : 'application/json',
            }
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Jugador guardado', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                jugador: {
                    nombre: "",
                    cedula: "",
                    edad: "",
                    campeonato: "",
                    equipo:""

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
            const equipoActualizado = state.jugador;
            equipoActualizado[clave] = valor;
            return {
                jugador: equipoActualizado,
            }
        });
    }


                    //https://www.codegrepper.com/code-examples/html/react+js+form+select+options
                    //aun no funciona.


                    // no fue usado el handleChange
                handleChange(event) {
                        const variable = event.target.value
                        console.log('variable ingresada' + " "+ variable)
                        this.setState({
                            jugador: {equipo: variable}
                        });
                        console.log('variable guardad' + " "+this.state.jugador.equipo)
                }

        }


export default RegisitroJugadores;