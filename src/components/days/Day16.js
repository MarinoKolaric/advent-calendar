import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c2Dark};
  width: 100%;
  height: 100%;
`;

const Tree = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-15deg);
`;

const Path = styled.path`
`;

const G = styled.g``;

export const Day16 = () => {
  return (
    <DayWrapper>
      <Tree viewBox="320 130 200 10">
        <G strokeWidth="8" stroke={theme.color.dayNumberLight} fill="none">
          <Path d="M 400 20 C 380 40 460 60 400 60 C 320 60 500 100 400 100 C 280 100 560 140 400 140 C 220 140 600 180 400 180 C 180 180 640 220 400 220 C 140 220 680 260 400 260 " />
        </G>
      </Tree>
    </DayWrapper>
  );
};
