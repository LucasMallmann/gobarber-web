import React from 'react';
import { Router } from 'react-router-dom';

/** Reactotron */
import './config/Reactotron';

import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
