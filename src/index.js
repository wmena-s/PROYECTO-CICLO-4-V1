import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import New from './vistas/New'
import RegisitroJugadores from './vistas/RegisitroJugadores';

//inicio de aplicacion.
import {HashRouter as Router, BrowserRouter, Routes, Route} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<New />} />
          <Route path="/registros" element={<RegisitroJugadores />} />
        </Routes>
      </BrowserRouter>,
    </React.StrictMode>,
  document.getElementById('root')
);

