import React, { useCallback, useRef } from "react";
import styled, { css } from "styled-components";
import { ActiveDayContext } from "../context";
import { useOnClickOutside } from "../utils";
import { theme } from "../style";
import { Number } from "./index";

const Wrapper = styled.div`
  background: rgba(51, 51, 51, 0.8);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  overflow: hidden;
  font-size: 28px;

  ${theme.mediaQueries('mobileMedium')`
    width: 400px;
    height: 400px;
  `}
`;

export const DayModal = ({ handleOpen }) => {
  const ref = useRef();
  const {
    state: { day },
  } = React.useContext(ActiveDayContext);

  useOnClickOutside(
    ref,
    useCallback(() => handleOpen(false), [handleOpen])
  );

  return (
    <Wrapper>
      <Box ref={ref}>
        {day.Component}
        <Number
          number={day.day}
          position={day.numPosition}
          size={day.numSize}
          color={day.numColor}
        />
      </Box>
    </Wrapper>
  );
};
