import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './Catalogo';
import Home from './Home';
import TiposDeProdutos from './TiposDeProdutos';
import MobileNavbar from './MobileNavBar';


import './App.css'
import './css/fonts.css';
import './css/reset.css';
import './css/header.css';
import './css/body.css';
import './css/sectionAvaliacoes.css';
import './css/footer.css';
import './css/nav.css';
import './css/main.css';
import './css/carrocelMobile.css';
import './css/certificadosMobile.css';
import './css/cards.css';



function App() {
 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/catalogo" element={<Catalogo/>} />
      <Route path="/:name" element={<TiposDeProdutos/>} />
      <Route path="/:name" element={<MobileNavbar/>} />
 
      
     
    </Routes>
  </Router>
    
  )
};

export default App;
