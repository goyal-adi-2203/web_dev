import React from 'react';
// import ReactDOM from 'react-dom/client';

import Main from './components/Main';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Button from './components/Button';
// import logo from './logo.svg';



export default function App() {
    return (
        <div className='container'>
            <Bio />
            <Button />
            <Main />
            <Footer />
        </div>
    )
}

