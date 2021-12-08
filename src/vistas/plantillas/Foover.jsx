import { width } from 'dom-helpers'
import './foover.css'
import {Politicas} from '../modal/Modals'
import {PoliticasDoss} from '../modal/Modals'


export const Foover = () => {
    return (

        <div className="color-fondo">
            <article>
                <a> <Politicas></Politicas></a>
               <a> <PoliticasDoss></PoliticasDoss></a>
            </article>
            <article>
                <p>datos generales de la empresa</p>
            </article>
            <article>
                <img className="img-abajo" src="https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I"></img>
            </article>
        </div>
    )
}
