// src/components/LoadingPopup.jsx
import React from 'react';
import './cardsOptions.css'; // Arquivo CSS para estilização
//import  BackStarter from'../../../../img/gamecards/Meowl_starter.svg';
//import  BackLogo from'../../../../img/gamecards/Meowl_strarterlogo.svg';
import { Link } from 'react-router-dom';


const CardsOptions = ({ name, status, description, open_toplay, image1,
  image2, id}) => {

  return (
    <div className="meow__cardsOptions">
      <div className="meow__cardsOptions__container">
        <div className="meow__cardsOptions__background">
          <img src={image1} alt='projectbackground' className="background-image"/> 
          <button className="status-button">
            {status}
          </button>
        </div>
        <div className="meow__cardsOptions__logo">
          <img src={image2} alt='projectlogo'/>
        </div>
        <div className="meow__cardsOptions__text">
          <h1> {name} </h1>
          <p>{description}</p>
          <Link to={`/wheelselected/${id}`}>
          <button className="play-button">
            Play
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsOptions;

