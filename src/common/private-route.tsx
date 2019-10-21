import * as React from "react";
import { Redirect, Route } from "react-router-dom";

export interface IPrivateRouteProps {
  component: any;
  location: any;
}
export interface IPrivateRouteState {
  loading: boolean;
  isAuthenticated: boolean;
}
export class PrivateRoute extends React.Component<
  IPrivateRouteProps,
  IPrivateRouteState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAuthenticated: false,
      loading: true
    };
  }
  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        isAuthenticated: true,
        loading: false
      });
    }, 1000);
  }
  public render() {
    const { component: Component, ...rest } = this.props;
    if (this.state.loading) {
      return <div />;
    } else {
      return (
        <Route
          {...rest}
          render={() => (
            <div>
              {!this.state.isAuthenticated && (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                  }}
                />
              )}
              <Component {...this.props} />
            </div>
          )}
        />
      );
    }
  }
}

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => {
//       const isSessionExist = true; //localStorage.getItem("current-user");
//       alert("hiiiii");
//       setTimeout(() => {
//         if (isSessionExist) return <Component {...props} />;
//         else
//           return (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           );
//       }, 100000);
//     }}
//   />
// );
