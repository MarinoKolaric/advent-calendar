import React from "react";
import styled from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.c4Dark};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sights = [
  {
    x: 10,
    y: 70,
    size: 14,
    rotation: 0,
  },
  {
    x: 80,
    y: 6,
    size: 14,
    rotation: 0,
  },
  {
    x: 94,
    y: 40,
    size: 14,
    rotation: 35,
  },

];


const dots = [
  {
    x: 66,
    y: 90,
    size: 6,
  },
  {
    x: 6,
    y: 41,
    size: 6,
  },
  {
    x: 30,
    y: 22,
    size: 6,
  },
  {
    x: 92,
    y: 20,
    size: 6,
  },
  {
    x: 92,
    y: 82,
    size: 6,
  },
  {
    x: 22,
    y: 74,
    size: 6,
  },
  {
    x: 66,
    y: 12,
    size: 6,
  },
  {
    x: 22,
    y: 12,
    size: 6,
  },
];


export const Day9 = () => {
  return (
    <DayWrapper>
      {sights.map((x, i) => (
        <Sight
          key={i}
          x={x.x}
          y={x.y}
          rotation={x.rotation}
          size={x.size}
          backgroundColor={theme.color.c1}
        />
      ))}
      {dots.map((x, i) => (
        <Dot key={i} x={x.x} y={x.y} size={x.size} backgroundColor={theme.color.c1} />
      ))}
      <svg width="80%" height="80%" viewBox="-100 -100 200 200">
        <g transform="translate(0 5)">
          <g>
            <polygon points="0,0 37,-50 0,-100" fill={theme.color.c1} />
            <polygon points="0,0 -37,-50 0,-100" fill={theme.color.c1Dark} />
          </g>
          <g transform="rotate(72)">
            <polygon points="0,0 37,-50 0,-100" fill={theme.color.c1} />
            <polygon points="0,0 -37,-50 0,-100" fill={theme.color.c1Dark} />
          </g>
          <g transform="rotate(-72)">
            <polygon points="0,0 37,-50 0,-100" fill={theme.color.c1} />
            <polygon points="0,0 -37,-50 0,-100" fill={theme.color.c1Dark} />
          </g>
          <g transform="rotate(144)">
            <polygon points="0,0 37,-50 0,-100" fill={theme.color.c1} />
            <polygon points="0,0 -37,-50 0,-100" fill={theme.color.c1Dark} />
          </g>
          <g transform="rotate(-144)">
            <polygon points="0,0 37,-50 0,-100" fill={theme.color.c1} />
            <polygon points="0,0 -37,-50 0,-100" fill={theme.color.c1Dark} />
          </g>
        </g>
      </svg>
    </DayWrapper>
  );
};
