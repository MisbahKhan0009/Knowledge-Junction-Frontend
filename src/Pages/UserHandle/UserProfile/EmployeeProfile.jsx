import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const EmployeeProfile = () => {
  // Retrieve the user data from session storage
  const user = JSON.parse(sessionStorage.getItem("employee"));

  // Destructure the user data to exclude the password
  const { Name, Designation, Qualification, ContactInformation } = user;

  // State to hold fine installments data
  const [fineInstallments, setFineInstallments] = useState([]);

  useEffect(() => {
    // Retrieve IssuerReceiverID from session storage
    const issuerReceiverID = user.IssuerReceiverID;

    // Fetch fine installments data
    axios
      .get(`http://localhost:8080/fine-installments/${issuerReceiverID}`)
      .then((response) => {
        setFineInstallments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fine installments:", error);
      });
  }, [user.IssuerReceiverID]);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Helmet>
        <title>Employee | Knowledge Junction</title>
      </Helmet>
      <h1 className="text-5xl font-thin mx-auto mt-20 mb-10">
        Employee Profile
      </h1>
      <div className="mx-auto my-10 flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-primary p-10 text-secondary shadow-lg ">
        <div className="group relative">
          <img
            width={110}
            height={110}
            className="h-[110px] w-[110px] rounded-full object-cover"
            src={`https://ui-avatars.com/api/?name=${Name}&size=128&background=F5F5DC&color=003724`}
            alt="Employee Avatar"
          />
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-5xl font-thin  text-secondary ">{Name}</h1>
          <p className="text-xl  text-secondary">{Designation}</p>
        </div>
        <div>
          <h1 className="text-xl font-thin mb-2 text-start  text-secondary  ">
            <span className="font-bold">Contact Info: </span>
            {ContactInformation}
          </h1>
          <p className="text-xl font-thin  text-secondary">
            Qualification: {Qualification}
          </p>
        </div>
      </div>

      {/* Fine_Installments table */}
      <div className="overflow-x-auto w-[85%] mx-auto my-24">
        <h2 className="text-3xl font-thin text-center mb-10">
          Fine Installments details
        </h2>
        <table className="table">
          <thead className="text-primary text-center text-lg">
            <tr>
              <th>Book Title</th>
              <th>Member Name</th>
              <th>Fine Amount</th>
              <th>Payment Status</th>
              <th>Installment Number</th>
              <th>Installment Amount</th>
            </tr>
          </thead>
          <tbody className="text-lg text-center">
            {fineInstallments.map((installment) => (
              <tr key={installment.InstallmentID}>
                <td>{installment.BookTitle}</td>
                <td>{installment.MemberName}</td>
                <td>${installment.FineAmount}</td>
                {installment.PaymentStatus === "Paid" ? (
                  <div className="badge badge-primary mt-3">
                    <td className="text-lg p-3 text-secondary">
                      {installment.PaymentStatus}
                    </td>
                  </div>
                ) : (
                  <div className="badge badge-error mt-3">
                    <td className="text-lg p-3 text-secondary">
                      {installment.PaymentStatus}
                    </td>
                  </div>
                )}
                <td>{installment.InstallmentNumber}</td>
                <td>${installment.InstallmentAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EmployeeProfile;
