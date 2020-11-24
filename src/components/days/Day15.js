import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.c4};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Text = styled.div`
  color: ${theme.color.cookieBackground};
  font-family: "Mountains of Christmas";
  font-size: ${(props) => `${props.size}%`};
  letter-spacing: 8px;
  font-weight: bold;
  position: absolute;
  left: 10%;
  bottom: 20%;
`;

const sights = [
  {
    x: 20,
    y: 8,
    size: 15,
    rotation: 0,
  },
  {
    x: 55,
    y: 15,
    size: 15,
    rotation: -32,
  },
  {
    x: 85,
    y: 50,
    size: 15,
    rotation: -40,
  },
  {
    x: 25,
    y: 80,
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
    x: 44,
    y: 36,
    size: 6,
  },
  {
    x: 92,
    y: 90,
    size: 6,
  },
];

export const Day15 = () => {
  const color = theme.color.cookieBackground;
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 1.5);
    }
  }, [ref]);

  return (
    <DayWrapper ref={ref}>
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
      <Text size={size}>Xmas</Text>
    </DayWrapper>
  );
};
