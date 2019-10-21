import watchAppLogin from "./userinfo/sagas";
import openMenuWatcher from "./appinfo/sagas";

export default [...watchAppLogin, ...openMenuWatcher];
