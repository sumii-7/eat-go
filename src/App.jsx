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
  width: 90%;
  margin: 0 auto;
  border: 1px solid red;
`;

export default App;
