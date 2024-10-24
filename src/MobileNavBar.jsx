import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';


const MobileNavbar = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [elementosAdicionados, setElementosAdicionados] = useState(false);
    const [timeoutIDs, setTimeoutIDs] = useState([]);
    const [navElements, setNavElements] = useState([]);
  
    const fotosNav = [
        'Colchões',
        'Box',
        'Cabeceiras',
        'Cadeiras',
        'Poltronas',
        'Acessórios',
        'Vestuário',
        'Linha PET',
    ];
  
    const animateLinks = (index) => {
        return {
            animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`,
        };
    };
  
    const handleClick = () => {
        setMenuAberto((prev) => !prev);
        if (!menuAberto) {
            // Abre o menu
            if (!elementosAdicionados) {
                const newTimeoutIDs = [];
                const newNavElements = fotosNav.map((imgs, index) => {
                    const timeoutID = setTimeout(() => {
                        setNavElements((prev) => [
                            ...prev,
                            { img: imgs, animation: animateLinks(index) },
                        ]);
                    }, 500 * (index + 1));
                    newTimeoutIDs.push(timeoutID);
                    return null; // Retornar null, pois estamos atualizando o estado separadamente
                });
                setTimeoutIDs(newTimeoutIDs);
                setElementosAdicionados(true);
            }
        } else {
            // Fecha o menu removendo os elementos e interrompendo os timeouts
            setElementosAdicionados(false);
            timeoutIDs.forEach((timeoutID) => clearTimeout(timeoutID));
            setNavElements([]);
        }
    };
  
    // Limpar timeouts quando o componente é desmontado
    useEffect(() => {
        return () => {
            timeoutIDs.forEach((timeoutID) => clearTimeout(timeoutID));
        };
    }, [timeoutIDs]);
  
    return (
        <div  >
  
  
            <div className={`mobile-menu ${menuAberto ? 'active' : ''}`} onClick={handleClick}>
            
                          
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
                           
                          
            </div>
            <ul className={`pai-list-mobile ${menuAberto ? 'active' : ''}`}>
             
  
                {navElements.map((element, index) => (
                  
                    <li className="nav-list-li" key={index} style={element.animation}>
                        <div className="li-container-img">
                                <img
                                    className="nav-list-img"
                                    src={`/img/imgNavMenu/${element.img}.png`}
                                    alt={element.img}
                                />
                        </div>
                       <Link to={`${element.img}`}><div className="li-container-links">
                            
                                <span>{element.img}</span>
                           
                        </div></Link> 
                    </li>
                   
                ))}
            </ul>
        </div>
    );
  };


  export default MobileNavbar;