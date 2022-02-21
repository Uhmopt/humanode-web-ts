import { createTheme } from "@mui/material";
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WARNING_COLOR,
  WHITE_COLOR,
} from "./variable";
const theme = createTheme();
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    warning: {
      main: WARNING_COLOR,
    },
    error: {
      main: ERROR_COLOR,
    },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: "Futura PT",
    fontSize: 14,
    fontWeightMedium: 300,
    fontWeightRegular: 300,

    h2: {
      fontSize: 50,
      letterSpacing: "0.5em",
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
        letterSpacing: "0.5em",
      },
    },
    h3: {
      fontSize: 27,
      letterSpacing: "0.5em",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        letterSpacing: "0.5em",
      },
    },
    h4: {
      fontSize: 24,
      letterSpacing: "0.5em",
      [theme.breakpoints.down("sm")]: {
        fontSize: 13,
        letterSpacing: "0.5em",
      },
    },
    h5: {
      fontSize: 24,
      letterSpacing: "0.5em",
      [theme.breakpoints.down("md")]: {
        fontSize: 20,
        letterSpacing: "0.5em",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        letterSpacing: "0.3em",
      },
    },
    h6: {
      fontSize: 24,
      letterSpacing: "0.5em",
      [theme.breakpoints.down("lg")]: {
        fontSize: 20,
        letterSpacing: "0.5em",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
        letterSpacing: "0.2em",
      },
    },
    button: {
      fontSize: 16,
      [theme.breakpoints.down("sm")]: {
        fontSize: 13,
      },
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
  },
  // components
  components: {
    MuiButton: {
      styleOverrides: {
        root: { fontSize: 14, fontWeight: 400, letterSpacing: "0.15em" },
        sizeMedium: {
          padding: "23px 26px",
        },
        containedPrimary: {
          backgroundImage: `linear-gradient(96.04deg, ${ERROR_COLOR} -14.31%, ${WARNING_COLOR} 152.85%) ;`,
        },
      },
    },
  },
});
