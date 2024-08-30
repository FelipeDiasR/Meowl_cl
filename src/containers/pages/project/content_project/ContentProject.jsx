import { useState, useContext } from 'react';
import { LuAlertCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md"; // Adicionando um ícone de fechar
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';
import './contentproject.css';

import testelogo from '../../../../img/1meowlLogo.svg';

const ContentProject = () => {
const { isLigmode } = useContext(ThemeContext);
    const [isAlertVisible, setIsAlertVisible] = useState(true); // Estado para controlar a visibilidade do alerta

    const handleAlertClose = () => {
        setIsAlertVisible(false);  
    };

    return (
        <div className={`meowl_contentProject ${isLigmode ? 'lightmode' : ''}`}>
            <div className='meowl_contentProject_container'>
                <div className='meowl_contentProject_title'>
                    <h6> Project /  MeowlVerse Round one </h6>
                </div>
                <div className='meowl_contentProject_content'>
                    <div className='meowl_contentProject_logo'>
                      <img src={testelogo} alt="logo" />
                      
                    </div>
                    <div className='meowl_contentProject_maincontent'>
                        <div className='meowl_contentProject_firstcontent'>
                            <h1> MeowlVerse R. 1 </h1>
                            <div className='meowl_contentProject_clock_container'>
                                <h2> Launching soon.. </h2>
                                <div className='meowl_contentProject_clock_box'>
                                    <div className='meowl_contentProject_clock_content'>
                                        <p>2 days</p>
                                        <p>2 hours</p>
                                        <p>2 Minutes</p>
                                        <p>2 Seconds</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="text-box-container_cont">
                            <div className="text-box_cont box1">
                                <h5> COMING SOON </h5>
                            </div>
                            <div className="text-box_cont box2">
                                <h5> PUBLIC SALE </h5>
                            </div>
                            <div className="text-box_cont box3">
                                <h5> NO KYC REQUIRED </h5>
                            </div>
                            <div className='meowl_contentProject_paragraph'>
                                <p> 
                                    MeowlVerse is a unique project combining meme culture with blockchain technology.
                                    Featuring a token launchpad and gaming platform, it aims to reshape the meme coin space, 
                                    encouraging creativity and innovation globally.
                                </p>
                                <div className='meowl_contentProject_media'>
                                    <a href={'www.meowlverse.com'} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                                    <a href={'www.meowlverse.com'} target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                                    <a href={'www.meowlverse.com'} target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                                </div>
                            </div>
                           
                        </div>
        
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default ContentProject;
