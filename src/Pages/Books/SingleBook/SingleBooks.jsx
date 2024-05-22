import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  }, []);

  return (
    <section>
      <div>
        <h1>{book.Title}</h1>
      </div>
      <div></div>
    </section>
  );
};

export default SingleBooks;
