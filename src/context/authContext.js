import React from "react";
import { firebaseAuth } from "../reducers/authReducer";

export const AuthContext = React.createContext();

const initialState = {
  user: {},
};

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(firebaseAuth, initialState);
  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
