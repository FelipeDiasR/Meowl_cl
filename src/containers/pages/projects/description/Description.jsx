import React, { useState, useEffect } from 'react';
import { FaTelegram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { getFundraising, isSubscribedToWaitlist, getTgeActivation, getContractActivation, getBalancesStablecoin, getTgePercentage, getPromotionActivation } from './ContractIntecgration';
import { Link } from 'react-router-dom';
import { ContractFundingABI, ContractFundingAddress } from '../../../../Abi';
import { ethers } from 'ethers';
import './description.css';
import { useWallet } from '../../../../components/wallet/Walletcontext';

const Description = ({ logo, name, website, twitter, telegram, open_sale, close_sale, token_price, total_raise, closed, open }) => {
  const { account, connectWallet } = useWallet();
  const [fundraising, setFundraising] = useState(null);
  const [stableBalance, setStableBalance] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    async function checkWaitlistStatus() {
      if (account) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const subscribedStatus = await isSubscribedToWaitlist(provider, account);
        setSubscribed(subscribedStatus);
      }
    }

    checkWaitlistStatus();
  }, [account]);

  useEffect(() => {
    async function fetchData() {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const fundraisingData = await getFundraising(provider);
          setFundraising(fundraisingData);
          const stBalance = await getBalancesStablecoin(provider);
          const isActived = await getContractActivation(provider);
          const isPromotionActived = await getPromotionActivation(provider);
          const isTgeActived = await getTgeActivation(provider);
          const tgePercentge = await getTgePercentage(provider);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }

    fetchData();
  }, [account]);

  const subscribeToWaitlist = async () => {
    let provider, signer, currentAccount;
    try {
      if (!account) {
        await connectWallet();
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = provider.getSigner();
        currentAccount = await signer.getAddress();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = provider.getSigner();
        currentAccount = account;
      }

      const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, signer);
      const tx = await contract.subscribeToWaitList();
      console.log('Transaction sent:', tx);
    } catch (error) {
      checkEvents();
    }
  };

  const checkEvents = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(ContractFundingAddress, ContractFundingABI, provider);
    contract.on('SubscribedToWaitList', (user, event) => {
      console.log('You are Subscribed', user);
      console.log(event);
    });
  };

  return (
    <div className='meow__description section__padding'>
      <div className='meow__description_logo_button'>
        <img src={logo} alt='projectlogo' />
        <button> {closed ? 'Closed' : open ? 'Open' : 'Open Soon'} </button>
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
          onClick={!account ? connectWallet : (closed ? null : subscribeToWaitlist)}
          disabled={connecting || closed || (account && subscribed)}
        >
          {connecting
            ? 'Connecting...'
            : closed
              ? 'Open Soon'
              : !account
                ? 'Connect Wallet'
                : subscribed
                  ? 'You are subscribed in the waitlist'
                  : 'Subscribe in the Waitlist'}
        </button>
      </div>
    </div>
  );
};

export default Description;
