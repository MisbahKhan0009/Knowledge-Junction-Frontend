import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  return (
    <section className="grid md:grid-cols-2 w-3/4 mx-auto mt-12">
      {/* Misbah  start*/}

      <section>
        <div className="card w-96  bg-primary mx-auto my-32 text-secondary shadow-xl">
          <figure className="px-10 -mt-36 py-10">
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-secondary ring-offset-primary ring-offset-4">
                <img src="https://i.ibb.co/CVXnSyS/Professional-Image.png" />
              </div>
            </div>
          </figure>
          <div className="card-body  pt-5 ">
            <h2 className="text-4xl font-thin">Md. Misbah Khan</h2>
            <h4 className="text-xl my-3  font-extralight">
              Frontend + Backend Developer
            </h4>
            <p className="text-start font-thin">
              <span className="font-bold">Contribution: </span>
              Developed the frontend and backend of this website. Worked on
              schema design, ER diagram, database creation and API integration
            </p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/MisbahKhan0009/">
                <FaSquareGithub className="text-2xl md:text-3xl lg:text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Misbah  end*/}

      {/* Toki start*/}
      <section>
        <div className="card w-96  bg-primary mx-auto my-32 text-secondary shadow-xl">
          <figure className="px-10 -mt-36 py-10">
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-secondary ring-offset-primary ring-offset-4">
                <img src="https://avatars.githubusercontent.com/u/113636022?v=4" />
              </div>
            </div>
          </figure>
          <div className="card-body  pt-5 ">
            <h2 className="text-4xl font-thin">Towfiqur Rahman Toki</h2>
            <h4 className="text-xl my-3 font-extralight">
              UI/UX Designer, Frontend Developer
            </h4>
            <p className="text-start font-thin">
              <span className="font-bold">Contribution: </span>
              Designed the UI/UX of this website. Worked on the frontend. Also
              worked on the schema design, ER diagram and database creation.
            </p>
            <div className="flex justify-center mt-4">
              <a href="https://github.com/tfortoki/">
                <FaSquareGithub className="text-2xl md:text-3xl lg:text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Toki end*/}
    </section>
  );
};

export default Developers;
