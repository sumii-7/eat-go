import React from "react";
import styled from "styled-components";

function HeaderTop() {
  return (
    <>
      <StHeaderWrap className="right">
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
  height: 50px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  background-color: pink;
`;

const StLine = styled.div`
  width: 1px;
  height: 15px;
  display: flex;
  gap: 5px;
`;

export default HeaderTop;
