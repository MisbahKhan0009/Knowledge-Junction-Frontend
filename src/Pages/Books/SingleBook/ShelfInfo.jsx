import React from 'react';

const ShelfInfo = () => {
    const [shelfData, setShelfData] = useState([]);
    const [bookCopies, setBookCopies] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:8080/shelf/${ISBN}`)
          .then((res) => {
            setShelfData(res.data.shelves);
            setBookCopies(res.data.bookCopies);
            console.log("Shelf Data:", shelfData);
            console.log("Book copies Data:", bookCopies);
          })
          .catch((err) => console.error(err));
      }, [ISBN]);
    return (
        <div>
            
        </div>
    );
};

export default ShelfInfo;