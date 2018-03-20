/* Imports Components */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from "react-redux";

/* Imports Custom Components */
import { store } from './state/store/index';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

/* Initialize App Firebase */
const config = {
    apiKey: "AIzaSyAsvw_t59UXJpXRatcfsgLaopuAc8JAX6g",
    authDomain: "periiappfc.firebaseapp.com",
    databaseURL: "https://periiappfc.firebaseio.com",
    projectId: "periiappfc",
    storageBucket: "periiappfc.appspot.com",
    messagingSenderId: "938548447333"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();