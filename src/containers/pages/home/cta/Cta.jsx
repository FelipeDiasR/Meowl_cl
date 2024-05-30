import React from 'react';
import './cta.css';
import Email from '../../../../img/icons/email.svg';
import Subscribe from '../../../../img/icons/subscribe.svg';
import { FaLocationArrow } from "react-icons/fa";

const Cta = () => {
  return (
    <div className='meow_cta section__padding'>
      <div className='meow_cta_container'>
        <h1>Subscribe Newsletter</h1>
        <div className='meow_cta__input'>
          <input className='testando12' type='email' placeholder='Your email' />
          <img className='meow_cta__input_email' src={Email} alt='Email' />
          <img className='meow_cta__input_subscribe' src={Subscribe} alt='Subscribe' />
          <button className='button1' type='button'> 
          <FaLocationArrow className='meow_cta_arrow_icon'/> 
          <h3 className='meow_cta_text'>Subscribe</h3>
           </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
