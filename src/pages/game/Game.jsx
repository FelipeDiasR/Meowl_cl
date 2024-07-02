
import React, { useState, useEffect } from 'react';
import  './game.css'

//importing parts of the page
//import { /*Article,*Fature,*/ Navbar } from '../../components';
import { Gamming, CardsGames } from '../../containers';
  



const Game = () => {
  const [cards, setCards] = useState ([]);

  useEffect ( ( ) =>  {
    const SearchCards = async () => {
      try{
        const response = await fetch('/games.json');
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('data fetched', data);
        setCards(data.projects);
      } catch (error) {
        console.error('error fetching data', error)
      }
    };
    SearchCards();
  }, []);

  return (
    <div className='meow_game'>
      <div className= "meow_game_container">
        <div className="meow_game_text">
          <Gamming />
        </div>
        {
          cards.length > 0 ? (
            <div className="meow_game_cards">
              {console.log(cards)}
              {
                cards.map((repo) => (
                  <CardsGames name={repo.name} status={repo.status}
                  description={repo.description} open_toplay={repo.open_toplay}
                  image1={repo.image1} image2={repo.image2}/>

                ))
              }
            
          </div>
          ) : (
            <p>Soon we are going to have games</p>
          )
        }
       
        
      </div>
     
    </div>


  )




}

export default Game;
