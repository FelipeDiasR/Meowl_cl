// src/components/LoadingPopup.jsx
import React, {useContext} from 'react';
import './gamming.css'; // Arquivo CSS para estilização
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';




function Gamming () {
  const { isLigmode } = useContext(ThemeContext);

  return (
    <div className={`meow__gamming ${isLigmode ? 'lightmode' : ''}`}>
        <div className="meow__gamming__container">
            <div className="meow__gaming_content">
                <h1> Gaming platform</h1>
                <p> Soon, you will find all the main games from MeowlVerse here.</p>
             </div>
             <div className="meow__gaming_welcome">
                <p>Welcome to the MeowlGaming platform! Here you can choose a game, place your bets, and have fun!</p>
             </div>
      </div>
    </div>
  );
};

export default Gamming;
