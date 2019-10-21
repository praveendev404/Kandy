import { CommonColors } from "@material-ui/core/colors/common";
import {
  createMuiTheme,
  MuiThemeProvider,
  Theme as MuiTheme
} from "@material-ui/core/styles";
import { Palette } from "@material-ui/core/styles/createPalette";

export interface IColorModel extends CommonColors {
  green: string;
  red: string;
  blue: string;
  gray: string;
  darkWhite: string;
  lightBlack: string;
}

export interface IPaletteModel extends Palette {
  common: IColorModel;
}
export interface IThemeModel extends MuiTheme {
  palette: IPaletteModel;
}
const colors = {
  red: "red"
};

// @ts-ignore
const theme = createMuiTheme({
  palette: {
    background: {
      default: ""
    },
    common: { ...colors },
    type: "dark"
  }
});
