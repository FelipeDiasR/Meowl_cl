import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//import do react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { Footer } from './containers';
import { Home, Lauchpad, Details, Game } from './pages';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "launchpad",
        element: <Lauchpad />
      },
      {
        path: "details/:id",
        element: <Details />
      },
      {
        path: "game",
        element: <Game />
      },
      
      

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

