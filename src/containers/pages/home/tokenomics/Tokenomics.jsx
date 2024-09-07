import React, { useContext } from 'react';
import './tokenomics.css';
import Chart from '../../../../img/assets/chartused.svg';
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';

const Tokenomics = () => {

  const { isLigmode } = useContext(ThemeContext);

  return (
    <div className={`meow__tokenomics ${isLigmode ? 'lightmode' : ''}`}>
      <div className='meow__tokenomics_container'>
        <h1>Tokenomics</h1>
        
        <div className='meow__tokenomics_content'>
          <div className='meow__tokenomics_image'>
            <img src={Chart} alt="Chart" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
