const regisitroJugadores = () => {
    return (
        <div className="App">
            <header className="App-header">
            <h1>FORMULARIO DE REGISTRO DE JUGADORES</h1>
            <p>en esta zona de registran las personas que pueden pertenecer al equipo de futbol</p>
            <div className="contenedor">
            <form > 
                <div className="formulario-n1">
                    <label>documento de identidad</label>
                    <input type={Text} placeholder="documento de identidad" className="formulario"/>
                </div>
                <div className="formulario-n1">
                    <label>nombre</label>
                    <input type={Text} placeholder="nombre completo"  className="formulario"/>
                </div>
                <div className="formulario-n1">
                <label>sexo</label>
                <input type={Text} placeholder="sexo" className="formulario"/>
                </div>    
                <div className="formulario-n1">            <label>edad</label>
                <input type={Text} placeholder="edad" className="formulario"/>
                </div>
                <div className="formulario-n1"> 
                <label>equipo</label>
                <input type={Text} placeholder="edad" className="formulario"/>
                </div>
            </form>
            </div>
            </header>
        </div>
    )
}

export default regisitroJugadores
