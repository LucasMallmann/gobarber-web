import createSagaMiddleare from 'redux-saga';
import createStore from './createStore';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleare(sagaMonitor);

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
