import React from "react";
import { LoginPageAppContainer } from "../pages/common/login.page.container";
import { IPropsContextModel } from "./propsContext";
import { AppPageContainer } from "../AppContainer";

export const makeAppContext: () => IPropsContextModel = () => ({
  IAppProps: AppPageContainer,
  ILoginPageProps: LoginPageAppContainer
});
