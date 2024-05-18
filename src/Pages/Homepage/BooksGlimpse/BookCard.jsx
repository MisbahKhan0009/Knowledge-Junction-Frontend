import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ book }) => {
  const { Author, Category, ISBN, PublicationDate, Publisher, Title } = book;
  const [imgUrl, setImgUrl] = useState("");

  const encodedTitle = encodeURIComponent(Title);
  const encodedAuthor = encodeURIComponent(Author);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}+inauthor:${encodedAuthor}&key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const imgUrl = data.items[0].volumeInfo.imageLinks.thumbnail;
        setImgUrl(imgUrl);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [encodedAuthor, encodedTitle, setImgUrl]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="card w-96 bg-primary pt-5 text-secondary shadow-xl">
      <figure>
        <img
          src={
            imgUrl ||
            `https://placehold.co/240x240/F5F5DC/173724?text=Book+Cover`
          }
          className="h-60 object-cover rounded-md"
          alt="Books"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title items-start">
          {Title}
          <div className="badge badge-secondary mt-1">{Category}</div>
        </h2>
        <p>{Author}</p>
        <div className="card-actions items-center justify-between">
          <div className="badge badge-outline">
            Published: {formatDate(PublicationDate)}
          </div>
          <div>
            <Link to={`/books/${ISBN}`}>
              <BsArrowRightCircle className="font-thin text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
