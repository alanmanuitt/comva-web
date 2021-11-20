import React from 'react';
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return (
        <div className = "hero">
           <img src = {imageSrc} alt = "Think" className = "hero_image" />
           <h1 className = "hero_title">Optimizar tu empresa es mas facil</h1>
        </div>
    )
}

export default Hero
