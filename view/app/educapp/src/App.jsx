import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Nav from './layout/Nav';
import Content from './layout/Content';

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
