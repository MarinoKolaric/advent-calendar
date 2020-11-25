import React from "react";
import { daysReducer } from "../reducers/daysReducer";
import {
  Day2,
  Day3,
  Day5,
  Day6,
  Day8,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day19,
  Day21,
  Day22,
  Day25,
} from "../components/days";

export const DaysContext = React.createContext();

const fontSizes = {
  s: "32px",
  m: "42px",
  l: "66px",
  xl: "82px",
};

const numPosition = ["center", "topLeft", "topRight"];

const colors = Object.freeze({
  white: "#fbf7e0",
  black: "#2f3029",
});

const initialState = {
  days: [
    {
      day: 1,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "1 / 1 / 2 / 2",
    },
    {
      day: 2,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "1 / 2 / 2 / 4",
      Component: <Day2 />,
    },
    {
      day: 3,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "1 / 4 / 2 / 5",
      Component: <Day3 />,
    },
    {
      day: 4,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "1 / 5 / 3 / 6",
    },
    {
      day: 5,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "1 / 6 / 2 / 7",
      Component: <Day5 />,
    },
    {
      day: 6,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "1 / 7 / 2 / 9",
      Component: <Day6 />,
    },
    {
      day: 7,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "1 / 9 / 2 / 10",
    },
    {
      day: 8,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "2 / 1 / 4 / 2",
      Component: <Day8 />,
    },
    {
      day: 9,
      numColor: colors.white,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "2 / 2 / 3 / 3",
    },
    {
      day: 10,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "2 / 3 / 3 / 5",
    },
    {
      day: 11,
      numColor: colors.white,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "2 / 6 / 3 / 8",
      Component: <Day11 />,
    },
    {
      day: 12,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.l,
      area: "2 / 8 / 3 / 10",
      Component: <Day12 />,
    },
    {
      day: 13,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "3 / 2 / 4 / 3",
      Component: <Day13 />,
    },
    {
      day: 14,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "3 / 3 / 4 / 4",
      Component: <Day14 />,
    },
    {
      day: 15,
      numColor: colors.white,
      numPosition: numPosition[2],
      numSize: fontSizes.s,
      area: "3 / 4 / 4 / 5",
      Component: <Day15 />,
    },
    {
      day: 16,
      numColor: colors.white,
      numPosition: numPosition[2],
      numSize: fontSizes.l,
      area: "3 / 5 / 5 / 6",
    },
    {
      day: 17,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "3 / 6 / 4 / 7",
    },
    {
      day: 18,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.l,
      area: "3 / 7 / 5 / 8",
    },
    {
      day: 19,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.m,
      area: "3 / 8 / 4 / 9",
      Component: <Day19 />,
    },
    {
      day: 20,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "3 / 9 / 5 / 10",
    },
    {
      day: 21,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "4 / 1 / 5 / 3",
      Component: <Day21 />,
    },
    {
      day: 22,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "4 / 3 / 5 / 4",
      Component: <Day22 />,
    },
    {
      day: 23,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.m,
      area: "4 / 4 / 5 / 5",
    },
    {
      day: 24,
      numColor: colors.black,
      numPosition: numPosition[2],
      numSize: fontSizes.m,
      area: "4 / 6 / 5 / 7",
    },
    {
      day: 25,
      numColor: colors.white,
      numPosition: numPosition[2],
      numSize: fontSizes.s,
      area: "4 / 8 / 5 / 9",
      Component: <Day25 />,
    },
  ],
};

export const DaysProvider = (props) => {
  const [state, dispatch] = React.useReducer(daysReducer, initialState);
  const value = { state, dispatch };

  return (
    <DaysContext.Provider value={value}>{props.children}</DaysContext.Provider>
  );
};
