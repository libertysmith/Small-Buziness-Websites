import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const base = import.meta.env.BASE_URL;
console.log('[runtime] BASE_URL =', base);

// Ensure favicon uses correct base path at runtime
const ensureFavicon = () => {
  const href = `${base}favicon.svg`;
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    document.head.appendChild(link);
  }
  if (link.getAttribute('href') !== href) link.setAttribute('href', href);
};
ensureFavicon();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
