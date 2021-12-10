import React, {Fragment} from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

/* import styled from "./GestionarCampeonato.css"; */

function GestionarCampeonato() {
    return (
        <Fragment>

            <h1 className="text-dark mb-5 mt-4">GESTIONAR CAMPEONATO</h1>
            <div className="container-xl justify-content-center align-content-center mx-auto mb-5">
                <div className="row">
                    <div className="col">
                        <img src="http://assets.stickpng.com/thumbs/5856a4a84f6ae202fedf275f.png" alt="Torneo" />
                        <input type="file" className=""></input>
                    </div>
                    
                    <div className="col bg-light">
                        <h2>Información del Campeonato</h2>
                        <ul className="list-unstyled">
                            <li><span className="fw-bold">Campeonato:</span> tipo</li>
                            <li><span className="fw-bold">Inscripción:</span> $costo</li>
                            <li><span className="fw-bold">Lugar:</span> dirección</li>
                            <li><span className="fw-bold">Estado:</span> Activo</li>
                            <li><span className="fw-bold">Inicia:</span> dd/mm/yy</li>
                            <li><span className="fw-bold">Finaliza:</span> dd/mm/yy</li>
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