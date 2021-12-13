import React, { useEffect, useState, useContext} from "react"
import Constantes from '../../Constantes'
import Character from "./Character"
import './ListaJugadores.css'
import Chart from '../../ChartV'
import Scroll from '../plantillas/Scroll'
import { DataContext } from "../../funcionalidades/DataContext"


const ListaJugadores = () => {
    const {userr} = useContext(DataContext)

    //LA SIGUIENTE CONFIGURACIÓN FUE CAMBIADA A UN DATA CONTEXT PARA QUE PUEDA SER ACCEDIDA DESDE CUALQUIER LUGAR DE LA APLICACIÓN.
    // const [user, setUser] = useState([]);
    // const [useres, setUsers] = useState([]);

    // useEffect(()=>{
    //     fetch(`${Constantes.RUTA_API3}`)
    //     .then(res => res.json())
    //     .then(data=> setUser(data))
    // },[]);

    // useEffect(()=>{
    //     fetch(`${Constantes.RUTA_API4}`)
    //     .then(res => res.json())
    //     .then(data=> setUsers(data))
    // },[]);



    return (
       
        <>
        
        <div className="contenedor1 otro">
            <h1 className="titulo1">LISTA DE JUGADORES</h1>
            <p className="pp">listados de jugadores inscritos en el equipo:</p>
            <div className="contenedorv1">
            <Scroll>
                <Character caracteres={userr}></Character>
                </Scroll>

            </div>


            <div className="canvass">
                <Chart x={userr.map((item)=>(item.nombre))} y={userr.map((item)=>(item.edad))} titulo="edad" namex="nombre" namey="edad"/>
            </div>
  
        </div>
      
        </>
      
       )

       
    
}

export default ListaJugadores
