import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

const Signup = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    contactInformation: "",
    training: "",
    highestDegree: "",
    awards: "",
    password: "",
  });

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    // Reset form data when role changes
    setFormData({
      fullName: "",
      contactInformation: "",
      training: "",
      highestDegree: "",
      awards: "",
      password: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role === "member") {
      try {
        const response = await fetch(
          "https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/signup/member",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              FullName: formData.fullName,
              ContactInformation: formData.contactInformation,
              MembershipStatus: "Active",
              Training: formData.training,
              HighestDegree: formData.highestDegree,
              Awards: formData.awards,
              MembershipExpire: "2025-12-31",
              Password: formData.password,
            }),
          }
        );
        const data = await response.json();
        toast.success(
          `Member signed up successfully, Your MemberID: ${data.memberId}`
        );
      } catch (error) {
        toast.error("Failed to register member.", error);
      }
    } else if (role === "librarian") {
      try {
        const response = await fetch(
          "https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/signup/librarian",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              FullName: formData.fullName,
              ContactInformation: formData.contactInformation,
              Password: formData.password,
            }),
          }
        );
        const data = await response.json();
        toast.success(
          `Librarian signed up successfully, Your LibrarianID: ${data.librarianId}`
        );
      } catch (error) {
        toast.error("Failed to register Librarian.", error);
      }
    } else if (role === "employee") {
      try {
        const response = await fetch(
          "https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/signup/employee",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              FullName: formData.fullName,
              ContactInformation: formData.contactInformation,
              Password: formData.password,
            }),
          }
        );
        const data = await response.json();

        toast.success(
          `Employee signed up successfully, Your EmployeeID: ${data.employeeId}`
        );
      } catch (error) {
        toast.error("Failed to register Librarian.", error);
      }
    }
  };

  return (
    <div className="hero min-h-screen backgroundImage">
      <Helmet>
        <title>Signup | Knowledge Junction</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:w-1/2 w-full lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm text-secondary shadow-2xl logInForm">
            <form className="card-body" onSubmit={handleSubmit}>
              <h1 className="text-5xl font-thin text-center text-primary">
                Register
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">Role</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered  text-zinc-800 w-full max-w-xs"
                  onChange={handleRoleChange}
                  value={role}
                  required
                >
                  <option disabled defaultValue>
                    Select Role
                  </option>
                  <option value="member">Member</option>
                  <option value="librarian">Librarian</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input input-bordered text-zinc-800"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">
                    Contact Information
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Contact Information"
                  name="contactInformation"
                  value={formData.contactInformation}
                  onChange={handleInputChange}
                  className="input input-bordered text-zinc-800"
                  required
                />
              </div>
              {role === "member" && (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-thin">
                        Training
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Training"
                      name="training"
                      value={formData.training}
                      onChange={handleInputChange}
                      className="input input-bordered text-zinc-800"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-thin">
                        Highest Degree
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Highest Degree"
                      name="highestDegree"
                      value={formData.highestDegree}
                      onChange={handleInputChange}
                      className="input input-bordered text-zinc-800"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-thin">
                        Awards
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Awards"
                      name="awards"
                      value={formData.awards}
                      onChange={handleInputChange}
                      className="input input-bordered text-zinc-800 "
                      required
                    />
                  </div>
                </>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-thin">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input input-bordered text-zinc-800 "
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary text-secondary font-thin text-xl w-3/4 mx-auto"
                >
                  Sign up
                </button>
              </div>
              <p className="text-center font-light pt-3">
                Already have an account?{" "}
                <Link to="/signin" className="underline-offset-4 font-bold">
                  Sign In
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

export default Signup;
