import { width } from 'dom-helpers'
import './foover.css'
import {Politicas} from '../modal/Modals'
import {PoliticasDoss} from '../modal/Modals'


export const Foover = () => {
    return (

        <div className="color-fondo">
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
        </div>
    )
}
