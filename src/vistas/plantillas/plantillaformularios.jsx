class plantillaformularios extends React.Component { 
    render(){
        return(  
    <div className="contanedorgeneral">
                <div>
                {childrem}
              </div>
                <div>
                    
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://concepto.de/wp-content/uploads/2019/12/basquetbol-baloncesto-e1575657106339.jpg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqSgOW6enXddpUafvNM7OAKsqQ0MQX8Uftw&usqp=CAUg" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://previews.123rf.com/images/adzicnatasa/adzicnatasa1706/adzicnatasa170600487/80635572-fondo-de-baloncesto-ilustraci%C3%B3n-.jpg" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>

                </div>
                </div>

        )}
}
export default plantillaformularios;