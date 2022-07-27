import Carousel from 'react-bootstrap/Carousel';
import Uncharted from '../../assets/img/Uncharted.jpg';
import TombRaider from '../../assets/img/TombRaider.jpg';
import Origins from '../../assets/img/Origins.jpg';


function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='container-carousel'>
        <img className="d-block w-100" src={Uncharted}  alt="First slide"/>
        </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
        <img
          className="d-block w-100"
          src={TombRaider}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <div className='container-carousel'>
        <img
          className="d-block w-100"
          src={Origins}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;