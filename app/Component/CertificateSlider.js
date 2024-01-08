"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
const DataSlider = [
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
];
const CertificateSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
          slidesToShow: 2,
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
          slidesToShow: 3,
          dots: true,
        },
      },
    ],
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings} className="slickbottomslider">
        {DataSlider.map((item, index) => (
          <Box key={index}>
            <Box className="cardcertificate">
              <img
                src="https://img.undirectory.com/uploads/gallery/ecogas.co.in/TEST-REPORT-2613-GPS-AIS-140-1.jpg"
                alt=""
                width="100%"
              />
              <Box mt={1} textAlign="center">
                <Button
                  sx={{
                    fontFamily: "roboto !important",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#413e3f",
                    border: "2px solid #e3dcdc",
                    borderRadius: "10px !important",
                    fontSize: "12px",
                    padding: "4px 6px",
                  }}
                >
                  <ZoomInIcon /> Preview
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default CertificateSlider;
