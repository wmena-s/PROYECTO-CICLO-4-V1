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

const Field = React.forwardRef(({label, type,name}, ref,accion) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle}/>
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef= React.useRef();
    const emailRef= React.useRef();
    const passwordRef= React.useRef();
    const adress1Ref= React.useRef();
    const adress2Ref= React.useRef();
    const cityRef= React.useRef();
    const stateRef= React.useRef();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            adress1: adress1Ref.current.value,
            adress2: adress2Ref.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value

        };
        onSubmit(data);
    };
    return (
    <form style={formStyle} onSubmit={handleSubmit} >
        <h1 style={Tstyle}> Registro </h1>
        <Row>
            <Col>
            <Field label="Username:" type="text" ref={usernameRef}/>
            </Col>
            <Col>
            <Field label="Email:" type="email"   ref={emailRef}/>
            </Col>
            <Col>
            <Field label="Password:" type="password"  ref={passwordRef}/>
            </Col>
        </Row>


        <Row>
        <Field label="Adress 1" type="text"  ref={adress1Ref}/>
        </Row>



        <Row>
        <Field label="Adress 2" type="text"  ref={adress2Ref}/>
        </Row>

        <Row>
            <Col xs={7}>
                <Field label="City:" type="text"  ref={cityRef}/>
                
            </Col>
            <Col xs={4}>
            <Field label="State:" type="text"  ref={stateRef}/>
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
    const handleSubmit = (data) => {
        console.log(data)
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Registrar;

