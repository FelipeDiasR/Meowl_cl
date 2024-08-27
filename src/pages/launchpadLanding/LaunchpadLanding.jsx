  import React, { useEffect, useState, useContext } from 'react';
  import { LaunchHeader, CompletedProjects, UpcomingProjects, Banner } from '../../containers/index';
  import { format } from 'date-fns';
  import { ThemeContext } from '../../components/themecontext/ThemeContext';
  import './launchpadLanding.css';


  const LaunchpadLanding = () => {
    const { isLigmode } = useContext(ThemeContext);
    const [repositories , setRepositories] = useState([]);
    const [completedRepositories, setCompletedRepositories] = useState([]);

    
    
    useEffect ( ( ) =>  {
      const searchingRepositories = async () => {
        try {
          const response = await fetch('/projects/cardsProjects.json');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setRepositories(data.projects); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      searchingRepositories();
    }, []);

    useEffect ( ( ) =>  {
      const searchingCompletedRepo= async () => {
        try {
          const response = await fetch('/projects/cardsProjectsCompletd.json');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log('completed:', data);
          setCompletedRepositories(data.projects); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      searchingCompletedRepo();
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
        <div className={`meowl_launchpad${isLigmode ? 'lightmode' : ''}`}>
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
                        <UpcomingProjects name={repo.name} card_background={repo.card_background} website={repo.social_links.website}
                        twitter={repo.social_links.twitter} telegram={repo.social_links.telegram} project_logo={repo.project_logo}
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
          <div className='meowl-completed-content'>
             <div className='meowl-completed_titles'>
               <h1> Completed projects </h1>
               <p> Here  is the track of all our sucessfull IDOS. </p>
              </div>
              {
              repositories.length > 0 ? (
                <div className='meowl_launchpad_upcoming_cards'>
                    {console.log(completedRepositories)}
                    { 
                      completedRepositories.map((repo) => (
                        <CompletedProjects name={repo.name} card_background={repo.card_background} website={repo.social_links.website}
                        twitter={repo.social_links.twitter} telegram={repo.social_links.telegram} project_logo={repo.project_logo}
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
          < Banner />
          
        </div>
      );
    };
    
    export default LaunchpadLanding;
  