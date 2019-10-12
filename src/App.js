import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

/** Reactotron */
import './config/Reactotron';

import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
