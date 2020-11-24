import React, { useCallback, useRef } from "react";
import styled, { css } from "styled-components";
import { useOnClickOutside } from "../utils";
import { theme } from "../style";

const Wrapper = styled.div`
  background: rgba(51, 51, 51, 0.7);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  z-index: 2;
`;

const Box = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

export const DayModal = ({ Component, handleOpen }) => {
  const ref = useRef();
  useOnClickOutside(
    ref,
    useCallback(() => handleOpen(false), [handleOpen])
  );

  return (
    <Wrapper>
      <Box ref={ref}>
        {Component}
      </Box>
    </Wrapper>
  );
};
