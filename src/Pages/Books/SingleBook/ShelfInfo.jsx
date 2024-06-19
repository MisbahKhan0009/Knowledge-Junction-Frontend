import React from "react";

const ShelfInfo = () => {
  const [shelfData, setShelfData] = useState([]);
  const [bookCopies, setBookCopies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://knowledge-junction-backend-4q201zreq-misbahkhan0009s-projects.vercel.app/shelf/${ISBN}`
      )
      .then((res) => {
        setShelfData(res.data.shelves);
        setBookCopies(res.data.bookCopies);
        console.log("Shelf Data:", shelfData);
        console.log("Book copies Data:", bookCopies);
      })
      .catch((err) => console.error(err));
  }, [ISBN]);
  return <div></div>;
};

export default ShelfInfo;
