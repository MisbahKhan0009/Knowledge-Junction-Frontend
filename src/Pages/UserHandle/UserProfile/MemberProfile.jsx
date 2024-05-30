import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const MemberProfile = () => {
  // Retrieve the member data from session storage
  const member = JSON.parse(sessionStorage.getItem("member"));

  // State to hold the fines data
  const [fines, setFines] = useState([]);

  // Destructure the member data to exclude the password
  const {
    MemberID,
    FullName,
    ContactInformation,
    MembershipStatus,
    Training,
    HighestDegree,
    Awards,
    MembershipExpire,
  } = member;

  // Format the MembershipExpire date
  const formattedExpireDate = new Date(MembershipExpire).toLocaleDateString();

  // Fetch fines data
  useEffect(() => {
    const fetchFines = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/fines/${MemberID}`
        );
        setFines(response.data);
      } catch (error) {
        console.error("Failed to fetch fines", error);
      }
    };

    fetchFines();
  }, [MemberID]);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Member | Knowledge Junction</title>
      </Helmet>
      <h1 className="text-5xl font-thin mx-auto mt-20 mb-10">Member Profile</h1>
      <div className="mx-auto my-10 flex  flex-col items-center justify-center space-y-4 rounded-xl bg-primary p-10 text-secondary shadow-lg">
        <div className="group relative">
          <img
            width={110}
            height={110}
            className="h-[110px] w-[110px] rounded-full object-cover"
            src={`https://ui-avatars.com/api/?name=${FullName}&size=128&background=F5F5DC&color=003724`}
            alt="Profile Avatar"
          />
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-thin text-secondary">{FullName}</h1>
          {MembershipStatus === "Active" ? (
            <div className="badge mt-3 badge-secondary">
              <p className="text-xl p-3 text-primary">
                Status: {MembershipStatus}
              </p>
            </div>
          ) : (
            <div className="badge mt-3 badge-error">
              <p className="text-xl p-3 text-secondary">
                Status: {MembershipStatus}
              </p>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-xl mt-2 font-thin text-start text-secondary">
            <span className="font-bold">Contact Info: </span>{" "}
            {ContactInformation}
          </h1>
          <p className="text-xl mt-2 font-thin text-secondary">
            <span className="font-bold">Training: </span> {Training}
          </p>
          <p className="text-xl mt-2 font-thin text-secondary">
            <span className="font-bold">Highest Degree: </span> {HighestDegree}
          </p>
          <p className="text-xl mt-2 font-thin text-secondary">
            <span className="font-bold">Awards:</span> {Awards}
          </p>
          <p className="text-xl mt-2 font-thin text-secondary">
            <span className="font-bold">Membership Expire: </span>
            {formattedExpireDate}
          </p>
        </div>
      </div>

      {/* Borrowed_Books_Fines table */}
      <div className="w-[50%] mx-auto my-24">
        <h2 className="text-3xl font-thin text-center mb-10">
          Borrowed Books Fines
        </h2>
        <div className="overflow-x-auto">
          <table className="table text-center w-full">
            <thead className="text-primary  text-lg">
              <tr>
                <th className="text-start">Book Title</th>
                <th>Fine Amount</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {fines.length > 0 ? (
                fines.map((fine) => (
                  <tr key={fine.FineID}>
                    <td className="text-lg text-start">{fine.Title}</td>
                    <td className="text-lg">${fine.FineAmount}</td>
                    {fine.PaymentStatus === "Paid" ? (
                      <div className="badge badge-primary mt-3">
                        <td className="text-lg p-3 text-secondary">
                          {fine.PaymentStatus}
                        </td>
                      </div>
                    ) : (
                      <div className="badge badge-error mt-3">
                        <td className="text-lg p-3 text-secondary">
                          {fine.PaymentStatus}
                        </td>
                      </div>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-lg">
                    No fines found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MemberProfile;
