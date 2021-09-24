import { all, fork } from "redux-saga/effects";
import usersSaga from "./usersSaga.ts/userSaga";

export function* rootSaga() {
    yield all([fork(usersSaga)]);
}
