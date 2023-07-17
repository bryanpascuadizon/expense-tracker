"use client"

import Login from "@/components/login/Login";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {

  const router = useRouter();
  useEffect(() => {
    router.push("/")
  }, [])
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
