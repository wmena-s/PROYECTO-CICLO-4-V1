/* import React from 'react'

const ListadoPartidos = () => {
    return ( <h1>Listado de Partidos</h1> );
}
 
export default ListadoPartidos; */

import React, { useEffect, useState} from "react"
import Constantes from '../../Constantes'
import Character from "../usuario_externo/Character"
import './ListadoPartidos.css'
import Chart from '../../ChartV'

//import BarChart from '../../BarChart';
            {/* poner cuadro de busqued */
            /* quitar fondo azul */}
            
          


const ListadoPartidos = () => {

   /* useEffect( async ()=>{
        
            const respuesta =  await fetch(`${Constantes.RUTA_API}`);
            const uno = await  respuesta.json();
            console.log(uno)
        
    })*/
    const [user, setUser] = useState([]);



    useEffect(()=>{
        fetch(`${Constantes.RUTA_API}`)
        .then(res => res.json())
        .then(data=> setUser(data))
    },[]);

    return (
        
        <>
        <div className="contenedor1 otro">
            <h1 className="titulo1">LISTA DE PARTIDOS</h1>
            <p className="pp">listados de partidos: ---------------xxxxxxxxxxx-------------------</p>
            <div className="contenedorv1">
                <Character caracteres={user}></Character>
                      {/**  <div>
                <div>
                    <p>DATOS JUGADOR</p>
                    <li>nombre: {user.name}</li>
                    <li>correo: {user.correo}</li>
                    <li>usuario: {user.usuario}</li>
                    <li>id: {user.id}</li>
                </div>
                <img className="img-clase" src="https://i.pinimg.com/236x/9f/4e/c0/9f4ec0f8b45f868b7d77166177538610.jpg"></img>
                <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                <button class="btn btn-primary" class="btn btn-danger">eliminar</button>

            </div>
            <div>
                 <div>
                    <p>DATOS JUGADOR</p>
                    <li>DATO UNO</li>
                    <li>DATO DOS</li>
                    <li>DATO TRES</li>
                    <li>DATO CUATRO</li>
                </div>
                <img className="img-clase"  src="https://www.blogdebasket.com/files/20.03/michael-jordan-libro.png"></img>
                <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                <button class="btn btn-primary" class="btn btn-danger">eliminar</button>
            </div>
            <div>
                 <div>
                    <p>DATOS JUGADOR</p>
                    <li>DATO UNO</li>
                    <li>DATO DOS</li>
                    <li>DATO TRES</li>
                    <li>DATO CUATRO</li>
                </div>
                <img className="img-clase"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsE8-IM_OpAMzVQNeJ3xOCWhVIJrdFJ9FpqCIupjrNMuyXj3Vnu_lHWi84mWE98PpnUQU&usqp=CAU"></img>
                <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                <button class="btn btn-primary" class="btn btn-danger">eliminar</button>
            </div>
             */}
            </div>
            <div className="canvass">
                <Chart x={user.map((item)=>(item.nombre))} y={user.map((item)=>(item.edad))} titulo="edad" namex="nombre" namey="edad"/>
   
            </div>
         {/**X   <BarChart />*/}
            
        </div>
        </>
       )

       
    
}

export default ListadoPartidos
