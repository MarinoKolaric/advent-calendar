import "./style/resets.scss";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Header, CalendarHeader, Calendar } from "./components";
import { theme } from "./style";

import { AuthProvider, DaysProvider, ActiveDayProvider } from "./context";

const Wrapper = styled.div`
  background-color: ${theme.color.background};
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DaysProvider>
          <ActiveDayProvider>
            <Wrapper>
              <Header />
              <CalendarHeader />
              <Calendar />
            </Wrapper>
          </ActiveDayProvider>
        </DaysProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
