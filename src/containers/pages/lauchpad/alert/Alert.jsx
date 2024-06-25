import { useState } from 'react';
import { LuAlertCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md"; // Adicionando um ícone de fechar
import './alert.css';

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);  
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='meow__alert'>
      <div className='meow__alert_header'>
        <LuAlertCircle className='meow__alert_icon' />
        <h1 className='meow__alert_title'>Always make sure the URL is www.meowlverse.com</h1>
        <MdClose className='meow__alert_icon_close' onClick={handleClose} />
      </div>
      <p className='meow__alert_message'>Be cautious of phishing scams.</p>
    </div>
  );
}

export default Alert;
