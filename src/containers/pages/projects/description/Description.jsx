
import React, { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { getFundraising } from './ContractIntecgration';


import { Link } from 'react-router-dom';
import { ContractFundingABI, ContractFundingAddress, ContractStableABI, ContractStableAddress, ContractTokenABI, ContractTokenAddress } from '../../../../Abi';
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers'; // Importe o ethers.js



import './description.css'




const Description  = ({ logo, name, website, twitter, telegram, open_sale, close_sale, token_price, total_raise, closed, open }) => {
  

    const [account, setAccount] = useState(null);
    const [fundraising, setFundraising] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (window.ethereum) {
                try {
                    const provider = new Web3Provider(window.ethereum);
                    const fundraisingData = await getFundraising(provider);
                    console.log("Fundraising Data:", fundraisingData); // Adiciona o console.log aqui
                    setFundraising(fundraisingData);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        }
    
        fetchData();
    }, []);


    const connectWallet = async () => {
        if (window.ethereum) {
          try {
            const provider = new Web3Provider(window.ethereum);  // Instanciando Web3Provider corretamente
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const account = await signer.getAddress();
            setAccount(account);
            return { provider, signer, account };
          } catch (error) {
            console.error("Error connecting to wallet", error);
          }
        } else {
          alert("MetaMask is not installed. Please install it to use this app.");
        }
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
    
            await tx.wait();
            alert("You have been subscribed to the waitlist!");
        } catch (error) {
            console.error("Error subscribing to waitlist", error);
            alert("There was an error subscribing to the waitlist.");
        }
    };


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
            
            <button onClick={closed ? null : open ? null : subscribeToWaitlist}>
          {closed ? 'Closed' : open ? 'Buy' : 'Subscribe in the waitlist'}
        </button>
              
      
            </div>
        
        </div>
    );
  };
  
  export default Description ;