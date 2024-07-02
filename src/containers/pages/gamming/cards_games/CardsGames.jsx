// src/components/LoadingPopup.jsx
import React from 'react';
import './cards_games.css'; // Arquivo CSS para estilização
//import background from '../../../../img/gamecards/meowlrouletback.svg'
//import wheelLogo from '../../../../img/gamecards/meowlwheel.svg';

const CardsGames = ({ name, status, description, open_toplay, image1,
  image2}) => {




  return (
    <div className="meow__cardsGames">
      <div className="meow__cardsGames__container">
        <div className="meow__cardsGames__background">
          <img src={image1} alt='projectbackground' className="background-image"/> 
          <button className="status-button">
            {status}
          </button>
        </div>
        <div className="meow__cardsGames__logo">
          <img src={image2} alt='projectlogo'/>
        </div>
        <div className="meow__cardsGames__text">
          <h1> {name} </h1>
          <p>{description}</p>
          <button className="play-button">
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsGames;
