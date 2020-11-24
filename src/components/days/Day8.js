import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c3};
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  background: linear-gradient(
        135deg,
        ${theme.color.c3Dark} 25%,
        transparent 25%
      ) -50px 0,
    linear-gradient(225deg, ${theme.color.c3Dark} 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, ${theme.color.c3Dark} 25%, transparent 25%),
    linear-gradient(45deg, ${theme.color.c3Dark} 25%, transparent 25%);
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
`;

export const Day8 = () => {
  return (
    <DayWrapper>
      <Inner />
    </DayWrapper>
  );
};
