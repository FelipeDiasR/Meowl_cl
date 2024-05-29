
import React from 'react';


//import moon from './img/assets/moon4.svg';
//import rede from './img/assets/div3.svg';
//import bloor from './img/assets/bloor.svg';

import './App.css';



import { /*Article,*/ Brand, Cta, /*Fature,*/ Navbar } from './components';
import { Footer, Partners, Header, Preesale, Tokenomics } from './containers';
  
/* <div className='teste'>
            <img src={moon} alt="moon"/>
            </div>
             
            style={{ backgroundImage:`url(${moon})`}}//*/


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'  >
         <Navbar />
         <Header />
        </div>
      <Brand />
      <Preesale />
      <Partners />
      <Tokenomics />
      <Cta/>
      <Footer />
      
     
    </div>


  )




}

export default App;
