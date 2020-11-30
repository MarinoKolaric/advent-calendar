import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../style";
import { ActiveDayContext } from "../context";
import { DayModal, Number } from "./index";

const DayWrapper = styled.div`
  width: auto;
  height: auto;
  background: ${theme.color.c3};
  border-radius: 10px;
  grid-area: ${props => props.area};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-size: 8px;

  ${(props) =>
    props.isOpen &&
    css`
      background: ${theme.color.c4};
    `}
`;

const Container = ({
  isOpen,
  handleDay,
  numPosition = "left",
  numSize,
  numColor,
  day,
  area,
  areaName,
  Component,
}) => {
  return (
    <DayWrapper area={areaName} day={day} onClick={() => handleDay(!isOpen)}>
      {Component && Component}
      <Number
        number={day}
        position={numPosition}
        size={numSize}
        color={numColor}
      />
    </DayWrapper>
  );
};

export const Day = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = React.useContext(ActiveDayContext);

  const setDay = (isOpen) => {
    setIsOpen(isOpen);
    dispatch({
      type: "ACTIVATE",
      payload: { ...props, isOpen },
    });
  };

  return (
    <>
      <Container
        key={props.day}
        {...props}
        handleDay={setDay}
        isOpen={isOpen}
      />
      {isOpen && <DayModal handleOpen={() => setIsOpen()} />}
    </>
  );
};
