import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c4};
  /* background: radial-gradient(
    circle at 25% 55%,
    ${theme.color.c4Dark} 12%,
    ${theme.color.c4} 0%
  ); */
  background: linear-gradient(
    to top right,
    ${theme.color.c4Dark} 10%,
    ${theme.color.c4} 10% 100%
  );
  background-size: 12px 12px;
  width: 100%;
  height: 100%;
`;

export const Day2 = () => {
  return <DayWrapper></DayWrapper>;
};
