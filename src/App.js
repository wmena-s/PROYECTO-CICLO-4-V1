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
import Campeonatos from './vistas/usuario_externo/Capeonatos'
import Dashboard from './vistas/administrador/Dashboard'
import UsuarioExterno from './vistas/usuario_externo/UsuariosExternosRegistrados'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeUE from './vistas/home/HomeUE';
import { Abajo } from './vistas/plantillas/Abajo.jsx';
import Registrar from './vistas/login-register-aa/registrar'
import Inscripsiones from './vistas/login-register-aa/Inscripciones';
import Login from './vistas/login-register-aa/login';


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
              <Route path="/usuarioInterno" element={<UsuarioI />} />
              <Route path="/usuarioExterno" element={<UsuarioE />} />
              <Route path="/usuario_externo/equipos/InscribirJugadores" element={<InscribirJugadores/>} />
              <Route path="/equipos/registrados" element={<Home />} exacta />
              <Route path="/usuarioInterno/campeonato" element={<Campeonatos />} exacta />
              <Route path="/usuario_externo/UsuariosRegistrados" element={<UsuarioExterno />} exacta />
              <Route path='/home/homeUE' element={<HomeUE/>} exacta />
              <Route path='/equipos/InscribirJugadores' element={<InscribirJugadores/>} exacta />
                {/*aaron*/}
                <Route path='/login' element={<Login/>} exacta />
                <Route path='/registrar' element={<Registrar/>} exacta />
                <Route path='/usuario_externo/inscripciones' element={<Inscripsiones/>} exacta />
                {/*aaron*/}
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

