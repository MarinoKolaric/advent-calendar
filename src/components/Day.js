import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../style";
import { DayModal } from "./index";

const DayWrapper = styled.div`
  width: auto;
  height: auto;
  background: ${theme.color.c3};
  border-radius: 10px;
  grid-area: ${(props) => props.area};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.isOpen &&
    css`
      background: ${theme.color.c4};
    `}
`;

const Number = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  position: absolute;
  line-height: 1;
  opacity: 0.8;

  ${(props) =>
    props.position === "center" &&
    css`
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.position === "topLeft" &&
    css`
      left: 12px;
      top: 12px;
    `}
  
  ${(props) =>
    props.position === "topRight" &&
    css`
      right: 12px;
      top: 12px;
    `}
`;

const Container = ({
  isOpen,
  handleOpen,
  numPosition = "left",
  numSize,
  numColor,
  day,
  area,
  Component,
}) => {
  return (
    <DayWrapper area={area} onClick={() => handleOpen(!isOpen)}>
      {Component && Component}
      <Number position={numPosition} size={numSize} color={numColor}>
        {day}
      </Number>
    </DayWrapper>
  );
};

export const Day = (props) => {
  const { Component } = props;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Container
        key={props.day}
        {...props}
        handleOpen={setIsOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <DayModal Component={Component} handleOpen={() => setIsOpen()} />
      )}
    </>
  );
};
