import React from "react";
import "./style/resets.scss";
import { BrowserRouter } from "react-router-dom";
import { ActiveDayContext } from "./context";
import styled from "styled-components";
import { Header, CalendarHeader, Calendar } from "./components";
import { theme } from "./style";

import { AuthProvider, DaysProvider, ActiveDayProvider } from "./context";

const Wrapper = styled.div`
  background-color: ${theme.color.background};
  height: 100vh;
  width: 100%;
  overflow: ${(props) => (props.isDayModalOpen ? "hidden" : "auto")};
`;

const Application = () => {
  const {
    state: { day },
  } = React.useContext(ActiveDayContext);

  return (
    <Wrapper isDayModalOpen={day?.open}>
      <Header />
      <CalendarHeader />
      <Calendar />
    </Wrapper>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DaysProvider>
          <ActiveDayProvider>
            <Application />
          </ActiveDayProvider>
        </DaysProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
