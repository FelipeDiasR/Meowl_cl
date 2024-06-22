import React from 'react';
import ProjectLogo from '../../../../img/logotipo.svg';

//css
import './banner.css';

const Banner = () => {
  return (
    
    <div className='meow__banner section__padding'>
      <div className='meow__banner_content'>
        <div className='meow__banner_text'>
          <h1>Are you a leading project, meme, or crypto initiative shaping the future?</h1>
          <p>Get in touch with us today to discuss launching with Meowl's collaborative incubation and funding opportunities. Access the Meowl community, one of the largest and most engaged in the crypto space. Join us and let's build the future together!</p>
        </div>
        <div className='meow__banner_logo'>
          <img src={ProjectLogo} alt='projectlogo' />
        </div>
      </div>
      <div className="meow__banner__button">
        <a href="https://forms.gle/niLDyFN1MhRRySmn9" target="_blank" rel="noopener noreferrer" className="meow__banner__link">
          Launch Project
        </a>
      </div>
    </div>
  )
}

export default Banner;
