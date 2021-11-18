import './App.css';
import New from './vistas/New'
import Navegacion from './vistas/Navegacion'
import Inicio from './vistas/Inicio'
import NoFount from './vistas/NoFount'
import RegisitroJugadores from './vistas/RegisitroJugadores';
//inicio de aplicacion.
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PrivateRoute from './vistas/rutasPrivadas/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div className="section">
            <div className="columns">
            <BrowserRouter>
            <Navegacion></Navegacion>
            <Routes>
              <Route path="/" element={<Inicio />}/>
              <Route path="/usuarios" element={<New />} />
              <Route path="/registrosJugadores" element={<RegisitroJugadores />} />    

              <Route path="*" element={<NoFount />} />
            </Routes>
            </BrowserRouter>,
            </div>
          </div>
    </div>
  );
}
export default App;

