import { combineReducers } from "redux";
import LoginReducer from "./userinfo/reducer";
import AppReducer from "./appinfo/reducer";
const rootReducer = combineReducers({
  LoginReducer,
  AppReducer
});

export default rootReducer;
