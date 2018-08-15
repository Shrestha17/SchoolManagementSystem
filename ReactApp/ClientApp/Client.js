
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {browserHistory} from 'react-router-dom';
import FullPage from './components/common/FullPage';
import Routes from './Routes';
import {renderRoutes} from "react-router-config";
import {Provider} from 'react-redux';
 import configureStore from '../redux/configureStore';
 
 const store=configureStore(window.__STATE__);

ReactDOM.hydrate(
    <Provider store={store}>   
    <Router history={browserHistory}>  
    {renderRoutes(Routes)}
    </Router> 
    </Provider>,
    document.getElementById("app")
);  

// ReactDOM.hydrate(
//     <Router history={browserHistory}>
//       <FullPage />
//     </Router>,
//     document.getElementById("app")
// );