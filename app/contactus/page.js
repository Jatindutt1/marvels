import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <Box sx={{ marginTop: "130px" }}>
      <Container>
        <Box
          sx={{ background: "#fff", borderRadius: "20px", overflow: "hidden" }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box sx={{ padding: { sm: "0px", md: "40px" } }}>
                <Image
                  src="/images/contact.png"
                  alt=""
                  height={600}
                  width={600}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ background: "#29166f3b !important", height: "100%" }}>
                <Box sx={{ padding: { xs: "30px", sm: "50px", md: "100px" } }}>
                  <Box textAlign="center" pb={1}>
                    <Typography variant="h4">Contact Us</Typography>
                  </Box>
                  <Box>
                    <TextField
                      id="name"
                      name="name"
                      fullWidth
                      label="Name"
                      variant="outlined"
                    />
                    <Box pt={2}>
                      <TextField
                        id="mobile"
                        name="mobile"
                        fullWidth
                        label="Mobile"
                        variant="outlined"
                      />
                    </Box>
                    <Box pt={2}>
                      <TextField
                        id="email"
                        name="email"
                        fullWidth
                        label="Email"
                        variant="outlined"
                      />
                    </Box>
                    <Box pt={2}>
                      <TextField
                        id="address"
                        name="address"
                        fullWidth
                        label="Address"
                        variant="outlined"
                      />
                    </Box>
                    <Box pt={2}>
                      <TextField
                        id="query"
                        name="query"
                        fullWidth
                        label="Query"
                        variant="outlined"
                        multiline
                        rows={1}
                      />
                    </Box>
                    <Box pt={2}>
                      <TextField
                        id="code"
                        name="code"
                        fullWidth
                        label="Code"
                        variant="outlined"
                      />
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "16px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="outlined"
                        sx={{ padding: "5px 20px" }}
                        color="primary"
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
