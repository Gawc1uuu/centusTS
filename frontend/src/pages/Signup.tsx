import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="grid grid-cols-1 h-screen w-full overflow-y-hidden">
      <div className="bg-gray-300 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-11/12 sm:w-full mx-auto bg-white p-4"
        >
          <h2 className="text-4xl font-bold text-center py-6">Sign up.</h2>
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
          <button className="border w-full my-5 py-2 bg-green-700 hover:bg-green-600 text-white">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
