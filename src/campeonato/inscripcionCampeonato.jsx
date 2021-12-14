import React, { useEffect, useState} from "react"
import Constantes from '../Constantes'
import './inscripcionCampeonato.css'

const InscripcionCampeonato = () => {

    //cargar listado de campeonatos
    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetch(`${Constantes.RUTA_API5}`)
        .then(res => res.json())
        .then(data=> setUser(data))
    },[]);



    //cargar listado de equpos
    const [equipos, setEquipo] = useState([]);

    useEffect(()=>{
        fetch(`${Constantes.RUTA_API}`)
        .then(res => res.json())
        .then(data=> setEquipo(data))
    },[]);

    const [estado, setEstado] = useState(-1);
    const [estado2, setEstado2] = useState(-1);

    console.log(estado)
    

    const selectt= function (e) {
        const opcion=e.target.value;
        setEstado(opcion)
    }

    const selectt2= function (e) {
        const opcion=e.target.value;
        setEstado2(opcion)
    }
    
 

    // const enviarDatos=async (evento)=>{

      
    //     try {
    //        evento.preventDefault();
    //        console.log(datos)
    //            const respuesta = await fetch(`${Constantes.RUTA_API}`, {
    //                method: 'PUT',
    //                body: JSON.stringify(estado),
    //                headers: {
    //                    'Content-Type' : 'application/json',
    //                }
    //            });
    //            const exitoso = await respuesta.json();
    //            if (exitoso) {
    //               alert("finalizado    ")
    //            }
   
    //        }catch(error){
    //            console.log(error);
    //        }
    //    }

    async function enviarDatos (e){
        e.preventDefault();
        var data = {campeonato: [{estado}.estado]};
        
        
        fetch(`${Constantes.RUTA_API}${'/'}${estado2}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          alert("selección realizada")

          setEstado("inscrito")
        }
        
        const [estadoInscricpion, setEstadoInscripcion] =  useState("no instricto");


        // const cambiarEstadoInscripcion= function (e) {
        //     setEstado("inscrito")
        // }


    return (
        <div>
            <h2 className="titulo">hola mundo</h2>
            <div className="container0">
               <h2>seleccione campeonato</h2>
                <select className="selectoO" onChange={selectt}>
                    <option value={-1} > selecciona una opcion</option>
                   { users.map((item)=>{
                       return(<option key={item._id} value={item._id}>{item.nombre}</option>)
                        
                   })}
                    
                </select>

                <h2>seleccione equpo</h2>
                <select className="selectoO" onChange={selectt2}>
                    <option value={-1} > selecciona una opcion</option>
                   { equipos.map((item)=>{
                       return(<option key={item._id} value={item._id}>{item.nombre}</option>)   
                   })}
                    
                </select>

                {/* <label htmlFor=""> estado de inscripcion</label>
                <p>{estado}</p>
                <label htmlFor=""> estado de inscrdipcion</label>
                <p>{estado2}</p> */}

                <form action="" onClick={enviarDatos}>
                    {/* <label htmlFor=""> codigo del campeonato //mostrará el estado del campeonato </label>
                    <input name="campeonato" id="campeonato" type="text" placeholder="estado" value={estado}/> */}
                    <button> enviar</button>
                </form>

                <h2>                    estado de inscripcion                 </h2>
                <p>{estadoInscricpion}</p>
             
            </div>
        </div>
    )
}

export default InscripcionCampeonato
