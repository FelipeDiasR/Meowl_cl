
import React, { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { getFundraising, isSubscribedToWaitlist, getTgeActivation,
getContractActivation, getBalancesStablecoin, getTgePercentage,
getPromotionActivation } from './ContractIntecgration';


import { Link } from 'react-router-dom';
import { ContractFundingABI, ContractFundingAddress, ContractStableABI, ContractStableAddress, ContractTokenABI, ContractTokenAddress } from '../../../../Abi';
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers'; // Importe o ethers.js
import { BrowserProvider, parseUnits } from "ethers";


import './description.css'




const Description  = ({ logo, name, website, twitter, telegram, open_sale, close_sale, token_price, total_raise, closed, open }) => {
  

    const [account, setAccount] = useState(null);
    const [fundraising, setFundraising] = useState(null);
    //const [isSubscribed, setIsSubscribed] = useState(false);
    const [stableBalance, setStableBalance] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [connecting, setConnecting] = useState(false);

    useEffect(() => {
        // Verifica se o usuário já está conectado à carteira
        async function checkWalletConnection() {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setAccount(accounts[0]); // Define a conta atual se o usuário estiver conectado
                    console.log('CARTEIRAAAAAAAAAAAA', accounts)
                }
            }
        }

        checkWalletConnection();
    }, []);

    // Verifica se o usuário está inscrito na lista de espera
    useEffect(() => {
        async function checkWaitlistStatus() {
            if (account) {
                const provider = new ethers.BrowserProvider(window.ethereum) ;
                const subscribedStatus = await isSubscribedToWaitlist(provider, account);
                console.log('Account TESTEEEEEEEEE:', account);
                console.log('Subscribed Status CADEEEEEEEEEEEEEEEE:', subscribedStatus);
                setSubscribed(subscribedStatus);
            }
        }

        checkWaitlistStatus();
    }, [account]);

    useEffect(() => {
        async function fetchData() {
            if (window.ethereum) {
                try {
                    const provider = new Web3Provider(window.ethereum);
                    const fundraisingData = await getFundraising(provider);
                    console.log("Fundraising Data:", fundraisingData);
                    setFundraising(fundraisingData);
                    const stBalance = await getBalancesStablecoin(provider);
                    console.log('Este é o balance:',stBalance );
                    const isActived = await getContractActivation(provider);
                    console.log('O contrato Está ativo?', isActived );
                    const isPromotionActived = await getPromotionActivation(provider);
                    console.log('A promoção está ativa??', isPromotionActived );
                    const isTgeActived = await getTgeActivation(provider);
                    console.log('tGE ESTÁ ATIVO?', isTgeActived );
                    const tgePercentge = await getTgePercentage(provider);
                    console.log('TGE PERCENTAGE', tgePercentge );
                    
                   /* if (account) {
                        const subscribedData = await isSubscribedToWaitlist(provider, account);
                        console.log("Subscription status:", subscribedData);
                        setIsSubscribed(subscribedData);
                    }*/
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        }

        fetchData();
    }, [account]);


    const connectWallet = async () => {
        setConnecting(true); // Define o estado para indicar que a conexão está em andamento
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setAccount(accounts[0]); // Define a conta atual após a conexão
                }
            } catch (error) {
                console.error("Error connecting to wallet:", error);
            }
        } else {
            alert("MetaMask is not installed. Please install it to use this app.");
        }
        setConnecting(false); // Define o estado de conexão como concluído
    };

    

    
    const subscribeToWaitlist = async () => {
        let provider, signer, currentAccount;
        try {
            if (!account) {
                const connection = await connectWallet();
                if (!connection) {
                    console.error("Error connecting to wallet");
                    return;
                }
                provider = connection.provider;
                signer = connection.signer;
                currentAccount = connection.account;
            } else {
                provider = new Web3Provider(window.ethereum);
                signer = provider.getSigner();
                currentAccount = account;
            }
    
            if (!provider || !signer || !currentAccount) {
                console.error("Provider, signer, or current account not available");
                return;
            }
    
            const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, signer);
            if (!contract) {
                console.error("Contract instance not created");
                return;
            }
    
            const tx = await contract.subscribeToWaitList();
            if (!tx) {
                console.error("Error sending transaction");
                return;
            }
    
            console.log("Transaction sent:", tx);
            
           
        } catch (error) {
            checkEvents();
            
        }
    };

    const checkEvents = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum) ;
        let contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
        contract.on("SubscribedToWaitList", (user, event) => {
            console.log("You are Subscribed", user);
            console.log(event);
            console.log("o evento está aqui!")
           

        })

    } 
    


    return ( 
        <div className='meow__description section__padding'>
            <div className='meow__description_logo_button'>
                <img src={logo} alt='projectlogo'/> 
                <button> {closed ? 'Closed' : open ? 'Open' : 'Open Soon'} </button>
                   
            </div>
            <div className='meow__description_text'>
                <h1> {name} </h1>
                <div className='meow__description_text_icons'>
                    <a href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter/></a>
                    <a href={telegram} target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    <a href={website} target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                </div>
            </div>
            <div className='meow__description_content'>
                <h2> Offerings</h2>
                <h3> Token Price</h3>
                <p> {token_price} </p>
                <h3> Round start on</h3>
                <p> {open_sale}</p>
                <h3> Round finish on</h3>
                <p> {close_sale}</p>
                <h3>Total Raise</h3>
                <p> {total_raise} </p>
            </div>
            <div className='meow__description_seedetails'> 
            
            <button 
                onClick={
                    !account 
                    ? connectWallet 
                    : (closed ? null : subscribeToWaitlist)
                } 
                    disabled={connecting || closed || (account && subscribed)}
                >
                    {connecting 
                        ? "Connecting..." 
                        : closed 
                            ? "Open Soon" 
                            : !account 
                                ? "Connect Wallet" 
                                : subscribed 
                                    ? "You are subscribed in the waitlist" 
                                    : "Subscribe in the Waitlist"
                    }
            </button>

              
      
            </div>
        
        </div>
    );
  };
  
  export default Description ;