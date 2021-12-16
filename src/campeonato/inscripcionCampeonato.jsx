import React, { useEffect, useState} from "react"
import Constantes from '../Constantes'
import Inscripciones from "../vistas/login-register-aa/Inscripciones";
import './inscripcionCampeonato.css'

const InscripcionCampeonato = () => {

    //cargar listado de campeonatos
    const [users, setUser] = useState([]);
    const [existe, setExiste] = useState([]);

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

   // console.log(estado)
    

    const selectt= function (e) {
        const opcion=e.target.value;
        setEstado(opcion)
    }

    const [llevar, setLlevar] = useState("")
    
    const selectt2= function (e) {
        const opcion=e.target.value;
        setEstado2(opcion)
        setLlevar(e.target.value)
       

        fetch(`${Constantes.RUTA_API6}${'/'}${'todo'}${'/'}${e.target.value}`)
        .then(res => res.json())
        .then(data=> setExiste(data))
        
 
    }
 
    
    // //revisa el estado de la isncripcion para un euipo usar en otra vista
    
    // const estadoinicial = fetch(`${Constantes.RUTA_API6}${'/'}${'61b81c631446c44e2610d931'}`)
    // .then(response => response.json())
    // .then(data => console.log(data));
    

 //revisar el estado en que quedo el equpo.
 

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
        const data = {campeonato: [{estado}.estado]};
        //datos a enviar al formulario solicitudes
        const datados={equipo: {estado2}.estado2, campeonato:  {estado}.estado, estado: 'pendiente'}
        
        //envia id del campeonato segun el id pasado en la direccion.
        fetch(`${Constantes.RUTA_API}${'/'}${estado2}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          alert("selección realizada")

          setEstado("inscrito")

          //envia documento
        await fetch(`${Constantes.RUTA_API6}`, {
            method: 'POST',
            body: JSON.stringify(datados),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })


        }

        

        
       
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

           

                <form action="" onClick={enviarDatos}>
                    {/* <label htmlFor=""> codigo del campeonato //mostrará el estado del campeonato </label>
                    <input name="campeonato" id="campeonato" type="text" placeholder="estado" value={estado}/> */}
                    <button> enviar</button>
                </form>

                    <div>
                        {
                            

                            existe[0]!=null? (<><p>estado de inscripcion</p><Inscripciones item={llevar}></Inscripciones></>): (<p>
                               
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">equipo</th>
                                    <th scope="col">campoenato</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>no existe</th>
                                    <td>no existe</td>
                                    <td>no existe</td>
                                    </tr>
                                </tbody>
                                
                                </table>   
                                no exisate
                                </p>)
                        }
                    </div>
                    
            </div>
        </div>
    )
}

export default InscripcionCampeonato
