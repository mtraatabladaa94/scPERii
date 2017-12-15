/* Node elements */
import React, { Component } from 'react';

/* React Router elements */
import { BrowserRouter, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Docs from './pages/docs/Docs';

/* Others resources */



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/docs" component={Docs} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;