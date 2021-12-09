import axios from "axios";
import React, { useState,useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const baseURL="http://localhost:3001/inscripciones";

const appStyle = {
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
    background: 'green',
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

    const [torneos,setTorneos]=useState([])

    useEffect(()=>{
        fetch(baseURL,{params:{status:"aceptada"}})
        .then(res=>res.json())
        .then(datos=>{
            setTorneos(datos)
        })
    },[])

    const listT= torneos;
    return(
    <Container style={appStyle}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Nombre Torneo</th>
            <th>Estado inscripcion</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {listT.map(item=>(
                <tr>
                <td>{item.nameT}</td>
    
                <td>
                        <button style={aceptadaStyle} type="submit">{item.status}</button>
                </td>
    
                <td>
    
                </td>
                </tr>
            ))}



        </tbody>
        </Table>
    </Container>
    )
}
