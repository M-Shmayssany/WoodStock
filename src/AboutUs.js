import React from 'react';
import image from './img/image 2.1.png';
import './css/AboutUs.css';

function AboutUs(){
    return (
        <section className="AboutUs">
            <div className="img-container">
                <article className="rectangle"></article>
                <article className="image2"><img src={image} alt="about" /></article>
            </div>
            <div className="about-container">
                <h2 className="aboutus-h2"><span className="line-horizontal"></span>ABOUT US</h2>
                <p className="aboutus-p">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                <a className="link-AboutUs" href="/#">LEARN MORE<span className="line-vertical"></span></a>
            </div>
        </section>
    );
}

export default AboutUs;