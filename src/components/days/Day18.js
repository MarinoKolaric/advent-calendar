import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c3};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Tree = styled.svg`
  position: absolute;
  height: auto;
  top: 60%;
  transform: translateY(-50%) scale(2.2);
`;

const Path = styled.path``;

const G = styled.g``;

export const Day18 = () => {
  return (
    <DayWrapper>
      <Tree viewBox="0 0 800 600">
        <G
          strokeWidth="10"
          stroke={theme.color.dayNumberLight}
          fill={theme.color.dayNumberLight}
        >
          <Path d="M 400 25 Q 325 125 400 75 Q 475 125 400 25 L 400 75 Q 275 200 400 125 Q 525 200 400 75 L 400 125 Q 225 275 400 200 Q 575 275 400 125 L 400 200 Q 150 350 400 275 Q 650 350 400 200 L 400 275 Q 100 425 400 350 Q 700 425 400 275 L 375 400 C 375 400 400 425 425 400 L 400 275 L 400 275 " />
        </G>
      </Tree>
    </DayWrapper>
  );
};
