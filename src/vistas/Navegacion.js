import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Nav.css'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'

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
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="primary">
                <Navbar.Brand>Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive"/>
                <Navbar.Collapse id="responsive">
                    <Nav ClassName='mr-auto'>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link> 
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/usuarios">Equipos</Nav.Link>
                        <Nav.Link as={NavLink} to="/registrosJugadores">Registrar</Nav.Link>
                        <Nav.Link as={NavLink} to="/usuarioInterno">U interno</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/" ><abbr title ="Dar clic si desea salir de la aplicaion.">Salir</abbr> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

           
            </Navbar>
        
        )

    }

}

export default Navegacion;