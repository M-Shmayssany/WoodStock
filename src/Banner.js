import React from 'react';
import imageRight from './img/wood-right.jpg';
import imageLeft from './img/wood-left.jpg';
import './css/Banner.css';

function Banner() {
  return (
    <section>
        <section className="container">
        <div className="img-container">
            <img className="image" src={imageRight} alt="wood-Right"></img>
            <div className="watermark"></div>
        </div>
        <div className="img-container">
            <img className="image" src={imageLeft} alt="wood-left"></img>
            <div className="watermark"></div>
        </div>
        </section>
        <h1>WOOD STOCK<span className="strip"></span></h1>
        
    </section>
  );
}

export default Banner;