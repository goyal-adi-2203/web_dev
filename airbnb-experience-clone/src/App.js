import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import logo from './logo.svg';
import data from "./components/data";


export default function App() {

    const cards = data.map((item) => {
        return (
            <Card
                key = {item.id}
                item = {item}
            /> 
        )
    })

    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <section className='cards-list'>
                {cards}
            </section>
            
        </div>
    )
}