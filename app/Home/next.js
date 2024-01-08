import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../Component/ProductCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
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
];
export default function next() {
  return (
    <Box
      id="sec-2"
      sx={{
        height: "auto",
        padding: "100px 0px 0px",
      }}
    >
      <Container maxWidth="xl">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <Box pb={2}>
            <Typography variant="h2">PRODUCTS CATEGORY</Typography>
          </Box>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          // delay={100}
          animateIn="animate__fadeInLeft"
        >
          <Box pb={4}>
            <Typography variant="body1">
              Marvel Studios, LLC is an American film and television production
              company.
            </Typography>
          </Box>
        </AnimationOnScroll>

        <Grid container spacing={3}>
          {cardData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <AnimationOnScroll
                // delay={index * 500}
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <ProductCard />
              </AnimationOnScroll>
            </Grid>
          ))}
        </Grid>
        <Box pt={2} align="right">
          <Button variant="outlined" color="secondary">
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
