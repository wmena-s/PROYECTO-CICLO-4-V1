import React, {Fragment, useEffect, useState}from 'react'
import Constantes from '../../Constantes';


const SolicitudesEquipos = () => {

  async function enviarDatos (item, item2, item3){
    console.log(item)
     //envia id del campeonato segun el id pasado en la direccion.
    fetch(`${Constantes.RUTA_API}${'/'}${item}`, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify({campeonato : [item2]}), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      // alert("selección realizada")

      //cambiar el estado de pendiente a aprobado

      console.log(item3)
      fetch(`${Constantes.RUTA_API6}${'/'}${item3}`, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify({estado : "aprobado"}), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
        

    }


//cargar listado de campeonatos
  const [users, setUser] = useState([]);


  useEffect(()=>{
      fetch(`${Constantes.RUTA_API6}`)
      .then(res => res.json())
      .then(data=> setUser(data))
  },[]);


  
    return ( 
    <Fragment>

    <h2>listado</h2>
    <table className="table">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">equipo</th>
          <th scope="col">campoenato</th>
          <th scope="col">estado</th>
          <th scope="col">Aceptar</th>
          <th scope="col">Rechazar</th>
        </tr>
      </thead>
      <tbody>
          
        
          {users.map((item)=>{
         
            return( 
            <tr>
            <th scope="row">{item._id}</th>
            <td>{item.equipo}</td>
            <td>{item.campeonato}</td>
            <td>{item.estado}</td>
            <td><button class="btn btn-outline-success" onClick={()=>{enviarDatos(item.equipo, item.campeonato, item._id)}}>Aceptar</button></td>
            <td><button class="btn btn-outline-danger">Eliminar</button></td>
            </tr>)
          })}
        
      </tbody>
      </table>

    


    </Fragment>
    
    
    
    
    
    
     );
}
 
export default SolicitudesEquipos;