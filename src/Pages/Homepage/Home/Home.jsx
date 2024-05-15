import React from "react";
import Slider from "../Slider/Slider";
import HomeBody from "../HomeBody/HomeBody";
import BooksGlimpse from "../BooksGlimpse/BooksGlimpse";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Knowledge Junction</title>
      </Helmet>
      <Slider />
      <HomeBody />
      <BooksGlimpse />
    </>
  );
};

export default Home;
