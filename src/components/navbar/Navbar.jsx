import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { WiSolarEclipse } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logotipo from '../../img/logo_roxo.svg';
import LogotipoWhite from '../../img/logo_black.svg';
import './navbar.css';
import { useWallet } from '../wallet/Walletcontext';

const Menu = () => (
  <ul>
    <Link to="/nft">NFT Collection</Link>
    <li>
      <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
        Whitepaper
      </a>
    </li>
    <li>
      <Link to="/launchpad" className="link">Launchpad</Link>
    </li>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false); // Estado para controlar o modo de cor
  const { account, connectWallet } = useWallet();

  const toggleColorMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`meow__navbar ${isLightMode ? 'light-mode' : ''}`}>
      <div className='meow__navbar_logo'>
        <Link to="/"><img src={isLightMode ? LogotipoWhite : Logotipo} alt='logotipo' /></Link>
      </div>
      <div className='meow__navbar_lightmode'>
        <button onClick={toggleColorMode} className="color-mode-toggle">
          {isLightMode ? <WiSolarEclipse /> : <FaMoon />} {/* Ícone condicional */}
          {isLightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
      <div className='meow__navbar_whitepaper_wallet'>
        <Link to="/launchpad">Launchpad</Link>
        <Link to="/nft">NFT Collection</Link>
        <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
          Whitepaper
        </a>
        {account ? (
          <button>Connected: {account.slice(0, 6)}...{account.slice(-4)}</button>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
      <div className='meow__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color={isLightMode ? '#000' : '#fff'} size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color={isLightMode ? '#000' : '#fff'} size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          <div className='meow__navbar-menu_container scale-up-center'>
            <div className='meow__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
