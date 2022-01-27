import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Charitable from './Components/Charitable';
import Form from './Components/Form';
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
        <Route path="/" element={ <App /> } exact />
        <Route path="/form" element={ <Form /> } />
        <Route path="/charitables" element={ <Charitable /> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);