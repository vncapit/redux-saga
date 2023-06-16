import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchUserDataAsync } from "../../api";
import { FETCH_USER_REQUEST } from "../actions/fetchDataActionType";
import { fetchUserSuccess, fetchUserFailed } from "../actions/fetchDataAction";

function* fetchUserData(action) {
  try {
    const users = yield call(fetchUserDataAsync, action.payload);
    console.log(users);
    yield put(fetchUserSuccess(users));
  } catch (e) {
    yield put(fetchUserFailed);
  }
}

export function* fetchDataSaga() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserData);
}
