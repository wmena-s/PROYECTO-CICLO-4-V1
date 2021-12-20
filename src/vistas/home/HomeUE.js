import {Modals, Modaless, ModalesD, ModalRegistrar, ModalRegistrar2, UsuarioExternos} from '../modal/Modals'
import './HomeUE.css'


const HomeUE = () => {
    return (
        <div class="divv">


            <div >
               <h1 className='container00'>USUARIO EXTERNO</h1>
            </div>
¿
            <div className="container">
             
                <div className="colormodal">
                    <h1>Registro UE</h1>
                    <img  src='https://i.pinimg.com/originals/c7/91/3d/c7913d43b3677d55960c7f6f0cbe19ce.jpg' alt="baskets"></img>
                     <UsuarioExternos/>
                </div>
                <div className="colormodal">
                    <h1>Regitrar Equipos</h1>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/d9293225823839.5634b5167acb8.png' alt="animals"></img>
                     <ModalRegistrar/>
                </div>
                <div className="colormodal">
                    <h1>Jugadores</h1>
                    <img src='https://pre00.deviantart.net/a8d8/th/pre/i/2016/345/2/4/james_harden_by_irockmedia-dar8t3p.jpg ' alt="animals"></img>
                     <ModalRegistrar2></ModalRegistrar2>
                </div>
                <div className="colormodal">
                    <h1>Inscripciones</h1>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff9c9c25823839.5635e2cc80413.png' alt="animals"></img>
                     <ModalesD/>
                </div>

            </div>
        </div>
    )
}

export default HomeUE
