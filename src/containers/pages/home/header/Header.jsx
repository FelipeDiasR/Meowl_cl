import React from 'react';
import './header.css';

import Logo from '../../../../img/assets/logomwol.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="meow__header" id="home">
      <div className="meow_header_container">
        <div className="meow__header_content">
          <h1 className="gradient_text">
            New Era Of Memes,
            <br />
            Launchpads and
            <br />
            Games.
          </h1>
          <p>
            At MeowlVerse, we believe in the power of memes to inspire and unite
            <br />
            people across the globe. Our mission is to harness the viral appeal of
            <br />
            memes and leverage the transformative potential of blockchain technology
            <br />
            to create a dynamic and inclusive ecosystem that transcends
            <br />
            traditional boundaries.
          </p>
          <div className="meow__header_buttons">
            <div className="meow__header_buttons-button1">
              <Link to={`/details/01`}>
                <button>Buy $ MEOWL</button>
              </Link>
            </div>
            <div className="meow__header_buttons-button2">
              <Link to={`/launchpad`}>
                <button>Start Investing</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="meow__header-img">
          <img src={Logo} alt="LOGO" />
        </div>
      </div>
    </div>
  );
};

export default Header;
