import * as actions from "./actions";
import Immutable from "immutable";

const initialState = {
  isMenuOpen: false,
  isMenuClose: false,
  loading: false,
  data: {},
  isLoggedin: false
};

const openMenu = (state, action) => {
  debugger;
  return { ...state, isMenuOpen: true };
};

const handlers = {
  [actions.MENU_OPEN_START]: openMenu
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
