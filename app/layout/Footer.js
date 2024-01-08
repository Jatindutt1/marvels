import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PublicIcon from "@mui/icons-material/Public";

export default function Footer() {
  return (
    <div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255, 255, 255, 0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255, 255, 255, 0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255, 255, 255, 0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
        <div className="content">
          <Box sx={{ background: "#fff" }}>
            <Container maxWidth="xl">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    py={6}
                    sx={{
                      paddingRight: { sm: "20px", md: "40px", lg: "80px" },
                    }}
                  >
                    <Typography sx={{ textAlign: "left" }} variant="h5">
                      Latest <span style={{ color: "#db100f" }}>News</span>
                    </Typography>
                    <Box sx={{ textAlign: "left" }} pt={2}>
                      <Typography variant="body1" sx={{ color: "#000" }}>
                        Marvel Studios, LLC is an American film and television
                        production company. It is a subsidiary of Walt Disney
                        Studios, a division of Disney Entertainment, which is
                        owned by the Walt Disney Company.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Box sx={{ padding: { sm: "48px 48px 48px 40px" } }}>
                    <Typography sx={{ textAlign: "left" }} variant="h5">
                      Useful <span style={{ color: "#db100f" }}>Links</span>
                    </Typography>
                    <Box className="linkBox" pt={2}>
                      <Link href="/">Home</Link>
                      <Link href="/">About Us</Link>
                      <Link href="/">Speed Governor</Link>
                      <Link href="/">GPS</Link>
                      <Link href="/">Contact Us</Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Box sx={{ padding: { sm: "48px 48px 48px 40px" } }}>
                    <Typography sx={{ textAlign: "left" }} variant="h5">
                      Quick <span style={{ color: "#db100f" }}>Link</span>
                    </Typography>

                    <Box className="linkBox" pt={2}>
                      <Link href="/">4G CCTV Camera</Link>
                      <Link href="/">CNG Kits</Link>
                      <Link href="/">FASTag</Link>
                      <Link href="/">Reflective Tape</Link>
                      <Link href="/">Sanitizer</Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box py={6}>
                    <Typography sx={{ textAlign: "left" }} variant="h5">
                      Get in <span style={{ color: "#db100f" }}>Touch</span>
                    </Typography>
                    <Box sx={{ textAlign: "left" }} pt={2}>
                      <Box display="flex">
                        <Box pr={1}>
                          <PlaceIcon sx={{ color: "#db100f" }} />
                        </Box>
                        <Typography className="footeraddress">
                          New DLF, Sector 31, Faridabad, Haryana
                        </Typography>
                      </Box>
                      <Box pt={2} display="flex">
                        <Box pr={1}>
                          <LocalPhoneIcon sx={{ color: "#db100f" }} />
                        </Box>
                        <Typography className="footeraddress">
                          +91-8545874585
                        </Typography>
                      </Box>
                      <Box pt={2} display="flex">
                        <Box pr={1}>
                          <MailOutlineIcon sx={{ color: "#db100f" }} />
                        </Box>
                        <Typography className="footeraddress">
                          {" "}
                          marvelstudio.com
                        </Typography>
                      </Box>
                      <Box pt={2} display="flex">
                        <Box pr={1}>
                          <PublicIcon sx={{ color: "#db100f" }} />
                        </Box>
                        <Typography className="footeraddress">
                          www.marvelstudio.com
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            sx={{
              background:
                "radial-gradient(circle, rgba(235,70,76,0.8995973389355743) 0%, rgba(219,16,15,1) 100%)",
              padding: "20px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">
                  Copyright © All Rights Reserved
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "20px",
                    alignItems: "center",
                  }}
                >
                  <Link href="/" className="Baseborder">
                    Refund Policy
                  </Link>
                  <Divider
                    orientation="vertical"
                    style={{
                      margin: "5px 10px",
                      borderWidth: "1px",
                      borderColor: "#fff",
                    }}
                  />
                  <Link href="/" className="Baseborder">
                    Privacy Policy
                  </Link>
                  <Divider
                    orientation="vertical"
                    style={{
                      margin: "5px 10px",
                      borderWidth: "1px",

                      borderColor: "#fff",
                    }}
                  />
                  <Link href="/" className="Baseborder">
                    Terms And Conditions
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <Typography variant="body1">
                    Powered by :{" "}
                    <Link href="/" className="Baseborder">
                      Studio
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
