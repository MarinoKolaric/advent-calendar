import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.c3};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Sock = styled.div`
  position: absolute;
  width: ${(props) => `${props.size}px`};
  height: calc(${(props) => `${props.size}px`} * 1.25);
  right: 9%;
  top: 6%;
  background: ${theme.color.c4Dark};
  transform: rotate(-15deg);

  & + & {
    right: unset;
    top: 37%;
    left: 9%;
    transform: rotate(15deg) scale(-1, 1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 98%;
    width: 100%;
    height: 60%;
    border-radius: 100% / 0 0 180% 0;
    background: radial-gradient(
      circle at 111% 51%,
      ${theme.color.main} 43%,
      ${theme.color.c4Dark} 45%
    );
    background-size: 100% 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    background: ${theme.color.c4Dark};
    width: 100%;
    height: 100%;
    border-radius: 100% / 0 0 100% 100%;
    transform-origin: left top;
    transform: rotate(38deg);

    background: radial-gradient(
      circle at 50% 90%,
      ${theme.color.main} 44%,
      ${theme.color.c4Dark} 45%
    );
    background-size: 100% 100%;
  }
`;

const SockTop = styled.div`
  width: 140%;
  height: 40%;
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.color.main};
  border-radius: 20px;
`;

const sights = [
  {
    x: 15,
    y: 25,
    size: 14,
    rotation: 0,
  },
  {
    x: 92,
    y: 58,
    size: 14,
    rotation: 0,
  },
  {
    x: 50,
    y: 80,
    size: 14,
    rotation: 0,
  },
  {
    x: 84,
    y: 90,
    size: 14,
    rotation: 0,
  },
];

const dots = [
  {
    x: 20,
    y: 10,
    size: 6,
  },
  {
    x: 32,
    y: 32,
    size: 6,
  },
  {
    x: 52,
    y: 44,
    size: 6,
  },
  {
    x: 10,
    y: 48,
    size: 6,
  },
  {
    x: 70,
    y: 70,
    size: 6,
  },
  {
    x: 80,
    y: 84,
    size: 6,
  },
  {
    x: 3,
    y: 90,
    size: 6,
  },
  {
    x: 20,
    y: 98,
    size: 6,
  },
];

export const Day4 = () => {
  const color = theme.color.main;
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 0.25);
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
      <Sock size={size}>
        <SockTop size={size} />
      </Sock>
      <Sock size={size}>
        <SockTop size={size} />
      </Sock>
    </DayWrapper>
  );
};
