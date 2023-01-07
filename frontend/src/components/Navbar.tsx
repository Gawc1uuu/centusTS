import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="min-w-screen h-20 bg-green-700 flex justify-between items-center text-white">
      <h1 className="text-4xl ml-3 md:ml-10 md:text-5xl">Centuś</h1>
      <div className="text-lg mr-4 space-x-4 md:mr-12 md:space-x-10">
        {user && (
          <button
            onClick={handleClick}
            className="transition-all duration-150 bg-white text-green-700 px-4 py-2 rounded hover:-translate-y-0.5 hover:cursor-pointer hover:bg-opacity-0.5"
          >
            Logout
          </button>
        )}
        {!user && (
          <>
            <Link
              className="hover:underline hover:undeline-offset-8 hover:-translate-y-0.5 hover:cursor-pointer"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="transition-all duration-150 hover:underline hover:undeline-offset-8 hover:translate-y-10"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
