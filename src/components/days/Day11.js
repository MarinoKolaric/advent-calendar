import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.c2Dark};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Text = styled.div`
  color: ${theme.color.cookieBackground};
  font-family: "Mountains of Christmas";
  font-size: ${(props) => `${props.size}%`};
  letter-spacing: 8px;
  text-align: end;
  font-weight: bold;
  position: absolute;
  line-height: 1.5;
  right: 10%;
  top: 16%;
`;

const sights = [
  {
    x: 32,
    y: 18,
    size: 20,
    rotation: 0,
  },
  {
    x: 94,
    y: 50,
    size: 20,
    rotation: 0,
  },
  {
    x: 10,
    y: 70,
    size: 20,
    rotation: 0,
  },
];

const dots = [
  {
    x: 70,
    y: 5,
    size: 6,
  },
  {
    x: 92,
    y: 16,
    size: 6,
  },
  {
    x: 44,
    y: 32,
    size: 6,
  },
  {
    x: 18,
    y: 50,
    size: 6,
  },
  {
    x: 40,
    y: 88,
    size: 6,
  },
  {
    x: 86,
    y: 92,
    size: 6,
  },
];

export const Day11 = () => {
  const color = theme.color.cookieBackground;
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 0.6);
    }
  }, [ref]);

  return (
    <DayWrapper ref={ref}>
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
      <Text size={size}>
        Happy <br></br> Holidays
      </Text>
    </DayWrapper>
  );
};
