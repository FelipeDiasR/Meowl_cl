import React, { useEffect, useState } from 'react';
import { LaunchHeader, CompletedProjects, UpcomingProjects, Banner } from '../../containers/index';
import { format } from 'date-fns';


const LaunchpadLanding = () => {

  const [repositories , setRepositories] = useState([]);

  useEffect ( ( ) =>  {
    const searchingRepositories = async () => {
      try {
        const response = await fetch('/cardsProjects.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        setRepositories(data.projects); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    searchingRepositories();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM dd, yyyy');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

    return (
      <div className='meowl_launchpad'>
        <div className='meowl_launchpad_container'>
          <div className='meowl_launchpad_header'>
            < LaunchHeader />
          </div>
          {
            repositories.length > 0 ? (
              <div className='meowl_launchpad_upcoming_cards'>
                  {console.log(repositories)}
                  { 
                    repositories.map((repo) => (
                      <UpcomingProjects name={repo.name} card_background={repo.card_background} website={repo.website}
                      twitter={repo.social_links.twitter} telegram={repo.social_links.telegram}
                      status={repo.social_links.status} built_on_logo={repo.built_on_logo} round_start_on={repo.round_start_on}
                      token_price={repo.token_price} total_raise={formatCurrency(repo.total_raise)} id={repo.id}
                      tag1={repo.tag1} tag2={repo.tag2} tag3={repo.tag3} description={repo.description}
                      distribution={repo.distribution} vesting={repo.vesting} tge_date={repo.tge_date}
                      active={repo.active}/>
                    ) )          
                  }
                </div>
// close_sale={formatDate(repo.sales_closing_date)}
            ) : (
              <p> Soon we are going to have projects...</p>
            )
          }
        </div>
        
        
        < CompletedProjects />
        < Banner />
        
      </div>
    );
  };
  
  export default LaunchpadLanding;
 