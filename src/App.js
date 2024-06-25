
import React from 'react';


import { Outlet } from 'react-router-dom';

import './App.css';



import { Navbar } from './components';
import { Footer, ScrollTop } from './components';
import {WalletProvider} from './components/wallet/Walletcontext.jsx';

  



const App = () => {
  return (
    <div className='App'>  
    <WalletProvider>
    <Navbar />
    <ScrollTop />
    <Outlet />  
    <Footer />
    </WalletProvider>   
    </div>


  )




}

export default App;
