import React from "react";
import styled from "styled-components";
import { globalHistory as history } from "@reach/router";
import logoImage from "../../../images/icons/iconmonstr-tree-8.svg";
import { mainData } from "../../../data/mainData";

export default function Branding() {
  const { location } = history;
  const path = location.pathname;
  const brandName = mainData.websiteTitle;
  return (
    <div>
      {/* IF CURRENT URL IS INDEX, LOGO CLICK REDIRECTS TO PAGE TOP, OTHERWISE TO INDEX PAGE  */}
      {path === "/" ? (
        <a href="#top">
          <img src={logoImage} alt={`${brandName} Logo`} />
        </a>
      ) : (
        <a to="/">
          <img src={logoImage} alt={`${brandName} Logo`} />
        </a>
      )}
    </div>
  );
}
