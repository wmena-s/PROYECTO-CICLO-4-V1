import React, { useEffect, useState} from "react"
import Constantes from '../../Constantes'



const Login = () => {

    return (

        <>
            <form action="/login" method="POST">
                <input type="email" name="email"/>
                <input tupe="password" name="password"/>
                <input type="submit" value="enviar"/>

            </form>
            <div>hola mundo</div>
        </>
    )



}

export default Login