import React, { useRef } from "react";
import styled from "styled-components";
import supabase from "../supabaseClient";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);

  const signUpHandler = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (error) {
      throw error;
    }

    console.log(data);
    const { data: user } = await supabase.from("users").insert({
      id: data.user.id,
      created_at: data.user.created_at,
      email: data.user.email,
      nickname: nicknameRef.current.value,
    });
  };

  return (
    <>
      <StSignUpWrap>
        <StSignUpForm onSubmit={signUpHandler}>
          <StTitle>회원가입</StTitle>
          <StSignUpInput type="text" placeholder="아이디를 입력하세요." />
          <StSignUpInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            ref={passwordRef}
          />
          <StSignUpInput
            type="email"
            placeholder="이메일를 입력하세요."
            ref={emailRef}
          />
          <StSignUpInput
            type="text"
            placeholder="닉네임를 입력하세요."
            ref={nicknameRef}
          />
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
