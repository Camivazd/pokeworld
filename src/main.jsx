import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initFirebase } from './firebase/config.js';

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
