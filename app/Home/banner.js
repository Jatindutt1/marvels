"use client";
import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Next from "./next";
import { motion } from "framer-motion";
import Aboutus from "./Aboutus";
export default function Banner() {
  const [lineHidden, setLineHidden] = useState(false);

  useEffect(() => {
    setLineHidden(true);
  }, []);
  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Paper className="bannerMainBox" sx={{ borderRadius: "0px" }}>
          <Box className="textBox" data-aos="fade-up">
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h1">Marvel Studios</Typography>
            </motion.div>
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h2">
                Marvel Studios, LLC is an American film and television
                production company.
              </Typography>
            </motion.div>
          </Box>
          <Box
            className="lineImgBox"
            sx={{
              height: lineHidden ? "1000px" : "0px",
              overflow: "hidden",
              transition: "all 1.5s ease-in-out",
            }}
          >
            <img src="images/line.png" alt="line.png" />
          </Box>
          <Box className="circle circle1 bubbleZoom "></Box>
          <Box className="circle circle2 bubbleZoom1 "></Box>
          <Box className="circle circle3 bubbleZoom "></Box>
          <Box className="circle circle4 bubbleZoom1 "></Box>

          <a href="#sec-2">
            <div className="scroll-down"></div>
          </a>
        </Paper>
      </Box>
      <Aboutus />
      <Next />
    </>
  );
}
