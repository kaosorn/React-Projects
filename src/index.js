import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Design from './components/Design'
import Gallery from './components/Gallery'
import Story from './components/Story'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/design" element={<Design />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

