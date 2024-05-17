import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import axios from "axios";

const BooksGlimpse = () => {
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
    <section className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6">
        <div className="text-center my-6 lg:col-span-3 md:col-span-2 col-span-1 ">
          <h1 className="text-4xl text-primary font-bold">Our Collection</h1>
          <p className="text-black my-3 text-lg font-lg">
            In our library, we have a collection of over 10,000+ books.
          </p>
        </div>
        {books.slice(0, 3).map((book) => (
          <BookCard key={book.ISBN} book={book} />
        ))}

        <div className="mx-auto pe-20 md:pe-0 mt-6 lg:col-span-3 md:col-span-2 col-span-1 ">
          <button className="btn btn-primary text-secondary font-thin text-lg">
            <Link to="/books">Show More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksGlimpse;
