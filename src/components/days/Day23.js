import React from "react";
import styled from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.c1};

  width: 100%;
  height: 100%;
`;

const sights = [
  {
    x: 8,
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
];

const dots = [
  {
    x: 86,
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
];

export const Day23 = () => {
  const color = theme.color.c5Dark;


  return (
    <DayWrapper>
      {sights.map((x, i) => (
        <Sight
          key={i}
          x={x.x}
          y={x.y}
          rotation={x.rotation}
          size={x.size}
          backgroundColor={color}
        />
      ))}
      {dots.map((x, i) => (
        <Dot key={i} x={x.x} y={x.y} size={x.size} backgroundColor={color} />
      ))}
      <svg width="100%" height="100%" viewBox="-100 -100 200 200">
        <defs>
          <clipPath id="ball">
            <circle cx="0" cy="20" r="70" />
          </clipPath>
        </defs>
        <circle cx="0" cy="20" r="70" fill={theme.color.c5Dark} />
        <polyline
          clipPath="url(#ball)"
          points="-120 40 -80 0 -40 40 0 0 40 40 80 0 120 40"
          fill="none"
          stroke={theme.color.c5}
          strokeWidth={10}
        />
        <polyline
          clipPath="url(#ball)"
          points="-120 60 -80 20 -40 60 0 20 40 60 80 20 120 60"
          fill="none"
          stroke={theme.color.c5}
          strokeWidth={10}
        />
        <polyline
          clipPath="url(#ball)"
          points="-120 80 -80 40 -40 80 0 40 40 80 80 40 120 80"
          fill="none"
          stroke={theme.color.c5}
          strokeWidth={10}
        />
        <polyline
          clipPath="url(#ball)"
          points="-120 100 -80 60 -40 100 0 60 40 100 80 60 120 100"
          fill="none"
          stroke={theme.color.c5}
          strokeWidth={10}
        />
        <polyline
          clipPath="url(#ball)"
          points="-120 120 -80 80 -40 120 0 80 40 120 80 80 120 120"
          fill="none"
          stroke={theme.color.c5}
          strokeWidth={10}
        />
        <circle
          cx="0"
          cy="-75"
          r="12"
          fill="none"
          stroke={theme.color.cookie}
          strokeWidth="2"
        />
        <rect
          x="-18"
          width="36"
          height="20"
          y="-65"
          r="12"
          fill={theme.color.cookie}
        />
      </svg>
    </DayWrapper>
  );
};
