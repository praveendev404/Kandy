// @ts-ignore
import * as actions from "./redux/redux-modules/appinfo/actions";
import * as React from "react";
import { connect } from "react-redux";
import { IAppProps } from "./App";

export const mapStateToProps = (state: any) => {
  debugger;
  const props: IAppContainerProps = {
    isMenuOpen: state.AppReducer && state.AppReducer.isMenuOpen,
    isLoggedin: state.LoginReducer && state.LoginReducer.isLoggedin
  };
  return props;
};
export const mapDispatchToProps = (dispatch: any) => ({
  drawerOpen: (isMenuOpen: boolean) => {
    debugger;
    return dispatch({ isMenuOpen, type: actions.MENU_OPEN });
  }
});

export interface IAppContainerProps {
  drawerOpen?: () => void;
  isMenuOpen?: boolean;
  isLoggedin?: boolean;
}

// @ts-ignore
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class AppPageContainer extends React.PureComponent<IAppContainerProps> {
  public static defaultProps = {
    dispatch: () => new Error("")
  };

  public render() {
    const { drawerOpen, isMenuOpen, isLoggedin } = this.props;
    return React.cloneElement(
      this.props.children as React.ReactElement<IAppProps>,
      { drawerOpen, isMenuOpen, isLoggedin }
    );
  }
}
