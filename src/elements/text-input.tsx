import * as React from "react";

import { TextField } from "@material-ui/core";

export interface ITextInputProps {
  onChange: (e: any) => any;
  required: boolean;
  minLength: number;
  maxLength: number;
  value: string;
  placeholder: string;
  label: string;
  name: string;
}
export interface ITextInputState {
  isValid: boolean;
  errormessage: string;
}
class TextInput extends React.Component<ITextInputProps, ITextInputState> {
  constructor(props: any) {
    super(props);
    this.state = {
      errormessage: "",
      isValid: true
    };
  }
  public handleChange = (e: any) => {
    this.validate(e);
    if (this.props.onChange(e)) {
      this.props.onChange(e);
    }
  };
  public validate = (e: any) => {
    this.setState({
      isValid: true
    });
    if (this.props.required && e.target.value === "") {
      this.setState({
        errormessage: `${e.target.placeholder} is required`,
        isValid: false
      });
    } else if (
      this.props.minLength &&
      e.target.value.length < this.props.minLength
    ) {
      this.setState({
        errormessage: `${e.target.placeholder} lenth should be grater than ${
          this.props.minLength
        }`,
        isValid: false
      });
    } else if (
      this.props.maxLength &&
      e.target.value.length > this.props.maxLength
    ) {
      this.setState({
        errormessage: `${e.target.placeholder} lenth should be less than ${
          this.props.maxLength
        }`,
        isValid: false
      });
    }
  };
  public render() {
    const { value } = this.props;
    return (
      <div>
        <TextField
          error={!this.state.isValid}
          name={this.props.name}
          value={value}
          label={this.props.label}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {this.state.isValid === false && (
          <div>
            <span className="error-message">{this.state.errormessage} </span>
          </div>
        )}
      </div>
    );
  }
}

export default TextInput;
