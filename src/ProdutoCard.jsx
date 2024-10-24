import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';





const ProdutoCard = ({ img, showButton, onButtonClick, showTitle, linha }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`card-produto ${isHovered ? 'biggerCard' : ''}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => window.location.href = `/${img}`}
      >
        {showTitle && <h1>Linha</h1>}
        <div className="div-nome-produto">
          <h2 className='linha'> {linha} </h2>
          <h4 className="nomeProduto">{img}</h4>
        </div>
    
        <Link to="/${}">{showButton && <button className='SaibaMais' onClick={onButtonClick}>Saiba Mais</button>}</Link>
        <div className="div-card-img">
          <img className="img-produto-card" src={`/img/carroucelDesktop/${img}.jpg`} alt={img} />
        </div>
      </div>
    );
  };
  
  export default ProdutoCard;