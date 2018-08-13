import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';


export default function 
    configureStore(initialState = {}) { 

    return createStore(
        reducers,
        initialState,     
        applyMiddleware(thunk,
        axios.create(axiosMiddleware(client)))
    );
}
