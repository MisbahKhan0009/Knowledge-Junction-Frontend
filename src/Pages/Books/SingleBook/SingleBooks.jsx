import React from "react";
import { useParams } from "react-router-dom";

const SingleBooks = () => {
  const { ISBN } = useParams();
  return <div>single books ISBN in {ISBN}</div>;
};

export default SingleBooks;
