import React, { useRef, useEffect, useState } from "react";
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
  font-weight: bold;
  position: absolute;
  left: 3%;
  bottom: 20%;
`;

const sights = [
  {
    x: 26,
    y: 10,
    size: 15,
    rotation: 0,
  },
  {
    x: 55,
    y: 20,
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
    x: 85,
    y: 50,
    size: 6,
  },
];

export const Day25 = () => {
  const color = theme.color.cookieBackground;
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 0.8);
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
      <Text size={size}>Merry Christmas</Text>
    </DayWrapper>
  );
};
