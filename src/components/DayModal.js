import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import styled from "styled-components";
import { ActiveDayContext, AuthContext } from "../context";
import { useOnClickOutside, remainingTime } from "../utils";
import { theme } from "../style";
import { Number } from "./index";
import Firebase from "../firebase";

const Wrapper = styled.div`
  background: rgba(51, 51, 51, 0.8);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  overflow: hidden;
  font-size: 28px;
  cursor: pointer;

  ${theme.mediaQueries("mobileMedium")`
    width: 400px;
    height: 400px;
  `}
`;

const M = styled.div`
  position: absolute;
  color: ${(props) => props.color};
  height: auto;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

const CardWrapper = styled.div`
  background: ${theme.color.c2Dark};
  background-size: 12px 12px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const ImgContainer = styled.div`
  background: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = ({ day }) => {
  const [img, setImg] = useState();
  const { state } = useContext(AuthContext);

  const getPicture = useCallback(async () => {
    if (!state?.isSecretUser) return;
    const response = await Firebase.getPicture(day);

    if (response.hasOwnProperty("message")) {
      setImg("");
    } else {
      setImg(response);
    }
  }, [day, state]);

  useEffect(() => {
    getPicture();
  }, [getPicture]);

  return (
    <CardWrapper>
      <ImgContainer img={img} />
    </CardWrapper>
  );
};

export const DayModal = ({ handleOpen }) => {
  const ref = useRef();
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [message, setMessage] = useState("");
  const [shouldOpen, setShouldOpen] = useState(false);
  const {
    state: { day },
    dispatch,
  } = React.useContext(ActiveDayContext);

  useOnClickOutside(
    ref,
    useCallback(() => {
      handleOpen(false);
      dispatch({
        type: "DEACTIVATE",
        payload: {},
      });
    }, [dispatch, handleOpen])
  );

  const openBox = () => {
    const { days, hours, minutes, seconds } = date;
    setShouldOpen(!days && !hours && !minutes && !seconds);
    if (!shouldOpen) {
      days > 0
        ? days === 1
          ? setMessage(`Available in ${days} day`)
          : setMessage(`Available in ${days} days`)
        : setMessage(`Available in ${hours}h and ${minutes}m`);
      return;
    }
  };

  useEffect(() => {
    // const endDate = new Date(`12/${day.day}/2020`);
    const endDate = new Date(`11/${day.day}/2020`);
    setDate(remainingTime(endDate));
  }, [day]);

  return (
    <Wrapper>
      <Box ref={ref} onClick={() => openBox()}>
        {day.Component}
        <Number
          number={day.day}
          position={day.numPosition}
          size={day.numSize}
          color={day.numColor}
        />
        {!shouldOpen ? (
          <Message color={day.numColor} message={message} />
        ) : (
          <Card day={day.day} />
        )}
      </Box>
    </Wrapper>
  );
};

const Message = ({ message, color }) => {
  return <M color={color}>{message}</M>;
};
