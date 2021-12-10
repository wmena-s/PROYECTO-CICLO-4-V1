import React, { useEffect, useState} from "react"
import Constantes from '../../Constantes'
import Character from "./Character"
import './ListaJugadores.css'
import Chart from '../../ChartV'


const ListaJugadores = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch(`${Constantes.RUTA_API3}`)
        .then(res => res.json())
        .then(data=> setUser(data))
    },[]);

    return (
        <>
        <div className="contenedor1 otro">
            <h1 className="titulo1">LISTA DE JUGADORES</h1>
            <p className="pp">listados de jugadores inscritos en el equipo:</p>
            <div className="contenedorv1">
                
                <Character caracteres={user}></Character>
                     
            </div>
            <div className="canvass">
                <Chart x={user.map((item)=>(item.nombre))} y={user.map((item)=>(item.edad))} titulo="edad" namex="nombre" namey="edad"/>
            </div>
  
        </div>
        </>
       )

       
    
}

export default ListaJugadores
