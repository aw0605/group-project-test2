// LoginForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLoginState, logout } from "../redux/slice/loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginUser = () => async () => {
    try {
      const response = await axios.post("/api/login");
      dispatch(setLoginState({ isLoggedIn: true }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logoutUser = () => async () => {
    try {
      await axios.post("/api/logout");
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div>
      <button>로그인</button>
    </div>
  );

  // ... form markup ...
};
