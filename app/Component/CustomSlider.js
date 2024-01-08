"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
const DataSlider = [
  {
    description:
      "Marvel Studios, LLC is an American film and television production company. It is a subsidiary of Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company.",
  },
  {
    description:
      "Marvel Studios, LLC is an American film and television production company. It is a subsidiary of Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company.",
  },
  {
    description:
      "Marvel Studios, LLC is an American film and television production company. It is a subsidiary of Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company.",
  },
];
const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {DataSlider.map((item, index) => (
          <Box key={index} sx={{ padding: "20px 0px 50px" }}>
            <Box className="boxfixer">
              <Typography variant="body1" sx={{ color: "#000" }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
