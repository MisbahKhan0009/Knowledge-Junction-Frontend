import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsFillStarFill, BsArrowRightCircle } from "react-icons/bs";

const SingleBooks = () => {
  const { ISBN } = useParams();
  const [book, setBook] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/${ISBN}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [ISBN]);

  console.log(book);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const encodedTitle = encodeURIComponent(book.Title);
  const encodedAuthor = encodeURIComponent(book.Author);

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/books/v1/2volumes?q=${encodedTitle}+inauthor:${encodedAuthor}&key=${
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
    <section className="w-2/4 mx-auto">
      <div className="card lg:card-side ">
        <figure>
          <img
            src={
              imgUrl ||
              `https://placehold.co/240x240/F5F5DC/173724?text=Book+Cover`
            }
            className=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-thin">{book.Title}</h2>
          <h2>
            <span className="font-bold">Author: </span>
            {book.Author}
          </h2>
          <h2>
            <span className="font-bold">Category: </span> {book.Category}
          </h2>
          <h2>
            <span className="font-bold">Publisher: </span> {book.Publisher}
          </h2>
          <h2>
            <span className="font-bold">Publication Date: </span>
            {formatDate(book.PublicationDate)}
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem facere corrupti explicabo voluptatum, maxime amet
            molestias saepe recusandae distinctio sapiente beatae dolores nemo
            excepturi vitae doloribus, consequatur laboriosam quaerat odit
            debitis, fugiat magnam dolorem eius. Temporibus, nesciunt! Est,
            dolores veniam, illum, accusamus at et commodi id in dolor iure
            voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum reprehenderit, culpa consequuntur, ducimus exercitationem
            praesentium doloribus quod at et sunt illo deleniti, nisi reiciendis
            inventore soluta neque porro molestias dolorum nostrum aliquam eius
            odit assumenda enim provident! Saepe reiciendis quam provident iste
            labore culpa ex veniam quaerat quia, inventore repudiandae.
          </p>
          <h2>
            <span className="font-bold">Review: </span>
            {book.Review}
          </h2>
          <h2 className="  flex flex-1 justify-start items-center">
            <span className="font-bold">Rating: </span>
            {book.Rating}
            <BsFillStarFill className="ms-1" />
          </h2>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SingleBooks;
