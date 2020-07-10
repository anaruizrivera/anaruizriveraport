import React from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePg/Home';
import Skills from './Components/Skills/Skills';
import Portafolio from './Components/Portafolio/Portafolio';
import Form from './Components/Form /Form.js'

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Skills/>
      <Portafolio/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
