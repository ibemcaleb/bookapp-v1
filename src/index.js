import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HarshRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HarshRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
