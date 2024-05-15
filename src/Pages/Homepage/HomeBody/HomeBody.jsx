import React from "react";

const HomeBody = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row my-16 md:h-[75vh]">
      <div className="text-center flex flex-col justify-center lg:text-start w-3/4 lg:w-1/2 mx-auto">
        <h1 className="text-primary text-4xl mb-2">
          Welcome to Knowledge Junction
        </h1>
        <h2 className="text-xl">A place to axplore the Realm of Knowledge.</h2>
        <p className="my-6 text-justify">
          Greetings from Knowledge Junction, a sanctuary for bibliophiles and
          knowledge seekers. With an extensive collection of books spanning
          diverse genres, from classic literature to cutting-edge research, our
          library offers a haven for exploration and discovery. Delve into
          captivating narratives, expand your horizons with insightful
          non-fiction, and embark on intellectual journeys curated to enlighten
          and inspire. Whether you're a seasoned scholar, an avid reader, or a
          curious mind, Knowledge Junction invites you to immerse yourself in a
          world of boundless learning and endless possibilities.
        </p>
        <button className="btn btn-primary font-thin text-xl mx-auto lg:mx-0 text-secondary w-48 ">
          Start Exploring
        </button>
      </div>
      <div className="hidden lg:flex">
        <img
          src="https://i.ibb.co/XFnrbLz/pexels-olena-bohovyk-3646172.jpg"
          className=" h-full me-24 object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBody;
