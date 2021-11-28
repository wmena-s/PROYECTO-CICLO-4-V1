const regisitroJugadores = () => {
    return (
        <div className="App">
            <header className="App-header">
            <h1>FORMULARIO DE REGISTRO DE JUGADORES</h1>
            <p>en esta zona de registran las personas que pueden pertenecer al equipo de futbol</p>
  
            <div className="container">
            <form > 
                <div className="mb-3">
                    <label>documento de identidad</label>
                    <input type={Text} placeholder="documento de identidad" />
                </div>
                <div className="mb-3">
                    <label>nombre</label>
                    <input type={Text} placeholder="nombre completo"  />
                </div>
                <div className="mb-3">
                    <label>sexo</label>
                    <input type={Text} placeholder="sexo" />
                </div>    
                <div className="mb-3">            
                    <label>edad</label>
                    <input type={Text} placeholder="edad" />
                </div>
                <div className="mb-3"> 
                    <label>equipo</label>
                    <input type={Text} placeholder="edad" />
                </div>
            </form>

            </div>
            </header>
        </div>
    )
}

export default regisitroJugadores
