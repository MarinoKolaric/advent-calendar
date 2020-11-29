import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../style";
import { Sight, Dot } from "../index";

const DayWrapper = styled.div`
  background: ${theme.color.cookieBackground};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Bear = styled.div`
  position: absolute;
  left: 62%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => `${props.size}px`};
  height: calc(${(props) => `${props.size}px`} * 1.25);
`;

const Head = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 100% / 65% 65% 100% 100%;
`;

const Ears = styled.div`
  width: 20%;
  height: 40%;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  transform: rotate(-25deg);
  transform-origin: left;

  &::after {
    content: "";
    position: absolute;
    background-color: ${theme.color.cookie};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    width: 70%;
    height: 80%;
  }

  & + & {
    right: 0;
    transform: rotate(25deg);
    transform-origin: right;
  }
`;

const Eye = styled.div`
  background-color: ${theme.color.background};
  width: calc(${(props) => `${props.size}px`} * 0.06);
  height: calc(${(props) => `${props.size}px`} * 0.06);
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 25%;

  & + & {
    left: unset;
    right: 25%;
  }
`;

const Cheek = styled.div`
  background-color: ${theme.color.c4};
  width: calc(${(props) => `${props.size}px`} * 0.15);
  height: calc(${(props) => `${props.size}px`} * 0.15);
  border-radius: 50%;
  position: absolute;
  top: 42%;
  left: 7%;

  & + & {
    left: unset;
    right: 7%;
  }
`;

const Snout = styled.div`
  background-color: ${theme.color.cookie};
  width: calc(${(props) => `${props.size}px`} * 0.35);
  height: calc(${(props) => `${props.size}px`} * 0.5);
  border-radius: 100% / 75% 75% 50% 50%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Nose = styled.div`
  background-color: ${theme.color.background};
  width: 60%;
  height: 34%;
  border-radius: 70% 70% 120% 120%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NoseLine = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  bottom: -50%;
  left: 50%;
  box-shadow: inset calc(${(props) => `${props.size}px`} * 0.04)
    calc(${(props) => `${props.size}px`} * -0.02) 0
    calc(${(props) => `${props.size}px`} * -0.02) ${theme.color.background};

  & + & {
    transform-origin: left;
    transform: rotateY(-180deg);
  }
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

export const Day19 = () => {
  const color = theme.color.cookie;
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

      <Bear size={size}>
        <Ears />
        <Ears />
        <Head>
          <Eye size={size} />
          <Eye size={size} />
          <Cheek size={size} />
          <Cheek size={size} />
          <Snout size={size}>
            <Nose>
              <NoseLine size={size} />
              <NoseLine size={size} />
            </Nose>
          </Snout>
        </Head>
      </Bear>
    </DayWrapper>
  );
};
