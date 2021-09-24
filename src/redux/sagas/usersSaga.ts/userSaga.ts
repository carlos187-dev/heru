import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../../actions/actions';
import { fetchData } from '../../../api/users';
import { usersConstants } from '../../constants/usersConstants';


function* fetchUsersSaga() {
    try {
        const response = yield call(fetchData);
        yield put(actions.fetchUsersSuccess({ users: response.data }));

    }
    catch (e) {
        yield put(actions.fetchUsersFailure({ error: e.message }))
    }
}

function* usersSaga() {
    yield all([takeLatest(usersConstants.FETCH_USER_REQUEST, fetchUsersSaga)])
}

export default usersSaga;