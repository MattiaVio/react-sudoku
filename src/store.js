import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sudokuReducer from './reducers/Sudoku';

const sagaMiddleware = createSagaMiddleware();

const initialState = combineReducers(
  { sudoku: sudokuReducer },
);

const configureStore = () => {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancers = applyMiddleware(...middlewares);

  const store = createStore(initialState, composeEnhancers(enhancers));

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  return store;
};

export default configureStore;
