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
                <Link to="/">InfoEquipo</Link>
                </ul>
                <ul>
                <Link to="/usuarios">usurios</Link>
                </ul>
                <ul>
                <Link to="/registros">registrar</Link>
                </ul>
            </nav> */
            /*<Nav.Link as={NavLink} to="/usuarios">Usuarios</Nav.Link> --> esa estructura permite que al cambiar de pagina se conserve el estilo de boostrap-react */
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="primary ">
                <Navbar.Brand style={{fontSize: "32px", margin: '0 29% 0 9%'}}><a href="/" style={{color: '#ffffff', textDecoration: 'none'}}>LIINCA</a></Navbar.Brand>
                {/* font-size: 32px; text-decoration: none; white-space: nowrap; margin: 0 29% 0 9%; */}
                <Navbar.Toggle aria-controls="responsive"/>
                <Navbar.Collapse id="responsive">
                    <Nav ClassName='mr-auto'>
                        <Nav.Link style={{color: '#ffffff'}} as={NavLink} to="/">Home</Nav.Link> 
                        {/*<Nav.Link as={NavLink} to="/equipos/registrados">UE registrados</Nav.Link>*/} 
                    </Nav>
                    <Nav className="USUARIO EXTERNO">
                        {/*<Nav.Link as={NavLink} to="/usuario_externo/equipos/inscrbir">UE inscribir E</Nav.Link>*/}
                        {/*<Nav.Link as={NavLink} to="/usuario_externo/RegisitroJugadores">Registrar</Nav.Link>*/}
                         {/*} <Nav.Link as={NavLink} to="/usuarioInterno">UI registrar</Nav.Link>*/}

                        <NavDropdown style={{color: '#ffffff'}} title="Usuario Externo" id="navUsuarioExterno">

                            <NavDropdown.Item href="/home/homeUE">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario_externo/RegisitroUE">Registro de Usuario</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario_externo/equipos/inscrbir">Registro de Equipos</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario_externo/RegisitroJugadores">Registrar Jugadores</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario_externo/equipos/ListaJugadores">Lista de Jugadores</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/usuario_externo/inscripciones">Inscripciones a Campeonato</NavDropdown.Item> */}
                            <NavDropdown.Item href="/usuario_externo/registro">Inscripciones a Campeonato</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        {/*<Nav.Link as={NavLink} to="/usuarioExterno">UE registrar</Nav.Link>*/}
                        {/*<Nav.Link as={NavLink} to="/usuario_externo/equipos/ListaJugadores">Inscribir Jugadores</Nav.Link>*/}
                    <Nav className="USUARIO INTERNO">
                        <NavDropdown style={{color: '#ffffff'}} title="Usuario Interno" id="navUsuarioInterno">
                            <NavDropdown.Item href="/home/homeUI">Home</NavDropdown.Item>  
                            <NavDropdown.Item href="/usuarioInterno/registro">Registro UI</NavDropdown.Item>  
                            <NavDropdown.Item href="/usuarioInterno/CrearCampeonato">Crear Campeonato</NavDropdown.Item>  
                            <NavDropdown.Item href="/usuarioInterno/GestionarCampeonato">Gestionar Campeonato</NavDropdown.Item>  
                            <NavDropdown.Item href="/usuarioInterno/equiposInscritos">Equipos Inscritos</NavDropdown.Item>  
                            <NavDropdown.Item href="/usuarioInterno/solicitudesEquipos">solicitudes de equipos</NavDropdown.Item>  
                            <NavDropdown.Item href="/usuarioInterno/ListadoPartidos">Listado Partidos</NavDropdown.Item>    
                        </NavDropdown>
                    </Nav>
                    <Nav className="USUARIO ADMINISTRADOR">
                        <Nav.Link style={{color: '#ffffff'}} href="/adminsitrador/homeA">Administrador</Nav.Link>
  {/*                       <NavDropdown title="usuario Administrador" id="navUsuarioAdministrador">
                            <NavDropdown.Item href="/usuario_externo/UsuariosRegistrados">usuario Registrados</NavDropdown.Item>
                            <NavDropdown.Item href="/administrador/Dashboard">Dashboard</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/" ><abbr style={{textDecoration: 'none'}} title ="Dar clic si desea salir de la aplicaion.">Salir</abbr> </Nav.Link>
                    </Nav>

                </Navbar.Collapse>

           
            </Navbar>
        
        )

    }

}

export default Navegacion;


    /*  font-size: 32px; text-decoration: none; white-space: nowrap; margin: 0 29% 0 9%; */
