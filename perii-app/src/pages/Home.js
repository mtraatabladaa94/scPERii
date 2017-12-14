import React, { Component } from 'react';

import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';

class Home extends Component {
    
    render() {

        return (

            <section className="home-page">
                <Nav />
                <Footer />
            </section>

        );

    }

}

export default Home;