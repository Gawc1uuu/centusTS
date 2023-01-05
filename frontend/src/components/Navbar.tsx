import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="w-full h-20 bg-green-700 flex justify-around sm:justify-between items-center text-white">
      <h1 className="ml-4 mr-2 sm:ml-16 text-4xl font-mono">Centuś</h1>
      <div className="flex w-3/4 sm:w-1/5 justify-between mr-12 font-mono items-center">
        {user && (
          <button className="bg-white text-green-700 px-4 py-2 rounded">
            Logout
          </button>
        )}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
