import React, {useState} from "react";

const UsuariosExternosRegistrados = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const cambiarEmail=(e)=>{
        setEmail(e.target.value)
    }

    const cambierPassword=(e)=>{
        setPassword(e.target.value)
    }

    const enviarDatos=(e)=>{
        e.preventDefault()
        console.log("enviado")
    }
  
    return (
        <div>
            <h1>USUARIOS EXTERNOS REGISTRADOsS</h1>     
            <form onSubmit={enviarDatos}>   
            <label type="email">E-mail</label>
            <input  onChange={cambiarEmail} value={email} type="email" /><br/>
            <label type="password">Password</label>
            <input onChange={cambierPassword} value={password} type="text" /><br/>
            <button type="submit">enviar</button>
            </form> 

        </div>
    )
}

export default UsuariosExternosRegistrados
