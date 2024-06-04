import React from 'react';
import './brand.css';
import Foguete from '../../../../img/assets/foguete.svg';
import Game from '../../../../img/assets/game.svg';
import Staking from '../../../../img/assets/staking .svg';
//import BackgroundHero from '../../../../img/assets/backgroundhero.svg';


const Brand =() => {
  return (
    <div className='meow__brand section__padding' > 
       <div className='meow__brand_first-content'>
          <h1> What we offer </h1>
          <h2> Launchpad </h2>
          <p>Explore the MeowlVerse Launchpad, where innovative projects <br/> 
          and memes with strong fundamentals find a home. Participate in<br/> 
          token launches, stake your MEOWL tokens, and earn rewards<br/> 
          while supporting the next wave of crypto innovation.</p>

          <div className='overlay-imagefoguete'>
            <img src={Foguete} alt="Foguete" />
          </div>
         </div>
        <div className='meow__brand_second-content'>
          <h2> Gaming Platform</h2>
          <p>Dive into our integrated gaming platform, where entertainment <p/>
           meets decentralized finance (DeFi). Play games, stake tokens,<p/>
          and earn rewards in a fun and engaging environment that<p/> 
          celebrates creativity and camaraderie.</p>

          <div className='overlay-imagegame'>
            <img src={Game} alt="Game" />
          </div>           
        </div>
        <div className='meow__brand_third-content'>
          <h2> Staking System</h2>
          <p>Stake your MEOWL tokens and earn rewards while taking <br/>
          advantage of the Launchpad and games, further enhancing your <br/>
          earning opportunities and interaction with the community.<br/> 
          Contribute to the consensus mechanism of our blockchain and<br/>
          enjoy passive income through our staking system..</p>

          <div className='overlay-imagestaking'>
            <img src={Staking} alt="Staking" />
          </div>           
        </div>
    
    </div>
  )
}
export default Brand