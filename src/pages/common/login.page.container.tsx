// @ts-ignore
import * as actions from "../../redux/redux-modules/userinfo/actions";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ILoginPageProps } from "./login.page";

export interface ILoginPageContainerProps {
  history?: any;
  match?: any;
  dispatch?: (action: any) => void;
  load: boolean;
  loginSubmit(model: any): void;
}

export const mapStateToProps = (state: any) => {
  return { state };
};
export const mapDispatchToProps = (dispatch: any) => ({
  loginSubmit: (model: any) => dispatch({ model, type: actions.LOGIN_REQUEST })
});

// @ts-ignore
@connect(
  mapStateToProps,
  null
)
export class LoginPageAppContainer extends React.PureComponent<
  ILoginPageContainerProps
> {
  public static defaultProps = {
    dispatch: () => new Error("")
  };
  // constructor(props: any) {
  //   super(props);
  // }
  /**
   * loginSubmit
   */
  public loginSubmit = (model: any) => {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({ model, type: actions.LOGIN_REQUEST });
    }
  };
  public render() {
    debugger;
    const { load } = this.props;
    const { loginSubmit } = this;
    return React.cloneElement(
      this.props.children as React.ReactElement<ILoginPageProps>,
      {
        load,
        loginSubmit
      }
    );
  }
}
