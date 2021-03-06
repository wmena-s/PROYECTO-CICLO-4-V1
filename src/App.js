import './App.css';
import RegistroDeEquipos from './vistas/registros/RegistroDeEquipos'
import Navegacion from './vistas/Navegacion'
import Inicio from './vistas/Inicio'
import NoFount from './vistas/NoFount'
import UsuarioI from './vistas/registros/UsuarioInterno';
import UsuarioE from './vistas/registros/UsuarioExterno';
import ListaJugadores from './vistas/usuario_externo/ListaJugadores';
import RegisitroJugadores from './vistas/registros/RegisitroJugadores';
import UsuarioInterno from './vistas/registros/UsuarioInterno';
import InfoEquipo from './vistas/usuario_externo/InfoEquipo.jsx';
import SeleccionarCampeonato from './vistas/usuarioInterno/SeleccionarCampeonato';
import Dashboard from './vistas/administrador/Dashboard'
import UsuarioExterno from './vistas/usuario_externo/UsuariosExternosRegistrados'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeUE from './vistas/home/HomeUE';
import HomeUI from './vistas/home/HomeUI';
import Registrar from './vistas/login-register-aa/registrar'
import Inscripsiones from './vistas/login-register-aa/Inscripciones';
import Login from './vistas/login-register-aa/login';
import { Foover } from './vistas/plantillas/Foover.jsx';
import Logins from '../src/vistas/login/login';
import HomeA from './vistas/administrador/HomeA';
import SolicitudesEquipos from './vistas/usuarioInterno/SolicitudesEquipos';
import EquiposInscritos from './vistas/usuarioInterno/EquiposInscritos';
import CrearCampeonato from './vistas/usuarioInterno/CrearCampeonato';
import GestionarCampeonato from './vistas/usuarioInterno/GestionarCampeonato';
import ListadoPartidos from './vistas/usuarioInterno/ListadoPartidos';
import InscripcionCampeonato from './campeonato/inscripcionCampeonato';
import { DataProvider } from './funcionalidades/DataContext';


function App() {
  
  return (
    <div className="App">
      <div className="section">
            <div className="columns">
           
            <BrowserRouter>
            <DataProvider>
            <Navegacion></Navegacion>

            <Routes>  
              <Route path="/" element={<Inicio />}/>
              <Route path="/usuario_externo/equipos/inscrbir" element={<RegistroDeEquipos />} />
              <Route path="/usuario_externo/RegisitroUE" element={<UsuarioInterno/>} />    
              <Route path="/usuario_externo/RegisitroJugadores" element={<RegisitroJugadores />} />    
              <Route path="/usuarioInterno/registro" element={<UsuarioI />} />
              <Route path="/usuarioExterno" element={<UsuarioE />} />
              <Route path="/usuario_externo/equipos/ListaJugadores" element={<ListaJugadores/>} />
              <Route path="/equipos/registrados" element={<InfoEquipo />} exacta />
              <Route path="/usuarioInterno/SeleccionarCampeonato" element={<SeleccionarCampeonato />} exacta />
              <Route path="/usuarioInterno/CrearCampeonato" element={<CrearCampeonato />} exacta />
              <Route path="/usuarioInterno/GestionarCampeonato" element={<GestionarCampeonato />} exacta />
              <Route path="/usuarioInterno/SolicitudesEquipos" element={<SolicitudesEquipos />} exacta />
              <Route path="/usuarioInterno/EquiposInscritos" element={<EquiposInscritos />} exacta />
              <Route path="/usuarioInterno/ListadoPartidos" element={<ListadoPartidos />} exacta />
              <Route path="/usuario_externo/UsuariosRegistrados" element={<UsuarioExterno />} exacta />
              <Route path='/home/homeUE' element={<HomeUE/>} exacta />
              <Route path='/home/homeUI' element={<HomeUI/>} exacta />

                {/*aaron*/}
                <Route path='/login' element={<Login/>} exacta />
                <Route path='/registrar' element={<Registrar/>} exacta />
                <Route path='/usuario_externo/inscripciones' element={<Inscripsiones/>} exacta />
                {/*aaron*/}
              <Route path='/equipos/ListaJugadores' element={<ListaJugadores/>} exacta />
              <Route path='/administrador/Dashboard' element={<Dashboard/>} exacta />
              <Route path='/adminsitrador/homeA' element={<HomeA/>} exacta />
                <Route path='/login' element={<Logins/>} exacta />
                {/* registro de campeonato */}
              <Route path='/usuario_externo/registro' element={<InscripcionCampeonato/>} exacta />
             {/* <Route path="/listado" element={<Listados/> } exacta />*/}
              <Route path="*" element={<NoFount />} />

              

            </Routes>

            <Foover></Foover>
            </DataProvider>
            </BrowserRouter>
          
            </div>
          </div>
          
    </div>
  );
}
export default App;

