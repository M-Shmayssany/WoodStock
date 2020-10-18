import React from 'react';
import image from './img/wood-restaurant.png';
import './css/Shop.css';

function Shop(){
    return (
        <section className="Shop">
            <div className="img-Shop-container">
                <article className="rectangle2"></article>
                <article className="image3"><img src={image} alt="about" /></article>
            </div>
            <div className="Shop-container">
                <h2 className="shop-h2"><span className="line-horizontal2"></span>SHOP</h2>
                <p className="shop-p">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                <a className="link-Shop" href="/#">Go Shopping<span className="line-vertical2"></span></a>
            </div>
        </section>
    );
}

export default Shop;