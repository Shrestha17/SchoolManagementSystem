import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import {browseHistory} from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Speakers from './components/speakers/Speakers'
import RouteNotFound from './RoutesNotFound';

class Routes extends Component {
    constructor(props){        
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.props.action();
    }
    render() {  
        return (          
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => (
                                <h1>Default routed page</h1>
                            )} />

                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/speakers" component={Speakers}/>
                        <Route
                            exact path="/route1"    
                            render={() => (
                                <h1> This is Route1</h1>
                            )} />

                        <Route render={props => <RouteNotFound action={this.handler}  />}></Route>
                        {/* <Route
                            render={() => (
                                <h1>Route Not Found</h1>
                            )}
                        /> */}
                    </Switch>  

        )
    };
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;