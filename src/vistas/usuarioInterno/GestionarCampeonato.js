import React, {Fragment,useEffect, useState} from 'react'
import Constantes from '../../Constantes';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

/* import styled from "./GestionarCampeonato.css"; */

function GestionarCampeonato() {
    const Field = React.forwardRef(({label, type}, ref) => {
        return (
          <div>
            <input ref={ref} type={type} style={inputStyle} />
          </div>
        );
    });

    const labelStyle = {
        margin: '10px 0 5px 0',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '15px',
    };
    
    const inputStyle = {
        margin: '5px 0 10px 0',
        padding: '5px', 
        border: '1px solid #bfbfbf',
        borderRadius: '3px',
        boxSizing: 'border-box',
        width: '100%'
    };

    //buscar el torneo (barra buscadora)
        const [dat, setDat]=useState({
            nombre: "",
            descripcion: "",
            ubicacion: "",
            fechaI: "",
            fechaF: "",
            premio1: "",
            premio2: "",
            estado:""
        });

        const[actual,setActual]= useState([])

        const  cambiobusqueda=(evento)=>{
            setDat({
                ...dat,
                [evento.target.name]: evento.target.value
            });
        }
        const  cambioactualizar=(evento)=>{
            setActual({
                ...actual,
                [evento.target.name]: evento.target.value
            });
        }


        const [datos, setDatos] = useState([]);
        useEffect(()=>{
            fetch(`${Constantes.RUTA_API5}`)
            .then(res => res.json())
            .then(data=> setDatos(data))
        },[]);

        function buscar(a){
            return a.nombre == dat.nombre;
        }

        const Mostrar = async()=>{
            try {
                const respuesta = await fetch(`${Constantes.RUTA_API5}/${dat.nombre}`, {
                    method: 'GET'
                });
                const exitoso = await respuesta.json();
                if (exitoso) {
                    console.log(actual)
                    setActual(exitoso)
                }
          
            }catch(error){
                console.log(error);
            }
        }

        const actualizar= async(evento)=>{
            try {
                    const respuesta = await fetch(`${Constantes.RUTA_API5}`, {
                        method: 'PUT',
                        body: JSON.stringify(actual),
                        headers: {
                            'Content-Type' : 'application/json',
                        }
                    });
                    const exitoso = await respuesta.json();
                    if (exitoso) {
                        window.location.reload();
                    }
              
                }catch(error){
                    console.log(error);
                }
        }
        const eliminar = async()=>{
            try {
                const respuesta = await fetch(`${Constantes.RUTA_API5}/${actual._id}`, {
                    method: 'DELETE',
                });
                const exitoso = await respuesta.json();
                if (exitoso) {
                   alert("finalizado")
                   window.location.reload();
                }
          
            }catch(error){
                console.log(error);
            }
        }


    return (
        <Fragment>

            <h1 className="text-dark mb-5 mt-4">GESTIONAR CAMPEONATO</h1>
            <div className="container-xl justify-content-center align-content-center mx-auto mb-5">
                <div className="row">
                    <div className='col'>
                    <div>
                                <select name="nombre" id="nombre" onChange={cambiobusqueda} className='form-control' style={inputStyle}>
                                    <option value='' selected></option>
                                {datos.map(item=>(
                                    <option value={item.nombre}>{item.nombre}</option>
                                ))}
                                </select>
                    </div>
                    </div>
                    <div className='col'>
                        <button className="form-control" style={inputStyle} onClick={Mostrar}>buscar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="http://assets.stickpng.com/thumbs/5856a4a84f6ae202fedf275f.png" alt="Torneo" />
                        <input type="file" className=""></input>
                    </div>
                    
                    <div className="col bg-light">
                        <h2>Información del Campeonato {actual.nombre}</h2>
                        <ul className="list-unstyled">
                            <li><span className="fw-bold">Campeonato:</span> tipo</li>
                            <li><span className="fw-bold">Lugar:</span> {actual.ubicacion}</li>
                            <li><span className="fw-bold">Estado:</span> 
                                <select name="estado" id="estado" onChange={cambioactualizar}>
                                <option value={actual.estado} selected>{actual.estado}</option>
                                <option value="Aceptando inscripciones">Aceptando inscripciones</option>
                                <option value="Inscripciones cerradas">Inscripciones cerradas</option>
                                <option value="En curso">En curso</option>
                                <option value="Terminado">Terminado</option>
                                </select></li>
                            <li><span className="fw-bold">Inicia:</span> {actual.fechaI}</li>
                            <li><span className="fw-bold">Finaliza:</span> {actual.fechaF}</li>
                        </ul>
                        <button className="btn-warning" onClick={eliminar}>Eliminar</button>
                        <button className="btn-success" onClick={actualizar}>actualizar</button>
                        
                    </div>
                    <div className="col">
                        <div className="">
                            <label className="fw-bold text-uppercase" htmlFor="reglasCampeonato">Gestión de equipos</label>
                            <button className="form-control">Inscribe un equipo</button>
                            <button className="form-control">Solicitudes de equipo</button>
                            <button className="form-control">Ver equipos</button>
                        </div>
                        <label className="fw-bold text-uppercase" htmlFor="reglasCampeonato">Gestión de partidos</label>
                        <button className="form-control">Listado de partidos</button>
                        <button className="form-control">Definir fecha de partidos</button>
                        <label className="fw-bold text-uppercase" htmlFor="reglasCampeonato">Agregue las reglas del Campeonato</label>
                        <input type="file" className="form-control" name="reglasCampeonato"></input>
                        <label className="fw-bold text-uppercase" htmlFor="reglasCampeonato">Estadísticas</label>
                        <button className="form-control">Ver tabla de posiciones</button>
                    
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default GestionarCampeonato;