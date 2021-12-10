import React from "react";

const EquiposInscritos = () => {
  return (
    <div class="divv">
        <h1>Equipos Inscritos</h1>
      <div className="container">
        <div className="colormodal">
          <h1>Equipo 1</h1>
          <img
            src="http://assets.stickpng.com/images/58419c6aa6515b1e0ad75a61.png"
            alt="baskets"
          ></img>
          {/* <Modals/> */}
        </div>
        <div className="colormodal">
          <h1>Equipo 2</h1>
          <img
            src="http://assets.stickpng.com/thumbs/58419bb6a6515b1e0ad75a55.png"
            alt="animals"
          ></img>
          {/* <ModalRegistrar/> */}
        </div>
        <div className="colormodal">
          <h1>Equipo 3</h1>
          <img
            src="http://assets.stickpng.com/images/58419cf6a6515b1e0ad75a6b.png"
            alt="animals"
          ></img>
          {/* <ModalRegistrar2></ModalRegistrar2> */}
        </div>
        <div className="colormodal">
          <h1>Equipo 4</h1>
          <img
            src="http://assets.stickpng.com/thumbs/58419bd7a6515b1e0ad75a57.png"
            alt="animals"
          ></img>
          {/* <ModalesD/> */}
        </div>
      </div>
      <button className="btn btn-primary mb-5 align-center">Inscribir equipo</button>
    </div>
  );
};

export default EquiposInscritos;
