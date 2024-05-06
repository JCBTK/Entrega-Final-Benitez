import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de importar el enrutador si lo estás utilizando
import App from './App';

ReactDOM.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
    document.getElementById('root')
);
