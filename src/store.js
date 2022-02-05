import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = 'development' === process.env.NODE_ENV
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));
const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(mySaga)
export default store;