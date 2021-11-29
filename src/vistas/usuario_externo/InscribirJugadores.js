import React from "react"
import './InscribirJugadores.css'
import '../Nav.css'

const InscribirJugadores = () => {
    return (
        <>
        <h1>JUGADORES </h1>
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
        </>
       )
    
}

export default InscribirJugadores
