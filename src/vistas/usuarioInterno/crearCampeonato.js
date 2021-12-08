import React, {useState, Fragment} from 'react';

const crearCampeonato = () => {

    return ( 
        <Fragment>
        
                <h1>
                  CAMPEONATO NUEVO
                </h1>
                <div className="contanedorgeneral">
                     <div className="row">
                    <form className="field">
                         <div className="form-group">
                            <label className="label" htmlFor="nombreCampeonato">Nombre del Campeonato: </label> 
                            <input className="form-control" placeholder="Nombre" id="nombre'Campeonato" name="nombreCampeonato" ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="descripcionCampeonato">Descripcion del Campeonato: </label>
                            <textarea className="form-control" placeholder="Descripción" name="descripcionCampeonato"></textarea>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="Ubicación">Ubicación:</label>
                            <input className="form-control" placeholder="Ubicación" id="Ubicación"  name="Ubicación"  ></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="campeonato">campeonato:</label>
                            <input className="form-control" placeholder="campeonato" id="campeonato" name="campeonato"  ></input>
                        </div>
                        <div className="form-group">
                <label className="label" htmlFor="fechaInicio">Fecha Inicio</label>
                <input type="date" name="fechaInicio"></input>
                </div>
                <div className="form-group">
                <label className="label" htmlFor="fechaFinal">Fecha Final</label>
                <input type="date" name="fechaFinal"></input>
                </div>
                        <div className="form-group">
                            <label className="label" htmlFor="premio1">Premio 1: </label>
                            <input type="text" className="form-control" placeholder="Premio 1" id="premio1" name="premio1"></input>
                        </div>
                        <div className="form-group">
                            <label className="label" htmlFor="premio2">Premio 2: </label>
                            <input type="text" className="form-control" placeholder="Premio 1" id="premio2" name="premio2"></input>
                        </div>                  
                        <button className="btn btn-dark">Editar</button>
                        <button className="btn btn-dark">Crear</button>
                    </form>
                     </div>
         
                </div>
        </Fragment>
     );
}
 
export default crearCampeonato;