import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Encabezado'





ReactDOM.render(
    <React.StrictMode>
          <Encabezado/>
          <App/>
  
    </React.StrictMode>,
  document.getElementById('root')
);

