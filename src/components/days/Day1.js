import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../style";

const DayWrapper = styled.div`
  background: ${theme.color.c2Dark};
  background-size: 12px 12px;
  width: 100%;
  height: 100%;
`;

const Snowflake = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: absolute;
  opacity: 0.4;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: calc(${(props) => `${props.size}px`} * 0.04) solid ${theme.color.c5};
    border-radius: 50%;
  }
`;

const Part = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: calc(${(props) => `${props.size}px`} * 0.04);
  border-radius: 20px;
  background-color: ${theme.color.c5};

  &:nth-of-type(1) {
    transform: rotate(1turn);
  }
  &:nth-of-type(2) {
    transform: rotate(0.2turn);
  }
  &:nth-of-type(3) {
    transform: rotate(0.4turn);
  }
  &:nth-of-type(4) {
    transform: rotate(0.6turn);
  }
  &:nth-of-type(5) {
    transform: rotate(0.8turn);
  }
`;

const Ice = styled.div`
  position: absolute;
  background-color: ${theme.color.c5};
  width: calc(${(props) => `${props.size}px`} * 0.15);
  height: calc(${(props) => `${props.size}px`} * 0.04);
  border-radius: 20px;

  ${(props) =>
    props.position === "left" &&
    css`
      transform-origin: top right;
      transform: rotate(-45deg);
    `}

  ${(props) =>
    props.position === "right" &&
    css`
      transform-origin: bottom right;
      transform: rotate(45deg);
    `}
  
  
  ${(props) =>
    props.position === "top" &&
    css`
      right: 0;
      transform-origin: top left;
      transform: rotate(45deg);
    `}
  
  ${(props) =>
    props.position === "bot" &&
    css`
      right: 0;
      transform-origin: bottom left;
      transform: rotate(-45deg);
    `}
`;

export const Day1 = () => {
  const [size, setSize] = useState(50);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      setSize(ref.current.offsetWidth * 0.8);
    }
  }, [ref]);

  return (
    <DayWrapper ref={ref}>
      <Snowflake size={size}>
        <Part size={size}>
          <Ice size={size} position="left"></Ice>
          <Ice size={size} position="right"></Ice>
          <Ice size={size} position="top"></Ice>
          <Ice size={size} position="bot"></Ice>
        </Part>
        <Part size={size}>
          <Ice size={size} position="left"></Ice>
          <Ice size={size} position="right"></Ice>
          <Ice size={size} position="top"></Ice>
          <Ice size={size} position="bot"></Ice>
        </Part>
        <Part size={size}>
          <Ice size={size} position="left"></Ice>
          <Ice size={size} position="right"></Ice>
          <Ice size={size} position="top"></Ice>
          <Ice size={size} position="bot"></Ice>
        </Part>
        <Part size={size}>
          <Ice size={size} position="left"></Ice>
          <Ice size={size} position="right"></Ice>
          <Ice size={size} position="top"></Ice>
          <Ice size={size} position="bot"></Ice>
        </Part>
        <Part size={size}>
          <Ice size={size} position="left"></Ice>
          <Ice size={size} position="right"></Ice>
          <Ice size={size} position="top"></Ice>
          <Ice size={size} position="bot"></Ice>
        </Part>
      </Snowflake>
    </DayWrapper>
  );
};
