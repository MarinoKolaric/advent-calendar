import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c4};

  background: repeating-linear-gradient(
    -60deg,
    ${theme.color.c1} 0px 10px,
    ${theme.color.c1Dark} 10px 14px
  );
  width: 100%;
  height: 100%;
`;

export const Day13 = () => {
  return <DayWrapper></DayWrapper>;
};
