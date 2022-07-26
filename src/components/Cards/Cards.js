import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Uncharted2 from '../../assets/img/Uncharted2.jpg';
import TombRaider2 from '../../assets/img/TombRaider2.jpg';
import Origins2 from '../../assets/img/Origins2.jpg';

function Cards() {
  return (
   
    <CardGroup >
      <Card  className='tarjetas'>
        <Card.Img variant="top" src={Uncharted2} />
        <Card.Body>
          <Card.Title>Uncharted 4 A Thief's End </Card.Title>
          <Card.Text>
          Cronológicamente el juego toma lugar alrededor del año 2014,
           entre tres y cinco años después de Uncharted 3:
            La traición de Drake. 
            El retirado cazafortunas Nathan Drake vive felizmente su vida junto con su esposa Elena Fisher, 
            pero todo se derrumba cuando aparece su hermano Sam, el que Nathan pensaba que estaba muerto.
             Sam necesita su ayuda para desenmascarar una conspiración histórica del famoso pirata aventurero Henry Avery y su legendario tesoro. 
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      <Card className='tarjetas'>
        <Card.Img variant="top" src={TombRaider2} />
        <Card.Body>
          <Card.Title>Rise of the Tomb Raider</Card.Title>
          <Card.Text>
          Debido a los eventos transcurridos en la isla de Yamatai, 
          Lara está conmovida y a la vez ansiosa por comprender el misterio del alma inmortal que causó una gran impresión en ella.
           Por tal motivo, decide emprender un viaje hacia Siberia junto a su compañero Jonah Maiava
            y realizar la búsqueda de la mítica ciudad de Kítezh construida por el príncipe Vladimir en el siglo XIII en un intento por encontrar respuestas.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card className='tarjetas'>
        <Card.Img variant="top" src={Origins2} />
        <Card.Body>
          <Card.Title>Assassin's Creed Origins</Card.Title>
          <Card.Text>
            Este nuevo título está ambientado en torno al año 49 a. C., 
            con el reinado de Cleopatra VII,
            en el Antiguo Egipto​ dominado por la República Romana,​ ya que en el logo del videojuego aparece el Ojo de Horus,
             que coincide con el origen de la Hermandad de los Asesinos 
             
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}



export default Cards;