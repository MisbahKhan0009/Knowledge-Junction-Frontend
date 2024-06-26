import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import BookTableData from "./BookTableData";

const BookCollection = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 10;

  // Fetch books from the API
  useEffect(() => {
    axios
      .get(
        "https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/books/"
      )
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the indices for slicing the books array
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Calculate total pages
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Helmet>
        <title>Books | Knowledge Junction</title>
      </Helmet>
      <h1 className="text-4xl text-primary font-light text-center w-full mt-12">
        List of All Available Books
      </h1>
      <div className="w-[85%] mx-auto my-24">
        <div className="flex justify-end items-center mb-10">
          <p className="font-thin text-2xl text-primary mr-3">
            Search by title
          </p>
          <input
            type="text"
            placeholder="Search by Title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input  input-bordered bg-white text-primary  w-1/4"
            // ml-[920px]
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-primary text-center text-lg">
              <tr>
                <th>Title & Author</th>
                <th>Publisher & Category</th>
                <th>Publication Date</th>
                <th>Rating</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Render the current page books */}
              {currentBooks.map((book) => (
                <BookTableData key={book.ISBN} book={book} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <div className="join">
            {Array.from({ length: totalPages }, (_, index) => (
              <input
                key={index}
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label={index + 1}
                checked={currentPage === index + 1}
                onChange={() => handlePageChange(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCollection;
