"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "./Home/banner";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Customers from "./Home/customers";
import NeedHelps from "./Home/NeedHelps";
import Ourproducts from "./Home/ourproducts";
import About from "./Home/About2";
export default function Page() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(
      document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    window.addEventListener("scroll", toggleVisible, false);
    return () => {
      window.removeEventListener("scroll", toggleVisible, false);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Box sx={{ height: "100%" }}>
      <button
        id="back-to-top"
        className={visible ? "back-to-top-visible" : null}
        onClick={handleScroll}
        title="Go To Top"
      >
        <ArrowUpwardRoundedIcon />
      </button>
      <Banner />

      <About />
      <Ourproducts />

      <NeedHelps />

      <Customers />
    </Box>
  );
}
