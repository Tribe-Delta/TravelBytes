import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
