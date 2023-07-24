"use client";

import LoginForm from "@/components/login/LoginForm";
import Login from "@/components/login/LoginForm";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   router.push("/login");
  // }, []);
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Home;
