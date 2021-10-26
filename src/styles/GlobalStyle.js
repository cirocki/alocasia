import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    color: ${(props) => props.theme.colors.grey};
    background: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 1.6rem;
    position: relative;
    min-height: 100%;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
  }
  .gatsby-image-wrapper {
    width: 100%;
  }
  /* KEEP FOOTER BOTTOM EVEN IF MAIN CONTENT IS SHORT  */
  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1
  }
 
`;
export default GlobalStyle;
