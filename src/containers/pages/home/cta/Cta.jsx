import React, { useState, useEffect } from 'react';
import './cta.css';
import Email from '../../../../img/icons/email.svg';
import { FaLocationArrow } from "react-icons/fa";

const Cta = () => {

const [ email, setEmail] = useState(null);
const [isSubscribed, setIsSubscribed] = useState(false);

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleSubscribe = () => {
  // Salva o email em uma constante
  const savedEmail = email;
  console.log('Email saved:', savedEmail);

  // Esconde o texto
  setIsSubscribed(true);

  // Limpa o input
  setEmail('');
};


return (
  <div className='meow_cta section__padding'>
    <div className='meow_cta_container'>
      {isSubscribed ? (
        <h1>Thank you for subscribing!</h1>
      ) : (
        <>
          <h1>Subscribe Newsletter</h1>
          <div className='meow_cta__input'>
            <img className='meow_cta__input_email' src={Email} alt='Email' />
            <input
              className='testando12'
              type='email'
              placeholder='Your email'
              value={email}
              onChange={handleEmailChange}
            />
            <button className='button1' type='button' onClick={handleSubscribe}>
              <FaLocationArrow className='meow_cta_arrow_icon' />
              <h3 className='meow_cta_text'>Subscribe</h3>
            </button>
          </div>
        </>
      )}
    </div>
  </div>
);
}

export default Cta;