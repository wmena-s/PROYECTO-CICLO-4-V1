import './App.css';
import New from './vistas/New'
import Inicio from './vistas/Inicio'
import RegisitroJugadores from './vistas/RegisitroJugadores';
//inicio de aplicacion.
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="section">
            <div className="columns">
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio />}/>
              <Route path="/usuarios" element={<New />} />
              <Route path="/registros" element={<RegisitroJugadores />} />
            </Routes>
            </BrowserRouter>,
            </div>
          </div>
    </div>
  );
}







export default App;
