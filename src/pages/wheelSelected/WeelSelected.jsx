
import React, { useEffect, useState } from 'react';
import './wheelselected.css';
import { StarterWheel, Starter, WheelLanding } from '../../containers';
import { useParams } from 'react-router-dom';

const WeelSelected = () => {
    const {id} = useParams();
    console.log('ID from URL:', id);
    const [game, setGame] = useState(null);

    useEffect(() => {
        const searchingWheel = async () => {
            try {
                const response = await fetch('/wheeloptions.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Data fetched:', data);

                // Busca o projeto com o ID correspondente
                const selectedWheel = data.projects.find(project => project.id === parseInt(id));
                console.log('Selected Project:', selectedWheel);
                setGame(selectedWheel); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        searchingWheel();
    }, [id]);



  return (
    <div className='meow_wheel'>
      <div className="meow_wheel_container">
        <div className="meow_wheel_text">
          <Starter />
        </div>
        <div className="meow_whell_cards">
          <StarterWheel />
        </div>
      </div>
    </div>
  );
}

export default WeelSelected;
