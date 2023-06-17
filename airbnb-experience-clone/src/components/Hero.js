import React from "react";
import grid from '../images/photo-grid.png'

export default function Hero(){
    return (
        <section className="hero">
            <img src={grid} alt="grid"/>
            <h2 className="hero-head">Online Experiences</h2>
            <p className="hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}