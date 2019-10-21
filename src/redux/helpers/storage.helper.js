import * as amplifyStore from "amplify-store";

export const setStorage = (key, value) => {
  amplifyStore(key, value);
};

export const getStorage = key => {
  return amplifyStore(key);
};

export const clearStorage = key => {
  amplifyStore(key, null);
};
export const clearAll = () => {
  const storageArray = ["id_token", "id_token"];
  for (const storageItem of storageArray) {
    this.ClearStorage(storageItem);
  }
};
