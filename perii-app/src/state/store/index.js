/* Import Redux Components */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

/* Import Reducers */
import { reducers } from "../reducers/index";

/* Object with Initial State */
const initialState = {

};

/* Const for Tools of Redux Chrome Plugin */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__  || compose;

/* Export and Create Store */
export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);