import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(122, 105, 254, 0.25)",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "0px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        // paper: {
        //   width: "240px",
        //   backgroundColor: "#e3e0c7 !important",
        //   padding: "20px",
        // },
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          background: "#fff",
          boxShadow: "0 4px 4px #0000000a",
          borderRadius: "100px",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "30px",
          color: "#FFFFFF !important",
          padding: "12px",
          width: "50px",
          height: "50px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#000",
          "&.Mui-selected": {
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            background: "#7A69FE",
            color: "#FFF",
          },
          "&.Mui-selected:hover": {
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            background: "#7A69FE",
            color: "#FFF",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: "0px",
          border: "none",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { color: "#222", top: "-7px !important" },
        colorSecondary: {
          "&.Mui-focused": {
            color: "#222",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputMultiline: {
          // padding: "1px !important",
          padding: "0px",
        },
        root: {
          background: "#fff",
          padding: "0px",
        },
        input: {
          borderRadius: "5px",
          color: "#000",
          // padding: "14px 8px",
          // background: "#fff",
          padding: "8px !important",
          // fontFamily: "roboto",
          fontSize: "14px",
          "&::placeholder": {
            color: "#000 !important",
            opacity: "0.9",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          padding: "20px",
          width: "100%",
        },
        elevation1: {
          background: "#FFF",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "none",
          border: "0.5px solid rgba(0, 0, 0, 0.25)",
        },
        elevation2: {
          background: "#FFF",
          borderRadius: "25px",
          padding: "15px",
          boxShadow: "none",
        },
        elevation3: {
          padding: "25px",
          background: "#fff",
          borderRadius: "20px",
          position: "relative",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
          "@media(max-width:768px)": {
            padding: "15px",
          },
        },
        root: {
          color: "#fff",
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: "self-start",
        },
        gutters: {
          paddingLeft: 0,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.40)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px",
          fontSize: "12px",
        },
        colorSecondary: {
          "&.Mui-checked": { color: "#000" },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        /*         MuiOutlinedInput:{
          color: "#000 !important",
          border:"1px solid #f9f9f9",
        }, */
        input: {
          fontSize: 16,
          color: "#000 !important",
          padding: "4px 10px",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        // root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
      styleOverrides: {
        containedSecondary: {
          color: "#fff",
          padding: "10px 30px",
          // textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "10px !important",
          background: "#dddddd",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          whiteSpace: "pre",
          boxShadow: "none",
          "&:hover": {
            color: "#000",
            background: "#e3e0c7",
            border: "1px solid rgba(255, 255, 255, 0.60)",
          },
          "@media (max-width: 780px)": {
            padding: "10px 20px",
          },
        },
        containedPrimary: {
          color: "#fff",
          padding: "10px 40px",
          textTransform: "capitalize",
          fontSize: "12px",
          fontWeight: "600",
          borderRadius: "100px",
          border: "1px solid rgba(255, 255, 255, 0.60)",
          background: "#000",
          whiteSpace: "pre",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            color: "#000",
            background: "#dddddd",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          },
        },
        outlinedPrimary: {
          color: "#000",
          padding: "8px 30px",
          // textTransform: "capitalize",
          fontFamily: "Urbanist !important",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          borderRadius: "10px",
          border: "2px solid #e3dcdc",
          whiteSpace: "pre",
          "&:hover": {
            color: "#000",
            background: "#fff",
            border: "2px solid #e3dcdc",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          },
          "@media(max-width:768px)": {
            fontSize: "12px",
          },
        },
        outlinedSecondary: {
          color: "#000",
          padding: "8px 30px",
          // textTransform: "capitalize",
          fontFamily: "Urbanist !important",
          fontSize: "16px",
          fontStyle: "normal",
          background: "#fff",
          fontWeight: "600",
          borderRadius: "10px",
          border: "2px solid #e3dcdc",
          whiteSpace: "pre",
          "&:hover": {
            color: "#000",
            background: "#fff",
            border: "2px solid #e3dcdc",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          },
          "@media(max-width:768px)": {
            fontSize: "12px",
          },
        },
        text: {
          color: "#000",
          fontSize: "16px",
          borderRadius: "0px !important",
        },
      },
    },

   
  },
  typography: {
    h2: {
      fontSize: "3rem",
      fontFamily: "Urbanist",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: "45px",
      color: "#fff",
      "@media (max-width: 780px)": {
        fontSize: "1.5rem",
        lineHeight: "30px",
      },
    },
    h3: {
      fontSize: "2.5rem",
      fontFamily: "var(--font-lavigne-display)",
      fontWeight: "300",
      fontStyle: "normal",
    },
    h4: {
      fontSize: "2rem",
      fontFamily: "Urbanist",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: "45px",
      color: "#fff",
    },
    h5: {
      fontSize: "28px",
      fontFamily: "Urbanist",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: "45px",
      color: "#000",
    },
    h6: {
      fontSize: "1.125rem",
      fontFamily: "var(--font-lavigne-display)",
      fontWeight: "600",
      fontStyle: "normal",
      "@media (max-width: 780px)": {
        fontSize: "0.8rem",
        lineHeight: "22px",
      },
    },
    body1: {
      fontSize: "14px",
      fontFamily: "Urbanist",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "22px",
      color: "#fff",
    },
    body2: {
      fontSize: "16px",
      fontFamily: "Urbanist",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "22px",
      color: "#fff",
    },
  },
});

export default theme;
