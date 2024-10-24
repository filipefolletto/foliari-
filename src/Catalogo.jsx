import React from 'react';
import ProdutoCard from './ProdutoCard';
import { Link } from 'react-router-dom';

import './css/catalogo.css';




const fotos = [ 
    'Colchões',
    'box',
    'cabeceiras',
    'Linha PET',
    'poltronas',
    'vestuário',
    'acessórios'
    ]
   



const Catalogo = () => {

    const handleButtonClick = () => {
        
      };
    
        

    return( 
    <>
 

    
         <main>  
         
                <nav className="nav-sec-header">
                    
                        <div  className="nav-logo">
                        <Link to="/">   <svg  xmlns="http://www.w3.org/2000/svg" width="106" height="49" viewBox="0 0 106 49" fill="none">
                                    
                                    <path fillRule="evenodd" clipRule="evenodd" d="M47.0932 0.290735C46.7247 0.438907 46.1525 0.891955 45.8221 1.29761C45.4915 1.70295 44.1166 2.56608 42.7666 3.21532C41.3638 3.88984 39.3158 5.26067 37.988 6.41351C36.7096 7.52307 35.3158 8.52932 34.8905 8.64905C31.9289 9.48312 31.2059 11.9528 33.4874 13.4408C33.9425 13.7378 34.6484 14.6338 35.0562 15.4321C35.9708 17.2222 38.0254 19.3374 40.187 20.7139C41.2229 21.3736 41.9411 22.0974 42.149 22.691C42.7707 24.4662 44.4035 24.677 46.018 23.1905C46.4543 22.7886 47.9368 22.0168 49.3122 21.4753C53.3723 19.8767 56.126 17.5833 57.4571 14.6913C57.8255 13.8904 58.4063 13.2705 59.0852 12.9524C60.0309 12.5094 60.1506 12.305 60.2362 10.987C60.3238 9.63666 60.2432 9.44868 59.2543 8.69771C58.6615 8.2475 58.0287 7.87944 57.8474 7.87944C57.6665 7.87944 57.1127 7.34646 56.617 6.69469C55.2695 4.92326 53.7131 3.5439 52.3507 2.91329C51.6813 2.60399 50.952 2.01857 50.7296 1.61291C50.3132 0.853727 48.9063 -0.0343601 48.176 0.00102439C47.9491 0.012082 47.462 0.142562 47.0932 0.290735ZM49.5328 2.63559C49.8832 3.2267 50.4938 3.79127 50.8902 3.89016C52.1053 4.19408 54.2187 5.91213 55.4142 7.56856C56.0391 8.43454 56.7322 9.14317 56.9541 9.14317C57.5583 9.14317 59.0299 10.3883 59.0299 10.8994C59.0299 11.1452 58.5421 11.549 57.9461 11.797C57.1515 12.1275 56.6919 12.6314 56.2232 13.6866C54.523 17.5122 49.5004 20.7461 44.9161 20.9663C44.0481 21.008 43.1912 20.9234 43.0119 20.778C42.8322 20.6327 41.7802 19.9256 40.6738 19.2066C37.2647 16.9916 35.2574 13.8127 35.7426 11.3974C35.895 10.6394 35.8299 10.4069 35.4656 10.4069C35.1904 10.4069 34.9092 10.8072 34.7991 11.3547C34.5811 12.4406 34.0946 12.596 33.8004 11.6735C33.5157 10.7813 33.8127 10.4622 35.1593 10.2139C36.013 10.0562 36.9785 9.40255 38.6579 7.84469C40.738 5.91529 44.7634 3.45638 45.8421 3.45638C46.0478 3.45638 46.5327 3.02987 46.9199 2.50858C47.8549 1.24959 48.7365 1.29224 49.5328 2.63559ZM46.8241 7.04127C45.9891 7.64913 46.6308 7.91356 48.3655 7.67693C49.29 7.55087 49.8263 7.31929 49.8263 7.04664C49.8263 6.47386 47.6089 6.47007 46.8241 7.04127ZM51.6109 11.0814C51.1421 13.414 48.3024 16.0937 46.2991 16.0937C45.2401 16.0937 44.4311 16.3821 44.4311 16.7594C44.4311 17.1432 46.2258 17.1123 47.7067 16.7028C49.9431 16.0845 52.6826 12.8244 52.6826 10.781C52.6826 9.72386 51.8359 9.96144 51.6109 11.0814ZM40.7897 11.6548C40.2702 12.6548 40.1435 13.8822 40.5596 13.8822C40.7808 13.8822 42.2096 11.2757 42.2096 10.8723C42.2096 10.7901 41.9992 10.7228 41.7418 10.7228C41.4844 10.7228 41.056 11.1424 40.7897 11.6548ZM59.0182 17.1205C57.896 18.9295 58.9776 20.8327 61.128 20.8327C62.5959 20.8327 63.4731 19.9057 63.4731 18.3542C63.4731 16.7767 62.7209 16.0937 60.984 16.0937C59.8272 16.0937 59.5729 16.2267 59.0182 17.1205ZM44.4927 22.4774C44.0906 22.8777 43.479 22.5346 43.479 21.9088C43.479 21.5322 43.6082 21.511 44.1477 21.7985C44.6025 22.0408 44.713 22.2582 44.4927 22.4774ZM60.1899 24.5699C59.4774 25.3534 59.5282 26.6996 60.2994 27.4673C61.6133 28.7752 63.7904 27.8916 63.7904 26.0503C63.7904 25.4643 63.566 24.7616 63.2918 24.4883C62.6095 23.8094 60.8389 23.8558 60.1899 24.5699ZM55.962 30.189C55.4748 30.9293 55.4669 31.1021 55.8852 31.8477C56.7668 33.4188 59.3473 32.8618 59.3473 31.1005C59.3473 29.4008 56.9122 28.7452 55.962 30.189ZM69.3002 35.6566C68.2548 36.2913 67.5693 37.574 63.8174 45.914C62.4467 48.9611 62.4591 48.9991 64.7977 48.8869L66.7575 48.7927L68.5836 44.5277C70.9952 38.8949 71.3012 38.36 71.8505 38.8137C72.0886 39.0105 73.2495 41.3718 74.4304 44.061L76.5774 48.9507H78.4168C79.4283 48.9507 80.3226 48.8433 80.4042 48.7122C80.5594 48.462 75.8106 37.9768 74.9493 36.6679C73.9156 35.0974 71.0628 34.5868 69.3002 35.6566ZM0.836258 36.0205C0.223425 36.5001 0 36.9645 0 37.7582V38.8409H7.14072H14.2814V37.1032V35.3656H7.97698C2.07938 35.3656 1.61856 35.4079 0.836258 36.0205ZM22.6697 35.643C19.1213 36.5586 16.8089 40.3668 17.741 43.7603C18.2726 45.6953 19.1911 46.9303 20.7938 47.8655C22.7294 48.9946 27.1509 49.3125 29.8914 48.5191C31.7454 47.9827 33.6594 46.2981 34.2897 44.6487C34.6772 43.6332 34.6817 40.6938 34.2967 39.6863C33.8727 38.5761 32.1263 36.6834 30.9755 36.0869C29.8701 35.5138 24.32 35.2171 22.6697 35.643ZM38.0838 40.594C38.0838 48.8145 38.0194 48.7501 46.4147 48.8964L52.3653 49V47.2377V45.4755L47.5254 45.4707C44.8637 45.4679 42.5111 45.3554 42.2978 45.2205C42.0274 45.0496 41.8833 43.5445 41.8218 40.2493L41.7335 35.5236L39.9087 35.4288L38.0838 35.334V40.594ZM55.5389 42.1582V48.9507H57.4431H59.3473V42.1582V35.3656H57.4431H55.5389V42.1582ZM84.1202 35.8174C83.913 36.066 83.7882 36.8123 83.8431 37.476L83.9431 38.6829L89.3044 38.8409C93.8509 38.9748 94.7164 39.0788 94.9985 39.5252C95.2397 39.9068 95.2166 40.1893 94.9144 40.552C94.5637 40.9725 93.6399 41.0524 89.1311 41.0524H83.7647L83.8539 44.9226L83.9431 48.7927H85.6886H87.4341L87.5274 46.4924L87.6211 44.1918L91.3358 44.2809L95.0509 44.3697L95.2096 46.5812L95.3683 48.7927L97.1931 48.8875L99.018 48.9823V46.4087C99.018 44.5731 98.8663 43.5795 98.4886 42.9432C97.9945 42.1105 97.9945 41.998 98.4886 41.247C99.6762 39.443 98.825 36.9418 96.6961 35.9795C95.5596 35.4661 94.585 35.3786 89.9324 35.3726C85.5994 35.3669 84.4204 35.4572 84.1202 35.8174ZM102.192 42.1582V48.9507H104.096H106V42.1582V35.3656H104.096H102.192V42.1582ZM30.0821 39.8935C30.5232 40.333 30.9038 41.1737 31.0066 41.9367C31.1592 43.0706 31.0637 43.3505 30.2449 44.1653C29.4753 44.9317 28.944 45.1361 27.256 45.3162C23.6564 45.7001 21.2635 44.491 21.2635 42.2883C21.2635 39.7463 22.9436 38.7461 26.8053 38.9887C28.9139 39.1211 29.4566 39.2708 30.0821 39.8935ZM0 45.0016V48.9507H1.74551H3.49102V46.7468V44.5428L8.80689 44.4563L14.1228 44.3697L14.2186 42.711L14.3148 41.0524H7.15722H0V45.0016Z" fill="black"/>
                                </svg>
                        </Link>
                             
                        
                        </div>
    
                        <div className="nav-sec-links">
                            <div className="nav-links">
                                <Link to="/">Home</Link>
                               
                            </div>
                        </div>
                  
                
                </nav>
               
           
            
    
            <section className="catalogo-camas">
                <div className="section-container-camas">
                {fotos.map((img, index) => (
                        <ProdutoCard key={index} img={img} showButton={true} onButtonClick={handleButtonClick} />
                      
                    ))}
           
                </div> 
            </section>  
        </main>
    
        </>
    )
   

}

export default Catalogo;