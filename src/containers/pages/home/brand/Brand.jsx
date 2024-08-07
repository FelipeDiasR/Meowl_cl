import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router DOM
import './brand.css';
import Foguete from '../../../../img/assets/foguete.svg';
import Game from '../../../../img/assets/game.svg';
import Staking from '../../../../img/assets/nft2.svg';

const Brand = () => {
  return (
    <div className='meow__brand section__padding'>
      <div className='meow__brand_container'>
        <div className='meow__brand_title'>
          <h1>What We Offer</h1>
        </div>
        <div className='meow__brand_content_launch'>
          <div className="meow__header_img_foguete">
          <Link to="/launchpad"><img src={Foguete} alt="image2" /></Link>
          </div>
          <div className='meow__brand_lauchpad'>
            <Link to="/launchpad"><h2>LaunchPad</h2></Link>
            <Link to="/launchpad"> <p>
              Explore the MeowlVerse Launchpad, where innovative projects <br />
              and memes with strong fundamentals find a home. Participate in<br />
              token launches, stake your MEOWL tokens, and earn rewards<br />
              while supporting the next wave of crypto innovation.
            </p></Link>
          </div>
        </div>
        <div className='meow__brand_content_gaming'>
          <div className='meow__brand_gaming'>
            <Link to="/game"><h2>Gaming Platform</h2></Link>
            <Link to="/game"> <p>
              Dive into our integrated gaming platform, where entertainment <br />
              meets decentralized finance (DeFi). Play games, stake tokens,<br />
              and earn rewards in a fun and engaging environment that<br /> 
              celebrates creativity and camaraderie.
            </p></Link>
          </div>
          <div className="meow__header_img_gaming">
            <Link to="/game"> <img src={Game} alt="game" /></Link>
          </div>
        </div>

        <div className='meow__brand_content_launch'>
          <div className="meow__header_img_foguete">
            <img src={Staking} alt="Staking" />
          </div>
          <div className='meow__brand_lauchpad'>
            <h2>NFT Collection</h2>
            <p>
              Exclusive MeowlVerse NFT collection. Each NFT offers unique<br/>
              benefits within the ecosystem, including participation in <br/>
              special events, rewards, and contributing to the community's <br/>
              growth. These NFTs are more than collectibles, they have real<br/>
              utilities. See all details below:
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand;
