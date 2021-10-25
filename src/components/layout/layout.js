import React from "react";
import Theme from "../../styles/Theme";
import "../../styles/reset.css";
// import "./../styles/fonts.css"
import GlobalStyle from "../../styles/GlobalStyle";

console.log(Theme);
console.log(GlobalStyle);

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        {children}
      </Theme>
    </>
  );
}
