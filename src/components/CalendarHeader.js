import React from "react";
import styled from "styled-components";
import { theme } from "../style";
import { Countdown } from "./Countdown";

const CalendarHeaderComponent = styled.div`
  width: 100%;
  color: #fff;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  flex-direction: column;
  text-align: center;

  ${theme.mediaQueries("tablet")`
    flex-direction: row;
  `}
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.color.gray4};
  font-family: "Concert One", cursive;
  letter-spacing: 10px;

  ${theme.mediaQueries("tablet")`
    font-size: 44px;
  `}
`;

export const CalendarHeader = () => {
  return (
    <CalendarHeaderComponent>
      <Title>Advent Calendar</Title>
      <Countdown />
    </CalendarHeaderComponent>
  );
};
