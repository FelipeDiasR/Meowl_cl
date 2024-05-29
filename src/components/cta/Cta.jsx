import React from 'react';
import './cta.css';
import Email from '../../img/icons/email.svg';

const Cta = () => {
  return (
    <div className='meow_cta section__padding '>
        <div className='meow_cta_container'>
            <h1> Join the preesale </h1>
          
          
          <input type='email' clasname='input' required></input>

          <div className='meow_cta_button'>
            <button className='button1' type='button'> subscribe</button>
            </div>
          
          </div>
      </div>
  )
}

export default Cta