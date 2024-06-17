import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Banner, Description, Raise, Buy, } from '../../containers';
import { Loading, Approved, Denied } from '../../components';
import { format } from 'date-fns';
import './details.css'; // Certifique-se de que o CSS está importado

const Details = () => {
    const { id } = useParams(); // Pega o ID da URL
    console.log('ID from URL:', id);
    const [project, setProject] = useState(null); // Estado para armazenar o projeto específico


    useEffect(() => {
        const searchingRepositories = async () => {
            try {
                const response = await fetch('/cards.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Data fetched:', data);

                // Busca o projeto com o ID correspondente
                const selectedProject = data.projects.find(project => project.id === parseInt(id));
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
        <div className='meow__details'>
            {
                project ? (
                    <div className='meow__description_firstsection'>
                        <Description 
                            name={project.name}
                            open={project.open}
                            open_sale={formatDate(project.sales_opening_date)}
                            close_sale={formatDate(project.sales_closing_date)}
                            token_price={project.token_price}
                            total_raise={formatCurrency(project.total_to_raise)}
                            website={project.social_links.website}
                            twitter={project.social_links.twitter}
                            telegram={project.social_links.telegram}
                            logo={project.image} 
                            closed={project.closed}
                        />
                        
                         <Raise 
                            description={project.description} 
                            ticker={project.ticker}
                            raising_on={project.raising_on}
                            raising_in={project.raising_in}
                            token_address={project.token_address}
                            smartcontractaddress={project.smartcontractaddress}
                            smartcontractabi={project.smartcontractabi}
                            
                         />
                    </div>
                   
                ) : (
                    <p>Loading project details...</p>
                )
            }
            {
                project ? (
                <Buy
                    name={project.name}
                    status={project.status}
                    open={project.open}
                    ticker={project.ticker}
                    closed={project.closed}
                    raising_on={project.raising_on}
                    raising_in={project.raising_in}
                    smartcontractaddress={project.smartcontractaddress}
                    smartcontractabi={project.smartcontractabi}
                    total_supply={project.tottal_supply}
                    initial_supply={project.initial_supply}
                    marketcap={project.marketcap}
                    claimed_on={project.claimed_on}
                    vesting={project.vesting}
                    tge_avalilble={project.tge_avalilble}
                    token_price={project.token_price}

                />) : (
                
                
                <p>Loading project details...</p>)
                }
          
            <Banner />

        </div>
    );
};

export default Details;
