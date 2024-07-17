import React from 'react';
import './tokenomics.css';
import Chart from '../../../../img/assets/chartused.svg';

const Tokenomics = () => {
  return (
    <div className='meow__tokenomics section__padding'>
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
