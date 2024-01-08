import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: -15px;
  height: 100%;
  width: 100%;
  background: #fff;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isActive &&
    css`
      top: 20px;
      left: 25px;
      margin: auto;
      right: auto;
      height: 95%;
      width: 94.5%;
      background: #fff;
      clip-path: circle(75%);
      transition: all 0.3s ease-in-out 0s;
      border-radius: 37px;

      @media (max-width: 1024px) {
        left: 25px;
        width: 95.5%;
      }
      @media (max-width: 768px) {
        left: 20px;
      }
      @media (max-width: 579px) {
        left: 16px;
      }

      @media (max-width: 425px) {
        left: 16px;
        width: 92.5%;
      }
    `}
`;

const MenuButton = styled.label`
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 13px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  background: #fff;
  transition: all 0.3s ease-in-out;
`;

const App = ({
  handleDrawerClose,
  appLogo,
  headersData,
  handleClick,
  not,
  productData,
  handleClose,
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const body = document.querySelector("body");
    setIsActive(!isActive);

    if (!isActive) {
      body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      body.style.overflow = ""; // Allow scrolling
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="active"
        checked={isActive}
        onChange={handleToggle}
      />
      <MenuButton htmlFor="active" isActive={isActive}>
        <MenuIcon />
      </MenuButton>
      <Wrapper isActive={isActive}>
        <List>
          <ListItem
            button
            onClick={() => {
              router.push("/");
              handleDrawerClose();
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                style: {
                  color: "#000",
                  marginLeft: "20px",
                },
              }}
            />
          </ListItem>
          <Box sx={{ textAlign: "center", padding: "50px 0px 0px" }}>
            {appLogo}
          </Box>
          <Box sx={{ maxHeight: "615px", overflow: "auto" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              {headersData.map(({ label, href }) => (
                <ListItem
                  button
                  key={label}
                  onClick={() => {
                    router.push(href);
                    handleDrawerClose();
                  }}
                  sx={{
                    textAlign: "center",
                    padding: "15px",
                    margin: "8px",
                    borderRadius: "10px",
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      style: {
                        color: "#000",
                        fontWeight: "700",
                        marginLeft: "20px",
                        fontSize: "20px",
                      },
                    }}
                  />
                </ListItem>
              ))}
              <ListItem
                onClick={handleClick}
                // sx={{ textAlign: "center", padding: "20px" }}
                sx={{
                  textAlign: "center",
                  padding: "15px",
                  margin: "8px",
                  borderRadius: "10px",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    style: {
                      color: "#000",
                      fontWeight: "700",
                      marginLeft: "20px",
                      fontSize: "20px",
                    },
                  }}
                >
                  Our Products{" "}
                  <KeyboardArrowDownRoundedIcon
                    sx={
                      not
                        ? {
                            transform: "rotate(179deg)",
                            transition: "all 0.5s",
                          }
                        : { transition: "all 0.5s" }
                    }
                  />
                </ListItemText>
              </ListItem>

              <Box
                sx={{
                  maxHeight: not ? "calc(100vh - 200px)" : "0px",
                  height: "100%",
                  transition: "all 0.3s ease-in-out",
                  overflow: "hidden",
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
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </Box>
            </Box>
          </Box>
        </List>
        <Box
          sx={{
            padding: "20px",
            position: "absolute",
            width: "100%",
            bottom: "0",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {router.push("/contactus")
            handleToggle()}}
            color="primary"
            sx={{ width: "100%" }}
          >
            Contact Us
          </Button>
        </Box>
      </Wrapper>
    </>
  );
};

export default App;
