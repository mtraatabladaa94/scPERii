/* Node elements */
import React, { Component } from 'react';

/* CSS */
import './AsideContentLeft.css';

function AsideContentLeft() {
    return (
        <ul className="aside-content-left collection">
            <li className="collection-item active">
                <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>
                <a href="#" className="title">
                    <i className="material-icons">date_range</i>
                    <span>Calendario</span>
                </a>
            </li>
            <li className="collection-item">
                <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>
                <a href="#" className="title">
                    <i className="material-icons">perm_contact_calendar</i>
                    <span>Solicitudes</span>
                </a>
            </li>
            <li className="collection-item separator">
                <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>
                <a href="#" className="title">
                    <i className="material-icons">people</i>
                    <span>Usuarios</span>
                </a>
            </li>
            <li className="collection-item">
                <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>
                <a href="#" className="title">
                    <i className="material-icons">person</i>
                    <span>Perfil</span>
                </a>
            </li>
            <li className="collection-item">
                <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>
                <a href="#" className="title">
                    <i className="material-icons">settings</i>
                    <span>Configuración</span>
                </a>
            </li>
            <li className="collection-item">
                <a href="#!" className="secondary-content"><i className="material-icons">chevron_right</i></a>
                <a href="#" className="title">
                    <i className="material-icons">power_settings_new</i>
                    <span>Cerrar Sesión</span>
                </a>
            </li>
        </ul>
    );
}

export default AsideContentLeft;