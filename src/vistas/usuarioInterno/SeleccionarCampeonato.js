import React, { useEffect, useState} from 'react'
import Constantes from '../../Constantes';
/* import {Modals, Modaless, ModalesD, ModalRegistrar, ModalRegistrar2} from '../modal/Modals' */
/* import './seleccionarCampeonato.css' */

const SeleccionarCampeonato = () => {
    //conenctar y obtener los campeonatos
    const [torneos, setTorneo] = useState([]);
    useEffect(()=>{
        fetch(`${Constantes.RUTA_API5}`)
        .then(res => res.json())
        .then(data=> setTorneo(data))
    },[]);
    console.log(torneos)

    return (  
        //generar las cards usando los campeonatos optenidos
    
            <div class="divv">
    
                <div className="container">
                    {torneos.map(item=>(
                        <div className="colormodal">
                        <h1>{item.nombre}</h1>
                        <img  src='https://i.pinimg.com/originals/c7/91/3d/c7913d43b3677d55960c7f6f0cbe19ce.jpg' alt="baskets"></img>
                         {/* <Modals/> */}
                        </div>
                    ))}
    
                </div>
            </div> );
}
 
export default SeleccionarCampeonato;