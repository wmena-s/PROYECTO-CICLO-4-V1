import React, { useState } from "react";
import Constantes from "../../Constantes";

const CrearCampeonato = () => {

 //state
 const [datos, setDatos] = useState({
    nombre: '',
    descripcion: '',
    ubicacion: '',
    fechaI: '',
    fechaF: '',
    premio1: '',
    premio2: '',
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
  /*await Axios.post(`${Constantes.RUTA_API2}`, 
      {
          body: JSON.stringify(datos),
          headers: {'Content-Type' : 'application/json'},
      })*/
      const respuesta = await fetch(`${Constantes.RUTA_API5}`, {
          method: 'POST',
          body: JSON.stringify(datos),
          headers: {
              'Content-Type' : 'application/json',
          }
      });
      const exitoso = await respuesta.json();
      if (exitoso) {
         alert("finalizado    ")
      }

  }catch(error){
      console.log(error);
  }
}

  return (
    <>
      <h2>CAMPEONATO NUEVO</h2>
      <div className="contanedorgeneral">
        <div className="row">
          <form className="field" onSubmit={enviarDatos}>
            <div className="form-group">
              <label className="label" htmlFor="nombre">
                Nombre del Campeonato:{" "}
              </label>
              <input
                name="nombre" 
                id="nombre" 
                className="form-control"
                placeholder='ingresa nombre campeonato' 
                value={datos.nombre}
                onChange={manejarcambio}
              ></input>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="descripcion">
                Descripcion del Campeonato:{" "}
              </label>
              <textarea
                name="descripcion" 
                id="descripcion" 
                className="form-control"
                placeholder='Descripción' 
                value={datos.descripcion}
                onChange={manejarcambio}
              ></textarea>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="ubicacion">
                Ubicación:
              </label>
              <input
                name="ubicacion" 
                id="ubicacion" 
                className="form-control"
                placeholder='Ubicación' 
                value={datos.ubicacion}
                onChange={manejarcambio}
              ></input>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="campeonato">
                campeonato:
              </label>
              <input
               name="campeonato" 
               id="campeonato" 
               className="form-control"
               placeholder='campeonato' 
               value={datos.campeonato}
               onChange={manejarcambio}
              ></input>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="fechaI">
                Fecha Inicio
              </label>
              <input type="date" name="fechaI"></input>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="fechaF">
                Fecha Final
              </label>
              <input type="date" name="fechaF"></input>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="premio1">
                Premio 1:{" "}
              </label>
              <input
                type="text"
                name="premio1"
               id="premio1" 
               className="form-control"
               placeholder='premio1' 
               value={datos.premio1}
               onChange={manejarcambio}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="premio2">
                Premio 2:{" "}
              </label>
              <input
                type="text"
                id="premio2" 
                className="form-control"
                placeholder='premio2' 
                name="premio2"
                value={datos.premio2}
                onChange={manejarcambio}
              ></input>
            </div>
            <button className="btn btn-dark">Editar</button>
            <button type="submit" className="btn btn-dark">Crear</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CrearCampeonato;
