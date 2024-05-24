import React , {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import Logotipo from '../../img/logotipo.png';
import Buybutton from '../../img/Buy.png';
import './navbar.css';

const Menu = () => (
<>
<p> <a href="#lauchpad">Preesale</a></p>


</>
)

const Navbar =() => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="meow__navbar">
      <div className="meow__navbar-links">
        <div clasName="meow__navbar-links_logo">      
            <img className="meow__navbar-links_logo_img" src={Logotipo} alt="logo" />
        </div> 
        <div className='meow__navbar-links_container'>
            <Menu />
        </div> 
     
     
     
     
      </div>       
      <div className='meow__navbar-whitepaper-buy'>
         <p> <a href="#lauchpad"> </a>Whitepaper</p>        

      </div>
      <div className='meow__navbar-menu_container_button'>
        
          <img clasName="meow__navbar-menu_container_img" src={Buybutton} alt="buybutton"/>

      </div>
      <div className='meow__navbar-menu'>
        {toggleMenu
           ?<RiCloseLine color= "#fff" size={27} onClick={() => setToggleMenu(false)} />
           :<RiMenu3Line color= "#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="meow__navbar-menu_container">  
            <div ClassName="meow__navbar-menu_container_link"> 
             <Menu />
             <div className='meow__navbar_menu_whitepaper-buy'>
              <p> <a href="#whitwpaper"> </a>Whitepaper</p>        

              </div>
            <div className='meow__navbar-menu_container_button_menu'>
        
            <p> <a href="#lauchpad"> </a>Buy</p>  

      </div>


             </div>
            
            
            
           </div>
            

        )}

        

       </div>
     
    </div>
  )
}

export default Navbar