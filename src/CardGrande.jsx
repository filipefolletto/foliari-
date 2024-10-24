import React from "react";
import { Link } from 'react-router-dom';
import './css/CardGrande.css';

const CardGrande = ({ img, linha, caracteristicas }) => {
    return (
        <>
            
            <div className="card-produto-grande">
                <div className="apresentacao-do-produto">
                    <h2 className="linha">{linha}</h2>
                <h1 className="nome-do-produto">{img}</h1>
                <img className="img-produto-card-grande" src={`/img/carroucelDesktop/${img}.jpg`} alt={img} />
                </div>
                
                <div className="caracteristicas-do-produto">
                    <h2 className="linha">Características do produto </h2>
                    <p className="caracteristicas-do-produto-p">{caracteristicas}</p>
                </div>

               
        </div>
        
        
        

     
      </>
    );
        
        
        
        
        
  
  
  };
  
export default CardGrande;
