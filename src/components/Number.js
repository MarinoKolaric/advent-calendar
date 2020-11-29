import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  position: absolute;
  line-height: 1;
  opacity: 0.8;

  ${(props) =>
    props.position === "center" &&
    css`
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.position === "topLeft" &&
    css`
      left: 12px;
      top: 12px;
    `}
  
  ${(props) =>
    props.position === "topRight" &&
    css`
      right: 12px;
      top: 12px;
    `}
`;

export const Number = ({ number = 1, position = "left", size, color }) => {
  return (
    <Container position={position} size={size} color={color}>
      {number}
    </Container>
  );
};
