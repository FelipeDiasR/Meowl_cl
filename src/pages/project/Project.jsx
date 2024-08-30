import React, { useEffect, useState, useContext } from 'react';
import { HeaderProject, ContentProject, BannerProject, NavegationProject, Banner } from '../../containers/index';
import { format } from 'date-fns';
import { ThemeContext } from '../../components/themecontext/ThemeContext';
//import './launchpadLanding.css';


const Project = () => {
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
            < HeaderProject />
          </div>
         <ContentProject/>
         </div>
         <NavegationProject />
        < Banner />
        
      </div>
    );
  };
  
  export default Project;
