import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  colors: {
    dark: "#16191a",
    light: "#f2f2f2",
    white: "#fff",
    grey: "#777",
    primary: "#00553d",
    footerTextColor: "#828282",
    darkgrey: "#333",
  },
  fonts: {
    primary: `"Open Sans", serif`,
    secondary: `"Playfair Display", serif`,
  },
  transition: {
    time: "0.2s",
  },
  max: {
    xxs: "max-width: 339px",
    xs: "max-width: 399px",
    sm: "max-width: 479px",
    md: "max-width: 768px",
    lg: "max-width: 992px",
    xl: "max-width: 1200px",
    xxl: "max-width: 1400px",
    xxxl: "max-width: 1800px",
  },
  min: {
    xxs: "min-width: 340px",
    xs: "min-width: 400px",
    sm: "min-width: 480px",
    md: "min-width: 769px",
    lg: "min-width: 993px",
    xl: "min-width: 1201px",
    xxl: "min-width: 1401px",
    xxxl: "min-width: 1801px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
