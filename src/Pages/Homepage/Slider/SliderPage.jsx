import React from "react";
import "./SliderPage.css";
import { Link } from "react-router-dom";

const SliderPage = ({ oneSlider }) => {
  const { top_text, title, body_text, callToActionText, img } = oneSlider;
  return (
    <div className="">
      <img
        src={img}
        className=" inset-0 w-full h-screen object-cover sliderImg"
        alt="Background"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center  text-secondary">
        <div>
          <h3 className="text-xl font-thin ">{top_text}</h3>
          <h2 className="sliderTitle tracking-wider leading-[70px] font-light text-lime-200 text-5xl w-3/4 mx-auto  my-4">
            {title}
          </h2>
          <p className="text-lg w-1/2 text-thin mx-auto">{body_text}</p>
          <button className="btn btn-primary text-secondary font-thin text-lg my-10">
            <Link to="/books">{callToActionText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
