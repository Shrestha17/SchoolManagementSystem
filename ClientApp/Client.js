
import React from 'react';
import ReactDOM from 'react-dom';
import {renderRoutes} from "react-router-config";
import { BrowserRouter as Router } from 'react-router-dom';
import FullPage from './components/common/FullPage';
import Routes from './Routes';
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';

//const store=configureStore(window.__STATE__);

ReactDOM.hydrate(
<FullPage />, 
document.getElementById('app')
);

// ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//             {/* {renderRoutes(Routes)} */}
//             <FullPage/>
//         </Router>
//     </Provider>,
//     document.getElementById("app")
// );