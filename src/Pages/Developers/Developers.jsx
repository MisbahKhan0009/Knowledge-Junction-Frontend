import axios from "axios";
import React, { useEffect, useState } from "react";

const Developers = () => {
  const [developers, setDevelopesr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/developers")
      .then((res) => {
        setDevelopesr(res.data);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="grid md:grid-cols-2 w-3/4 mx-auto mt-12">
      {/* Misbah  start*/}
      {developers.map((developer) => (
        <section key={developer.id} data={developer}>
          <div className="card w-96  bg-primary mx-auto my-32 text-secondary shadow-xl">
            <figure className="px-10 -mt-36 py-10">
              <div className="avatar">
                <div className="w-64 rounded-full ring ring-secondary ring-offset-primary ring-offset-4">
                  <img src={developer.imgUrl} />
                </div>
              </div>
            </figure>
            <div className="card-body  pt-5 ">
              <h2 className="text-4xl font-thin">{developer.name}</h2>
              <h4 className="text-xl font-extralight">{developer.role}</h4>
              <p className="text-start font-thin">
                <span className="font-bold">Contribution: </span>
                {developer.contribution}
              </p>
            </div>
          </div>
        </section>
      ))}
      {/* Misbah  end*/}
    </section>
  );
};

export default Developers;
