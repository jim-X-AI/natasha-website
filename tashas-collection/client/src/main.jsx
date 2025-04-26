import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Import Google Fonts first
import './index.css'; // Import Tailwind CSS second
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);