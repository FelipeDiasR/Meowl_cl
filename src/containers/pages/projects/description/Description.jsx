import React, { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { checkWaitlistStatus }  from './ContractIntecgration';
import { Link } from 'react-router-dom';
import { ContractFundingABI, ContractFundingAddress, usdcAbi } from '../../../../Abi';
import { ethers } from 'ethers';
import './description.css';
import { useWallet } from '../../../../components/wallet/Walletcontext';
import abis from '../../../../abiteste'
import { Loading, Approved, Denied } from '../../../../components';



const Description = ({ logo, name, website, twitter, telegram,
open_sale, close_sale, token_price, total_raise, closed, open_buy, 
smartcontractaddress, open_subscription, smartcontractabi, status, network, rpc,
chain_name, token_name, symbol, decimals, explorerUrl}) => {
  const { account, connectWallet } = useWallet();
  const [fundraising, setFundraising] = useState(null);
  const [stableBalance, setStableBalance] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [fundingcontract, setContract] = useState(null);
  const [fundingAbi, setFundingAbi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ approved, setApproved] = useState(false);
  const [ denied, setDenied ] = useState(false);
  const [ rightnetwork, setrightNetworok] = useState(null);

  

  useEffect(() => {
    async function fetchDatas() {
      if (smartcontractabi !== false) {
        try {
          const smartcontract = smartcontractaddress;
          setContract(smartcontract);
          console.log("SmartContract", smartcontract)
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
          setFundingAbi(abiItem.abi); // Supondo que cada item tenha um campo `abi`
        } else {
          console.error("ABI not found for the given address");
        }
      }
    };

    loadABI();
  }, [smartcontractaddress]);

  useEffect(() => {
    const fetchWaitlistStatus = async () => {
      if(account && fundingcontract && fundingAbi)
      try {
        const status = await checkWaitlistStatus(account, fundingAbi, fundingcontract);

        console.log("subscription:", status)
        setSubscribed(status);
      } catch (error) {
        console.error("Error fetching waitlist status:", error);
      }
    };

    if (account) {
      fetchWaitlistStatus();
    }
  }, [account, fundingAbi, fundingcontract]);

  useEffect(() =>{
    const setingRightNetwork = async () => {
    if(network)
    try{
      const network1 = network;
      console.log("Aqui está a chain", network1);
      setrightNetworok(network1);
    } catch (error) {
      console.error("Error setingRghitNetwork:", error);
    }
  };

  if (network) {
    setingRightNetwork();
  }
}, [rightnetwork]);

useEffect(() => {
  const changingNetwork = async () => {
    try {
      if ((open_subscription || open_buy) && account && fundingcontract && rightnetwork) {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const { chainId } = await provider.getNetwork();

          if (chainId !== parseInt(rightnetwork, 16)) {
            setLoading(true);

            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: rightnetwork }],
              });
              console.log('Switched to the correct network');
              
            } catch (switchError) {
              if (switchError.code === 4902) {
                try {
                  await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                      chainId: rightnetwork,
                      rpcUrls: [rpc], // Corrigido de "rpcUrl" para "rpcUrls"
                      chainName: chain_name,
                      nativeCurrency: {
                        name: token_name,
                        symbol: symbol,
                        decimals: 18
                      },
                      blockExplorerUrls: [explorerUrl] // Corrigido de "blockExplorerUrl" para "blockExplorerUrls"
                    }],
                  });
                  setApproved(true);
                  console.log('Network added and switched to the correct network');
                } catch (addError) {
                  console.error('Failed to add network:', addError);
                  setDenied(true);
                }
              } else {
                console.error('Failed to switch network:', switchError);
                setDenied(true);
              }
            } finally {
              setLoading(false);
              setTimeout(() => {
                setApproved(false);
                setDenied(false);
              }, 1500);
            }
          } else {
            console.log('Already on the correct network');
          }
        } else {
          console.error('Ethereum object not found, install Metamask.');
        }
      } else {
        console.log('No need to switch network');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (account) {
    changingNetwork();
  }
}, [account, fundingcontract, rightnetwork, open_subscription, 
  open_buy, rpc, chain_name, token_name, symbol, decimals, 
  explorerUrl]);


  const subscribeToWaitlist = async () => {
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

      const contractInstance = new ethers.Contract(fundingcontract, fundingAbi, signer);
      const tx = await contractInstance.subscribeToWaitList();  
      
      
      setLoading(true);

      await tx.wait();

      console.log('Transaction sent:', tx);

      setLoading(false);
      setApproved(true);
      setSubscribed(true);

      setTimeout(() => {
        setApproved(false);
      }, 3000);
    } catch (error) {
      
      setDenied(true);

      setTimeout(() => {
        setDenied(false);
      }, 3000);
      console.error('Error subscribing to waitlist:', error);
    } finally {
      setLoading(false);
       // Atualize os dados do usuário após a conclusão da operação
    }
  };


 

  return (
    <div className={`meow__description section__padding ${loading ? 'loading-active' : ''}`}>
    {loading && <Loading />} {/* Exibir o componente de loading */}

    {approved && <Approved />} {/* Exibir o componente Approved */}
    {denied && <Denied />} {/* Exibir o componente Denied */}
    
      <div className='meow__description_logo_button'>
        <img src={logo} alt='projectlogo' />
        <button>
          {closed ? status : open_buy ? 'Open' : 'Open Soon'}
        </button>
      </div>
      <div className='meow__description_text'>
        <h1> {name} </h1>
        <div className='meow__description_text_icons'>
          <a href={twitter} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
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
    closed
      ? null
      : open_subscription
      ? !account
        ? connectWallet
        : !subscribed
        ? subscribeToWaitlist
        : null
      : null
  }
  disabled={
    connecting || closed || (open_subscription && account && subscribed) || (open_buy && account)
  }
>
  {connecting
    ? 'Connecting...'
    : closed
    ? status
    : open_subscription
    ? !account
      ? 'Connect Wallet'
      : !subscribed
      ? 'Subscribe in the Waitlist'
      : 'You are subscribed, soon you will be able to buy!'
    : open_buy && account
    ? 'Buy Your tokens below!'
    : 'Connect Wallet'}
</button>
      </div>
    </div>
  );
};

export default Description;
