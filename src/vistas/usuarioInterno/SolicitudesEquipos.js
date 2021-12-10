import React, {Fragment}from 'react'

const SolicitudesEquipos = () => {
    return ( 
    <Fragment>
        <div className="container-sm">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Equipo</th>
      <th scope="col">Técnico</th>
      <th scope="col">Aceptar</th>
      <th scope="col">Rechazar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Expreso rojo</td>
      <td>El pibe</td>
      <td><button class="btn btn-outline-success">Aceptar</button></td>
      <td><button class="btn btn-outline-danger">Eliminar</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Los tigres</td>
      <td>Juan Fernan</td>
      <td><button class="btn btn-outline-success">Aceptar</button></td>
      <td><button class="btn btn-outline-danger">Eliminar</button></td>
    </tr>  <tr>
      <th scope="row">3</th>
      <td>Los Caimanes</td>
      <td>Adolfo Gutiérrez</td>
      <td><button class="btn btn-outline-success">Aceptar</button></td>
      <td><button class="btn btn-outline-danger">Eliminar</button></td>
    </tr>  <tr>
      <th scope="row">4</th>
      <td>Los Canguros</td>
      <td>Gabriel Márquez</td>
      <td><button class="btn btn-outline-success">Aceptar</button></td>
      <td><button class="btn btn-outline-danger">Eliminar</button></td>
    </tr>
 
  </tbody>
</table>
</div>
    </Fragment>
    
    
    
    
    
    
     );
}
 
export default SolicitudesEquipos;