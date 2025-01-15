"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import Image from "next/image";

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Custom Previous Button
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute left-0 z-10 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transform -translate-y-1/2 top-[calc(50%+8px)]"
    onClick={onClick}
    style={{ left: "-15px" }}
  >
    &#9664;
  </button>
);

// Custom Next Button
const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-0 z-10 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transform -translate-y-1/2 top-[calc(50%+8px)]"
    onClick={onClick}
    style={{ right: "-15px" }}
  >
    &#9654;
  </button>
);

// Data array
const data = [
  { id: "1", name: "Fashion Shows", img: "/fashion-show.png" },
  { id: "2", name: "Theater", img: "/theater.png" },
  { id: "3", name: "Soccer Player", img: "/soccer-player.png" },
  { id: "4", name: "Reunion Event", img: "/reunion.png" },
  { id: "5", name: "Presentation", img: "/presentation.png" },
  { id: "6", name: "Mirror Ball Event", img: "/mirror-ball.png" },
  { id: "7", name: "Opening Ceremony", img: "/opening-ceremony.png" },
  { id: "8", name: "Singer Performance", img: "/singer.png" },
  { id: "9", name: "Solo Singer", img: "/singer.png" },
  { id: "10", name: "Opening Ceremony", img: "/opening-ceremony.png" },
  { id: "11", name: "Mirror Ball Event", img: "/mirror-ball.png" },
];

const Responsive: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Small screens (tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // Extra small screens (mobile)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto  p-6 relative">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-2 ">
            <div className="overflow-hidden flex flex-col items-center">
              <Image width={35} height={35} src={item.img} alt={item.name} />
              <div className="w-full text-center text-gray-800 py-3 text-sm">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Responsive;
