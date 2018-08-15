
import React, { Component } from 'react';
import Routes from '../../Routes';
import Footer from './Footer';

class FullPage extends React.Component {    
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }
    handler(val) {
        this.props.action();
    }
    render() {
        return (
            <div>
                {/* <h2>Page top</h2>
                <Routes/>
                <Footer/> */}
                <App/>
            </div>
        );
    }
}

FullPage.defaultProps = {};
export default FullPage;


