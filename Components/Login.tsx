"use client";
import { signIn, useSession } from "next-auth/react";

function Login() {
  return (
    <div
      className=" flex items-center flex-col h-screen w-full justify-center text-center bg-[#12A37F]"
      style={{
        backgroundColor: "#12A37F",
      }}
    >
      <img
        src="https://links.papareact.com/89k"
        alt="logo"
        height={300}
        width={300}
      />
      <button
        onClick={() => signIn("google")}
        className=" text-white font-bold text-3xl animate-pulse"
      >
        Sign to use ChatGpt
      </button>
    </div>
  );
}

export default Login;
