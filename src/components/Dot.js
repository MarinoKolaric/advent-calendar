import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  left: ${(props) => `${props.x}%`};
  top: ${(props) => `${props.y}%`};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
`;

export const Dot = ({ size = 4, backgroundColor = "#000", x = 0, y = 0 }) => {
  return (
    <Circle size={size} x={x} y={y} backgroundColor={backgroundColor}></Circle>
  );
};
