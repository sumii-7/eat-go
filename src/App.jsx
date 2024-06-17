import "./reset.css";
import styled from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <StWrap>
        <Router />
      </StWrap>
    </>
  );
}

const StWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  border: 1px solid red;
`;

export default App;
