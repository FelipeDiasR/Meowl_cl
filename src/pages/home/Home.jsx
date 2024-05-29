
import React from 'react';


//importing parts of the page
//import { /*Article,*Fature,*/ Navbar } from '../../components';
import { Footer, Partners, Header, Preesale, Tokenomics, Brand, Cta } from '../../containers';
  



const Home = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'  >
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

export default Home;
