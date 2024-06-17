import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../page/SignUp";
import Login from "../page/Login";
import Home from "../components/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
