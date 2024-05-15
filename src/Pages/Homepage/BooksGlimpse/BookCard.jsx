import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ book }) => {
  const { title, author, genre, publication_date } = book;
  const [imgUrl, setImgUrl] = useState("");

  const encodedTitle = encodeURIComponent(title);
  const encodedAuthor = encodeURIComponent(author);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}+inauthor:${encodedAuthor}&key=AIzaSyBlOvlqs8xlUpnJ92cWTTkSTAuKyQ3kP_w`
      )
      .then((res) => {
        // console.log(res.data);
        setImgUrl(res.data.items[0].volumeInfo.imageLinks.thumbnail);
      })
      .catch((err) => console.error(err));
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
          {title}
          <div className="badge badge-secondary mt-1">{genre}</div>
        </h2>
        <p>{author}</p>
        <div className="card-actions items-center justify-between">
          <div className="badge badge-outline">
            Published: {formatDate(publication_date)}
          </div>
          <div>
            <Link>
              <BsArrowRightCircle className="font-thin text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
