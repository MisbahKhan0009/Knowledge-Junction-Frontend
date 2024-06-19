import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BsFillStarFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import DummyReview from "./DummyReview";

const SingleBooks = () => {
  const { ISBN } = useParams();
  const [book, setBook] = useState([]);
  const [shelvesData, setShelvesData] = useState([]);
  const [bookCopiesData, setBookCopiesData] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/books/${ISBN}`
      )
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [ISBN]);

  useEffect(() => {
    axios
      .get(
        `https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/shelf/${ISBN}`
      )
      .then((res) => {
        setShelvesData(res.data.shelves); // Set shelves data array
        setBookCopiesData(res.data.bookCopies); // Set book copies data array
      })
      .catch((err) => console.error(err));
  }, [ISBN]);

  // console.log("Shelf Data:", shelfData[0].Location);
  // console.log("Book copies Data:", bookCopies[0].Status);
  // console.log(book);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const encodedTitle = encodeURIComponent(book.Title);
  const encodedAuthor = encodeURIComponent(book.Author);

  // const bookCopiesArray = Object.values(bookCopies);
  // const shelvesArray = Object.values(shelfData);

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}+inauthor:${encodedAuthor}&key=${
  //       import.meta.env.VITE_API_KEY
  //     }`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const imgUrl = data.items[0].volumeInfo.imageLinks.thumbnail;
  //       setImgUrl(imgUrl);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // }, [encodedAuthor, encodedTitle, setImgUrl]);

  return (
    <section className="w-2/3 my-20 mx-auto">
      <Link to="/books" className="flex items-center mb-10">
        <BiArrowBack className="border-2 border-primary rounded-3xl  text-3xl text-primary" />
      </Link>
      <div className="">
        <figure>
          <img
            src={
              imgUrl ||
              `https://placehold.co/240x240/F5F5DC/173724?text=Book+Cover`
            }
            className="mx-auto border-2 border-primary rounded-md mb-10"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl run dexl font-thin">
            {book.Title}
          </h2>
          <h2>
            <span className="font-bold">Author: </span>
            <a
              className=" cursor-pointer hover:underline"
              onClick={() => document.getElementById("authorModal").showModal()}
            >
              {book.Author}
            </a>
            <dialog id="authorModal" className="modal text-secondary">
              <div className="modal-box  bg-primary">
                <h3 className="font-thin text-4xl">{book.Author}</h3>
                <p className="py-4">{book.AuthorBiography}</p>
                <p className="py-4">
                  <span className="font-bold">Nationality:</span>{" "}
                  {book.AuthorNationality}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn text-xl font-normal">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </h2>
          <h2>
            <span className="font-bold">Publisher: </span>
            <a
              className=" cursor-pointer hover:underline"
              onClick={() =>
                document.getElementById("publisherModal").showModal()
              }
            >
              {book.Publisher}
            </a>
            <dialog id="publisherModal" className="modal text-secondary">
              <div className="modal-box  bg-primary">
                <h3 className="font-thin text-4xl">{book.Publisher}</h3>
                <p className="py-4">
                  <span className="font-bold">Contact Information: </span>
                  {book.PublisherContactInformation}
                </p>
                <p className="py-4">
                  <span className="font-bold">Location:</span>{" "}
                  {book.PublisherLocation}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn text-xl font-normal">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </h2>
          <h2>
            <span className="font-bold">Category: </span>
            <a
              className=" cursor-pointer hover:underline"
              onClick={() =>
                document.getElementById("categoryModal").showModal()
              }
            >
              {book.Category}
            </a>
            <dialog id="categoryModal" className="modal text-secondary">
              <div className="modal-box  bg-primary">
                <h3 className="font-thin text-4xl">{book.Category}</h3>
                <p className="py-4">
                  <span className="font-bold">Category Description: </span>
                  {book.CategoryDescription}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn text-xl font-normal">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </h2>
          <h2>
            <span className="font-bold">Language: </span>
            {book.Language}
          </h2>
          <h2>
            <span className="font-bold">Publication Date: </span>
            {formatDate(book.PublicationDate)}
          </h2>
          <DummyReview />
          <h2>
            <span className="font-bold">Review: </span>
            {book.Review}
          </h2>
          <h2 className="  flex flex-1 justify-start items-center">
            <span className="font-bold me-2">Rating: </span>
            {book.Rating}
            <BsFillStarFill className="ms-1" />
          </h2>
        </div>
      </div>
      <div className="px-8">
        <h2 className="text-3xl font-thin mb-4">Book Copies information:</h2>
        <h2 className="mb-4 text-xl">
          <span className=" ">Available Copies: </span>
          {bookCopiesData.length}
        </h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-primary px-4 py-2 text-center">
                Copy ID
              </th>
              <th className="border border-primary px-4 py-2 text-center">
                Shelf ID
              </th>
              <th className="border border-primary px-4 py-2 text-center">
                Location
              </th>
              <th className="border border-primary px-4 py-2 text-center">
                Availability
              </th>
              <th className="border border-primary px-4 py-2 text-center">
                Number of Copies
              </th>
            </tr>
          </thead>
          <tbody>
            {bookCopiesData.map((bookCopy) => {
              // Find the shelf corresponding to the book copy
              const shelfData = shelvesData.find(
                (shelf) => shelf.ShelfID === bookCopy.ShelfID
              );
              if (!shelfData) {
                console.warn(
                  `No shelf data found for BookISBN ${bookCopy.BookISBN}`
                );
                return null; // Skip rendering if shelf data is not found
              }
              return (
                <tr key={bookCopy.CopyID}>
                  <td className="border border-primary px-4 py-2 text-center">
                    {bookCopy.CopyID}
                  </td>
                  <td className="border border-primary px-4 py-2 text-center">
                    {bookCopy.ShelfID}
                  </td>
                  <td className="border border-primary px-4 py-2 text-center">
                    {shelfData.Location}
                  </td>
                  <td className="border border-primary px-4 py-2 text-center">
                    {bookCopy.Status}
                  </td>
                  <td className="border border-primary px-4 py-2 text-center">
                    {bookCopy.NoOfCopies}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SingleBooks;
