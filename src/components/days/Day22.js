import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c2Dark};

  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  background: radial-gradient(
      circle at 30% 25%,
      ${theme.color.c2} 3px,
      transparent 3px 20px
    ),
    radial-gradient(circle at 75% 75%, ${theme.color.c2} 3px, transparent 3px 20px);
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
`;

export const Day22 = () => {
  return (
    <DayWrapper>
      <Inner />
    </DayWrapper>
  );
};
