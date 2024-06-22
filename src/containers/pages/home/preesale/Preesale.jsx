import React from 'react';
import './preesale.css';
import { Link } from 'react-router-dom';

const Preesale = () => {
  return (
    <div className='meow__preesale section__padding'>
      <div className='meow__preesale_container'>
        <h1>Preesale start soon</h1>
        <p>
          Join the Meowl crypto presale, engage with the project,
          and see your contribution grow to new heights.
        </p>
        <div className='meow__preesale_buttons'>
          <Link to="/launchpad">
            <button className='meow__preesale_buttons_waitlist' type='button'>
              Wait list
            </button>
          </Link>
          <Link to="/launchpad">
            <button className='meow__preesale_buttons_htbuy' type='button'>
              How to buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Preesale;
