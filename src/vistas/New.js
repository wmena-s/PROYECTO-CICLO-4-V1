import './New.css';

function New() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          REGISTRO DE EQUIPOS
        </h1>
        <div>
            <p>registra aqui tu equipo de futbol</p>
            <form>
                <div className="formulario-n1">
                    <label className="etiqueta">nombre</label>
                    <input className='formulario' placeholder="nombre de usuario"></input>
                </div>
                <div className="formulario-n1">
                    <label>usuario</label>
                    <input className='formulario' placeholder="usuario"></input>
                </div>
                <div className="formulario-n1">

                    <label>correo</label>
                    <input className='formulario' placeholder="correo"></input>
                </div>
                <div className="formulario-n1">

                    <label>constraseña</label>
                    <input className='formulario' placeholder="constraseña"></input>
                </div>
                <div className="formulario-n1">
                    <label>Nombre de equipo</label>
                    <input className='formulario' placeholder="nombre equipo"></input>
                </div>
            </form>
        </div>
     
      </header>
    </div>
  );
}

export default New;
