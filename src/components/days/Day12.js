import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.c5};
  width: 100%;
  height: 100%;
  position: relative;
`;

const sights = [
  {
    x: 20,
    y: 8,
    size: 15,
    rotation: 0,
  },
  {
    x: 65,
    y: 15,
    size: 15,
    rotation: -32,
  },
  {
    x: 75,
    y: 70,
    size: 15,
    rotation: -40,
  },
  {
    x: 25,
    y: 70,
    size: 15,
    rotation: 0,
  },
];

const dots = [
  {
    x: 8,
    y: 18,
    size: 6,
  },
  {
    x: 6,
    y: 45,
    size: 6,
  },
  {
    x: 28,
    y: 32,
    size: 6,
  },
  {
    x: 16,
    y: 88,
    size: 6,
  },
  {
    x: 58,
    y: 82,
    size: 6,
  },
  {
    x: 88,
    y: 8,
    size: 6,
  },
  {
    x: 94,
    y: 36,
    size: 6,
  },
  {
    x: 78,
    y: 34,
    size: 6,
  },
  {
    x: 92,
    y: 90,
    size: 6,
  },
];

export const Day12 = () => {
  const color = theme.color.c5Dark;

  return (
    <DayWrapper>
      {sights.map((x) => (
        <Sight
          x={x.x}
          y={x.y}
          rotation={x.rotation}
          size={x.size}
          backgroundColor={color}
        />
      ))}
      {dots.map((x) => (
        <Dot x={x.x} y={x.y} size={x.size} backgroundColor={color} />
      ))}
    </DayWrapper>
  );
};
