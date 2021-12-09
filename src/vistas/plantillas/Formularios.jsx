const Formularios = (props) => {
    //peprmite insertar una imagen lateral en los formularios de registro.
    //es usado en el Componente registroJugadores
    return (
    <div>

        <img className="d-block w-100" src={props.src} alt="First slide"/>

    </div>
    )
}

export default Formularios
