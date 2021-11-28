import './App.css';
import New from './vistas/registros/New'
import Navegacion from './vistas/Navegacion'
import Inicio from './vistas/Inicio'
import NoFount from './vistas/NoFount'
import UsuarioI from './vistas/registros/UsuarioInterno';
import RegisitroJugadores from './vistas/RegisitroJugadores';
import Home from './vistas/administrador/Home.jsx';
import Campeonatos from './vistas/administrador/Capeonatos'
import UsuarioExterno from './vistas/administrador/UsuariosExternosRegistrados'

//inicio de aplicacion.
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="section">
            <div className="columns">
            <BrowserRouter>
            <Navegacion></Navegacion>
            <Routes>  
              <Route path="/" element={<Inicio />}/>
              <Route path="/usuarioInterno/equipos/inscrbir" element={<New />} />
              <Route path="/registroJugador" element={<RegisitroJugadores />} />    
              <Route path="/usuarioInterno" element={<UsuarioI />} />
              <Route path="/equipos/registrados" element={<Home />} exacta />
              <Route path="/usuarioInterno/campeonato" element={<Campeonatos />} exacta />
              <Route path="/administrador/usuariosExternos" element={<UsuarioExterno />} exacta />

              <Route path="*" element={<NoFount />} />
            
            </Routes>
            </BrowserRouter>,
            </div>
          </div>
    </div>
  );
}
export default App;

