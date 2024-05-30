import React, { useEffect, useState } from "react";
import "./Signin.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
// import EmployeeProfile from "../UserProfile/EmployeeProfile";
// import LibrarianProfile from "../UserProfile/LibrarianProfile";
// import MemberProfile from "../UserProfile/MemberProfile";

const Signin = () => {
  const location = useLocation();
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const id = form.id.value;
    setId(id);

    const role = form.role.value;
    setRole(role);

    const password = form.password.value;
    setPassword(password);
  };

  useEffect(() => {
    if (role === "member") {
      fetch(`http://localhost:8080/members/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          sessionStorage.clear();
          sessionStorage.setItem("member", JSON.stringify(data));
          console.log(data);
        })
        .catch((err) => console.error(err));
    } else if (role === "librarian") {
      fetch(`http://localhost:8080/librarians/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          sessionStorage.clear();
          sessionStorage.setItem("librarian", JSON.stringify(data));
          console.log(data);
        })
        .catch((err) => console.error(err));
    } else if (role === "employee") {
      fetch(`http://localhost:8080/book-issuer-receivers/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          sessionStorage.clear();
          sessionStorage.setItem("employee", JSON.stringify(data));
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  }, [role, id]);

  const handleLogin = () => {
    if (user && user.Password === password) {
      setValidUser(true);
      toast.success("Login Successful");
      console.log(role);

      if (role === "member") {
        setRedirectPath("/member-profile");
      } else if (role === "librarian") {
        setRedirectPath("/librarian-profile");
      } else if (role === "employee") {
        setRedirectPath("/employee-profile");
      }
    } else {
      toast.error("Invalid Credentials");
    }
  };

  if (validUser && redirectPath) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return (
    <div className="hero min-h-screen backgroundImage">
      <Helmet>
        <title>Login | Knowledge Junction</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col md:w-1/2 w-full lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm text-secondary shadow-2xl logInForm">
            <form className="card-body " onSubmit={handleSubmit}>
              <h1 className="text-5xl font-thin text-center text-primary">
                Sign in
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">ID</span>
                </label>
                <input
                  type="text"
                  placeholder="ID"
                  name="id"
                  className="input input-bordered text-gray-600 focus:text-zinc-800"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">Role</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered text-gray-600 focus:text-zinc-800 w-full max-w-xs"
                >
                  <option disabled defaultValue>
                    Select Role
                  </option>
                  <option value={"member"} className="text-black text-lg">
                    Member
                  </option>
                  <option value={"librarian"} className="text-black text-lg">
                    Librarian
                  </option>
                  <option value={"employee"} className="text-black text-lg">
                    Employee
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered text-gray-600 focus:text-zinc-800"
                  required
                />
              </div>
              <div className="form-control  mt-6">
                <button
                  type="submit"
                  className="btn btn-primary text-secondary font-thin text-xl w-3/4 mx-auto"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </div>
              <p className="text-center font-light pt-3">
                Don't have an account?{" "}
                <Link to="/signup" className="underline-offset-4 font-bold">
                  Sign Up
                </Link>{" "}
                here.
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Render user profile based on role
      {user && role === "member" ? <MemberProfile User={user} /> : <Signin />}
      {user && role === "librarian" && <LibrarianProfile user={user} />}
      {user && role === "employee" && <EmployeeProfile user={user} />} */}
    </div>
  );
};

export default Signin;
