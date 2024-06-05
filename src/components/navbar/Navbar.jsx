import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logotipo from '../../img/logotipo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
         Whitepaper</a>
  
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="meow__navbar">
      <div className='meow__navbar_logo'>
       <Link to="/home"> <img src={Logotipo} alt='logotipo'/></Link>
        </div>
      <div className='meow__navbar_preesale'>
        <Link to="/lauchpad">
          <button>Preesale</button>
        </Link>   
        </div>
      <div className='meow__navbar_whitepaper_wallet'>
        <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
         Whitepaper</a>
        <button> Connect Wallet </button>
        </div>
      <div className='meow__navbar-menu'>
        {toggleMenu
         ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
         : < RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
         }
         {toggleMenu && 
           <div className='meow__navbar-menu_container scale-up-center'> 
            <div className='meow__navar-menu_container-links'> 
            <Menu/>
            </div>
           </div>
           
           
           }
        </div>


      
    </div>
  );
}

export default Navbar;
