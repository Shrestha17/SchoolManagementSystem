import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState = {}) {

    if (process.env.NODE_ENV !== "production") {
        require('dotenv').config();
    }
    const production = process.env.NODE_ENV &&
        process.env.NODE_ENV === "production";
    const restUrl = process.env.NODE_ENV === 'production' ?
        process.env.PROD_RESTURL :
        process.env.JSONSERVER_RESTURL;
    console.log(`production: ${production}  restUrl: ${restUrl}`);

    let middleware = [
        thunk,
        axiosMiddleware(axios.create({baseURL:restUrl}))
    ];

    if (!production) {
        middleware.push(require('redux-immutable-state-invariant').default());
        console.log('added redux-immutable-state-invariant');
    }

    // always push redux middle to production per medium articles regarding security
    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware))
    );
}












// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';
// import { composeWithDevTools } from 'redux-devtools-extension';


// export default function configureStore
//     (initialState = {}) { 
//         const composeEnhancers=composeWithDevTools({
//         }); 

//     return createStore(
//         reducers,
//         initialState, 
//         composeEnhancers(    
//         applyMiddleware(thunk,
//         axiosMiddleware(axios.create())))
//     );
// }
