import React from "react";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";
import { AuthContext } from "../context";
import { LoginBtn } from "./index";
import { theme } from "../style";

const HeaderComponent = styled.header`
  width: 100%;
  height: 80px;
  color: #fff;
  padding: 16px 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  color: ${theme.color.c8};
  padding-left: 8px;
`;

const ImgWrapper = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

export const Header = () => {
  const { state } = React.useContext(AuthContext);

  return (
    <HeaderComponent>
      <Profile>
        {!isEmpty(state?.user) && (
          <>
            <ImgWrapper>
              <img
                src={state?.user?.photoURL}
                alt="profile img"
                style={{ width: "100%" }}
              />
            </ImgWrapper>
            <Name>{state?.user?.displayName}</Name>
          </>
        )}
      </Profile>
      <LoginBtn />
    </HeaderComponent>
  );
};
