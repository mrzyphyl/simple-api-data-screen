import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './tailwind.css'; // Ensure this is included before App

const root = createRoot(document.getElementById('root'));
root.render(<App />);