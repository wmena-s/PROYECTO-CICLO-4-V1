import Modal from './Modal';
import {useModal} from '../../funcionalidades/useModal'
import RegisitroJugadores from '../registros/RegisitroJugadores';
import New from '../registros/New';
import UsuarioInterno2 from '../registros/UsuarioInterno2';
import './Modal.css'
import InscribirJugadores from '../usuario_externo/InscribirJugadores';

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
                <New></New>
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
                <InscribirJugadores></InscribirJugadores>
            </Modal>
        </div>
        </>
    )

}



