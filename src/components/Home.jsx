import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "../assets/data";
import "../components/slick.css"
const Home = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <ul className="slick-dots m-0">{dots}</ul>,
    customPaging: (i) => (
      <div className="flex">
        <div className="dot m-0 w-[1.1rem] h-[1.1rem] rounded-[50%] bg-[#FFE7C0] " />
      </div>
    ),
  };
  return (
    <div className="bg-[#FECB61] w-screen  h-screen md:relative flex flex-col   items-center pt-10  ">
      <div className="md:absolute md:top-24 md:left-28  ">
        <h1 className="text-center font-semibold text-slate-700  md:text-4xl  text-3xl mb-8">
          From Our Students...
        </h1>
        <img
          className="max-w-full max-h-full md:w-96 md:h-80 w-48  h-40"
          src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/m1seDillu16.png"
        ></img>
      </div>
      <div className="md:absolute md:top-16  md:right-12  md:w-[490px] w-[300px] bg-[#FFFEEE] px-2 pt-4  text-slate-700  pb-10 mt-4">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="px-4 py-10 flex justify-start flex-col">
              <p className="text-xl leading-7">{d.review}</p>
              <h4 className="text-xl mt-3 uppercase  ">{d.name}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
