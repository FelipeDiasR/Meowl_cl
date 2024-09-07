import React, { useState, useContext } from 'react';
import './cta.css';
// import Email from '../../../../img/icons/email.svg'; // Remova esta linha
import { FaLocationArrow } from "react-icons/fa";
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';
import { MdEmail } from "react-icons/md"; // Mantém esta linha
const Cta = () => {

const [ email, setEmail] = useState(null);
const [isSubscribed, setIsSubscribed] = useState(false);
const { isLigmode } = useContext(ThemeContext);

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
  <div className={`meow_cta ${isLigmode ? 'lightmode' : ''}`}>
    <div className='meow_cta_container'>
      {isSubscribed ? (
        <h1>Thank you for subscribing!</h1>
      ) : (
        <>
          <h1>Subscribe Newsletter</h1>
          <div className='meow_cta__input'>
            <MdEmail className='meow_cta__input_email' /> {/* Substituído aqui */}
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
