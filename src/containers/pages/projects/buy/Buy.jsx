import React, { useState, useEffect } from 'react';
import { useWallet } from '../../../../components/wallet/Walletcontext';
import './buy.css';
import abis from '../../../../abiteste'
import { ethers } from 'ethers';

const Buy = ({ name, status, open, ticker, closed, raising_on, raising_in, smartcontractaddress, smartcontractabi, total_supply, initial_supply, marketcap, claimed_on, vesting }) => {
  const { account, connectWallet } = useWallet();

  const [contract, setContract] = useState(null)
  const [ abi, setABI] = useState(null);
  const [ userData, setUserData] = useState({
    totalInvested: null,
    totalPurchased: null,
    claimedAmount: null,
    numberOfClaims: null,
    tokensPerClaim: null,
    tgeAmount: null, 

  });


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

  useEffect(() => {
    const fetchUserData = async () => {
      if (abi && contract && account) {
        try {
          // Conecte ao provedor Ethereum (Metamask neste caso)
          const provider = new ethers.BrowserProvider(window.ethereum);
          const contractInstance = new ethers.Contract(smartcontractaddress, abi, provider);
  
          // Chamar a função `users` do contrato, passando o endereço da conta como parâmetro
          const userData = await contractInstance.users(account);
          console.log("User data:", userData);
          const formattedUserData = {
            totalInvested: (userData[0]).toString() / (10**18), // Converta de wei para Ether (exemplo)
            totalPurchased: (userData[1]).toString() / (10**18),
            claimedAmount: (userData[2]).toString() / (10**18),
            numberOfClaims: userData[3].toString(),
            tokensPerClaim: (userData[4]).toString() / (10**18),
            tgeAmount: (userData[5]).toString() /(10**18).toFixed(2)
          };
          console.log("Dados do usuário formatados:", formattedUserData);
          setUserData(formattedUserData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
  
    fetchUserData();
  }, [abi, contract, account, smartcontractaddress]); 


  return (
    <div className={`meow__buy section__padding }`}>
      
      <div className='meow__buy_pool'>
        <h1> Pool Details</h1>
        <h2> {status} </h2>
        <h3> Total Supply </h3>
        <p> {total_supply} </p>
        <h3> Initial Supply </h3>
        <p> {initial_supply} </p>
        <h3> Market Cap </h3>
        <p> {marketcap} </p>
      </div>

      <div className={`meow__buy_section ${!account || !open ? 'opaque' : ''}`}>
        <div className='meow__buy_text'>
          <h1> Buy </h1>
          <p> To be able to buy it you must have {raising_in} <br /> on {raising_on} </p>
        </div>
        <div className='meow__buy_inputs'>
          <input className='meow_buy_input1' type='text' placeholder={raising_in} />
          <input className='meow_buy_input2' type='text' placeholder={ticker} />
          <button disabled={!account || !open}> Buy </button>
        </div>
      </div>

      <div className='meow__buy_distribution_seedetails'>
        <h1> Distribution </h1>
        <h3> Distribution </h3>
        <p> Claimed on {claimed_on} </p>
        <h3> Vesting </h3>
        <p> {vesting} </p>
      </div>

      <div className={`meow__buy_claim_section ${!account || !open ? 'opaque' : ''}`}>
        <h1> Claim Section </h1>
        <h3> Claim TGE </h3>
        <p> {userData.tgeAmount || '0'} {ticker} </p>
        <button disabled={!account || !open}> Claim TGE </button>
        <h3> Claim Tokens </h3>
        <p> Number of claims: {userData.numberOfClaims || '0'} </p>
        <p> Claim value: {userData.tokensPerClaim || '0'} MWOL </p>
        <p> Available in 30 days</p>
        <button disabled={!account || !open}> Claim Tokens </button>
      </div>
    </div>
  );
};

export default Buy;
