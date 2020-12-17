import React from "react";
import styled from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c1};
  width: 100%;
  height: 100%;
`;

const Box = styled.rect`
  fill: ${theme.color.c4};
  stroke: black;
  stroke-width: 2px;
`;
const Stripe = styled.rect`
  fill: white;
  stroke: black;
  stroke-width: 2px;
`;

const Ribbon = styled.path`
  stroke: ${theme.color.c4};
  stroke-width: 4px;
  fill: none;
`;

export const Day24 = () => {
  return (
    <DayWrapper>
      <svg width="100%" height="100%" viewBox="-100 -120 200 200">
        <circle cx="0" cy="-50" r="10" fill={theme.color.c4Dark} />
        <Box x="-60" y="-40" width="120" height="100" />
        <Box x="-70" y="-47" width="140" height="20" />
        <Stripe x="-20" y="-40" width="40" height="100" />
        <Stripe x="-25" y="-47" width="50" height="20" />

        <Ribbon
          d="
      M 0 -50
      L 30 -50
      C 50 -50 50 -70 30 -65
      L 0 -50"
        />

        <Ribbon
          d="
      M 0 -50
      L -30 -50
      C -50 -50 -50 -70 -30 -65
      L 0 -50"
        />
      </svg>
    </DayWrapper>
  );
};
