
import express from 'express';
import renderer from './Renderer';
import configureStore from '../redux/configureStore';
import Routes from "../ClientApp/Routes";
import {renderRoutes,matchRoutes} from "react-router-config";

 require('dotenv').config();

console.log('ENV:');
console.log(' NODE_ENV:' + process.env.NODE_ENV);

const restUrl = process.env.NODE_ENV === 'production' ?
    process.env.PROD_RESTURL :
    process.env.JSONSERVER_RESTURL;

const app = express();

app.use(express.static('public', {
    index: false    
}));

app.get('*', (req, res) => {

    const store = configureStore();


    // see matchRoutes docs... https://www.npmjs.com/package/react-router-config
    const myRoutes = matchRoutes(Routes, req.path);

    const promises = myRoutes.map(({route, match}) => {
        return route.loadData
            ? route.loadData(store)
            : Promise.resolve(null)
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (content.routestatus == 404) {
            res.status(404).end("Not found, 404 status returned (Server Side Generated)");
        } else {
            res.send(content.htmlcode);
        }
    });

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});



// const express = require('express');
// const app = express();

// app.use(express.static('public',{
//     index: false
// }));

// import Renderer from './Renderer';
// app.get('*', (req, res) => {
//     const rendererInstance = Renderer(req);

//     if (rendererInstance.routestatus == 404){
//         res.status(404).end("Not found, 404 status returned");
//     } else {
//         res.send(Renderer(req).htmlcode);
//     }
// });

// app.listen(3040, function () {
//     console.log('Listening on port 3040!');
// });