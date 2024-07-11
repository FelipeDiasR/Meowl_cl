
import React, { useState, useEffect } from 'react';
//import  './game.css'
import './wheelmainpage.css';
//importing parts of the page
//import { /*Article,*Fature,*/ Navbar } from '../../components';
import { WheelLanding, CardsOptions } from '../../containers';
  



const WheelMainPage = () => {

  const [wheel, setWheel] = useState ([]);

  useEffect ( ( ) =>  {
    const SearchWheel = async () => {
      try{
        const response = await fetch('/wheeloptions.json');
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('data fetched', data);
        setWheel(data.projects);
      } catch (error) {
        console.error('error fetching data', error)
      }
    };
    SearchWheel();
  }, []);
 
  return (
    <div className='meow_wheel'>
      <div className= "meow_wheel_container">
        <div className="meow_wheel_text">
          <WheelLanding />
        </div>
        {
         wheel.length > 0 ? (
          <div className="meow_whell_cards">
            {console.log(wheel)}
            {
              wheel.map((repo) => (
                <CardsOptions name={repo.name} status={repo.status}
                description={repo.description} open_toplay={repo.open_toplay}
                image1={repo.image1} image2={repo.image2} id={repo.id}/>
              ))
            }

         </div>
         )  : (
          <p>Soon we are going to have games</p>
         )
        }
        </div>
            
            
          
          
        
      </div>
     
  


  )




}

export default WheelMainPage;
