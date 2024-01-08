import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Box>
      <Image src="/images/logo.png" alt="maain logo" width="150" height="66" />
    </Box>
  );
};

export default Logo;
