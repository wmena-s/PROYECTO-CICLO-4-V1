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
            nombre:""
        });

        const[actual,setActual]= useState([])

        const  manejarcambio=(evento)=>{
            setDat({
                ...dat,
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

        function Mostrar(){
            setActual(datos.find(buscar))
        }

        /* //state
        
        //agregar valores al state 
        const  manejarcambio=(evento)=>{
        setDatos({
            ...datos,
            [evento.target.name]: evento.target.value
        });
        }
        //boton buscar
        const recuperarDatos=async (evento)=>{
            try {
              evento.preventDefault();
                  const respuesta = await fetch(`${Constantes.RUTA_API5}/:${datos.nombre}`);
                  console.log(respuesta.json());
              }catch(error){
                  console.log(error);
              }
            }
        */


    //mostrar los datos del torneo


    return (
        <Fragment>

            <h1 className="text-dark mb-5 mt-4">GESTIONAR CAMPEONATO</h1>
            <div className="container-xl justify-content-center align-content-center mx-auto mb-5">
                <div className="row">
                    <div className='col'>
                    <div>
                        <input type='text' style={inputStyle} id='nombre' name='nombre' onChange={manejarcambio}/>
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
                            <li><span className="fw-bold">Estado:</span> {actual.estado}</li>
                            <li><span className="fw-bold">Inicia:</span> {actual.fechaI}</li>
                            <li><span className="fw-bold">Finaliza:</span> {actual.fechaF}</li>
                        </ul>
                        <button className="btn-success">Editar</button>
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