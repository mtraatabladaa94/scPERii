/* Import Const of Action Creators */
import { SET_REQUEST_BY_USER } from '../../actions/requests/setRequestsByUser';

/* Export Reducers */
export const requestsByUser = (state = {}, action) => {

    switch (action.type) {

        case SET_REQUEST_BY_USER: {
            const { requests } = action.payload;
            return { ...state, requests };
        }
        default:
            return state;

    }

};