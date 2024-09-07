import { useContext, useState } from 'react';
import './upcomingprojects.css';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';

import { Link } from 'react-router-dom';

const UpcomingProjects = ({ name, card_background, website,
  twitter, telegram, status, built_on_logo, token_price, project_logo,
  round_start_on, total_raise, tag1, tag2, tag3, description,
  distribution, vesting, tge_date, active, id  }) => {

  const { isLigmode } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0); // Estado para o índice ativo

  // Array com os conteúdos mutáveis
  const contentList = [
    {
      section: "Offerings",
      content: (
        <>
          <h3> Token Price</h3>
          <p> {token_price} </p>
          <h3> Round start on</h3>
          <p> {round_start_on}</p>
          <h3> Total Raise</h3>
          <p> $ {total_raise}</p>
        </>
      ),
    },
    {
      section: "Description",
      content: (
        <div>
          <div className="text-box-container">
            <div className="text-box box1">
              <h5> {tag1} </h5></div>
            <div className="text-box box2">
              <h5> {tag2} </h5></div>
            <div className="text-box box3">
             <h5> {tag3} </h5> </div>
          </div>
          <h4 className='text-box-p'>
            {description}
          </h4>
        </div>
      ),
    },
    {
      section: "Other Information",
      content: (
        <>
          <h3> Distribution </h3>
          <p> {distribution} </p>
          <h3> Vesting</h3>
          <p> {vesting} </p>
          <h3> TGE </h3>
          <p> {tge_date}</p>
        </>
      ),
    }
  ];

  // Atualiza o índice ativo
  const handleSectionClick = (index) => {
    setActiveIndex(index); // Atualiza o estado para a seção ativa
  };

  return (
    <div className={`meowl_upcoming ${isLigmode ? 'lightmode' : ''}`}>
      <div className='meowl_upcoming_container'>
        <div className='meowl_upcoming_container_card'>
          <div className='meowl_upcoming_background'>
            <img src={card_background} alt='projectback' className='upcoming_background' />
            <button className='meowl_upcoming_status'>
              Coming soon
            </button>
          </div>
          <div className='meowl_upcoming_logo'>
            <img src={project_logo} alt="logo" />
          </div>
          <div className='meowl_upcoming_content_first'>
            <div className='meowl_upcoming_content_title_midia'>
              <h1> {name }</h1>
              <div className='meowl_upcoming_content_media'>
                <a href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                <a href={telegram} target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                <a href={website} target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
              </div>
            </div>
            <div className='meowl_upcoming_content_built_container'>
              <div className='meowl_upcoming_content_built'>
                <p> Project built on </p>
                <img src={built_on_logo} alt='logo' />
              </div> 
            </div>
          </div>
          <div className='meowl_upcoming_content_second'>
            <div className='meowl_upcoming_content_navbar'>
              <h3
                className={activeIndex === 0 ? 'active' : ''}
                onClick={() => handleSectionClick(0)}
              >
                Offerings
              </h3>
              <h3
                className={activeIndex === 1 ? 'active' : ''}
                onClick={() => handleSectionClick(1)}
              >
                Description
              </h3>
              <h3
                className={activeIndex === 2 ? 'active' : ''}
                onClick={() => handleSectionClick(2)}
              >
                Other Information
              </h3>
            </div>
            <div className='meowl_upcoming_content_data'>
              {contentList[activeIndex].content}
            </div>
            <div className='meowl_upcoming_content_button'>
              <Link to={`/project/${id}`}>
                <button>See Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;
