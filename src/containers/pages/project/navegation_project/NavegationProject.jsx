import { useState, useContext, React, useEffect} from 'react';
import { LuAlertCircle } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io"; // Adicionando um ícone de fechar
import { ThemeContext } from '../../../../components/themecontext/ThemeContext';
import testebanner from '../../../../img/testebanner.svg'
import testebaseProject from '../../../../img/testebaseproject.svg'
import {logoBlackProject, logoBlackProject2, logoWhiteProject, logoWhiteProject2 } from '../../../../img/index';
import { InfoPopup } from '../../../../components';
// Importar seu arquivo JSON com os dados
import popupData from '../../../../data/text_info.json';
import { useWallet } from '../../../../components/wallet/Walletcontext';
import { ethers } from 'ethers';
import abis from '../../../../abis/mainAbi';
import {usdcAbi} from '../../../../abis/UsdcAbi';
import './navegationproject.css';
import { Loading, Approved, Denied } from '../../../../components';

//  const fetchUserData

const NavegationProject = ({ earlier_open_time, earlier_Supply_offerd, ticker,
    earlier_size, open_open_time, open_Supply_offerd, open_size, completed_descrption,
    Launchprice, currenprice, ath, number_realeses, clif, claim_interval, vesting,
    smartcontractaddress, smartcontractabi, buy_with, tge_date, fundraise_goal, token_price,
    buil_on, built_on2, stableAddress, bannerproject, tge_Availble}) => {
    
    const { account, connectWallet } = useWallet();
    const [contract, setContract] = useState(null)
    const { isLigmode } = useContext(ThemeContext);
    const [ abi, setABI] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ approved, setApproved] = useState(false);
    const [ denied, setDenied ] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(true); // Estado para controlar a visibilidade do alerta
    const [activeIndex, setActiveIndex] = useState(0);
    const [amountToBuy, setAmountToBuy] = useState('');
    const [tokensReceived, setTokensReceived] = useState('');
    const [amountBlockchain, setAmountBlockchain] = useState(null);
    const [popupInfo, setPopupInfo] = useState({ show: false, title: '', content: '' });
    const [userData, setUserData] = useState({
        totalInvested: null,
        totalPurchased: null,
        claimedAmount: null,
        tokensPerClaim: null,
        numberOfClaims: null,
        tgeAmount: null,
        numberClaimed: null,
        totalNumberOfClaims: null,
        tgeClaimed: null,
      });
    const [isTgeActivated, setIsTgeActivated] = useState(false);

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


        useEffect(() => {
            async function fetchDatas() {
              if (smartcontractabi !== false) {
                try {
                  const smartcontract = smartcontractaddress;
                  console.log('Este é o smartcontract:', smartcontract);
                  setContract(smartcontract);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              }
            }
        
            fetchDatas();
          }, [smartcontractaddress, smartcontractabi]); 

          useEffect(() => {
            const loadABI = () => {
              if (smartcontractaddress) {
                const abiItem = abis.find((item) => item.address === smartcontractaddress);
                if (abiItem) {
                  console.log("abi encontrada", abiItem)
                  setABI(abiItem.abi); // Supondo que cada item tenha um campo `abi`
                } else {
                  console.error("ABI not found for the given address");
                }
              }
            };
        
            loadABI();
          }, [smartcontractaddress]); // Adicione dependência aqui

          const fetchUserData = async () => {
            if (abi && contract && account) {
              try {
                // Conecte ao provedor Ethereum (Metamask neste caso)
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contractInstance = new ethers.Contract(smartcontractaddress, abi, provider);
          
                // Chamar a função `users` do contrato, passando o endereço da conta como parâmetro
                const userData = await contractInstance.users(account);
                console.log("User data:", userData);
          
                // Função auxiliar para formatar valores grandes
                const formatAndRound = (value) => Math.round(parseFloat(value.toString()) / (10 ** 18));
          
                // Verifique se o objeto possui todas as propriedades esperadas
                const formattedUserData = {
                  totalInvested: (userData[0] ? (parseFloat(userData[0].toString()) / (10 ** 6)) : 0),
                  totalPurchased: (userData[1] ? formatAndRound(userData[1]) : 0),
                  claimedAmount: (userData[2] ? formatAndRound(userData[2]) : 0),
                  numberOfClaims: (userData[3] ? parseInt(userData[3].toString()) : 0),
                  tokensPerClaim: (userData[4] ? formatAndRound(userData[4]) : 0),
                  tgeAmount: (userData[5] ? formatAndRound(userData[5]) : 0),
                  numberClaimed: (userData[6] ? parseInt(userData[6].toString()) : 0),
                  totalNumberOfClaims: (userData[7] ? parseInt(userData[7].toString()) : 0),
                  tgeClaimed: (userData[8] !== undefined ? Boolean(userData[8]) : false), // Tratamento booleano
                };
          
                console.log("Dados do usuário formatados:", formattedUserData);
                setUserData(formattedUserData);
              } catch (error) {
                console.error('Error fetching user data1:', error);
              }
            }
          };
          const handleAmountToBuyChange = (e) => {
            const inputAmount = e.target.value.trim();
        
            // Se o valor de entrada for vazio ou não numérico, reseta os valores
            if (!inputAmount || isNaN(inputAmount)) {
                setAmountToBuy('');
                setTokensReceived('');
                setAmountBlockchain(null);
                return;
            }
        
            // Converte o valor de entrada para um número
            const amountNumber = parseFloat(inputAmount);
        
            // Verifica novamente se amountNumber é válido após a conversão
            if (isNaN(amountNumber)) {
                setAmountToBuy('');
                setTokensReceived('');
                setAmountBlockchain(null);
                return;
            }
        
            // Calcular o valor dos tokens recebidos
            const calculatedTokens = amountNumber / token_price;
        
            // Atualiza os estados com os valores calculados
            setAmountToBuy(inputAmount); // Mantém a entrada original como string
            setTokensReceived(calculatedTokens.toFixed(2)); // Define tokens recebidos com duas casas decimais
        
            // Atualiza o valor em Wei se for um valor válido
            const amountInWei = ethers.parseUnits(amountNumber.toString(), 6);
            setAmountBlockchain(amountInWei);
        };
        
        // Função para manipular a alteração dos tokens recebidos
        const handleTokensReceivedChange = (e) => {
            const inputTokens = e.target.value.trim();
        
            // Se o valor de entrada for vazio ou não numérico, reseta os valores
            if (!inputTokens || isNaN(inputTokens)) {
                setAmountToBuy('');
                setTokensReceived('');
                setAmountBlockchain(null);
                return;
            }
        
            // Converte o valor de entrada para um número
            const tokensNumber = parseFloat(inputTokens);
        
            // Verifica novamente se tokensNumber é válido após a conversão
            if (isNaN(tokensNumber)) {
                setAmountToBuy('');
                setTokensReceived('');
                setAmountBlockchain(null);
                return;
            }
        
            // Calcular o valor necessário para comprar os tokens
            const calculatedAmount = tokensNumber * token_price;
        
            // Atualiza os estados com os valores calculados
            setTokensReceived(inputTokens); // Mantém a entrada original como string
            setAmountToBuy(calculatedAmount.toFixed(2)); // Define amount to buy com duas casas decimais
        
            // Atualiza o valor em Wei se for um valor válido
            const amountInWei = ethers.parseUnits(calculatedAmount.toString(), 6);
            setAmountBlockchain(amountInWei);
        };
          
          
          useEffect(() => {
            fetchUserData();
          }, [abi, contract, account, smartcontractaddress]);


          const approveTokens = async () => {
            let provider, signer, currentAccount;
          
            try {
              if (!account) {
                await connectWallet();
                provider = new ethers.BrowserProvider(window.ethereum);
                signer = await provider.getSigner();
                currentAccount = await signer.getAddress();
              } else {
                provider = new ethers.BrowserProvider(window.ethereum);
                signer = await provider.getSigner();
                currentAccount = account;
              }
          
              const spender = contract;
              const amountToSpend = amountBlockchain; //amountToBuy amountBlock
              const contractInstance = new ethers.Contract(stableAddress, usdcAbi, signer);
              const tx = await contractInstance.approve(spender, amountToSpend);
              console.log('Transaction sent:', tx);
          
              setLoading(true);
          
              await tx.wait();
          
              console.log('Transaction confirmed:', tx);
          
              setLoading(false); // Ocultar o popup de carregamento
          
              setApproved(true);
              setTimeout(() => {
                setApproved(false);
              }, 3000);
              
              // Note: Aqui não chamamos a função buyTokens diretamente
          
            } catch (error) {
              console.error('Error approving tokens:', error);
              setLoading(false);
              setDenied(true);
              setTimeout(() => {
                setDenied(false);
              }, 3000);
            }
          };

          const buyTokens = async () => {
            if (!account || !amountBlockchain) {
              console.error("Account is not available or amountBlock is missing.");
              return;
            }
          
            let provider, signer, currentAccount;
            try {
              provider = new ethers.BrowserProvider(window.ethereum);
              signer = await provider.getSigner();
              currentAccount = await signer.getAddress();
              const contractInstance = new ethers.Contract(contract, abi, signer); 
              const buyTx = await contractInstance.buyTokens(amountBlockchain);
              console.log('Buy tokens transaction sent:', buyTx);
          
              setLoading(true);
          
              await buyTx.wait();
          
              console.log('Buy tokens transaction confirmed:', buyTx);
          
              setApproved(true);
              setTimeout(() => {
                setApproved(false);
              }, 3000);
          
            } catch (error) {
              setDenied(true);
              setTimeout(() => {
                setDenied(false);
              }, 3000);
              console.error("Error buying tokens:", error);
              
            } finally {
              setLoading(false);
              fetchUserData();
            }
          };

          const claimTge = async () => {
            if (!isTgeActivated || !account) {
              console.error("TGE is not activated or account is not available.");
              return;
            }
        
            let provider, signer, currentAccount;
            try {
              provider = new ethers.BrowserProvider(window.ethereum);
              signer = await provider.getSigner();
              currentAccount = await signer.getAddress();
              const contractInstance = new ethers.Contract(smartcontractaddress, abi, signer); // Utilize o signer aqui 
              const tx = await contractInstance.claimTge();
        
              setLoading(true);
              await tx.wait();
              console.log('Transaction confirmed:', tx);
        
              setLoading(false);
              setApproved(true);
        
              setTimeout(() => {
                setApproved(false);
              }, 3000);
            } catch (error) {
              setDenied(true);
              
              setTimeout(() => {
                setDenied(false);
              }, 3000);
              console.error("Error claiming TGE:", error);
              
            } finally {
              setLoading(false);
              fetchUserData(); // Atualize os dados do usuário após a conclusão da operação
            }
          };
        
          const claimTokens = async () => {
            if (!isTgeActivated || !account) {
              console.error("TGE is not activated or account is not available.");
              return;
            }
        
            let provider, signer, currentAccount;
            try {
              provider = new ethers.BrowserProvider(window.ethereum);
              signer = await provider.getSigner();
              currentAccount = await signer.getAddress();
              const contractInstance = new ethers.Contract(smartcontractaddress, abi, signer); // Utilize o signer aqui 
              const tx = await contractInstance.claimTokens();
        
              setLoading(true);
              await tx.wait();
              console.log('Transaction confirmed:', tx);
        
              setLoading(false);
              setApproved(true);
        
              setTimeout(() => {
                setApproved(false);
              }, 1000);
            } catch (error) {
              setDenied(true);
              
              setTimeout(() => {
                setDenied(false);
              }, 1000);
              console.error("Error claiming TGE:", error);
              
            } finally {
              setLoading(false);
              fetchUserData(); // Atualize os dados do usuário após a conclusão da operação
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
                                    <h3>{earlier_open_time}</h3>
                                    <p>TBD</p>
                                    <h3>Supply offered</h3>
                                    <p>{earlier_Supply_offerd} {ticker}</p>
                                    <h3>Size</h3>
                                    <p>{earlier_size}</p>
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
                                    <h3>Open time</h3> 
                                    <p>{open_open_time}</p>
                                    <h3>Supply offered</h3>
                                    <p>{open_Supply_offerd} {ticker}</p>
                                    <h3>Size</h3>
                                    <p>{open_size}</p>
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
                        {completed_descrption.split('<br/><br/>').map((line, index) => (
                           <>
                           {line}
                           <br /><br />
                         </>
                        ))}
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
                                    <p> {Launchprice}</p>
                                </div>
                            </div>
                            <div className='meowl_navegation_price'>
                                <div className='meowl_navegation_earlier_content'>
                                    <h3>Current Price</h3>
                                    <p>{currenprice}</p>
                                </div>
                            </div>
                            <div className='meowl_navegation_price'>
                                <div className='meowl_navegation_earlier_content'>
                                    <h3>ATH Price</h3>
                                    <p>{ath}</p>
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
                                        <p>{vesting}</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data2'>
                                        <h3> TGE Release </h3>
                                        <p> {tge_date}</p>
                                    </div> 
 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Number of release </h3>
                                        <p>{number_realeses}</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Cliff </h3>
                                        <p>{clif}</p>
                                    </div> 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Claims after Cliff </h3>
                                        <p>{claim_interval}</p>
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
                                    <p>To be able to buy it you must  have {buy_with} on base</p>
                                    <div className='meowl_buy_title_input'>
                                        <input className='meow_buy_input1' type='text' value={amountToBuy} onChange={handleAmountToBuyChange} placeholder={buy_with} />
                                        <input className='meow_buy_input2' type='text' value={tokensReceived} onChange={handleTokensReceivedChange} placeholder={ticker}/>
                                        <div className='meow__buy_title_buttons'>
                                            <button className='desktop-only' onClick={buyTokens}> Buy </button>
                                            
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
                                        <p>{userData.totalPurchased}</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data2'>
                                        <h3> Tge Amount </h3>
                                        <p> {userData.tgeAmount}</p>
                                    </div> 
 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Claim amount after TGE </h3>
                                        <p> {userData.tokensPerClaim}</p>
                                    </div>  
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Total number of claims </h3>
                                        <p>{userData.totalNumberOfClaims}</p>
                                    </div> 
                                    <div className='meowl_navegation_token_info_data3'>
                                        <h3> Claimed (Number of claims+TGE)  </h3>
                                        <p> {userData.numberClaimed} </p>
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
        <div className={`meowl_navegation ${isLigmode ? 'lightmode' : ''}` }>
           <div className='meowl_navegation_container'>
            {loading && <Loading />} {/* Exibir o componente de loading */}
            {approved && <Approved />} {/* Exibir o componente Approved */}
            {denied && <Denied />} {/* Exibir o componente Denied */}
                <div className='meowl_navegation_content'>
                    <div className='meowl_navegation_contentFirst'>
                        <img className='banner_project' src={bannerproject} alt="logo" />
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
                                        <p>{fundraise_goal}</p>
                                    </div>
                                    <div className='meowl_navegation_funding_logo'>
                                        <img src={built_on2} alt='logo' />
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
                                        <p>{token_price}</p>
                                    </div>  
                                    <div className='meowl_navegation_funding_division'>   </div>
                                    <div className='meowl_navegation_funding_division'>   </div>
                                    
                                
                                    <div className='meowl_navegation_funding_data2'>
                                        <h3> built on </h3>
                                        <p>{buil_on}</p>
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
                            <p>{userData.tgeAmount}</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Status</h3>
                            <p>{userData.tgeClaimed ? "Claimed" : "Not claimed yet"}</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_title_info'>
                            <h2>Claim Vesting</h2>
                            </div>
                            <div className='meowl_navegation_token_info_data1'>
                            <h3>Total amount to be claimed after TGE</h3>
                            <p>{userData.tokensPerClaim*userData.totalNumberOfClaims}</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Amount for claim</h3>
                            <p>{userData.tokensPerClaim}</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Total Number of claims</h3>
                            <p>{userData.totalNumberOfClaims}</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            
                            <h3>Available (each {clif})</h3>
                            <p>{userData.numberOfClaims}</p>
                            </div>
                            <div className='meowl_navegation_Third_card_division'></div>
                            <div className='meowl_navegation_Third_card_division'></div>

                            <div className='meowl_navegation_funding_data2'>
                            <h3>Claimed (Number of claims+TGE)</h3>
                            <p>{userData.numberClaimed}</p>
                            </div>
                            <div className='meow__buy_title_buttons'>
                            <button 
                                className='desktop-only' 
                                onClick={userData.tgeClaimed ? claimTokens : claimTge} // Condicional para função
                                disabled={loading} // Desabilita o botão durante o carregamento
                                >{userData.tgeClaimed ? "Claim Tokens" : "Claim TGE"} {/* Texto condicional */}
                            </button>
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
