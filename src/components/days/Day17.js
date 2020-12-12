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

const sights = [
  {
    x: 10,
    y: 70,
    size: 15,
    rotation: 0,
  },
  {
    x: 74,
    y: 2,
    size: 15,
    rotation: 0,
  },
];

const dots = [
  {
    x: 50,
    y: 6,
    size: 6,
  },
  {
    x: 18,
    y: 50,
    size: 6,
  },
  {
    x: 40,
    y: 92,
    size: 6,
  },
  {
    x: 82,
    y: 88,
    size: 6,
  },
];

const Star = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background-color: ${theme.color.c1Dark};
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(
    50% 0%,
    /* top */ 21% 91%,
    /* bottom left */ 98% 35%,
    /* right */ 2% 35%,
    /* left */ 79% 91% /* bottom right */
  );
`;

export const Day17 = () => {
  const color = theme.color.c1;
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 0.5);
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

      <Star size={size}></Star>
    </DayWrapper>
  );
};
