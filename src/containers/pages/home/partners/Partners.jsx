import React from 'react';
import './partners.css';
import { Base, MeowlVerse, Pollygon} from '../../../../img/partners/imports'

function Partners() {
  return (
    <div className='meow__partners section__padding'>
      <h2> Backed by</h2> 
      <div className='mewo_partners-container'>  

           
        <div className='overlay-imagepolly'>
        <img src={Pollygon} alt="Pollygon" />
        </div>
        
        <div className='overlay-imagebase'>
        <img src={Base} alt="Base" />
      	</div>
      	<div className='overlay-imagemeowl'>
        <img src={MeowlVerse} alt="MeowlVerse" />
	      </div>
        
        </div>
      </div>
      
      
      
  
  )
}

export default Partners 