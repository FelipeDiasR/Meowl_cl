import React, { useState } from 'react';
import './starter.css'; // Arquivo CSS para estilização

import { IoInformationCircleOutline } from 'react-icons/io5';
import wheel from '../../../../img/gamecards/meowlwheel.svg';
import { InfoPopup } from '../../../../components';
// Importar seu arquivo JSON com os dados
import popupData from '../../../../data/text_info.json';

function Starter() {
  const [popupInfo, setPopupInfo] = useState({ show: false, title: '', content: '' });

  // Função para abrir o popup com as informações corretas
  const handleOpenPopup = (title, content) => {
    setPopupInfo({ show: true, title, content });
  };

  // Função para fechar o popup
  const handleClosePopup = () => {
    setPopupInfo({ show: false, title: '', content: '' });
  };

  return (
    <div className="meow__starter_landing">
      <div className="meow__starter_landing_container">
        <div className="meow__starter_landing_content">
          <img src={wheel} alt="wheel" className="meow__starter-image" />
          <div className="meow__starter_wheel-text">
            <h1>Meowl Starter Wheel</h1>
            <div className="meow__starter_rules-section">
              <p>Rules</p>
              <IoInformationCircleOutline
                className="meow_icon-image"
                size={24} // Tamanho do ícone
                onClick={() => handleOpenPopup(popupData.meowlWheelRules.title, popupData.meowlWheelRules.content)}
              />
            </div>
          </div>
        </div>
        <div className="meow__starter_landing_buttons">
          <button className="meow__starter_status-button house-edge" onClick={() => handleOpenPopup(popupData.houseEdge.title, popupData.houseEdge.content)}>
            House Edge = 4%
          </button>
          <button className="meow__starter_status-button meowl-pot" onClick={() => handleOpenPopup(popupData.meowlPot.title, popupData.meowlPot.content)}>
            Meowl Pot = $500
          </button>
        </div>
      </div>
      {/* Renderizar o InfoPopup com base no estado */}
      <InfoPopup show={popupInfo.show} onClose={handleClosePopup} title={popupInfo.title} content={popupInfo.content} />
    </div>
  );
}

export default Starter;
