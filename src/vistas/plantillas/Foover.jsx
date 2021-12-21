import { width } from 'dom-helpers';
/* import {Politicas} from '../modal/Modals'
import {PoliticasDoss} from '../modal/Modals' */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import './foover.css';



export const Foover = () => {
    return (

        <footer className="footer-home">
    <div className="">
        <div className="columnas">
            <div className="footer-col">
                <h4>compañía</h4>
           <span className="logo">LIINCA</span>
            </div>
            <div className="footer-col">
                <h4>Nosotros</h4>
                <ul>
                    <li><a href="#">Campeonatos</a></li>
                    <li><a href="#">Equipos</a></li>
                    <li><a href="#">Estadísticas</a></li>
                    <li><a href="./Politica.js">Politica de privacidad</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contacto</h4>
                <ul>
                    <li><a href="./informacion/Contactenos.html">correo@correo.com.co</a></li>
                    <li><a href="/mapas.html">Carrera 12 Nº 34-45</a></li>
                    <li><a href="#">PBX 123 45 67</a></li>
                    <li><a href="#">Lunes a viernes de 6:30am a 7:00pm</a></li>
                </ul>
            </div>
    
            <div className="footer-col">
                <h4>Síguenos</h4>
                <div className="social-links">
                    {/* <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a> */}
                    
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>{"  "}
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>{"  "}
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>{"  "}
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    {/* <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
            </div>
        </div>
    </div>
    <p className="derechos">Copyright © 2021 LIINCA. Todos los derechos reservados.</p>
</footer>

  /*       <div className="color-fondo">
            <article className='articlee'>
                <a className='botonnn'> <Politicas></Politicas></a>
               <a className='botonnn'> <PoliticasDoss></PoliticasDoss></a>
            </article>
            <article>
                <p className='colorrr'>ELABORADO POR</p>
                <p  className='colorrr'>Equipo 3, Grupo 30, Mision TIC</p>

            </article>
            <article>
                <img className="img-abajo" src="https://previews.123rf.com/images/patrimonio/patrimonio1607/patrimonio160700199/60000665-ilustraci%C3%B3n-de-un-bal%C3%B3n-de-baloncesto-establece-dentro-de-escudo-con-el-texto-de-marketing-de-palabr.jpg"></img>
            </article>
        </div> */
    )
}
