import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './styles/styles.css';  // Ensure your styles are imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

