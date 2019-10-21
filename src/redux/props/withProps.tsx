import { withStyles } from "@material-ui/core";
import * as React from "react";
import { IThemeModel } from "../../theme/theme";
import { IPropsContextModel, PropsContext } from "./propsContext";

const styles = (theme: IThemeModel) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: theme.typography.pxToRem(70),
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.common.darkWhite,
    color: theme.palette.common.lightBlack
  }
});

// @ts-ignore
export const Warning = withStyles(styles)((props: any) => {
  const { contract, classes } = props;

  return (
    <div className={classes.container}>
      <span>Missing Prop Container for {contract}</span>
    </div>
  );
});

export const withProps = (
  contract: keyof IPropsContextModel,
  instanceName?: string
) => (WrappedComponent: React.ComponentType<any>) => (props: any) => (
  // @ts-ignore
  <PropsContext.Consumer>
    {
      // @ts-ignore
    }
    {(context: IPropsContextModel) => {
      let Hoc = context[contract] as React.ComponentType;
      const coalescedInstanceName = props.instanceName || instanceName;
      if (coalescedInstanceName) {
        const lookup = Hoc as any;
        Hoc = lookup[coalescedInstanceName] as React.ComponentType;
      }
      if (!Hoc) return <Warning contract={contract} />;

      return (
        <Hoc {...props}>
          <WrappedComponent {...props} />
        </Hoc>
      );
    }}
  </PropsContext.Consumer>
);
