import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logotipo from '../../img/logotipo.svg';
import './navbar.css';
import { useWallet } from '../wallet/Walletcontext';

const Menu = () => (
  <>
    <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
      Whitepaper
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { account, connectWallet } = useWallet();  // Usando o contexto

  return (
    <div className="meow__navbar">
      <div className='meow__navbar_logo'>
        <Link to="/"> <img src={Logotipo} alt='logotipo' /></Link>
      </div>
      <div className='meow__navbar_preesale'>
        <Link to="/launchpad">
          <button>Preesale</button>
        </Link>
      </div>
      <div className='meow__navbar_whitepaper_wallet'>
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
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          <div className='meow__navbar-menu_container scale-up-center'>
            <div className='meow__navar-menu_container-links'>
              <Menu />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
