import { useState } from 'react'
import {  useRef } from 'react';
import React from 'react';
import ProdutoCard from './ProdutoCard';

const fotos = [ 
    'Colchões',
    'box',
    'cabeceiras',
    'Linha PET',
    'poltronas',
    'vestuário',
    'acessórios'
    ]
   


const Produtos = () => {
    const paiCardRef = useRef(null);
    
  
    const [isButtonVisible, setIsButtonVisible] = useState(false);
  
    // Funções para mostrar e esconder o botão
    const showButton = () => setIsButtonVisible(true);
    const hideButton = () => setIsButtonVisible(false);
  
    
   
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      if (currentIndex < fotos.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
    
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    
  
  
  
    return (
        <div  onMouseEnter={showButton} 
        onMouseLeave={hideButton}  style={{ zIndex: 900 }} >
          {isButtonVisible && (
               <button className="previus-cards" onClick={handlePrev} disabled={currentIndex === 0} >
               <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                 <circle cx="26.5" cy="26.5" r="26.5" transform="matrix(-1 0 0 1 53 0)" fill="#B6B6B6"/>
                 <path d="M16.5858 26.4142C15.8047 25.6332 15.8047 24.3668 16.5858 23.5858L29.3137 10.8579C30.0948 10.0768 31.3611 10.0768 32.1421 10.8579C32.9232 11.6389 32.9232 12.9052 32.1421 13.6863L20.8284 25L32.1421 36.3137C32.9232 37.0948 32.9232 38.3611 32.1421 39.1421C31.3611 39.9232 30.0948 39.9232 29.3137 39.1421L16.5858 26.4142ZM19 27H18V23H19V27Z" fill="white"/>
               </svg>
             </button>
   
             )}
  {isButtonVisible && (
              <button className="next-cards" onClick={handleNext} disabled={currentIndex === fotos.length - 4}  >
                
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
        <circle cx="26.5" cy="26.5" r="26.5" fill="#B6B6B6"/>
        <path d="M38.4142 26.4142C39.1953 25.6332 39.1953 24.3668 38.4142 23.5858L25.6863 10.8579C24.9052 10.0768 23.6389 10.0768 22.8579 10.8579C22.0768 11.6389 22.0768 12.9052 22.8579 13.6863L34.1716 25L22.8579 36.3137C22.0768 37.0948 22.0768 38.3611 22.8579 39.1421C23.6389 39.9232 24.9052 39.9232 25.6863 39.1421L38.4142 26.4142ZM36 27H37V23H36V27Z" fill="white"/>
      </svg>   
             </button>
             )}
      
      
            
        <div 
          className="div-container-produtos" style={{  transform: `translateX(-${currentIndex * 28}%)`, transition: 'transform 0.5s ease' }} 
        >
      
          {fotos.map((img, index) => (
            <ProdutoCard key={index} img={img} showButton={false}  />
          ))}
             
           
        </div>
        
  
        </div>
       
      
    );
  };


  export default Produtos;