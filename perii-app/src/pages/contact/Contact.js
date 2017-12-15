/* Node elements */
import React, { Component } from 'react';

/* React Components */
import Nav from '../../components/header/Nav';
import Footer from '../../components/footer/Footer';
import AsideContentLeft from '../../components/body/asideLeft/AsideContentLeft';

/* CSS */


class Contact extends Component {

    render() {
        return (

            <section className="contact-page">

                <Nav />

                <section className="wrap-content row">
                    <section className="container-fluid">
                        <aside className="aside-container hide-on-small-only col l2 m4 s12">
                            <div className="aside-content card-panel">
                                <AsideContentLeft />
                            </div>
                        </aside>
                        <section className="wrap-content col l10 m8 s12">
                            <h1>Contact</h1>
                        </section>
                    </section>
                </section>

                <Footer />

            </section>

        );
    }

}

export default Contact;