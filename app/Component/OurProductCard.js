"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useRouter } from "next/navigation";
export default function OurProductCard() {
  const router = useRouter();
  return (
    <>
      <Box>
        <Box
          sx={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            transition: "0.4s ease",
            boxShadow: "1px 4px 5px 4px #00000017",
            ":hover": {
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              transform: "translateY(-10px)",
            },
          }}
        >
          <img
            src="https://www.myorthos.com/assets/imager/images/cards/18570/myorthos-for-patients-card_57881952ca690c80692feb86ac1f6bce.webp"
            alt=""
            style={{
              borderRadius: "20px 20px 0px 0px",
              width: "100%",
              clipPath: "ellipse(99% 73% at 83% 15%)",
            }}
          />
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              marginTop: "-50px",
            }}
          >
            <Typography variant="h4">GPS</Typography>
            <Box pt={1}>
              <Button
                sx={{
                  fontFamily: "roboto !important",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#413e3f",
                  border: "2px solid #e3dcdc",
                  borderRadius: "10px !important",
                }}
                onClick={() => router.push("/product")}
              >
                More Detail <ArrowForwardRoundedIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
