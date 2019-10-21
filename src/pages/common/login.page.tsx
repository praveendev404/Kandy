import * as React from "react";

import Button from "@material-ui/core/Button";
import TextInput from "../../elements/text-input";
import { withProps } from "../../props/withProps";
import { mapDispatchToProps, mapStateToProps } from "./login.page.container";

export interface ILoginPageProps {
  load?: boolean;
  loginSubmit(model: any): void;
}
export interface ILoginPageState {
  isLoading: boolean;
  login: {
    userName: string;
    password: string;
  };
}

// @ts-ignore
@withProps("ILoginPageProps")
class Login extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      login: {
        userName: "",
        password: ""
      }
    };
  }
  public handleSubmit = (e: any) => {
    console.log(e);
  };
  public handleChange = (e: any) => {
    const { login } = this.state;
    const { name, value } = e.target;

    this.setState({
      login: {
        ...login,
        [name]: value
      }
    });
  };
  public render() {
    const { login } = this.state;
    const { loginSubmit } = this.props;
    return (
      <div style={{ marginTop: "155px" }}>
        Login
        <form name="loginForm">
          <TextInput
            onChange={this.handleChange}
            value={login.userName}
            required={true}
            minLength={4}
            label="User Name"
            name="userName"
            placeholder="User Name"
            maxLength={20}
          />
          <br />
          <TextInput
            onChange={this.handleChange}
            value={login.password}
            required={true}
            minLength={4}
            label="Password"
            name="password"
            placeholder="Password"
            maxLength={10}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              loginSubmit(login);
            }}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
