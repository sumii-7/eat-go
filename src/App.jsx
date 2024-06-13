import "./reset.css";
import Home from "./components/Home";
import styled from "styled-components";

function App() {
  return (
    <>
      <StWrap>
        <Home />
      </StWrap>
    </>
  );
}

const StWrap = styled.div`
  border: 1px solid red;
`;

export default App;
