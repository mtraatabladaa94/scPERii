import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import Home from './pages/Home/Home';
import Nav from './components/header/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;