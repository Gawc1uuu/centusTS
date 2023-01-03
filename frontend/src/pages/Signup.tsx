import React from "react";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className=" bg-gray-500 flex flex-col justify-center">
        <form className="max-w-[400px] w-11/12 sm:w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">Sign up.</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
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
