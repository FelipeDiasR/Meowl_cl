import React, { createContext, useState, useContext } from 'react';
import { ethers } from 'ethers';
import WalletChoiceModal from './WalletChoiceModal';
import { Web3Provider } from '@ethersproject/providers';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connectWallet = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const providerInstance = new Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = providerInstance.getSigner();
        const account = await signer.getAddress();
        setAccount(account);
        setProvider(providerInstance);
        setIsModalOpen(false); // Fechar o modal após conectar
      } else {
        throw new Error('MetaMask not available');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask', error);
    }
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet }}>
      {children}
      <WalletChoiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectWallet={connectWallet}
      />
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
