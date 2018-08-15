import React from 'react';
import { renderRoutes } from 'react-router-config';
import Footer from './Footer';

const App = ({ route }) => {
    return (
        <div>
            <h3>This is app.</h3>           
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    );
};

export default {
    component: App
    //loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
