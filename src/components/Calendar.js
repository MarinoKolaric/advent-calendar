import React from "react";
import styled from "styled-components";
import { Day } from "./index";
import { theme } from "../style";
import { DaysContext } from "../context";

const CalendarWrapper = styled.div`
  width: 100%;
  background: ${theme.color.gray1};
  padding: 40px;
  display: grid;
  /* grid-template-columns: repeat(9, 1fr); */
  /* grid-template-rows: repeat(4, 1fr); */
  justify-content: center;
  align-content: center;
  /* grid-column-gap: 8px; */
  grid-row-gap: 8px;
  grid-template-columns: 1fr;
  grid-auto-rows: 200px;

  grid-template-areas:
    "day1"
    "day2"
    "day3"
    "day4"
    "day5"
    "day6"
    "day7"
    "day8"
    "day9"
    "day10"
    "day11"
    "day12"
    "day13"
    "day14"
    "day15"
    "day16"
    "day17"
    "day18"
    "day19"
    "day20"
    "day21"
    "day22"
    "day23"
    "day24"
    "day25";

  ${theme.mediaQueries("mobile")`
    grid-auto-rows: 300px;
  `};

  ${theme.mediaQueries("mobileLarge")`
  grid-column-gap: 8px;
  grid-auto-rows: 200px;
  grid-template-columns: 1fr 1fr;

  grid-template-areas: 
  "day1 day3"
  "day2 day2"
  "day4 day8"
  "day4 day8"
  "day5 day7"
  "day6 day6"
  "day9 day13"
  "day10 day10"
  "day11 day11"
  "day12 day12"
  "day14 day15"
  "day16 day18"
  "day16 day18"
  "day17 day19"
  "day20 day20"
  "day20 day20"
  "day21 day21"
  "day22 day23"
  "day24 day24"
  "day25 day25";
  `}
`;

export const Calendar = () => {
  const { state, dispatch } = React.useContext(DaysContext);

  return (
    <CalendarWrapper>
      {state?.days.map((day) => (
        <Day key={day.day} {...day} />
      ))}
    </CalendarWrapper>
  );
};
