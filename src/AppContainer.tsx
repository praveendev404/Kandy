// @ts-ignore
import * as actions from "./redux/redux-modules/userinfo/actions";
import * as React from "react";
import { connect } from "react-redux";
import { IAppProps } from "./App";

export const mapStateToProps = (state: any) => {
  const props: IAppContainerProps = {};
  return props;
};
export const mapDispatchToProps = (dispatch: any) => ({
  drawerOpen: (isMenuOpen: boolean) =>
    dispatch({ isMenuOpen, type: actions.LOGIN_REQUEST })
});

export interface IAppContainerProps {}

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
    return React.cloneElement(
      this.props.children as React.ReactElement<IAppProps>,
      {}
    );
  }
}
