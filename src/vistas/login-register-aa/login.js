import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'; 
import Cookies from 'universal-cookie/es6';
import axios from 'axios';
import Constantes from '../../Constantes'


const cookies = new Cookies();

const appStyle = {
    height: '500px',
    display: 'flex',
    padding: '5%'
};



const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '220px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
        <br/>

              <Link to="/usuario_externo/RegisitroUE">  Registro usuario externo </Link>
              <Link to="/usuarioInterno/registro">  Registrarme usuario interno </Link>

      </form>
    );
};



// Usage example:

const Login = () => {
      const [UI, setUI] = useState([]);
      const [UE, setUE] = useState([]);
      useEffect(()=>{
          fetch(`${Constantes.RUTA_API2}`)
          .then(res => res.json())
          .then(data=> setUI(data))
      },[]);
      useEffect(()=>{
        fetch(`${Constantes.RUTA_API4}`)
        .then(res => res.json())
        .then(data=> setUE(data))
      },[]);
    const handleSubmit = async(data) => {
      function buscar(a){
        return (a.usuario == data.username && a.contraseña == data.password);
      }
      if (UI.find(buscar)){
        window.location.assign("/home/homeUI")
        cookies.set('usuario',data.username)
        cookies.set('tusuario','UI')
      }
      else{
          if(UE.find(buscar)){
            window.location.assign("/home/homeUE")
            cookies.set('usuario',data.username)
            cookies.set('tusuario','UI')
          }else{
            alert("no se encontro un perfil con los datos ingresados")
          }
      }
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Login ;