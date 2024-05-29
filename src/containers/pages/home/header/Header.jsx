import React from 'react';
import './header.css';

import { GoArrowRight } from "react-icons/go";
import Bloor from '../../../../img/assets/bloor.svg';
import Rede2 from '../../../../img/assets/rede2.svg';
import Starts from '../../../../img/assets/Canvas.svg';
import moon from '../../../../img/assets/teste5.svg'
import rede from '../../../../img/assets/div3.svg';

const Header =() => {
  return (
    <div className= "meow__header section__padding" id="home" >
      <div className="meow__header-content">
        <div className='overlay-image1'>
        <img src={moon} alt="moon" />
          </div>
        <div className='overlay-image' >   
            <img src={rede} alt="rede" />
        </div> 
        <div className='overlay-image2'>
            <img src={Bloor} alt="bloor" />
          </div>

          <div className='overlay-image3'>
            <img src={Rede2} alt="rede" />
          </div>

          <div className='overlay-image4'>
            <img src={Starts} alt="strats" />
          </div>


        <h1 className="meow__first-text"> New Era Of Memes </h1> 
        <h2 className="meow__first-h2"> The First Meme, Launchpad, and Game All in One. </h2> 
        <p className="meow_second-p"> At MeowlVerse, we believe in the power of memes to inspire, entertain, and unite people <br/>
         across the globe. Our mission is to harness the viral appeal of memes and leverage the <br/> transformative
         potential of blockchain technology to create a dynamic and inclusive <br/>
          ecosystem that transcends traditional boundaries.</p>

          <div className="meow__header_buttons">
            <button className='buttonA' type="button" > Preesale</button>
            <button className='buttonB' type="button"  > Lauchpad  <GoArrowRight className='meow_arrow_icon'/></button>
            


          </div>
          
        
        
       </div>

       

      
      
    </div>
  )
}

export default Header