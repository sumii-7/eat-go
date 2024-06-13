import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { StLine } from "./HeaderTop";

const HeaderBottom = () => {
  return (
    <>
      <StHeaderBottomWrap>
        <StLeft>
          <h1>
            <img src={logo} alt="로고이미지" />
          </h1>
        </StLeft>

        <StRight>
          <li>장소</li>
          <StLine />
          <li>음식점</li>
          <StLine />
          <li>내 지도</li>
        </StRight>
      </StHeaderBottomWrap>
    </>
  );
};

const StHeaderBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StLeft = styled.div`
  display: flex;
  h1 {
    cursor: pointer;
  }
`;

const StRight = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.5rem;
  gap: 7px;

  li {
    cursor: pointer;
  }
`;

export default HeaderBottom;
