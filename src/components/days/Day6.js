import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c4};

  background: repeating-linear-gradient(
    -45deg,
    ${theme.color.c1} 0px 12px,
    ${theme.color.c1Dark} 12px 20px
  );
  width: 100%;
  height: 100%;
`;

export const Day6 = () => {
  return <DayWrapper></DayWrapper>;
};
