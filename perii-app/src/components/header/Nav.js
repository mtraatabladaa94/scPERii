import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav(props) {

    return (

        <header className="primary-header">
            <div className="navbar-fixed">
                <nav className="white z-depth-1">
                    <div className="container-fluid">
                        <div className="nav-wrapper">
                            <a href="" className="brand-logo">
                                <img src={process.env.PUBLIC_URL + '/Resources/Images/Perii.png'} alt="Compu Service" />
                            </a>
                            <a href="#" data-activates="mobile" className="custom-button-collapse button-collapse btn btn-flat">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right">
                                <li><Link className="mnu-primary grey-text text-darken-1" to="/">Inicio</Link></li>
                                <li><Link className="mnu-primary grey-text text-darken-1" to="/">Docs</Link></li>
                                <li><Link className="mnu-primary grey-text text-darken-1" to="/">Contáctenos</Link></li>
                                <li><Link to="" className="modal-start-free waves-effect waves-light btn red darken-4 custom-btn-text">Iniciar Sesión</Link></li>
                            </ul>
                            <ul className="side-nav" id="mobile">
                                <li><Link className="mnu-primary grey-text text-darken-1" to="/">Inicio</Link></li>
                                <li><Link className="mnu-primary grey-text text-darken-1" to="/">Docs</Link></li>
                                <li><Link className="mnu-primary grey-text text-darken-1" to="/">Contáctenos</Link></li>
                                <li><Link to="/" className="modal-start-free waves-effect waves-light btn red custom-btn-text">Iniciar Sesión</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        
    );
    
}

export default Nav;
