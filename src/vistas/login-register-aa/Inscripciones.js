import axios from "axios";
import React, { useState,useEffect } from "react";
import Constantes from '../../Constantes'
import { Container, Table } from "react-bootstrap";

// const baseURL="http://localhost:3001/inscripciones";

// const appStyle = {
//     height: '500px',
//     display: 'flex',
//     padding: '5%'
// };

// const aStyle = {
//     margin: 'auto',
//     border: '1px solid #c9c9c9',
//     borderRadius: '5px',
//     background: '#f5f5f5',
//     width: '20%',
//     display: 'block'
// };

// const esperaStyle = {
//     margin: 'auto',
//     padding: '7px 10px',
//     border: '1px solid #efffff',
//     borderRadius: '3px',
//     background: 'yellow',
//     width: '100px', 
//     fontSize: '15px',
//     color: 'black',
//     display: 'block'
// };


// const rechazadaStyle = {
//     margin: 'auto',
//     padding: '7px 10px',
//     border: '1px solid #efffff',
//     borderRadius: '3px',
//     background: 'red',
//     width: '100px', 
//     fontSize: '15px',
//     color: 'black',
//     display: 'block'
// };




// const aceptadaStyle = {
//     margin: 'auto',
//     padding: '7px 10px',
//     border: '1px solid #efffff',
//     borderRadius: '3px',
//     background: '#1F45FC',
//     width: '100px', 
//     fontSize: '15px',
//     color: 'black',
//     display: 'block'
// };

// const cancelarStyle = {
//     margin: 'auto',
//     padding: '7px 10px',
//     border: '1px solid #efffff',
//     borderRadius: '3px',
//     background: 'red',
//     width: '100px', 
//     fontSize: '15px',
//     color: 'black',
//     display: 'block'
// };


export default function Inscripciones(props) {

    // const [torneos,setTorneos]=useState([])

    // useEffect(()=>{
    //     fetch(baseURL,{params:{status:"aceptada"}})
    //     .then(res=>res.json())
    //     .then(datos=>{
    //         setTorneos(datos)
    //     })
    // },[])
    // const listT= torneos;
    
    // const a = (i)=>{
    //     if(i.status==="aceptada"){
    //         aceptadaStyle.background="green"
    //     }else{
    //         if(i.status==="rechazada"){
    //             aceptadaStyle.background="red"
    //         }else{
    //             aceptadaStyle.background="yellow"
    //         }
    //     }
    // }




//======================================================
async function enviarDatos (item, item2){
   
    const data = {campeonato: []};
     //envia id del campeonato segun el id pasado en la direccion.
    fetch(`${Constantes.RUTA_API6}${'/'}${item}`, {
        method: 'DELETE'
      })


      fetch(`${Constantes.RUTA_API}${'/'}${item2}`, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
    }

    //==========================================================================

   //cargar listado de campeonatos
  const [users, setUser] = useState([]);


  useEffect(()=>{
      fetch(`${Constantes.RUTA_API6}${'/'}${'todo'}${'/'}${props.item}`)
      .then(res => res.json())
      .then(data=> setUser(data))
  },[props.item]);



    //==========================================================================






    return(
    <div >
        {/* <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre Torneo</th>
            <th>Estado inscripcion</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {listT.map(item=>(
                <>
                <tr>
                <td>{item.nameT}</td>
                <td>
                    <button style={aceptadaStyle} type="submit">{item.status}</button>
                </td>
                <td>
                </td>
                </tr>
                </>
            ))}, */}




{/* ========================================================================================================== */}

    <table className="table">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">equipo</th>
          <th scope="col">campoenato</th>
          <th scope="col">estado</th>
          <th scope="col">cancelar subscripcion</th>
          
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
            <td><button class="btn btn-outline-danger" onClick={()=>{enviarDatos(item._id, item.equipo)}}>cancelar inscripcion</button></td>
            </tr>)
          })}
        
      </tbody>
      </table>



        {/* </tbody>
        </Table> */}
    </div>
    )
}
