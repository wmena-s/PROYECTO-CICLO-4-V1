import './App.css';
import New from './vistas/registros/New'
import Navegacion from './vistas/Navegacion'
import Inicio from './vistas/Inicio'
import NoFount from './vistas/NoFount'
import UsuarioI from './vistas/registros/UsuarioInterno';
import UsuarioE from './vistas/registros/UsuarioExterno';
import InscribirJugadores from './vistas/usuario_externo/InscribirJugadores';
import RegisitroJugadores from './vistas/registros/RegisitroJugadores';
import Home from './vistas/usuario_externo/Home.jsx';
import crearCampeonatos from './vistas/usuarioInterno/crearCampeonato'
import Campeonatos from './vistas/usuarioInterno/Campeonatos'
import GestionarCampeonatos from './vistas/usuarioInterno/GestionarCampeonatos'
import equiposInscritos from './vistas/usuarioInterno/equiposInscritos'
import solicitudesEquipo from './vistas/usuarioInterno/solicitudesEquipo'
import Enfrentamientos from './vistas/usuarioInterno/Enfrentamientos'
import Dashboard from './vistas/administrador/Dashboard'
import UsuarioExterno from './vistas/usuario_externo/UsuariosExternosRegistrados'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeUE from './vistas/home/HomeUE';
import HomeUI from './vistas/home/HomeUI';
import { Abajo } from './vistas/plantillas/Abajo.jsx';




function App() {
  
  return (
    <div className="App">
      <div className="section">
            <div className="columns">
            <BrowserRouter>
            <Navegacion></Navegacion>
            <Routes>  
              <Route path="/" element={<Inicio />}/>
              <Route path="/usuario_externo/equipos/inscrbir" element={<New />} />
              <Route path="/usuario_externo/RegisitroJugadores" element={<RegisitroJugadores />} />    
              <Route path="/usuarioInterno/registro" element={<UsuarioI />} />
              <Route path="/usuarioExterno" element={<UsuarioE />} />
              <Route path="/usuario_externo/equipos/InscribirJugadores" element={<InscribirJugadores/>} />
              <Route path="/equipos/registrados" element={<Home />} exacta />
              <Route path="/usuarioInterno/campeonato/crearCampeonato" element={<crearCampeonatos />} exacta />
              <Route path="/usuarioInterno/campeonato/gestionar" element={<GestionarCampeonatos />} exacta />
              <Route path="/usuarioInterno/campeonato" element={<Campeonatos />} exacta />
              <Route path="/usuarioInterno/equiposInscritos" element={<equiposInscritos />} exacta />
              <Route path="/usuarioInterno/enfrentamientos" element={<Enfrentamientos />} exacta />
              <Route path="/usuarioInterno/solicitudesEquipo" element={<solicitudesEquipo />} exacta />
              <Route path="/usuarioInterno" element={<HomeUI />} exacta />
              <Route path="/usuario_externo/UsuariosRegistrados" element={<UsuarioExterno />} exacta />
              <Route path='/home/homeUE' element={<HomeUE/>} exacta />
              <Route path='/equipos/InscribirJugadores' element={<InscribirJugadores/>} exacta />
              <Route path='/administrador/Dashboard' element={<Dashboard/>} exacta />
              
              
             {/* <Route path="/listado" element={<Listados/> } exacta />*/}
              <Route path="*" element={<NoFount />} />
            </Routes>

            <Abajo></Abajo>
            </BrowserRouter>,
         
            </div>
          </div>
          
    </div>
  );
}
export default App;

