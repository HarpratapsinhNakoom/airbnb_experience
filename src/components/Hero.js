import React from 'react'

import heroImg from "../images/airbnb-hero-img.png";
export default function Hero() {
    return (
        <div className='hero--section'>
            <img src={heroImg} alt="Img" />
            <div className="hero-text--section">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts -all without leaving home.</p>
            </div>
        </div>
   );
};