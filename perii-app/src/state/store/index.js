/* Import Redux Components */
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* Import Reducers */
import { rootReducer } from "../reducers/index";

/* Object with Initial State */
const initialState = {
};

/* Export and Create Store */
export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
);