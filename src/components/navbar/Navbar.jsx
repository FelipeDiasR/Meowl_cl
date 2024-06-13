import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';  // Importando Web3Provider corretamente
import Logotipo from '../../img/logotipo.svg';
import './navbar.css';
import { BrowserProvider, parseUnits } from "ethers";
import { ethers } from 'ethers'; // Importe o ethers.js
const Menu = () => (
  <>
    <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
      Whitepaper
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [account, setAccount] = useState(null);

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

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum) ; // Instanciando Web3Provider corretamente
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        setAccount(account);
        console.log("essa é a carteira:",  signer, "esta é o account:", account )
      } catch (error) {
        console.error("Error connecting to wallet", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
    
  };

  return (
    <div className="meow__navbar">
      <div className='meow__navbar_logo'>
        <Link to="/home"> <img src={Logotipo} alt='logotipo' /></Link>
      </div>
      <div className='meow__navbar_preesale'>
        <Link to="/lauchpad">
          <button>Preesale</button>
        </Link>
      </div>
      <div className='meow__navbar_whitepaper_wallet'>
        <a href="https://meowl-1.gitbook.io/meowlverse-whitepaper/" target="_blank" rel="noopener noreferrer">
          Whitepaper
        </a>
        {account ? (
          <button>Connected: {account.slice(0, 6)}...{account.slice(-4)}</button>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
      <div className='meow__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          <div className='meow__navbar-menu_container scale-up-center'>
            <div className='meow__navar-menu_container-links'>
              <Menu />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
