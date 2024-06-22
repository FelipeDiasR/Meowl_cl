import { useState } from 'react';


import { LuAlertCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md"; // Adicionando um ícone de fechar
import './alert.css';

const Alert = () => {
  const [isVisible, setIsvisble] = useState(true);

  const handleClose = () => {
    setIsvisble(false);  
  };

  if(!isVisible){
    return null;
  }
  return (
    <div className='meow__alert'>
      <MdClose className='meow__alert_icon_close' onClick={handleClose} />
      <LuAlertCircle className='meow__alert_icon' /> 
      <div className='meow__alert_content'>
        <h1>Always make sure the URL is www.meowl.io</h1>
        <p>Be careful with traps</p>
       
      </div>
      
    </div>
    
  );
}

export default Alert;
