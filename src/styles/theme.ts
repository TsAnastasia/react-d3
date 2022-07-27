import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: "#757ce8",
      main: "#5BB318",
      // dark: "#002884",
      contrastText: "#EAE509",
    },
    secondary: {
      main: "#7A4069",
      contrastText: "#FFC18E",
    },
    // error: {},
    // warning: {},
    // info: {},
    // success: {},
    // action: {
    //   disabled: "#C4C4C4",
    //   disabledBackground: "#E4E4E4",
    //   disabledOpacity: 0.4,
    // },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
  // transitions: {
  //   duration: {
  //     shortest: 150,
  //     shorter: 200,
  //     short: 250,
  //     // most basic recommended timing
  //     standard: 300,
  //     // this is to be used in complex animations
  //     complex: 375,
  //     // recommended when something is entering screen
  //     enteringScreen: 225,
  //     // recommended when something is leaving screen
  //     leavingScreen: 195,
  //   },
  //   easing: {
  //     // This is the most common easing curve.
  //     easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  //     // Objects enter the screen at full velocity from off-screen and
  //     // slowly decelerate to a resting point.
  //     easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  //     // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  //     easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  //     // The sharp curve is used by objects that may return to the screen at any time.
  //     sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  //   },
  // },
});

export default theme;
