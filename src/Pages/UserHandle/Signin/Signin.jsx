import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Signin = () => {
  return (
    <div
      className="hero min-h-screen backgroundImage"
    
    >
      <Helmet>
        <title>Login | Knowledge Junction</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col md:w-1/2 w-full lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm text-secondary shadow-2xl logInForm">
            <form className="card-body">
              <h1 className="text-5xl font-thin text-center text-primary">
                Sign in
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control  mt-6">
                <button className="btn btn-primary text-secondary font-thin text-xl w-3/4 mx-auto">
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
    </div>
  );
};

export default Signin;
