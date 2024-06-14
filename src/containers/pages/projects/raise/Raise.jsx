import React, { useState, useEffect } from 'react';
import './raise.css';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import { ContractFundingABI,  
ContractStableABI, ContractStableAddress, 
ContractTokenABI, ContractTokenAddress } from '../../../../Abi';
import { Web3Provider } from '@ethersproject/providers';
import { BrowserProvider, parseUnits } from "ethers";


const Raise = ({ description, ticker, raising_on, raising_in, token_address, smartcontractaddress, smartcontractabi }) => {
  const [account, setAccount] = useState(null);
  const [fundraising, setFundraising] = useState({
    totalToRaise: null,
    alreadyCaptured: null
  });

  //const goal = 100000; // Meta total a ser captada TESTE
  //const alreadyCaptured = 5000; // Valor já captado TESTE
  const goal = parseFloat(fundraising.totalToRaise / (10**18) || '1');
  const alreadyCaptured = parseFloat(fundraising.alreadyCaptured / (10**18) || '0');

  // Calcular o percentual de progresso
  const progressPercentage = (alreadyCaptured / goal) * 100;
  const ContractFundingAddress = smartcontractaddress;
  //const ContractFundingABI = smartcontractabi;

  // Verificar a conexão com a carteira
  useEffect(() => {
    async function checkWalletConnection() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]); // Define a conta atual se o usuário estiver conectado
        }
      }
    }

    checkWalletConnection();
  }, []);

  useEffect(() => {
  const getFundraising = async () => {
    try {
      const provider = new Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
      const [totalToRaise, alreadyCaptured] = await contract.fundraising();
      setFundraising({
        totalToRaise: totalToRaise.toString(), // Converta para string se necessário
        alreadyCaptured: alreadyCaptured.toString()
        
      }); console.log("testandoooo", fundraising)
    } catch (error) {
      console.log('Error reading fundraising:', error);
      setFundraising({
        totalToRaise: null,
        alreadyCaptured: null
      });
    }
  };

  if (window.ethereum) {
    getFundraising();
  }
}, []);

useEffect(() => {
    console.log('Fundraisingsafasf Data:', fundraising);
    console.log('Goal:', goal);
  }, [fundraising, goal]);
  



  return (
    <div className='meow__raise section__padding'>
      <div className='meow__raise_logo_button'>
        <h1>Description</h1>
        <p>{description}</p>
      </div>
      <div className='meow__raise_text'>
        <h1>Raise details</h1>
      </div>
      <div className='meow__raise_content'>
        <h2>Token Ticker - {ticker}</h2>
        <h3>Token address</h3>
        <p>{token_address}</p>
        <h3>Raising on</h3>
        <p>{raising_on}</p>
        <h3>Raising in</h3>
        <p>{raising_in}</p>
        <h3>Current progress</h3>
        <p>{progressPercentage.toFixed(2)}</p>

        {/* Barra de progresso */}
        <div className='meow__raise_progress'>
          <div
            className='meow__raise_progress_bar'
            style={{ width: `${progressPercentage}%` }}
          >
            <span>{account ? `${progressPercentage.toFixed(2)}%` : '0%'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raise;
