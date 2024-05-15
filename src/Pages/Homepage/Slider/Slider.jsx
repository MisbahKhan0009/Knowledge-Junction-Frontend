import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import SliderPage from "./SliderPage";

const Slider = () => {
  const sliders = [
    {
      id: "abcdefg1",
      top_text: "Welcome to our Library",
      title: "Discover a World of Knowledge",
      body_text:
        "Explore our vast collection of books and resources to expand your horizons.",
      callToActionText: "Learn More",
      img: "https://i.ibb.co/VQtSrPC/1.jpg",
    },
    {
      id: "hijklmno",
      top_text: "New Arrivals",
      title: "Stay Updated with the Latest Releases",
      body_text:
        "Check out our newest additions and never miss out on the best reads.",
      callToActionText: "Explore Now",
      img: "https://i.ibb.co/qyNsJ9r/2.jpg",
    },
    {
      id: "pqrstuvw",
      top_text: "Get Lost in a Story",
      title: "Immerse Yourself in Fascinating Narratives",
      body_text:
        "Dive into captivating stories that will transport you to different worlds.",
      callToActionText: "Start Reading",
      img: "https://i.ibb.co/gJzQxRH/3.jpg",
    },
    {
      id: "xyz12345",
      top_text: "Find Your Next Adventure",
      title: "Embark on an Exciting Journey",
      body_text:
        "Discover thrilling adventures waiting to be explored within the pages of our books.",
      callToActionText: "Begin Adventure",
      img: "https://i.ibb.co/hVvbzyb/4.jpg",
    },
    {
      id: "67890abc",
      top_text: "Expand Your Horizons",
      title: "Learn Something New Every Day",
      body_text:
        "Our library offers resources to help you grow and learn in various fields.",
      callToActionText: "Start Learning",
      img: "https://i.ibb.co/Ry03Mbx/5.jpg",
    },
    {
      id: "def12345",
      top_text: "Join Our Community",
      title: "Connect with Fellow Book Lovers",
      body_text:
        "Engage with like-minded individuals and share your love for reading and learning.",
      callToActionText: "Join Now",
      img: "https://i.ibb.co/G9wkKKr/6.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} className=" object-cover">
            <SliderPage oneSlider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
