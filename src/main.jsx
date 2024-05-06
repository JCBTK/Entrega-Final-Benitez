import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client'; // Importar createRoot desde 'react-dom/client'

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
);

