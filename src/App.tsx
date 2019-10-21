import * as React from "react";
import { connect } from "react-redux";

import "./App.css";
// import { PrivateRoute } from "./common/private-route";
import logo from "./logo.svg";
import Login from "./pages/common/login.page";
import Dashboard from "./pages/common/dashboard.page";
import history from "./redux/global/history";
import { Route, Router } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { IThemeModel } from "../src/theme/theme";
import { withProps } from "./props/withProps";

import classNames from "classnames";

import {
  List,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles
} from "@material-ui/core";

const drawerWidth = 240;
const styles = (theme: IThemeModel) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden"
      // width: theme.spacing.unit * 7 + 1,
      // [theme.breakpoints.up("sm")]: {
      //   width: theme.spacing.unit * 9 + 1
      // }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1
    }
  });

export interface IAppProps {
  isLoggedin: boolean;
  isMenuOpen: boolean;
  isMenuClose: boolean;
  loading: boolean;
  classes: any;
  theme: any;
  drawerOpen: (e: any) => void;
  drawerClose: (e: any) => void;
}

export interface IAppState {
  open: boolean;
  close: boolean;
}

// @ts-ignore
@withProps("IAppProps")
class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    // this.state = { open: false, close: false };
  }
  public handleDrawerOpen = () => {
    // this.setState({ open: true });
    this.props.drawerOpen(true);
  };

  public handleDrawerClose = () => {
    // this.setState({ open: false });
    this.props.drawerOpen(false);
  };
  // public getDerivedStateFromProps(props: any) {
  //   const ppp = this.props;
  // }
  public render() {
    const { classes, theme, isLoggedin, isMenuOpen } = this.props;
    debugger;
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: isMenuOpen
              })}
            >
              <Toolbar disableGutters={!isMenuOpen}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, {
                    [classes.hide]: isMenuOpen
                  })}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            {isLoggedin && (
              <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: isMenuOpen,
                  [classes.drawerClose]: !isMenuOpen
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: isMenuOpen,
                    [classes.drawerClose]: !isMenuOpen
                  })
                }}
                open={isMenuOpen}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                      <ListItem button={true} key={text}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button={true} key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            )}

            <div>
              {/* {loading == true && (
                  <div className="dv-loader">
                    <div className="loader" />
                  </div>
                )} */}
              {/* <PrivateRoute path="/" component={Login} /> */}
              <Route exact={true} path="/" component={Login} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles, { withTheme: true })(App);
