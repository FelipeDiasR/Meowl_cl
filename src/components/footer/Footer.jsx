import React from 'react';
import './footer.css';

import Logotipo from '../../img/logotipo.svg';
import Division from '../../img/division.svg';

import { FaTwitter, FaTelegram } from "react-icons/fa";

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
          <p>Lauchpad</p>
        </div>
        <div className='meow__footer_secondcolun'>
          <h4>About Meowl</h4>
          <p>Preesale</p>
          <p>Whitepapper</p>
          <p>Buy</p>
          <p>Roadmap</p>
          <p>Team</p>
        </div>
        <div className='meow__footer_division'>
          <img src={Division} alt='division'/>
        </div>
        <div className='meow__footer_copyright'>
          <p>©2021 Meow. All rights reserved.</p>
          <ul className='meow__footer_sociallist'>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
