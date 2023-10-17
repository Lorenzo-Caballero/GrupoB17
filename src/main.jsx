import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambia la importación aquí
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


