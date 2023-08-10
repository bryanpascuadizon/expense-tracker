"use client";

import { authorizeUser } from "@/utils/reducers/authReducer";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { username, password } = login;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const loginRequest = await axios.post("/api/login/", {
        login,
      });

      if (loginRequest.status === 200) {
        localStorage.setItem("user-id", loginRequest.data._id.toString());
        dispatch(authorizeUser());
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Login Error: ", error);
    }
  };
  return (
    <div className="rounded-md bg-gray-200 p-3 max-w-screen-md m-auto mt-[10%]">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleOnChange}
          placeholder="Username"
          className="mb-3 w-full text-sm p-2 rounded-md text-center"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Password"
          className="mb-3 w-full text-sm p-2 rounded-md text-center"
        />
        <button
          type="submit"
          className="bg-gray-900 text-sm text-white pt-2 pb-2 pl-5 pr-5 rounded-md block m-auto"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
