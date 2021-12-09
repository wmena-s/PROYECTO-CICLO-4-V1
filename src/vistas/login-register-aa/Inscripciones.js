import axios from "axios";
import React, { useState,useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";

const baseInscripciones="http://localhost:3001/inscripciones";
const baseTorneos="http://localhost:3001/torneos";

const appStyle = {
    margin:'auto',
    height: '500px',
    display: 'flex',
    padding: '5%'
};

const aStyle = {
    margin: 'auto',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '20%',
    display: 'block'
};

const esperaStyle = {
    margin: 'auto',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: 'yellow',
    width: '100px', 
    fontSize: '15px',
    color: 'black',
    display: 'block'
};


const rechazadaStyle = {
    margin: 'auto',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: 'red',
    width: '100px', 
    fontSize: '15px',
    color: 'black',
    display: 'block'
};




const aceptadaStyle = {
    margin: 'auto',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#1F45FC',
    width: '100px', 
    fontSize: '15px',
    color: 'black',
    display: 'block'
};

const cancelarStyle = {
    margin: 'auto',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: 'red',
    width: '100px', 
    fontSize: '15px',
    color: 'black',
    display: 'block'
};


export default function Inscripciones() {

    const [inscripciones,setInscripciones]=useState([])
    const [torneos,setTorneos]=useState([])

    useEffect(()=>{
        fetch(baseInscripciones)
        .then(res=>res.json())
        .then(datos=>{
            setInscripciones(datos)
        })
    },[])

    useEffect(()=>{
        fetch(baseTorneos)
        .then(res=>res.json())
        .then(datos=>{
            setTorneos(datos)
        })
    },[])

    const listI= inscripciones;
    const listT=torneos;
    console.log(torneos)

    return(
    <Container style={appStyle}>
        <Row>
        <select id="torneos">
            {listT.map(item=>(
                <option value={item.name}>{item.name}</option>
            ))}
        </select>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre Torneo</th>
            <th>Estado inscripcion</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {listI.map(item=>(
                <>
                <tr>
                <td>{item.nameT}</td>
                <td>
                    <button style={aceptadaStyle} type="submit">{item.status}</button>
                </td>
                <td>
                </td>
                </tr>
                </>
            ))},
        </tbody>
        </Table>
        </Row>
    </Container>
    )
}
