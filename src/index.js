import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<Auth0Provider
    domain="dev-qaqm24nc.us.auth0.com"
    clientId="HHwKgGKsQaZOXIzTibtWQ2FkSI1ZPLzz"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>)

