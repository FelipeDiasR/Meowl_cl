import React, { useState, useEffect } from 'react';
import starter from '../../../../img/gamecards/Meowl_strarter_testing.svg';
import './starterwheel.css';

function StarterWheel() {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleSpin = () => {
    setIsSpinning(true);
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    const rotationAmount = (randomNumber * 360) / 12; // Calcula a rotação baseada no número aleatório
    const totalRotation = rotation + (360 * 3) + rotationAmount; // 3 voltas completas + rotação para o segmento correto

    setRotation(totalRotation);
    setTimeout(() => {
      setIsSpinning(false);
      setResult(randomNumber);
    }, 3000); // Tempo de rotação em milissegundos
  };

  return (
    <div className="meow__starter_wheel_landing">
      <div className="meowl__starter_wheel_container">
        <div className="meowl__starter_wheel_wheel" style={{ transform: `rotate(${rotation}deg)` }}>
          <img src={starter} alt='wheel' className="meowl__starter_wheel_wheel"/>
        </div>
        
        <div className="meowl__starter_buttons">
          {!isConnected && (
            <button className="meowl__starter_wallet" onClick={handleConnect}>
              Connect Wallet to play
            </button>
          )}

          {isConnected && (
            <>
              <div className="meowl__starter_bet_minbet">
                <button className="meowl__starter_bet">
                  Bet
                </button>
                <h4 className="meowl__starter_minbet">Min. Bet: $5 USDC</h4>
              </div>
              <div className="meowl_starter_Spin">
                <button 
                  className="meowl__starter_spinwheel" 
                  onClick={handleSpin} 
                  disabled={isSpinning}
                >
                  {isSpinning ? 'Spinning...' : 'Click to spin'}
                </button>
              </div>
              {result && <h4>Result: {result}</h4>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StarterWheel;
