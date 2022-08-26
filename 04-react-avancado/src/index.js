import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ErrorBoundary from './ErrorBoundary';

const main = (
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(main);