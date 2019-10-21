import React from "react";

export interface IPropsContextModel {
  IAppProps: React.ComponentType<any>;
  ILoginPageProps: React.ComponentType<any>;
}
export const PropsContext = React.createContext({});
