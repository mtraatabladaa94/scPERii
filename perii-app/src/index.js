import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Materialize CSS & JQuery */
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

$(document).ready(function() {
    $(".button-collapse").sideNav();
});

registerServiceWorker();