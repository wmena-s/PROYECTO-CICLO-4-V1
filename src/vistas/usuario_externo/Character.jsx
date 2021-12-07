import React from "react"
import './inscribirJJ.css'
import Swal from 'sweetalert2';
import Constantes from '../../Constantes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Eliminardb from '../../funcionalidades/Eliminardb' //no se ha usado queda pendiente implementar la logic aen este compoennte

const Character = ({caracteres=[]}) => {
   // console.log(caracteres)

 

    return (
       
        <div className="containerr">
                 {
                 caracteres.map((item)=>(
                    <div>
                        <div>
                            
                            <p>DATOS JUGADOR: {item.nombre}</p>
                            <a><label>ID</label>
                            <li>{item._id}</li></a>
                            <a><label>CEDULA</label>
                            <li>{item.cedula}</li></a>
                            <a><label>EDAD</label>
                            <li>{item.edad}</li></a>
                            <a><label>CAMPEONATO</label>
                            <li>{item.campeonato}</li></a>
                            
                        </div>
                        <img className="img-clase" src="https://i.pinimg.com/236x/9f/4e/c0/9f4ec0f8b45f868b7d77166177538610.jpg"></img>
                        <article>
                        <button className="btn btn-primary">añadir</button>
                        <button 
                            className="btn btn-primary btn-danger btnEliminar" 
                            id="btnEliminar"
                            data-id="{item.id}"
                            onClick={async ()=> {
                               // muestra mensaje de confirmación antes de eliminar
                                const resultado = await Swal.fire({
                                    title: 'Confirmación',
                                    text: `¿Eliminar ${item.nombre}?`,
                                    icon: 'question',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3298dc',
                                    cancelButtonColor: '#f14668',
                                    cancelButtonText: 'No',
                                    confirmButtonText: 'Sí, eliminar'
                                });
                                if (!resultado.value) {
                                    return;
                                }
                                //
                                await fetch(`${Constantes.RUTA_API3}/${item._id}`, {
                                    method: "DELETE",
                                });
                                }}
                            

                        >eliminar</button>
                        </article>
                    </div>

                 ))
                 }
               
        </div>
    )


}


export default Character