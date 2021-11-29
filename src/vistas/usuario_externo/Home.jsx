import React, {Component} from "react";
import axios from "axios";
import './Home.css'


export default class Home extends Component{

    state={
        users: [],
        jugadores: []
    }
    
    async componentDidMount(){
        const equipo = await axios.get('http://localhost:5000/registros');

        this.setState({
            users: equipo.data, 
        })

        
     
        console.log("wilder")
       
    }

    // los siguientes codigos muestran que es importante escribir correctamente el metodo.
    componentDicMount(){ //evento que actualiza apenas la palicacion sea montada use el metodo fetcthas
        this.fetchTask();
        console.log('el componente fue montado');
    }

    fetchTask(){ //obtener tareas
        fetch('http://localhost:5000/registros')
            .then(res=>res.json())
            .then(data=>{
                this.setState({tasks: data});
                console.log(this.state.tasks);
            });

            
    }



    render(){
        return(
    
                    <div row text-center>
                        {/*
                        <button button class="btn btn-primary" href="">añadir</button>
                        <button button class="btn btn-primary" to="./equipos/registrados">campeonatos</button>
                        
                         */}
                         <div className="row">
                            <h1>EQUIPOS INSCRITOS</h1>

                            <div className="row text-center">
                                {
                                    this.state.users.map(user=>
                                    <div className=""> 
                                        <div className="thumbnail2">
                                            <img src="https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg" alt="" />
                                            <p>Equipo: <strong>{user.nombreEquipo}</strong></p>
                                            <p>Nombre: {user.nombre}</p> 
                                            <p>Fri. 27 November 2015</p>
                                            <button class="btn btn-primary">Editar</button>
                                            <button class="btn btn-success">Eliminar</button>
                                            <button class="btn btn-warning">jugadores</button>
                                            {/* permite seleccionar los jugadores que haran parte de un equipo, por medio de la cedula
                                            el sistema verificará si ese jugador ya tienen un equipo registrado
                                            el proceso actualiza el registro del equipo añadiendo 8 nuevos campos, 5 principales y 3 suplentes */}
                                        </div>
                                    </div>)
                                    
                                }
                            </div>
                        </div>
                    </div>
                     
            
        )
    }
}

