/* Node elements */
import React, { Component } from 'react';
import { connect } from "react-redux";

/* React Components */
import Nav from '../../components/header/Nav';
import Footer from '../../components/footer/Footer';
import AsideContentLeft from '../../components/body/asideLeft/AsideContentLeft';

/* CSS */
import './Home.css';
import { setRequests } from '../../state/actions/requests/setRequestsByUser';

class Home extends Component {

    componentDidMount() {
        this.props.setRequestsByUser();
    }
    
    render() {

        this.props.setRequestsByUser();

        return (

            <section className="home-page">

                <Nav />

                <section className="wrap-content row">
                    <section className="container-fluid">
                        <aside className="aside-container hide-on-small-only col l2 m4 s12">
                            <div className="aside-content card-panel">
                                <AsideContentLeft />
                            </div>
                        </aside>
                        <section className="wrap-content col l10 m8 s12">
                            <section className="card card-panel">
                                <h1>

                                </h1>
                            </section>
                        </section>
                    </section>
                </section>

                <Footer />

            </section>

        );

    }

}

const mapStateToProps = ({ id }) => ({
    userId: id
});

const mapDispatchToProps = dispatch => ({

    setRequestsByUser: () => dispatch(setRequests())

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);