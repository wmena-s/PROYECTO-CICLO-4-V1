import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import Cookies from 'universal-cookie/es6';
import axios from 'axios';

const cookies= new Cookies



const appStyle = {
    height: '900px',
    display: 'flex',
    padding: '5%'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '1000px',
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


const Tstyle ={
    color: 'black'
  };

const Field = React.forwardRef(({label, type}, ref,accion) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} onChange={accion}/>
      </div>
    );
});

const Form = ({onSubmit}) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        adress1: "",
        adress2: "",
        city: "",
        state: "",
        rol:"UE"
    });
    const handleChange = e=>{
        setUser({ [e.target.name]: e.target.value });
        console.log(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/Profiles", user)
        .then( res=>{
            console.log(res)
        })
    };
    return (
    <form style={formStyle} onSubmit={handleSubmit} >
        <h1 style={Tstyle}> Registro </h1>
        <Row>
            <Col>
            <Field label="Username:" type="text" accion={handleChange}/>
            </Col>
            <Col>
            <Field label="Email:" type="email" accion={handleChange}/>
            </Col>
            <Col>
            <Field label="Password:" type="password" accion={handleChange}/>
            </Col>
        </Row>


        <Row>
        <Field label="Adress 1" type="text" accion={handleChange}/>
        </Row>



        <Row>
        <Field label="Adress 2" type="text" accion={handleChange}/>
        </Row>

        <Row>
            <Col xs={7}>
                <Field label="City:" type="text" accion={handleChange}/>
                
            </Col>
            <Col xs={4}>
            <Field label="State:" type="text" accion={handleChange}/>
            </Col>
        </Row>
        
        <Row>
        <Col>
        <div>
            <button style={submitStyle} type="submit">Submit</button>
        </div>
        </Col>
        </Row>

        
        <br/>
        <Link to="/login">¿Ya estas registrado?  Logueate aqui</Link>
    </form>
    );
};

// Usage example:

const Registrar = () => {
    console.log(cookies.get("username"))
    console.log(cookies.get("rol"))
    const handleSubmit = async(data) => {
        const user ={
            username: "admin",
            password: "123",
            email:"example@gmail.com",
            adress1:"",
            adress2:"",
            City:"",
            state:"",
            rol:"admin"
        }
        await axios.post('http://localhost:3001/Profiles',{user})
        .then(response=>{
            console.log(response)
        })

    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Registrar;

