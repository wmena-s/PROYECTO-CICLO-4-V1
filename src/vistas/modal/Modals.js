import Modal from './Modal';
import {useModal} from '../../funcionalidades/useModal'
import RegisitroJugadores from '../registros/RegisitroJugadores';
import RegistroDeEquipos from '../registros/RegistroDeEquipos';
import UsuarioInterno2 from '../registros/UsuarioInterno';
import UsuarioExterno from '../registros/UsuarioExterno';
import './Modal.css'
import ListaJugadores from '../usuario_externo/ListaJugadores';
import Politica from '../../vistas/plantillas/Politica'
import PoliticasDos from '../../vistas/plantillas/PoliticasDos'
import { controllers } from 'chart.js';

export const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1]=useModal(false);
    return (
        <>
        <div >
            <button onClick={openModal1} className="btn-primary boton1">INGRESAR</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            { /* <h1>Modal 1</h1>
                <p>hola este es un moda</p>
              <img src='https://loremflickr.com/g/320/240/baskets' alt="animals"></img>*/}
                <RegisitroJugadores></RegisitroJugadores>
            </Modal>
        </div>
        </>
    )

}

export const Modaless = () => {
    const [isOpenModal2, openModal2, closeModal2]=useModal(false);
    return (
        <>

        <div>
            <button onClick={openModal2} className="btn-primary boton1">INGRESAR</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
    
                <UsuarioInterno2></UsuarioInterno2>
            </Modal>
        </div>
        </>
    )

}

export const ModalRegistrar = () => {
    const [isOpenModal2, openModal2, closeModal2]=useModal(false);
    return (
        <>

        <div>
            <button onClick={openModal2} className="btn-primary boton1">INGRESAR</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <RegistroDeEquipos></RegistroDeEquipos>
            </Modal>
        </div>
        </>
    )
}

export const ModalRegistrar2 = () => {
    const [isOpenModal2, openModal2, closeModal2]=useModal(false);
    return (
        <>

        <div>
            <button onClick={openModal2} className="btn-primary boton1">INGRESAR</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <ListaJugadores></ListaJugadores>
            </Modal>
        </div>
        </>
    )

}


export const UsuarioExternos = () => {
    const [isOpenModal2, openModal2, closeModal2]=useModal(false);
    return (
        <>

        <div>
            <button onClick={openModal2} className="btn-primary boton1">REGISTRAR USUARIO EXTERNO</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <UsuarioExterno></UsuarioExterno>
            </Modal>
        </div>
        </>
    )

}

export const Politicas = () => {
    const [isOpenModal3, openModal3, closeModal3]=useModal(false);
    return (
        <>

        <div>
            <label style={{color:"black"}}>Políticas de tratamiento de datos personales</label>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <Politica></Politica>
            </Modal>
            <p onClick={openModal3} style={{background:"red", color:"white"}} >clic aquí</p>
        </div>
        </>
    )

}


export const PoliticasDoss = () => {
    const [isOpenModal4, openModal4, closeModal4]=useModal(false);
    return (
        <>

        <div>
            <label style={{color:"black"}}>Aviso de privacidad</label>
            <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                <PoliticasDos></PoliticasDos>
            </Modal>
            <p onClick={openModal4} style={{background:"red", color:"white"}} >clic aquí</p>
        </div>
        </>
    )

}
