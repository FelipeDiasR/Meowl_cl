
import React from 'react';


import { Outlet } from 'react-router-dom';

import './App.css';



import { Navbar } from './components';
import { Footer } from './components';
import { Home } from './pages';
  
/* <div className='teste'>
            <img src={moon} alt="moon"/>
            </div>
             
            style={{ backgroundImage:`url(${moon})`}}//*/


const App = () => {
  return (
    <div className='App'>     
    <Navbar />
    <Outlet />  
    <Footer />
    </div>


  )




}

export default App;
