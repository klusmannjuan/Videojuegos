import React from "react";
import Cards from "./Cards";

function Card() {
    return (
        <div className='container d-flex justify-content-center align-baseline'>
            <div className='row'>
                <div className='col-md-4'>
                    <Cards/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <Cards/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <Cards/>
                </div>
            </div>
        </div>
      
    );
  }
  
  
  export default Card;