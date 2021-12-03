import React from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

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
                <Navbar.Brand>LIINCA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive"/>
                <Navbar.Collapse id="responsive">
                    <Nav ClassName='mr-auto'>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link> 
                        {/*<Nav.Link as={NavLink} to="/equipos/registrados">UE registrados</Nav.Link>*/} 
                    </Nav>
                    <Nav className="USUARIO EXTERNO">
                        {/*<Nav.Link as={NavLink} to="/usuario_externo/equipos/inscrbir">UE inscribir E</Nav.Link>*/}
                        {/*<Nav.Link as={NavLink} to="/usuario_externo/RegisitroJugadores">Registrar</Nav.Link>*/}
                         {/*} <Nav.Link as={NavLink} to="/usuarioInterno">UI registrar</Nav.Link>*/}
                         <Nav.Link as={NavLink} to="/home/homeUE">Usuario Externo</Nav.Link>
                        <NavDropdown title="Usuario Externo Opciones" id="navUsuarioExterno">
                            <NavDropdown.Item href="/usuario_externo/equipos/InscribirJugadores">UE inscribir Jugadores</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario_externo/equipos/inscrbir">UE inscribir E</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario_externo/RegisitroJugadores">Registrar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        {/*<Nav.Link as={NavLink} to="/usuarioExterno">UE registrar</Nav.Link>*/}
                        {/*<Nav.Link as={NavLink} to="/usuario_externo/equipos/InscribirJugadores">Inscribir Jugadores</Nav.Link>*/}
                    <Nav className="USUARIO INTERNO">
                        <NavDropdown title="usuario Interno" id="navUsuarioInterno">
                            <NavDropdown.Item href="/usuarioInterno/campeonato">campeonato</NavDropdown.Item>
                            <NavDropdown.Item href="/usuarioInterno">UI registrar</NavDropdown.Item>  
                        </NavDropdown>
                    </Nav>
                    <Nav className="USUARIO ADMINISTRADOR">
                        <NavDropdown title="usuario Administrador" id="navUsuarioAdministrador">
                            <NavDropdown.Item href="/usuario_externo/UsuariosRegistrados">usuario Registrados</NavDropdown.Item>
                        </NavDropdown>
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