import React from "react";
import Tarjetas from "./Cards";
import { container} from "react-bootstrap";
import imgcard1 from "../assets/img/Uncharted2.jpg";
import imgcard2 from "../assets/img/TombRaider2.jpg";
import imgcard3 from "../assets/img/Origins2.jpg";

  const Cartas = [
  {
    id: 1,
    titulo: "Uncharted 4 A Thief's End",
    imagen: imgcard1,
    texto: " La traición de Drake El retirado cazafortunas Nathan Drake vive felizmente su vida junto con su esposa Elena Fisher,pero todo se derrumba cuando aparece su hermano Sam, el que Nathan pensaba que estaba muerto.Sam necesita su ayuda para desenmascarar una conspiración histórica del famoso pirata aventurero Henry Avery y su legendario tesoro",
    boton: "Mas informaciòn de Uncharted 4 A Thief's End"
  }, 
  {
    id:2,
    titulo: "Rise of the Tomb Raider",
    imagen: imgcard2,
    texto: " Debido a los eventos transcurridos en la isla de Yamatai Lara está conmovida y a la vez ansiosa por comprender el misterio del alma inmortal que causó una gran impresión en ella Por tal motivo decide emprender un viaje hacia Siberia junto a su compañero Jonah Maiavay realizar la búsqueda de la mítica ciudad de Kítezh construida por el príncipe Vladimir en el siglo XIII en un intento por encontrar respuestas",
    boton: "Mas informaciòn de Rise of the Tomb Raider"

  },
  {
    id:3,
    titulo: "Assassin's Creed Origins",
    imagen: imgcard3,
    texto: " Este nuevo título está ambientado en torno al año 49 a. C.,con el reinado de Cleopatra VIIen el Antiguo Egipto​ dominado por la República Romana,​ ya que en el logo del videojuego aparece el Ojo de Horus,que coincide con el origen de la Hermandad de los Asesinos ",
    boton: "Mas informaciòn de Assassin's Creed Origins"
  },
  ];

  const CardsApp =() => {
    return(
        <container className="d-flex justify-content-center flex-wrap">
            {Cartas.map((Card)=>(
                <Tarjetas key={Card.id} titulo={Card.titulo} imagen={Card.imagen} texto={Card.texto}  boton={Card.boton} />
            ))}
        </container>
    );
  };
  
  export default CardsApp;