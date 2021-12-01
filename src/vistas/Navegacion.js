import React from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css'
import { Navbar, Nav,Container,NavDropdown } from 'react-bootstrap'

class Navegacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarMenu: false,
        };
        this.intercambiarEstadoMenu = this.intercambiarEstadoMenu.bind(this);
        this.ocultarMenu = this.ocultarMenu.bind(this);
    }

    ocultarMenu() {
        this.setState({
            mostrarMenu: false,
        })
    }

    intercambiarEstadoMenu() {
        this.setState(state => {
            return {
                mostrarMenu: !state.mostrarMenu,
            }
        });
    }

    render(){
        return(
            /* forma sencilla de hacerlo sin usar react-boostrap 
            <nav className="nav">
                <ul>
                <Link to="/">Home</Link>
                </ul>
                <ul>
                <Link to="/usuarios">usurios</Link>
                </ul>
                <ul>
                <Link to="/registros">registrar</Link>
                </ul>
            </nav> */
            /*<Nav.Link as={NavLink} to="/usuarios">Usuarios</Nav.Link> --> esa estructura permite que al cambiar de pagina se conserve el estilo de boostrap-react */
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                <Navbar.Brand href="/">LIINCA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/">Inicio</Nav.Link>

                        <NavDropdown title="Equipo" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ver equipos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Crear equipo</NavDropdown.Item>
                        </NavDropdown>



                        <NavDropdown title="Campeonatos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ver Campeonatos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.1">Crear Campeonato</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Solicitudes de inscripcion</NavDropdown.Item>
                        </NavDropdown>



                        <Nav.Link href="/">Estadisticas</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Profile</Nav.Link>
                        <Nav.Link href="/">Log out</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )

    }

}

export default Navegacion;