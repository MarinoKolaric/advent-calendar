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

const Cookie = styled.div`
  position: absolute;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  left: 62%;
  top: 38%;
  transform: translate(-50%, -50%);
`;

const CookieHead = styled.div`
  width: 46%;
  height: 46%;
  border-radius: 50%;
  background-color: ${theme.color.cookie};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 18%;
    width: 10%;
    border-radius: 50px;
    left: 30%;
    top: 35%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 18%;
    width: 10%;
    border-radius: 50px;
    right: 30%;
    top: 35%;
    transform: translate(50%, -50%);
  }
`;

const CookieHeadMouth = styled.div`
  position: absolute;
  width: 40%;
  height: 20%;
  background-color: #fff;
  border-radius: 50px;
  left: 50%;
  bottom: 25%;
  transform: translateX(-50%);

  &::after {
    content: "";
    position: absolute;
    background-color: ${theme.color.cookie};
    width: 70%;
    height: 60%;
    border-radius: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CookieArms = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  height: 30%;
  border-radius: 50px;
  background-color: ${theme.color.cookie};
`;

const CookieLeg = styled.div`
  position: absolute;
  top: 77%;
  height: 30%;
  width: 70%;
  border-radius: 50px;
  background-color: ${theme.color.cookie};
  transform: rotate(-70deg);

  & + & {
    right: 0;
    transform: rotate(70deg);
  }
`;

const CookieButton = styled.div`
  position: absolute;
  left: 50%;
  top: 44%;
  width: 10%;
  height: 10%;
  border-radius: 50%;
  background-color: ${theme.color.background};
  transform: translateX(-50%);

  & + & {
    top: 58%;
  }
`;

const CookieLine = styled.div`
  position: absolute;
  background-color: #fff;
  width: 4%;
  height: 70%;
  left: ${(props) => `${props.position}%`};
  top: 50%;
  border-radius: 50px;
  transform: translate(-50%, -50%);
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
];

export const Day3 = () => {
  const color = theme.color.cookie;
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 0.55);
    }
  }, [ref]);

  return (
    <DayWrapper ref={ref}>
      {sights.map((x,i) => (
        <Sight key={i}
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
      <Cookie size={size}>
        <CookieHead>
          <CookieHeadMouth />
        </CookieHead>
        <CookieArms>
          <CookieLine position={12} />
          <CookieLine position={22} />
          <CookieLine position={78} />
          <CookieLine position={88} />
        </CookieArms>
        <CookieLeg>
          <CookieLine position={20} />
          <CookieLine position={30} />
        </CookieLeg>
        <CookieLeg>
          <CookieLine position={80} />
          <CookieLine position={70} />
        </CookieLeg>
        <CookieButton />
        <CookieButton />
      </Cookie>
    </DayWrapper>
  );
};
