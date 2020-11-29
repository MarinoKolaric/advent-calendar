import React from "react";
import { activeDayReducer } from "../reducers/activeDayReducer";


export const ActiveDayContext = React.createContext();

const initialState = {
  day: {},
};

export const ActiveDayProvider = (props) => {
  const [state, dispatch] = React.useReducer(activeDayReducer, initialState);
  const value = { state, dispatch };

  return (
    <ActiveDayContext.Provider value={value}>
      {props.children}
    </ActiveDayContext.Provider>
  );
};
