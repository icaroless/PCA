// FIXME
import '../assets/css/App.css';

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import UserSettings from '../data/UserSettings'
import Nav from '../components/layout/Nav';
import Content from '../components/layout/Content';

function App() {
  
  return (
    <UserSettings>
      <Router>
        <Nav />
        <Content />
      </Router>
    </ UserSettings>
   
  );
}

export default App;
