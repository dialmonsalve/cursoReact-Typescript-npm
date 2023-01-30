import React from 'react';
import ReactDOM from 'react-dom/client';
import { CurrencyApp } from './CurrencyApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CurrencyApp />
  </React.StrictMode>,
);
