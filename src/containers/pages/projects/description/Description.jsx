import ProjectLogo from '../../../../img/logotipo.svg';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


import './description.css'








const Description  = ({ logo, name, website, twitter, telegram, open_sale, close_sale, token_price, total_raise, closed, open }) => {
  

    return (
        <div className='meow__description section__padding'>
            <div className='meow__description_logo_button'>
                <img src={logo} alt='projectlogo'/> 
                <button> {closed ? 'Closed' : open ? 'Open' : 'Open Soon'} </button>
                   
            </div>
            <div className='meow__description_text'>
                <h1> {name} </h1>
                <div className='meow__description_text_icons'>
                    <a href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter/></a>
                    <a href={telegram} target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    <a href={website} target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                </div>
            </div>
            <div className='meow__description_content'>
                <h2> Offerings</h2>
                <h3> {token_price}</h3>
                <p> $ 0,0002 </p>
                <h3> Round start on</h3>
                <p> {open_sale}</p>
                <h3> Round finish on</h3>
                <p> {close_sale}</p>
                <h3>Total Raise</h3>
                <p> {total_raise} </p>
            </div>
            <div className='meow__description_seedetails'> 
            
                <button>{closed ? 'Closed' : open ? 'Buy' : 'Subscribe in the waitlist'}</button>
              
      
            </div>
        
        </div>
    );
  };
  
  export default Description ;