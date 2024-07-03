
import React, { useEffect } from 'react';


import { Outlet } from 'react-router-dom';
import { initGA, logPageView } from './analytics';
import RouteTrack from './components/tracker/RouteTracker.jsx';

import './App.css';



import { Navbar } from './components';
import { Footer, ScrollTop } from './components';
import {WalletProvider} from './components/wallet/Walletcontext.jsx';

  



const App = () => {

  useEffect(() => {
    initGA();
    logPageView();
    window.addEventListener('popstate', logPageView);
    return () => {
      window.removeEventListener('popstate', logPageView);
    };
  }, []);


  return (
    <div className='App'>  
    <WalletProvider>
    <RouteTrack /> 
    <Navbar />
    <ScrollTop />
    <Outlet />  
    <Footer />
    </WalletProvider>   
    </div>


  )




}

export default App;
