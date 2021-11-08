import React from "react";
import styled from "styled-components";
import { mainData } from "../../../data/mainData";

export default function Author() {
  const { author, authorURL } = mainData;
  return (
    <div>
      <p>
        Designed and developed by <a href={authorURL}>{author}</a>
      </p>
    </div>
  );
}
