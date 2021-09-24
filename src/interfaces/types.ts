import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { usersConstants } from '../redux/constants/usersConstants';

interface Geo {
    lat: string,
    lon: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo


}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export interface UsersState {
    isFetching: boolean,
    users: IUser[],
    error: string | null

}

export interface FetchUsersSuccessPayload {
    users: IUser[]
}

export interface FetchUsersFailurePayload {
    error: string
}


export interface FetchUsersRequest {
    type: typeof usersConstants.FETCH_USER_REQUEST
}

export type FetchUsersSuccess = {
    type: typeof usersConstants.FETCH_USER_SUCCESS,
    payload: FetchUsersSuccessPayload
}

export type FetchUsersFailure = {
    type: typeof usersConstants.FETCH_USER_FAILURE,
    payload: FetchUsersFailurePayload
}

export type UsersActions =
    | FetchUsersRequest
    | FetchUsersSuccess
    | FetchUsersFailure;

type MainStackParamList = {
    Splash: undefined,
    Home: undefined,
    Users: undefined,
    UserDetail: { user: IUser },
    Dashboard: undefined
}


export type Props = NativeStackScreenProps<MainStackParamList>