import './assets/css/index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import Storage from './data/UserData';


ReactDOM.render(
      <React.StrictMode>
        <Storage>
          <App />
        </Storage>
      </React.StrictMode>,
  document.getElementById('root')
);