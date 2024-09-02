import React, { useEffect, useState, useContext } from 'react';
import { HeaderProject, ContentProject, BannerProject, NavegationProject, Banner } from '../../containers/index';
import { format } from 'date-fns';
import { ThemeContext } from '../../components/themecontext/ThemeContext';
//import './launchpadLanding.css';
import { useParams } from 'react-router-dom';


const Project = () => {
  const { isLigmode } = useContext(ThemeContext);
  const [repositories , setRepositories] = useState([]);
  const [completedRepositories, setCompletedRepositories] = useState([]);
  const { id } = useParams(); // Pega o ID da URL
  console.log('ID from URL:', id);
  const [project, setProject] = useState(null);
  
  
  useEffect(() => {
    const searchingRepositories = async () => {
        try {
            const response = await fetch('/projects/cardsProjects.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Data fetched:', data);

            // Converte o ID da URL para número antes de comparar
            const selectedProject = data.projects.find(project => project.id === Number(id));
            console.log('Selected Project:', selectedProject);
            setProject(selectedProject); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    searchingRepositories();
  }, [id]);




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
          {
                project ? (
                <ContentProject
                    name={project.name}
                    description={project.description}
                    project_logo={project.project_logo}
                    id={project.id}
                    clock={project.clock}
                    sub_title={project.sub_title}
                    tagProject1={project.tagProject1}
                    tagProject2={project.tagProject2}
                    tagProject3={project.tagProject3}
                />) : (
                
                
                <p>Loading project details...</p>)
                }
        
         </div>
         {
            project ? (
        
            <NavegationProject 
            /> ) : (
                <p> Loading project details...</p>
            )

         }
        < Banner />
        
      </div>
    );
  };
  
  export default Project;
