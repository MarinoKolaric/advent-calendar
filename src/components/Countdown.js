import React, { useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AuthContext } from "../context";
import { remainingTime } from "../utils";
import { theme } from "../style";

const CountdownComponent = styled.header`
  width: auto;
  height: 80px;
  color: #fff;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  background-color: ${theme.color.countdownBackground};
  color: #fff;
  font-size: 22px;
  padding: 4px;
  margin: 4px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  opacity: 0.7;

  & span {
    color: ${theme.color.c1};
    font-size: 12px;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Countdown = () => {
  const [time, setTime] = React.useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    const christmas = new Date("12/25/2020");
    const intervalId = setInterval(() => {
      const time = remainingTime(christmas);
      setTime(time);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CountdownComponent>
      <Box>
        {time.days}
        <span>days</span>
      </Box>
      <Box>
        {time.hours}
        <span>hours</span>
      </Box>
      <Box>
        {time.minutes}
        <span>minutes</span>
      </Box>
      <Box>
        {time.seconds}
        <span>seconds</span>
      </Box>
    </CountdownComponent>
  );
};
