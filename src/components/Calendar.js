import React from "react";
import styled from "styled-components";
import { Day } from "./index";
import { theme } from "../style";
import { DaysContext } from "../context";

const CalendarWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: ${theme.color.gray1};
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

export const Calendar = () => {
  const {state, dispatch} = React.useContext(DaysContext);


  return (
    <CalendarWrapper>
      {
        state?.days.map((day) => (
          <Day
            key={day.day}
            {...day}
          />
        ))
      }
    </CalendarWrapper>
  );
};
