import { UsersActions, UsersState } from "../../../interfaces/types";
import { usersConstants } from '../../constants/usersConstants';

const INITIAL_STATE: UsersState = {
    isFetching: false,
    users: [],
    error: null,

}

export const userReducer = (state = INITIAL_STATE, action: UsersActions) => {
    switch (action.type) {
        case usersConstants.FETCH_USER_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case usersConstants.FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload.users,
            };
        case usersConstants.FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                users: [],
                error: action.payload.error
            };
        default:
            return {
                ...state
            }
    }
}