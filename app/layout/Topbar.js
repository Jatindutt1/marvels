"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Hidden,
  Button,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

import Logo from "../Component/Logo";
import Link from "next/link";
import Popover from "@mui/material/Popover";
import { motion } from "framer-motion";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Topzep from "./Topzep";
const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "why Us",
    href: "/",
  },
  {
    label: "Quality Assurance",
    href: "/",
  },
];
const productData = [
  {
    label: "Speed Governor",
    href: "/",
  },
  {
    label: "GPS",
    href: "/",
  },
  {
    label: "4G CCTV Camera",
    href: "/",
  },
  {
    label: "DC to DC Converters",
    href: "/",
  },
 
];

export default function Header() {
  const router = useRouter();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [not, setNot] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setNot(!not);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNot(!not);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      setState((prevState) => ({
        ...prevState,
        mobileView: window.innerWidth < 1100,
      }));
    };

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
    };
  }, []);
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);
  const appLogo = (
    <Box>
      <Button onClick={() => router.push("/")}>
        <Logo className="logoImg" />
      </Button>
    </Box>
  );
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      const isActive = router.pathname === href;
      return (
        <>
          <Link
            style={{
              textDecoration: "none",
              color: isActive ? "#51087e" : "#413e3f",
              textTransform: "capitalize",
              fontSize: "13px",
              position: "relative",
              fontWeight: "700",
            }}
            className="a"
            key={label}
            href={href}
          >
            {label}
          </Link>
        </>
      );
    });
  };

  const displayMobile = () => (
    <Toolbar sx={{ marginTop: "20px" }}>
      <Hidden xsDown>
        <SwipeableDrawer
          anchor="top"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            style: {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <Box display="flex" justifyContent="center">
            <img src="images/swipeup.png" alt="" width="200px" />
          </Box>
        </SwipeableDrawer>
      </Hidden>
      <Box className="topbarmainBox">
        <Box>{appLogo}</Box>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon sx={{ color: "#51087e" }} />
        </IconButton> */}
        <Topzep
          handleClose={handleClose}
          productData={productData}
          not={not}
          handleClick={handleClick}
          appLogo={appLogo}
          handleDrawerClose={handleDrawerClose}
          headersData={headersData}
        />
      </Box>
    </Toolbar>
  );

  const displayDesktop = () => (
    <Toolbar className="topbarmainBox" sx={{ marginTop: "20px" }}>
      <Box>{appLogo}</Box>
      <Hidden mdDown>
        <Box className="nav">
          {getMenuButtons()}

          <Button
            sx={{
              textTransform: "capitalize !important",
              fontSize: "10px !impotant",
              fontWeight: "600 !important",
              color: "#413e3f !impotant",
              whiteSpace: "pre",
            }}
            className="a"
            onClick={handleClick}
          >
            Our Products{" "}
            <KeyboardArrowDownRoundedIcon
              sx={
                not
                  ? { transform: "rotate(179deg)", transition: "all 0.5s" }
                  : { transition: "all 0.5s" }
              }
            />
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            sx={{
              "& .mui-b22991-MuiPaper-root-MuiPopover-paper": {
                borderRadius: "12px",
              },
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {productData.map(({ label, href }) => (
              <ListItem
                button
                key={label}
                onClick={() => {
                  router.push(href);
                  handleDrawerClose();
                  handleClose();
                }}
                sx={{ textAlign: "center", padding: "10px 65px" }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    style: {
                      color: "#413e3f",
                      fontWeight: "600",
                      fontSize: "14px",
                    },
                  }}
                />
              </ListItem>
            ))}
          </Popover>
          <div className="animation start-home"></div>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => router.push("/contactus")}
            color="primary"
          >
            Contact Us
          </Button>
        </Box>
      </Hidden>
    </Toolbar>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          background: "transparent",
          padding: "0px 50px",
          "@media (max-width: 1099px)": {
            padding: "0px",
          },
        }}
      >
        <div>
          {visible && (
            <div className="top-bar">
              <Container maxWidth="xl">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {!mobileView ? displayDesktop() : displayMobile()}
                </motion.div>
              </Container>
            </div>
          )}
        </div>
      </AppBar>
    </>
  );
}
