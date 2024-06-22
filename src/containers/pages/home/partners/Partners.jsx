import React from 'react';
import './partners.css';
import { Base, mwol, Pollygon } from '../../../../img/partners/imports';

function Partners() {
  return (
    <div className='meow__partners section__padding'>
      <h2>Backed by</h2> 
      <div className='meow__partners_container'>  
        <div className='meow__partner_image'>
          <img src={Base} alt="Pollygon" />
        </div>
        <div className='meow__partner_image'>
          <img src={Pollygon} alt="Base" />
        </div>
        <div className='meow__partner_image'>
          <img src={mwol} alt="MeowlVerse" />
        </div>
      </div>
    </div>
  )
}

export default Partners;
