import React from "react";
// import AboutusCard from "../Component/AboutusCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";
import AboutUsNew from "../Component/AboutUsNew";

const CardData = [
  {
    img: "images/back.jpg",
    head: "OUR PROFILE",
    description:
      "Marvel Studios, LLC[5] (originally known as Marvel Films from 1993 to 1996) is an American film and television production company.",
    link: "aboutus",
  },
  {
    img: "images/back1.jpg",
    head: "WHY US",
    description:
      "It is a subsidiary of Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company.",
    link: "whyus",
  },
  {
    img: "images/back2.jpg",
    head: "QUALITY ASSURANCE",
    description:
      "Marvel Studios produces the Marvel Cinematic Universe (MCU) films and series, based on characters that appear in Marvel Comics publications.",
    link: "qualityassurance",
  },
];
export default function Aboutus() {
  return (
    <div style={{ padding: "50px 0px" }}>
      <Container maxWidth="xl">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <Box pt={2} pb={3}>
            <Typography variant="h2">ABOUT US</Typography>
          </Box>
        </AnimationOnScroll>
        <Grid container spacing={3}>
          {CardData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <AboutUsNew data={data} />
              </AnimationOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
