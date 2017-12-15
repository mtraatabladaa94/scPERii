import React, { Component } from 'react';
import Nav from './Nav';
import './Header.css';

class Header extends Component {

    /* Construcción */
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <Nav />
        );
    }

    /* Actualización */
    componentWillReceiveProps() {
    }

    componentWillUpdate() {
    }

    shouldComponentUpdate() {
    }

    componentDidUpdate() {
    }

    /* Eliminación */
    componentWillUnmount() {
    }

}

export default Header;