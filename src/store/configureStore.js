import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from '../reducers/Index';

export default function configureStore(initialState) {
    const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
    const store = createStoreWithMiddleware(rootReducers, initialState);
    return store;
}