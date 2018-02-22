/* Import Redux Components */
import { combineReducers } from 'redux';

/* Action Creators */
import { requestsByUser } from "./requests/requestsByUser";

/* Export Combine Reducers */
export const reducers = combineReducers({
    requestsByUser,
});