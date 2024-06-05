import React from 'react';
import ProjectLogo from '../../../../img/logotipo.svg';

//css
import './banner.css';

const Banner = () => {
  return (
    <div className='meow__banner section__padding'>
      <div className='meow__banner_content'>
        <div className='meow__banner_text'>
          <h1>Are you a top project, meme or Crypto Building the future?</h1>
          <p>Get in touch with us today to discuss launching with PAID Ignition's collaborative incubation and funding opportunities, and access to the PAID community, one of the largest and most engaging communities in the space.</p>
        </div>
        <div className='meow__banner_logo'>
          <img src={ProjectLogo} alt='projectlogo' />
        </div>
      </div>
      <div className="meow__banner__button">
        <button>Launch Project</button>
      </div>
    </div>
  )
}

export default Banner;
