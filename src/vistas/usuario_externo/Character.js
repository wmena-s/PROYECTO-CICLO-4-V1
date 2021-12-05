import React from "react"
import './inscribirJJ.css'

const Character = ({caracteres=[]}) => {
    console.log(caracteres)
    return (
        <div className="containerr">
                 {
                 caracteres.map((item)=>(
                    <div>
                        <div>
                            <p>DATOS JUGADOR: {item.nombre}</p>
                            <li>id: {item._id}</li>
                            <li>cedula: {item.cedula}</li>
                            <li>edad: {item.edad}</li>
                            <li>campeonato: {item.campeonato}</li>
                        </div>
                        <img className="img-clase" src="https://i.pinimg.com/236x/9f/4e/c0/9f4ec0f8b45f868b7d77166177538610.jpg"></img>
                        <button class="btn btn-primary" class="btn btn-primary">añadir</button>
                        <button class="btn btn-primary" class="btn btn-danger">eliminar</button>
                    </div>

                 ))
                 }
               
        </div>
    )
}

export default Character
