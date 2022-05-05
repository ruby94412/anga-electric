import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Design from './pages/Design';
import Services from './pages/Services';
import Deposition from './pages/Deposition';
import Procurement from './pages/Procurement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="design" element={<Design />} />
      <Route path="services" element={<Services />} />
      <Route path="procurement" element={<Procurement />} />
      <Route path="deposition" element={<Deposition />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
