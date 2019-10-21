import React from "react";

export class PassThrough extends React.PureComponent {
    // @ts-ignore
    public render() {
        React.cloneElement(this.props.children as React.ReactElement<any>, { ...this.props })
    }
}