import { createSelector } from "reselect";
const userInfo = state => state.userInfo;

export const isUserAuthenticated = createSelector(
  userInfo,
  userInfo => {
    if (!userInfo.get("signedIn")) return false;

    const timestamp = userInfo.getIn(["details", "UTCTokenExpireDate"]);
    const tokenExpireDate = new Date(timestamp * 1000)

    return tokenExpireDate > new Date()
  }
);

export const getUserToken = createSelector(
  userInfo,
  userInfo => userInfo.getIn(["details", "Token"])
);

export const getUserDetails = createSelector(
  userInfo,
  userInfo => userInfo.get("details").toJS()
);
