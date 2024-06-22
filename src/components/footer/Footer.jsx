import React from 'react';
import './footer.css';

import Logotipo from '../../img/logotipo.svg';
import Division from '../../img/division.svg';

import { FaTwitter, FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='meow__footer section__padding'>
      <div className='meow__footer_links'>
        <div className='meow__footer-logo'>
          <img className="meow__footer_logo_img" src={Logotipo} alt="logo"/>
          <h3>Experience the next level <br/> of Memes.</h3>
        </div>
        <div className='meow__footer_firstcolun'>
          <h4>Meowl Verse</h4>
          <p>Gamming Platform</p>
          <Link to="/launchpad" className="link">
          <p>Lauchpad</p>
          </Link>
        </div>
        <div className='meow__footer_secondcolun'>
          <h4>About Meowl</h4>
          <Link to="/launchpad" className="link">
          <p>Preesale</p>
          </Link>
          <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
          <p>Whitepapper</p>  
          </a>
          <Link to="/launchpad" className="link">
          <p>Buy</p>
          </Link>
          <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/roadmap" target="_blank" rel="noopener noreferrer">
          <p>Roadmap</p>
          </a>
          
        </div>
        <div className='meow__footer_division'>
          <img src={Division} alt='division'/>
        </div>
        <div className='meow__footer_copyright'>
          <p>©2021 Meow. All rights reserved.</p>
          <ul className='meow__footer_sociallist'>
            <li>
            <a href="https://x.com/MeowlVerse" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
              </a>
            </li>
            <li>
            <a href="https://t.me/+riHQZk6L02I4ODNh" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
