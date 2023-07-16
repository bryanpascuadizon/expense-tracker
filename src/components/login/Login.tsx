"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const { username, password } = login;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const loginRequest = await axios.post("/api/login/", {
        login,
      });

      if (loginRequest.status === 200) {
        localStorage.setItem("user-id", loginRequest.data._id.toString());
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("Login Error: ", error);
    }
  };
  return (
    <div className="rounded-md bg-gray-200 p-3 max-w-screen-md">
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleOnChange}
        placeholder="Username"
        className="mb-3 w-full text-sm p-2 rounded-md"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleOnChange}
        placeholder="Password"
        className="mb-3 w-full text-sm p-2 rounded-md"
      />
      <button
        onClick={handleLogin}
        className="bg-gray-900 text-sm text-white p-2 rounded-md block"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
