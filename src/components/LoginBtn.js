import React from "react";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";

import { AuthContext } from "../context";
import { theme } from "../style";

import Firebase from "../firebase";

const Btn = styled.button`
  border: 1px solid ${theme.color.c8};
  color: ${theme.color.c8};
  padding: 8px;
`;

export const LoginBtn = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const login = async () => {
    const response = await Firebase.login();

    if (response.hasOwnProperty("message")) {
      console.log(response.message);
    } else {
      return dispatch({
        type: "LOGIN",
        payload: response,
      });
    }
  };

  const logout = async () => {
    await Firebase.logout()
      .then(() => {
        return dispatch({
          type: "LOGOUT",
          payload: "",
        });
      })
      .catch((error) => {
        console.log("error on logout", error);
      });
  };

  return (
    <>
      {!isEmpty(state?.user) ? (
        <Btn onClick={() => logout()}>Logout</Btn>
      ) : (
        <Btn onClick={() => login()}>Login</Btn>
      )}
    </>
  );
};
