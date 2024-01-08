"use client";
import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
const cardData = [
  {
    id: "",
  },
  {
    id: "",
  },
  {
    id: "",
  },
  {
    id: "",
  },
  {
    id: "",
  },
  {
    id: "",
  },
];
export default function OurProductSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="slickbottomslider">
        {cardData.map((item, index) => (
          <Box key={index} p={1}>
            <ProductCard />
          </Box>
        ))}
      </Slider>
    </div>
  );
}
