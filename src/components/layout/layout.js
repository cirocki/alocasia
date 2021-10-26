import React from "react";
import Theme from "../../styles/Theme";
import "../../styles/reset.css";
// import "./../styles/fonts.css"
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "./footer/Footer";
import Header from "./header/Header";

console.log(Theme);
console.log(GlobalStyle);

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </Theme>
    </>
  );
}
