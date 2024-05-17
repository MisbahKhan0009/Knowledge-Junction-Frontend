import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Helmet } from "react-helmet";
import BookTableData from "./BookTableData";

const BookCollection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/books/")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Books | Knowledge Junction</title>
      </Helmet>
      <h1 className="text-4xl text-primary font-bold text-center w-full mt-12">
        List of All Avaiable Books
      </h1>
      <div className="overflow-x-auto w-[85%] mx-auto my-24">
        <table className="table ">
          {/* head */}
          <thead className="text-primary text-center text-lg">
            <tr>
              <th>Title & Author</th>
              <th>Publisher & Category</th>
              <th>Language</th>
              <th>Rating</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {books.map((book) => (
              <BookTableData key={book.ISBN} book={book} />
            ))}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default BookCollection;
