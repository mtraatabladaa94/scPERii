/* Imports Components */
import * as firebase from "firebase";
require('firebase/firestore');

/* Export Const with type of action */
export const GET_REQUEST_BY_USER = 'GET_REQUEST_BY_USER';
export const SET_REQUEST_BY_USER = 'SET_REQUEST_BY_USER';

const getRequestsByUser = payload => ({ type: GET_REQUEST_BY_USER, payload });
const setRequestsByUser = payload => ({ type: SET_REQUEST_BY_USER, payload });

export const setRequests = () => {

    return dispatch => {

        const db = firebase.firestore();

        db.collection("requests")
        .get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });

            return dispatch(setRequestsByUser({ requests: querySnapshot }));

        })
        .catch(error => {
            console.log(`Ha ocurrido un error. Descripción: ${error}`);
            return;
        });

    };

};