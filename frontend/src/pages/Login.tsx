import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center mt-[5em]">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-11/12 sm:w-full bg-white p-4"
      >
        <h2 className="text-4xl font-bold text-center py-6">Login.</h2>
        <div className="flex flex-col py-2">
          <label>Username</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border p-2"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border p-2"
            type="password"
          />
        </div>
        {!isPending && (
          <button className="border w-full my-5 py-2 bg-green-700 hover:bg-green-600 text-white">
            Login
          </button>
        )}
        {isPending && (
          <button className="border w-full my-5 py-2 bg-green-700 hover:bg-green-600 text-white">
            ...
          </button>
        )}

        {error && (
          <p className="px-4 py-2 mx-4 bg-red-400 border border-red-700 text-red-700">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
