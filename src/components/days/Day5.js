import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c4};

  background: repeating-linear-gradient(
    -45deg,
    ${theme.color.c4} 0px 8px,
    ${theme.color.c4Dark} 10px 14px
  );
  /* background-size: 12px 12px; */
  width: 100%;
  height: 100%;
`;

export const Day5 = () => {
  return <DayWrapper></DayWrapper>;
};
