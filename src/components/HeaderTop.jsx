import React from "react";
import styled from "styled-components";

function HeaderTop() {
  return (
    <>
      <StHeaderWrap>
        <li>회원가입</li>
        <StLine />
        <li>로그인</li>
        <StLine />
        <li>마이페이지</li>
      </StHeaderWrap>
    </>
  );
}

const StHeaderWrap = styled.ul`
  height: 35px;
  font-size: 1.2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;

  li {
    cursor: pointer;
  }
`;

export const StLine = styled.div`
  width: 1px;
  height: 17px;
  background-color: #000;
  display: flex;
`;

export default HeaderTop;
