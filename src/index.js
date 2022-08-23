import React from 'react';
import ReactDOM from 'react-dom/client';

import Welcome from './pages/welcome'
import Home from './pages/home'
import './pages/home.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Home/> */}
    <Welcome />
  </React.StrictMode>
);



