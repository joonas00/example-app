import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#142D4C",
    },
    secondary: {
      main: "#ECECEC",
    },
    error: {
      main: "#E7E0C9",
    },
    info: {
      main: "#9FD3C7",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default mainTheme;
