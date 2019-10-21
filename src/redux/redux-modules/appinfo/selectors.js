import { createSelector } from "reselect";
const appInfo = state => state.appInfo;

export const getIsMenuOpen = createSelector(
  appInfo,
  appInfo => appInfo.get("isMenuOpen").toJS()
);
