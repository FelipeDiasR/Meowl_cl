import { useState, useContext } from 'react';
import { LuAlertCircle } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io"; // Adicionando um ícone de fechar
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';
import testebanner from '../../../../img/testebanner.svg'
import testebaseProject from '../../../../img/testebaseproject.svg'
import {logoBlackProject, logoBlackProject2, logoWhiteProject, logoWhiteProject2 } from '../../../../img/index';
import { InfoPopup } from '../../../../components';
// Importar seu arquivo JSON com os dados
import popupData from '../../../../data/text_info.json';

import './navegationproject.css';

const NavegationProject = () => {

    const { isLigmode } = useContext(ThemeContext);
    const [isAlertVisible, setIsAlertVisible] = useState(true); // Estado para controlar a visibilidade do alerta
    const [activeIndex, setActiveIndex] = useState(0);
    const [popupInfo, setPopupInfo] = useState({ show: false, title: '', content: '' });

     // Função para abrir o popup com as informações corretas
    const handleOpenPopup = (title, content) => {
        setPopupInfo({ show: true, title, content });
    };

    // Função para fechar o popup
    const handleClosePopup = () => {
        setPopupInfo({ show: false, title: '', content: '' });
    };
    
    const [isBuyClaimActive, setIsBuyClaimActive] = useState(false);


    const handleSectionClick = (index) => {
        console.log(index);
        setActiveIndex(index);
        if (index === 4) {
            setIsBuyClaimActive(true);
          } else {
            setIsBuyClaimActive(false);
          }
        };

    const contentList = [
        {
            section: "Token Sale",
            content: (
                <>
                <div className='meowl_navegation_pools_container'>
                            <div className='meowl_navegation_earlier'>
                                <div className='meowl_navegation_earlier_content'>
                                    <div className='meowl_vanegation_earlier_title'>
                                        <img src={isLigmode ? logoBlackProject : logoWhiteProject} alt='logotipo' /> 
                                        <h2>EarlierMeowl</h2>
                                        <IoMdInformationCircleOutline className='meowl_navegation_pools_icon'
                                         onClick={() => handleOpenPopup(popupData.meowlEarlier.title, popupData.meowlEarlier.content)} />
                                        
                                    </div>
                                    <h3>Open Time</h3>
                                    <p>TBD</p>
                                    <h3>Supply offered</h3>
                                    <p>1 800 000 000 MEOWL</p>
                                    <h3>Size</h3>
                                    <p>$ 200 000</p>
                                </div>
                            </div>
                            <div className='meowl_navegation_earlier'>
                                <div className='meowl_navegation_earlier_content'>
                                    <div className='meowl_vanegation_earlier_title'>
                                        <img src={isLigmode ? logoBlackProject2 : logoWhiteProject2} alt='logotipo' /> 
                                        <h2>OpenMeowl   </h2>
                                        <IoMdInformationCircleOutline className='meowl_navegation_pools_icon'
                                         onClick={() => handleOpenPopup(popupData.openMeowl.title, popupData.openMeowl.content)} />
                                    </div>
                                    <h3>Open time   </h3> 
                                    <p>TBD</p>
                                    <h3>Supply offered</h3>
                                    <p>1 800 000 000 MEOWL</p>
                                    <h3>Size</h3>
                                    <p>$ 200 000</p>
                                </div>
                            </div>  
                    </div>
             </>
            ),
          },
        {
          section: "Description",
          content: (
            <>
                <div className='meowl_navegation_description'>
                    <h3> About MeowlVerse </h3>
                    <p> 
                        MeowlVerse is a groundbreaking project that combines the whimsical                         
                        spirit of memes with the transformative power of blockchain technology.                        
                        It represents more than just another meme coin; it embodies creativity,                        
                        innovation, and community-driven collaboration. By leveraging the viral             
                        appeal of memes, MeowlVerse creates an engaging and inclusive platform for              
                        investors, gamers, and meme enthusiasts alike. <br/>
                        <br/>
                        MeowlVerse features a token launchpad for new meme coins, democratizing
                        access to token launches and providing a platform for emerging projects.
                        It also includes an integrated gaming platform with various meme-inspired 
                        games, where players can stake Meowl tokens to participate and earn rewards.<br/>
                        <br/>
                        As a community-driven ecosystem, MeowlVerse thrives on collaboration and 
                        creativity. Through a combination of airdrops, community initiatives, and 
                        engagement programs, it empowers its community to shape the platform's future 
                        and contribute to its success. Join us in unleashing the power of memes with 
                        MeowlVerse and building a vibrant, inclusive ecosystem that celebrates creativity
                        and innovation. 
                        
                    </p>
                </div>
            </>

          ),
        },
        {
          section: "Token Info",
          content: (
            <>
                <div className='meowl_navegation_tokenInfo_container'>
                            <div className='meowl_navegation_price'>
                                <div className='meowl_navegation_earlier_content'>
                                    <h3>Launch Price</h3>
                                    <p> $ 0.0001</p>
                                </div>
                            </div>
                            <div className='meowl_navegation_price'>
                                <div className='meowl_navegation_earlier_content'>
                                    <h3>Current Price</h3>
                                    <p> -</p>
                                </div>
                            </div>
                            <div className='meowl_navegation_price'>
                                <div className='meowl_navegation_earlier_content'>
                                    <h3>ATH Price</h3>
                                    <p> -</p>
                                </div>
                            </div>
    
                    </div>
             </>
          ),
        },
        {
          section: "Vesting",
          content: (
            <>
              <div className='meowl_navegation_token_info'>
                        <div className='meowl_navegation_token_info_container'>
                            <div className='meowl_navegation_token_info_title'>
                                
                                <div className='meowl_navegation_title_container'>
                        
                                    <div className='meowl_navegation_token_info_h2'>
                                        <h2>Vesting Info</h2>
                                        <IoMdInformationCircleOutline className='meowl_navegation_pools_icon' 
                                     onClick={() => handleOpenPopup(popupData.Claimsection.title, popupData.Claimsection.content)}/>
                                    </div>            
                                    <div className='meowl_navegation_token_info_data1'>
                                        <h3>Vesting</h3>
                                        <p>10% TGE,  1 month cliff, monthly linear</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data2'>
                                        <h3> TGE Release </h3>
                                        <p> TBD</p>
                                    </div> 
 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Number of release </h3>
                                        <p> 25</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Cliff </h3>
                                        <p> 30 Days</p>
                                    </div> 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Claims after Cliff </h3>
                                        <p> Monthly</p>
                                    </div> 
                                
                                </div>
                                    
                            </div>

                            
                        </div>       
                    </div>
            </>
          ),
        }
        ,
        {
          section: "Buy / Claim",
          content: (
            <>
              <div className='meowl_navegation_pools_container'>
                            <div className='meowl_navegation_BuyMint'>
                                <div className='meowl_navegation_earlier_content'>
                                    <div className='meowl_buy_title1'>
                                        <h2>Buy</h2>         
                                    </div>
                                    <p>To be able to buy it you must  have USDC on base</p>
                                    <div className='meowl_buy_title_input'>
                                        <input className='meow_buy_input1' type='text' placeholder="USDC" />
                                        <input className='meow_buy_input2' type='text' placeholder="MEOWL"/>
                                        <div className='meow__buy_title_buttons'>
                                            <button className='desktop-only' > Buy </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='meowl_navegation_BuyMint'>
                            <div className='meowl_navegation_token_info_title'>
                                
                                <div className='meowl_navegation_user_container'>
                        
                                    <div className='meowl_navegation_token_info_h2'>
                                        <h2>User Info</h2>
                                        
                                    </div>            
                                    <div className='meowl_navegation_token_info_data1'>
                                        <h3>Total Purchased</h3>
                                        <p>1 000 000 000</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data2'>
                                        <h3> Tge Amount </h3>
                                        <p> 100 000 0</p>
                                    </div> 
 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Claim amount after TGE </h3>
                                        <p> 90 000 00</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Total number of claims </h3>
                                        <p> 20</p>
                                    </div> 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Claimed </h3>
                                        <p> 5 </p>
                                    </div> 
                                
                                </div>
                                    
                            </div>
                            </div>  
                           
                    </div>
            </>
          ),
        },
        
      ];

   

    return (
        <div className={`meowl_navegation ${isLigmode ? 'lightmode' : ''}`}>
           <div className='meowl_navegation_container'>
                <div className='meowl_navegation_content'>
                    <div className='meowl_navegation_contentFirst'>
                        <img className='banner_project' src={testebanner} alt="logo" />
                        <div className='meowl_navegation_paragraph'>
                            <p 
                                className={activeIndex === 0 ? 'actived' : ''}
                                onClick={() => handleSectionClick(0)}
                            >
                                Token Sale
                            </p>
                            <p 
                                className={activeIndex === 1 ? 'actived' : ''}
                                onClick={() => handleSectionClick(1)}
                            >
                                Description
                            </p>
                            <p 
                                className={activeIndex === 2 ? 'actived' : ''}
                                onClick={() => handleSectionClick(2)}
                            >
                                Token Info
                            </p>
                            <p 
                                className={activeIndex === 3 ? 'actived' : ''}
                                onClick={() => handleSectionClick(3)}
                            >
                                Vesting
                            </p>
                            <p 
                                className={activeIndex === 4 ? 'actived' : ''}
                                onClick={() => handleSectionClick(4)}      
                            >
                                Buy / Claim
                            </p>
                            
                        </div>
                        <div className='meowl_navegation_box'>
                            <div className='meowl_navegation_box_content'>
                                <LuAlertCircle className='meowl_meowl_navegation_box_icon' />
                                <p>Connect your wallet to view all the details about this project. 
                                To participate, you must subscribe to the waitlist and stake Meowl Tokens at least 24 hours before the IDO.</p>
                            </div>
                            
                        </div>
                        <div className='meowl_navegation_pools_container'>
                            {contentList[activeIndex].content}
                        </div>
                    </div>
                    <div className='meowl_navegation_contentSecond'>
                        <div className='meowl_navegation_card_container'>
                            <div className='meowl_navegation_card_title'>
                                <h2> Raise Details</h2>
                                <div className='meowl_navegation_funding_container'>
                                    <div className='meowl_navegation_funding_content'>
                                        <h3> Fundraise Goal </h3>
                                        <p> $ 10</p>
                                    </div>
                                    <div className='meowl_navegation_funding_logo'>
                                        <img src={testebaseProject} alt='logo' />
                                    </div>
                                </div>
                                <div className='meowl_teste1'>
                                    <div className='meowl_navegation_funding_numbers'>
                                        <p> $ 0 </p>
                                        <p> $ 100</p>
                                    </div>
                                    <div className='meowl_navegation_funding_loading'> </div>
                                    <div className='meowl_navegation_title_info'>
                                        <h2>Info</h2>
                                    </div>            
                                    <div className='meowl_navegation_funding_division'>   </div>
                                    <div className='meowl_navegation_funding_division2'>   </div>
                                    <div className='meowl_navegation_funding_data1'>
                                        <h3>Token Price</h3>
                                        <p>$0.0225</p>
                                    </div>  
                                    <div className='meowl_navegation_funding_division'>   </div>
                                    <div className='meowl_navegation_funding_division'>   </div>
                                    
                                
                                    <div className='meowl_navegation_funding_data2'>
                                        <h3> built on </h3>
                                        <p> Base</p>
                                    </div> 
                                    <div className='meowl_navegation_funding_division'>   </div>
                                    <div className='meowl_navegation_funding_division'>   </div>  
                                    <div className='meowl_navegation_funding_data3'>
                                        <h3> Raising in </h3>
                                        <p> USDC</p>
                                    </div>  
                                
                                </div>
                                    
                            </div>

                            
                        </div>       
                    </div>
                    
                </div>
                {isBuyClaimActive && (
                    <div className='meowl_navegation_contentThird_buy'>
                    <div className='meowl_navegation_Third_card'>
                        <div className='meowl_navegation_card_title'>
                        <div className='meowl_naegation_third_first_div'>
                            <h2>Claim Section</h2>
                            <IoMdInformationCircleOutline
                            className='meowl_navegation_pools_icon'
                            onClick={() =>
                                handleOpenPopup(popupData.Claimsection.title, popupData.Claimsection.content)
                            }
                            />
                        </div>

                        <div className='meowl_teste23'>
                            <div className='meowl_navegation_title_info'>
                            <h2>TGE</h2>
                            </div>
                            <div className='meowl_navegation_token_info_data1'>
                            <h3>TGE Amount</h3>
                            <p>100 000 0</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Status</h3>
                            <p>Claimed</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_title_info'>
                            <h2>Claim Vesting</h2>
                            </div>
                            <div className='meowl_navegation_token_info_data1'>
                            <h3>Total amount to be claimed after TGE</h3>
                            <p>100 000 0</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Amount for claim</h3>
                            <p>45 000</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Total Number of claims</h3>
                            <p>20</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Claimed</h3>
                            <p>3</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Available</h3>
                            <p>1</p>
                            </div>
                            <div className='meow__buy_title_buttons'>
                            <button className='desktop-only'>Claim</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                )}
           </div>
           <InfoPopup show={popupInfo.show} onClose={handleClosePopup} title={popupInfo.title} content={popupInfo.content} />
        </div>
    );
};

export default NavegationProject;
