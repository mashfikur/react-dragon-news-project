import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.png";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";

const Navbar = ({ bgColor }) => {
  const { user, loading, userSignOut, setUser } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink className={"text-[#706F6F]"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-[#706F6F]"} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-[#706F6F]"} to="/carrer">
          Career
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged Out Successfully");
        setUser(false);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="mb-16">
      <div className={`navbar bg-base-${bgColor}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : user ? (
            <>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL ? user.photoURL : userImage} />
                </div>
              </div>
              <button onClick={handleLogout} className="btn btn-neutral">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-neutral btn-outline rounded px-8 py-0 capitalize">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-neutral rounded px-8 py-0 capitalize">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  bgColor: PropTypes.number,
};

export default Navbar;
