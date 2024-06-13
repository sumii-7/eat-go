import React from "react";
import logo from "../assets/logo.png";

const HeaderBottom = () => {
  return (
    <>
      <div className="left">
        <h1>
          <img src={logo} alt="로고이미지" />
        </h1>
      </div>
    </>
  );
};

export default HeaderBottom;
