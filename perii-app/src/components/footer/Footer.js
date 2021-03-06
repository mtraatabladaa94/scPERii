import React, { Component } from 'react';

import './Footer.css';

function Footer() {

    return (
        <footer className="footer-content blue-grey darken-1">
            <section className="footer-link">
                <div className="container-fluid">
                    <div className="row">
                        <section className="col s12 m9">
                            <section className="about-section">
                                <h4 className="footer-title truncate">
                                    Acerca de PERii
                                </h4>
                                PERii-Nicaragua se ha consolidado como un Consorcio integrado por las Universidades miembros
                                del Consejo Nacional de Universidades y representado por las Directoras de las Bibliotecas Universitarias
                                quienes lideran este programa en cada institución.
                                En este nuevo contexto el CNU ha firmado un nuevo convenio de cooperación para el acceso y
                                disponibilidad de la investigación 2014-2016 con el INASP para seguir consolidando el desarrollo de la
                                investigación, pero garantizando con fondos propios la suscripción a los recursos de información.
                                La coordinación está a cargo de la MSc. Ruth Velia Gómez Centeno. El registro y firma de licencias
                                están a cargo de las representaciones de cada institución; así como la formación y difusión de la
                                información.
                            </section>
                        </section>
                        <section className="follow-section col s12 m3">
                            <h4 className="footer-title truncate center">
                                Redes Sociales
                            </h4>
                            <div className="center">
                                <a href="https://www.facebook.com/">
                                    <img src={process.env.PUBLIC_URL + '/Resources/Images/fb.png'} />
                                </a>
                                <a href="https://twitter.com/">
                                    <img src={process.env.PUBLIC_URL + '/Resources/Images/tw.png'} />
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section className="footer-copyright blue-grey darken-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col s12 rights">
                            <section className="developed-by-section">
                                <div className="developers right">
                                    <a className="profile-link" href="https://www.facebook.com/mtraatabladaa94" target="_blank">
                                        <img className="profile" src={process.env.PUBLIC_URL + '/Resources/Images/p64x64.png'} alt="Ing. Michel Roberto Traña Tablada" />
                                    </a>
                                </div>
                            </section>
                            <section className="copyright-section">
                                &copy; Copyright 2017 - <a className="blue-grey-text text-lighten-4" target="_blank" href="http://chontales.unan.edu.ni">UNAN FAREM - Chontales</a>. Todos los derechos reservados
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );

}

export default Footer;