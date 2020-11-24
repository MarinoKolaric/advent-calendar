import "./style/resets.scss";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Header, CalendarHeader, Calendar } from "./components";
import { theme } from "./style";

import { AuthProvider, DaysProvider } from "./context";

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
          <Wrapper>
            <Header />
            <CalendarHeader />
            <Calendar />
          </Wrapper>
        </DaysProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
