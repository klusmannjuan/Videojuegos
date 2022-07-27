import React from "react";
import Uncharted2 from '../../assets/img/Uncharted2.jpg';

function Cards({src,titulo,texto}) {
  return (
    <div className='container d-flex justify-content-center align-baseline h-100'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card text-center'>
          <img src={src} alt='' className='card-img'></img>
            <div className='card-body'>
              <h4 className='card-tittle'>{titulo}</h4>
                <p className='card-text'> {texto}</p>
                <button variant="primary">Mas información</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;