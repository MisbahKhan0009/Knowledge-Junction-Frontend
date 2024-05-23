import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaBookSkull } from "react-icons/fa6";

const SingleBooks = () => {
  const { ISBN } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/${ISBN}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [ISBN]);

  return (
    <section>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.Title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SingleBooks;
