import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomSlider from "../Component/CustomSlider";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function customers() {
  return (
    <Box sx={{ background: "#fff" }}>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
        <Box className="header">
          <Container>
            <Box py={2}>
              <Box align="center">
                <img
                  style={{ marginBottom: "-81px" }}
                  src="images/addcar.gif"
                  alt
                />

                <Typography sx={{ textAlign: "center" }} variant="h2">
                  <span>STUDIOS CUSTOMERS</span>
                </Typography>
              </Box>
              <Container maxWidth="sm">
                <CustomSlider />
              </Container>
            </Box>
          </Container>
        </Box>
      </AnimationOnScroll>
    </Box>
  );
}
