import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Routes from '../../Routes';
import Footer from './Footer';

class FullPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Page top</h2>
                <Routes/>
                <Footer/>
            </div>
        );
    }
}

export default FullPage;