import React from 'react';
import './cta.css';
import Email from '../../../../img/icons/email.svg';
import Subscribe from '../../../../img/icons/subscribe.svg';



const Cta = () => {
  return (
    <div className='meow_cta section__padding '>
        <div className='meow_cta_container'>
            <h1> Subscribe Newsletter  </h1>
           
          
          <div className='meow_cta__input'>
          <input type='email'placeholder='Your email'></input>
          
          <img className='meow_cta__input_email' src={Email} alt='Email'/>
          <img className='meow_cta__input_subscribe' src={Subscribe} alt='subscribe'/>
      
          <button className='button1' type='button'> Subscribe </button>
          </div>
          
          
          </div>
      </div>
  )
}

export default Cta