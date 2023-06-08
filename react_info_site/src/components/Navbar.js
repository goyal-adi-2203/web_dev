 import React from 'react';
// import ReactDOM from 'react-dom/client';
import logo from "../images/logo.png"


export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt='react-logo' className='nav-react-logo'/>
            <h3 className='nav-logo-text'>ReactFacts</h3>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    );
}