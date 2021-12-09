import './App.css';
import RegistroDeEquipos from './vistas/registros/RegistroDeEquipos'
import Navegacion from './vistas/Navegacion'
import Inicio from './vistas/Inicio'
import NoFount from './vistas/NoFount'
import UsuarioI from './vistas/registros/UsuarioInterno';
import UsuarioE from './vistas/registros/UsuarioExterno';
import ListaJugadores from './vistas/usuario_externo/ListaJugadores';
import RegisitroJugadores from './vistas/registros/RegisitroJugadores';
import InfoEquipo from './vistas/usuario_externo/InfoEquipo.jsx';
import Campeonatos from './vistas/usuario_externo/Capeonatos'
import Dashboard from './vistas/administrador/Dashboard'
import UsuarioExterno from './vistas/usuario_externo/UsuariosExternosRegistrados'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeUE from './vistas/home/HomeUE';
import Registrar from './vistas/login-register-aa/registrar'
import Inscripsiones from './vistas/login-register-aa/Inscripciones';
import Login from './vistas/login-register-aa/login';
import { Foover } from './vistas/plantillas/Foover.jsx';
import Logins from '../src/vistas/login/login';
import HomeA from './vistas/administrador/HomeA';


function App() {
  
  return (
    <div className="App">
      <div className="section">
            <div className="columns">
            <BrowserRouter>
            <Navegacion></Navegacion>
            <Routes>  
              <Route path="/" element={<Inicio />}/>
              <Route path="/usuario_externo/equipos/inscrbir" element={<RegistroDeEquipos />} />
              <Route path="/usuario_externo/RegisitroJugadores" element={<RegisitroJugadores />} />    
              <Route path="/usuarioInterno" element={<UsuarioI />} />
              <Route path="/usuarioExterno" element={<UsuarioE />} />
              <Route path="/usuario_externo/equipos/ListaJugadores" element={<ListaJugadores/>} />
              <Route path="/equipos/registrados" element={<InfoEquipo />} exacta />
              <Route path="/usuarioInterno/campeonato" element={<Campeonatos />} exacta />
              <Route path="/usuario_externo/UsuariosRegistrados" element={<UsuarioExterno />} exacta />
              <Route path='/home/homeUE' element={<HomeUE/>} exacta />

                {/*aaron*/}
                <Route path='/login' element={<Login/>} exacta />
                <Route path='/registrar' element={<Registrar/>} exacta />
                <Route path='/usuario_externo/inscripciones' element={<Inscripsiones/>} exacta />
                {/*aaron*/}
              <Route path='/equipos/ListaJugadores' element={<ListaJugadores/>} exacta />
              <Route path='/administrador/Dashboard' element={<Dashboard/>} exacta />
              <Route path='/adminsitrador/homeA' element={<HomeA/>} exacta />
                <Route path='/login' element={<Logins/>} exacta />
             {/* <Route path="/listado" element={<Listados/> } exacta />*/}
              <Route path="*" element={<NoFount />} />

            </Routes>

            <Foover></Foover>
            </BrowserRouter>,
         
            </div>
          </div>
          
    </div>
  );
}
export default App;

