import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../Component/ProductCard";
import Slider from "react-slick";
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
export default function ourproducts() {
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
      <Box py={2}>
        <Container maxWidth="xl">
          <Box py={2}>
            <Typography variant="h2">OUR PRODUCTS</Typography>
          </Box>
          <Box pb={2} sx={{ paddingBottom: { xs: "40px" } }}>
            <Typography variant="body1">
              We Ecogas Impex Pvt. Ltd., are noteworthy Manufacturer, Exporter,
              Wholesaler and Trader of an exclusive range of CNG Kits, Speed
              Sensor and many more
            </Typography>
          </Box>
          <Slider {...settings} className="slickbottomslider">
            {cardData.map((item, index) => (
              <Box key={index} p={1}>
                <ProductCard />
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </div>
  );
}
