import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <>
      <StSignUpWrap>
        <StSignUpForm>
          <StTitle>회원가입</StTitle>
          <StSignUpInput type="text" placeholder="아이디를 입력하세요." />
          <StSignUpInput type="password" placeholder="비밀번호를 입력하세요." />
          <StSignUpInput type="email" placeholder="이메일를 입력하세요." />
          <StSignUpInput type="text" placeholder="닉네임를 입력하세요." />
          <StSignUpButton>회원가입</StSignUpButton>
        </StSignUpForm>
      </StSignUpWrap>
    </>
  );
};

const StSignUpWrap = styled.div`
  height: 100vh;

  display: grid;
  place-content: center;
`;

const StSignUpForm = styled.form`
  width: 400px;
  height: 500px;
  border: 1px solid blue;
  display: grid;
  place-content: center;
  gap: 15px;
`;

const StSignUpInput = styled.input`
  text-indent: 10px;
  width: 250px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid #dfdede;
`;

const StSignUpButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background-color: #ffde95;
`;

const StTitle = styled.h3`
  font-size: 24px;
  text-align: center;
`;

export default SignUp;
