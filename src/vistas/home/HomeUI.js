import VistaHome from './VistasHome'
import { Modal } from 'bootstrap'
import {Modals, Modaless, ModalRegistrar, ModalRegistrar2} from '../modal/Modals'
import './HomeUE.css'


const HomeUE = () => {
    return (
        <div class="divv">
¿
            <div className="container">
             
                <div className="colormodal">
                    <h1>Registro UI</h1>
                    <img  src='https://i.pinimg.com/originals/c7/91/3d/c7913d43b3677d55960c7f6f0cbe19ce.jpg' alt="baskets"></img>
                     <Modals/>
                </div>
                <div className="colormodal">
                    <h1>Crear Campeonato</h1>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff9c9c25823839.5635e2cc80413.png' alt="animals"></img>
                     <Modaless/>
                </div>
                <div className="colormodal">
                    <h1>Gestionar Campeonatos</h1>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/d9293225823839.5634b5167acb8.png' alt="animals"></img>
                     <ModalRegistrar/>
                </div>
                <div className="colormodal">
                    <h1>Estadísticas</h1>
                    <img src='http://assets.stickpng.com/images/585d35c6cb11b227491c3348.png' alt="animals"></img>
                     <ModalRegistrar2></ModalRegistrar2>
                </div>

            </div>
            
        </div>
    )
}

export default HomeUE
