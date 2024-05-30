import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const librarian = sessionStorage.getItem("librarian");
    const member = sessionStorage.getItem("member");
    const employee = sessionStorage.getItem("employee");

    if (librarian) {
      setUser(JSON.parse(librarian));
      setRole("librarian");
    } else if (member) {
      setUser(JSON.parse(member));
      setRole("member");
    } else if (employee) {
      setUser(JSON.parse(employee));
      setRole("employee");
    }
  }, []);

  const handleProfileClick = () => {
    let redirectPath = "/";
    if (role === "member") {
      redirectPath = "/member-profile";
    } else if (role === "librarian") {
      redirectPath = "/librarian-profile";
    } else if (role === "employee") {
      redirectPath = "/employee-profile";
    }
    navigate(redirectPath);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setUser(null);
    setRole(null);
    navigate("/signin");
  };

  const toggleDropdown = () => {
    document.getElementById("profileDropdown").classList.toggle("hidden");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      document.getElementById("profileDropdown").classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="navbar bg-primary space-between text-secondary">
      <div className="navbar-start">
        <Link to="/">
          <img
            src="https://i.ibb.co/8X9F1xB/logo.png"
            className="md:h-20 w-auto lg:ms-6 my-3 object-cover"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-end hidden me-12 lg:flex">
        <ul className="menu menu-horizontal lg:justify-center lg:items-center px-1 text-xl font-thin">
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
          {user ? (
            <li className="nav-item relative" ref={dropdownRef}>
              <img
                src={`https://ui-avatars.com/api/?name=${user.FullName}&size=50&background=F5F5DC&color=003724&rounded=true`}
                alt="Profile"
                className="cursor-pointer"
                onClick={toggleDropdown}
              />
              <ul
                id="profileDropdown"
                className="dropdown-menu z-50 hidden absolute right-0 mt-16 w-48 bg-secondary text-primary border-1 border-primary shadow-xl rounded-md"
              >
                <li className="dropdown-item">
                  <button
                    onClick={handleProfileClick}
                    className="block w-full text-left px-4 py-2"
                  >
                    View Profile
                  </button>
                </li>
                <li className="dropdown-item">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="/signin">Login</Link>
            </li>
          )}
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
