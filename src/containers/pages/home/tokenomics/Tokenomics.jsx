import React from 'react';
import './tokenomics.css';
import Chart from '../../../../img/assets/chart.svg';

const Tokenomics = () => {
  return (
    <div className='meow__tokenomics section__padding'>
      <div className='meow__tokenomics_container'>
        <h1>Tokenomics</h1>
        
        <div className='meow__tokenomics_content'>
          <div className='meow__tokenomics_image'>
            <img src={Chart} alt="Chart" />
          </div>
          <h3>
            Integrations: 3% <br />
            LP Incentives: 20% <br />
            Peesales: 30% <br />
            Airdrops: 15% <br />
            Locked LP: 10% <br />
            Marketing: 7% <br />
            Team: 10% <br />
            Development: 5%
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
