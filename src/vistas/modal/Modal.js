import './Modal.css'

const Modal = ({children, isOpen, closeModal}) => {
    return (
        <div className={`modall ${isOpen && "is-open"}`}>
            <div className="modal-container">
                <button class="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </div>
    )
}




export default Modal
