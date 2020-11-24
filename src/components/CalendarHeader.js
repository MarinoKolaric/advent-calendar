import React from "react";
import styled from "styled-components";
import { AuthContext } from "../context";
import { theme } from "../style";
import { Countdown } from "./Countdown";

const CalendarHeaderComponent = styled.div`
  width: 100%;
  height: 80px;
  color: #fff;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  color: ${theme.color.gray4};
  font-family: "Mountains of Christmas", cursive;
  letter-spacing: 10px;
`;

export const CalendarHeader = () => {
  return (
    <CalendarHeaderComponent>
      <Title>Advent Calendar</Title>
      <Countdown />
    </CalendarHeaderComponent>
  );
};
