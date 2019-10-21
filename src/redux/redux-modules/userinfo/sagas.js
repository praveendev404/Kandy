import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import history from "../../global/history";

import { login } from "../../api-middleware/login";
import * as actions from "./actions";

function* appLogin(action) {
  try {
    yield put({ type: actions.LOGIN_REQUEST_START });
    const response = yield call(login, action.model, "token");
    yield put({ type: actions.LOGIN_SUCCESS, data: response.data });
    history.push("dashboard");
  } catch (error) {
    yield put({ type: actions.ERROR, error });
  }
}
function* appLoginWatcher() {
  yield takeEvery(actions.LOGIN_REQUEST, appLogin);
}
function* watchAppLogin() {
  yield all([appLoginWatcher()]);
}

export default [watchAppLogin];
