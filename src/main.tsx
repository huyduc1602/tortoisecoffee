import React from 'react'
import ReactDOM from 'react-dom/client'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App.tsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
