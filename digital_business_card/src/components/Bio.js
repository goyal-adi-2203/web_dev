import React from 'react';

// import ReactDOM from 'react-dom/client';
import laura_smith from "../images/laura_smith.jpeg"

export default function Bio() {
    return (
        <div className='bio'>
            <div><img src={laura_smith} alt="laura_smith" className='bio-pic'/></div>
            <h2 className='bio-name'>Laura Smith</h2>
            <h4>Frontend Developer</h4>
            <h6>laurasmith.website</h6>
        </div>
    );
}