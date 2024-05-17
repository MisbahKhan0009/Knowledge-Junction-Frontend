import axios from "axios";
import React, { useEffect, useState } from "react";

const BookTableData = ({ book }) => {
  const [imgUrl, setImgUrl] = useState("");

  const {
    Author,
    Category,
    ISBN,
    PublicationDate,
    Publisher,
    Title,
    Language,
  } = book;

  function replaceSpacesWithPlus(text) {
    return text.split(" ").join("+");
  }
  //   const encodedTitle = replaceSpacesWithPlus(Title);
  //   const encodedAuthor = replaceSpacesWithPlus(Author);

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
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img
                src={
                  imgUrl ||
                  `https://placehold.co/500x500/F5F5DC/173724?text=Book+Cover`
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="text-xl" title={Title}>
              {Title.length > 40 ? `${Title.substring(0, 40)}...` : Title}
            </div>
            <div className="font-light text-lg opacity-50">{Author}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-lg">{Publisher}</span>
        <br />
        <span className="badge badge-primary ">{Category}</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookTableData;
