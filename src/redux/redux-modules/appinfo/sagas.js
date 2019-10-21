import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import * as actions from "./actions";

function* openMenu(action) {
  try {
    debugger;
    yield put({ type: actions.MENU_OPEN_START, isMenuOpen: action.isMenuOpen });
  } catch (error) {}
}
function* openMenuWatcher() {
  yield takeEvery(actions.MENU_OPEN, openMenu);
}
export default [openMenuWatcher];
