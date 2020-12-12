import React from "react";
import { daysReducer } from "../reducers/daysReducer";
import {
  Day1,
  Day2,
  Day3,
  Day4,
  Day5,
  Day6,
  Day8,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day16,
  Day17,
  Day18,
  Day19,
  Day21,
  Day22,
  Day25,
} from "../components/days";

export const DaysContext = React.createContext();

const fontSizes = {
  s: "3em",
  m: "4em",
  l: "5em",
  xl: "6em",
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
      Component: <Day1 />,
      areaName: "day1",
    },
    {
      day: 2,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "1 / 2 / 2 / 4",
      Component: <Day2 />,
      areaName: "day2",
    },
    {
      day: 3,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "1 / 4 / 2 / 5",
      Component: <Day3 />,
      areaName: "day3",
    },
    {
      day: 4,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "1 / 5 / 3 / 6",
      Component: <Day4 />,
      areaName: "day4",
    },
    {
      day: 5,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "1 / 6 / 2 / 7",
      Component: <Day5 />,
      areaName: "day5",
    },
    {
      day: 6,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "1 / 7 / 2 / 9",
      Component: <Day6 />,
      areaName: "day6",
      type: "png",
    },
    {
      day: 7,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "1 / 9 / 2 / 10",
      areaName: "day7",
    },
    {
      day: 8,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "2 / 1 / 4 / 2",
      Component: <Day8 />,
      areaName: "day8",
    },
    {
      day: 9,
      numColor: colors.white,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "2 / 2 / 3 / 3",
      areaName: "day9",
    },
    {
      day: 10,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "2 / 3 / 3 / 5",
      Component: <Day10 />,
      areaName: "day10",
    },
    {
      day: 11,
      numColor: colors.white,
      numPosition: numPosition[1],
      numSize: fontSizes.s,
      area: "2 / 6 / 3 / 8",
      Component: <Day11 />,
      areaName: "day11",
    },
    {
      day: 12,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.l,
      area: "2 / 8 / 3 / 10",
      Component: <Day12 />,
      areaName: "day12",
      type: "gif",
    },
    {
      day: 13,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "3 / 2 / 4 / 3",
      Component: <Day13 />,
      areaName: "day13",
      type: "gif",
    },
    {
      day: 14,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "3 / 3 / 4 / 4",
      Component: <Day14 />,
      areaName: "day14",
    },
    {
      day: 15,
      numColor: colors.white,
      numPosition: numPosition[2],
      numSize: fontSizes.s,
      area: "3 / 4 / 4 / 5",
      Component: <Day15 />,
      areaName: "day15",
    },
    {
      day: 16,
      numColor: colors.white,
      numPosition: numPosition[2],
      numSize: fontSizes.l,
      area: "3 / 5 / 5 / 6",
      Component: <Day16 />,
      areaName: "day16",
    },
    {
      day: 17,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "3 / 6 / 4 / 7",
      Component: <Day17 />,
      areaName: "day17",
    },
    {
      day: 18,
      numColor: colors.black,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "3 / 7 / 5 / 8",
      Component: <Day18 />,
      areaName: "day18",
    },
    {
      day: 19,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.m,
      area: "3 / 8 / 4 / 9",
      Component: <Day19 />,
      areaName: "day19",
    },
    {
      day: 20,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.m,
      area: "3 / 9 / 5 / 10",
      areaName: "day20",
    },
    {
      day: 21,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "4 / 1 / 5 / 3",
      Component: <Day21 />,
      areaName: "day21",
    },
    {
      day: 22,
      numColor: colors.white,
      numPosition: numPosition[0],
      numSize: fontSizes.xl,
      area: "4 / 3 / 5 / 4",
      Component: <Day22 />,
      areaName: "day22",
    },
    {
      day: 23,
      numColor: colors.black,
      numPosition: numPosition[1],
      numSize: fontSizes.m,
      area: "4 / 4 / 5 / 5",
      areaName: "day23",
    },
    {
      day: 24,
      numColor: colors.black,
      numPosition: numPosition[2],
      numSize: fontSizes.m,
      area: "4 / 6 / 5 / 7",
      areaName: "day24",
    },
    {
      day: 25,
      numColor: colors.white,
      numPosition: numPosition[2],
      numSize: fontSizes.s,
      area: "4 / 8 / 5 / 9",
      Component: <Day25 />,
      areaName: "day25",
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
