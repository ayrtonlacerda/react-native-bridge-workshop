import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';
//import sagas from './sagas';

const reducers = combineReducers({
  reducer,
});
//const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware();
const store = __DEV__
  ? createStore(reducers, compose(applyMiddleware(sagaMiddleware)))
  : createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

//sagaMiddleware.run(sagas);

export default store;
