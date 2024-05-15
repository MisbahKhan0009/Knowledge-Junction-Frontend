import React from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-primary space-between text-secondary">
      <div className="navbar-start">
        <Link to="/">
          <img
            src="https://i.ibb.co/8X9F1xB/logo.png"
            className="md:h-20 w-auto lg:ms-6 my-3 object-cover"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-end hidden me-12 lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-thin">
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/branches">Branches</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown lg:hidden" style={{ right: "-38%" }}>
        <div tabIndex={0} role="button" className="btn btn-ghost ">
          <RiMenu3Line className="md:text-4xl text-2xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-xl dropdown-content mt-3 z-[10000] p-2 bg-primary border border-secondary shadow rounded-box w-30"
          style={{ right: "0", transition: "right 0.3s ease" }}
        >
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/branches">Branches</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
