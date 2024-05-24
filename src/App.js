
import React from 'react';


//import moon from './img/assets/moon4.svg';
import rede from './img/assets/div3.svg';
//import bloor from './img/assets/bloor.svg';

import './App.css';



import { /*Article,*/ Brand, /*Cta, Fature,*/ Navbar } from './components';
import { Footer, Features, Header, Preesale, Tokenomics } from './containers';
  



const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'  >
         <Navbar />
         <Header />
          <div className='overlay-image' >
            <img src={rede} alt="rede" />
          </div>
          

        </div>
      <Brand />
      <Features />
      <Preesale />
      <Tokenomics />
      <Footer />
      
     
    </div>


  )




}

export default App;
