
import React from 'react';


import { Outlet } from 'react-router-dom';

import './App.css';



import { Navbar } from './components';
import { Footer } from './components';
import {WalletProvider} from './components/wallet/Walletcontext.jsx';

  
/* <div className='teste'>
            <img src={moon} alt="moon"/>
            </div>
             
            style={{ backgroundImage:`url(${moon})`}}//*/


const App = () => {
  return (
    <div className='App'>  
    <WalletProvider>
    <Navbar />
    <Outlet />  
    <Footer />
    </WalletProvider>   
    </div>


  )




}

export default App;
