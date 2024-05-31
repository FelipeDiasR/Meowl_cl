import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import Logotipo from '../../img/logotipo.svg';
import Buybutton from '../../img/Buy.png';
import './navbar.css';

const Menu = () => (
  <>
   <button><a href="#lauchpad">Preesale</a></button>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="meow__navbar">
      <div className="meow__navbar-links">
        <div className="meow__navbar-links_logo">
          <img className="meow__navbar-links_logo_img" src={Logotipo} alt="logo" />
        </div>
        <div className='meow__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='meow__navbar-whitepaper-buy'>
        <p><a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">Whitepaper</a></p>
      </div>

      <div className='meow__navbar-menu_container_button'>
        <img className="meow__navbar-menu_container_img" src={Buybutton} alt="buybutton" />
      </div>

      <div className='meow__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="meow__navbar-menu_container">
            <div className="meow__navbar-menu_container_link">
              <Menu />
              <div className='meow__navbar_menu_whitepaper-buy'>
                <p><a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">Whitepaper</a></p>
              </div>
              <div className='meow__navbar-menu_container_button_menu'>
                <p><a href="#lauchpad">Buy</a></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
