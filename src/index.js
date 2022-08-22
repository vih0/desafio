import React from 'react';
import ReactDOM from 'react-dom/client';

import Welcome from './pages/welcome'
import Home from './pages/home'
import './index.css'
import MenuLateral from './components/menuLateral';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Home/> */}
    {/* <Welcome /> */}
    <MenuLateral/>
  </React.StrictMode>
);



