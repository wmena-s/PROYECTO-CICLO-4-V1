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
import UsuarioExterno from './vistas/usuario_externo/UsuariosExternosRegistrados'
import Listados from './vistas/plantillas/Listados'
import UsuarioExterno0 from './vistas/home/HomeUE'
//inicio de aplicacion.
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Modals from './vistas/modal/Modals'
import HomeUE from './vistas/home/HomeUE';
import { Abajo } from './vistas/plantillas/Abajo';

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

