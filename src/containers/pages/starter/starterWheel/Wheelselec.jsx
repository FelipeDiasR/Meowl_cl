import React, { useState, useEffect } from 'react';
import {StartingWheel} from '../../../../components/index';



  

function Wheelselec() {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  

  return (
    <div className="meow__starter_wheel_landing">
      <div className="meowl__starter_wheel_container">
        <div className="meowl__starter_wheel_wheel">
         < StartingWheel />
        </div>
        
        <div className="meowl__starter_buttons">
         
        </div>
      </div>
    </div>
  );
}

export default Wheelselec;
