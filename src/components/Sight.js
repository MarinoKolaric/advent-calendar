import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  left: ${(props) => `${props.x}%`};
  top: ${(props) => `${props.y}%`};
  transform: rotate(${(props) => `${props.rotation}deg`});
  position: absolute;
`;

const X = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &::before {
    content: "";
    width: 40%;
    height: 3px;
    background: ${(props) => props.color};
    border-radius: 10px;
    position: absolute;
    transform: translateY(-50%);
  }
  &::after {
    content: "";
    width: 40%;
    height: 3px;
    right: 0;
    background: ${(props) => props.color};
    border-radius: 10px;
    position: absolute;
    transform: translateY(-50%);
  }
`;

const Y = styled.div`
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;

  &::before {
    content: "";
    width: 3px;
    height: 40%;
    background: ${(props) => props.color};
    border-radius: 10px;
    position: absolute;
    transform: translateX(-50%);
  }
  &::after {
    content: "";
    width: 3px;
    height: 40%;
    bottom: 0;
    background: ${(props) => props.color};
    border-radius: 10px;
    position: absolute;
    transform: translateX(-50%);
  }
`;

export const Sight = ({
  size = 20,
  backgroundColor = "#000",
  rotation = 0,
  x = 0,
  y = 0,
}) => {
  return (
    <Container size={size} x={x} y={y} rotation={rotation}>
      <X color={backgroundColor}></X>
      <Y color={backgroundColor}></Y>
    </Container>
  );
};
