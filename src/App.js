import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

/** Reactotron */
import './config/Reactotron';

/** Redux Store */
import store from './store';

import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
