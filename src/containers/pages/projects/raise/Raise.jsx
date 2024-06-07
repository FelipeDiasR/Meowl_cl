import './raise.css';

//import ProjectLogo from '../../../../img/logotipo.svg';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Raise =  ({ description, ticker, raising_on, raising_in, token_address}) => {
  

  return (
      <div className='meow__raise section__padding'>
          <div className='meow__raise_logo_button'>
              <h1> Description </h1>
              <p> {description} </p>
                 
          </div>
          <div className='meow__raise_text'>
              <h1> Raise details </h1>
              
          </div>
          <div className='meow__raise_content'>
              <h2> Token Ticker - {ticker} </h2>
              <h3> Token address </h3>
              <p> {token_address} </p>
              <h3> Raising on</h3>
              <p> {raising_on}</p>
              <h3> Raising in</h3>
              <p> {raising_in} </p>
              <h3>Current progress</h3>
              <p> 0% </p>
          </div>
          <div className='meow__raise_seedetails'> 
          
              <button>Animação</button>
            
    
          </div>
      
      </div>
  );
};
  
  export default Raise;