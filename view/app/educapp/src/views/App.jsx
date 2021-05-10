import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Nav from '../components/layout/Nav';
import Content from '../components/layout/Content';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Content />
      </Router>
    </ React.Fragment>
  );
}

export default App;
