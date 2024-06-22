import React from 'react';
import './brand.css';
import Foguete from '../../../../img/assets/foguete.svg';
import Game from '../../../../img/assets/game.svg';
import Staking from '../../../../img/assets/staking .svg';

const Brand = () => {
  return (
    <div className='meow__brand section__padding'>
      <div className='meow__brand_container'>
        <div className='meow__brand_title'>
          <h1>What We Offer</h1>
        </div>
        <div className='meow__brand_content_launch'>
          <div className="meow__header_img_foguete">
            <img src={Foguete} alt="image" />
          </div>
          <div className='meow__brand_lauchpad'>
            <h2>LaunchPad</h2>
            <p>
              Explore the MeowlVerse Launchpad, where innovative projects <br />
              and memes with strong fundamentals find a home. Participate in<br />
              token launches, stake your MEOWL tokens, and earn rewards<br />
              while supporting the next wave of crypto innovation.
            </p>
          </div>
        </div>
        <div className='meow__brand_content_gaming'>
          <div className='meow__brand_gaming'>
            <h2>Gaming Platform</h2>
            <p>
              Dive into our integrated gaming platform, where entertainment <br />
              meets decentralized finance (DeFi). Play games, stake tokens,<br />
              and earn rewards in a fun and engaging environment that<br /> 
              celebrates creativity and camaraderie.
            </p>
          </div>
          <div className="meow__header_img_gaming">
            <img src={Game} alt="game" />
          </div>
        </div>

        <div className='meow__brand_content_launch'>
          <div className="meow__header_img_foguete">
            <img src={Staking} alt="image" />
          </div>
          <div className='meow__brand_lauchpad'>
            <h2>Staking System</h2>
            <p>
              Stake your MEOWL tokens and earn rewards while taking <br/>
              advantage of the Launchpad and games, further enhancing your <br/>
              earning opportunities and interaction with the community.<br/> 
              Contribute to the consensus mechanism of our blockchain and<br/>
              enjoy passive income through our staking system..
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand;
