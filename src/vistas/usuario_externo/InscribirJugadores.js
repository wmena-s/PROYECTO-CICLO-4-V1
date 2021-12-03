import React from "react"
import './InscribirJugadores.css'


const InscribirJugadores = () => {
    return (
        <>
        <div className="contenedor1">
        <h1 className="titulo1">JUGADORES </h1>
        <p>agregar jugadores al equipo</p>

        <div className="contenedorv1">
            <div>
                <li>jugador uno</li>
                <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                <button class="btn btn-primary" class="btn btn-danger">eliminar</button>
            </div>
            <div>
                <li>jugador dos</li>
                <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                <button class="btn btn-primary" class="btn btn-danger">eliminar</button>
            </div>
            <div>
                <li>jugador trs</li>
                <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                <button class="btn btn-primary" class="btn btn-danger">eliminar</button>
            </div>
        </div>
        </div>
        </>
       )
    
}

export default InscribirJugadores
