import { FetchUsersFailure, FetchUsersFailurePayload, FetchUsersRequest, FetchUsersSuccess, FetchUsersSuccessPayload } from '../../interfaces/types';
import {usersConstants} from '../constants/usersConstants';

export const fetchUsersRequest = (): FetchUsersRequest => ({
    type: usersConstants.FETCH_USER_REQUEST
});

export const fetchUsersSuccess = (payload: FetchUsersSuccessPayload): FetchUsersSuccess => ({
    type: usersConstants.FETCH_USER_SUCCESS,
    payload
});

export const fetchUsersFailure = ( payload: FetchUsersFailurePayload ): FetchUsersFailure => ({
    type: usersConstants.FETCH_USER_FAILURE,
    payload
    
})