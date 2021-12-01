import {Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Nav.css'

const Inicio = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://e00-marca.uecdn.es/imagenes/2015/06/17/baloncesto/nba/playoffs/1434530083_extras_noticia_foton_7_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p className="color">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.todofondos.net/wp-content/uploads/nba-wallpaper-hd-para-pc-768x480.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p className="color">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fondosmil.com/fondo/1739.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>REGISTRA TU EQUIPO</h3>
      <p className="color">registra tu equipo con tiempo . <br/><Link as={Link} to="/registrosJugadores">Registrar</Link></p>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}


export default Inicio
