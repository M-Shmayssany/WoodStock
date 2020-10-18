import React from 'react';
import image from './img/image.png';
import './css/Creative.css';

function Creative () {
    return (
        <section className="creative">
            <div className="img-container">
                <article className="rectangle3"></article>
                <article className="creative-header">CREATIVE TEAM</article>
                <article className="image4"><img src={image} alt="CREATIVE" /></article>
            </div>
            <div className="creative-container">
                <h2 className="creative-h2">GOOG MINDSET</h2>
                <p className="creative-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <a className="link-creative" href="/#">Meat the team<span className="line-horizontal3"></span></a>
            </div>
        </section>
    );
}

export default Creative;