import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./Preloader.css";

const Preloader = () => {
  // useEffect(() => {
  //   if (document.querySelector(".char")) {
  //     const myText = new SplitType("#my-text", { types: "chars" });
  //     const animateText = () => {
  //       gsap.to(".char", {
  //         y: 0,
  //         stagger: 0.05,
  //         delay: 0.2,
  //         duration: 0.1,
  //         onComplete: () => {
  //           gsap.to(".char", {
  //             y: 115,
  //             delay: 0.5,
  //             duration: 0.5,
  //             onComplete: animateText,
  //           });
  //         },
  //       });
  //     };
  //     if (document.querySelector(".char")) {
  //       animateText();
  //     }
  //   }
  // }, []);

  return (
    <div className="flex justify-center items-center h-screen ">
      <span className="loading loading-infinity  loading-lg"></span>
      {/* //   <img */}
      {/* //     src="src/assets/Images/Logo/favicon.png"
    //     alt=""
    //     className="animate-pulse rounded-lg w-[50v]h h-[50vh]"
    //   /> */}
    </div>
  );
};

export default Preloader;
