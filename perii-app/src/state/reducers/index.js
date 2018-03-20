/* Import Redux Components */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/* Action Creators */
import { requestsByUser } from "./requests/requestsByUser";

/* Export Combine Reducers */
export const reducers = combineReducers({
    requestsByUser,
    forms: formReducer,
});