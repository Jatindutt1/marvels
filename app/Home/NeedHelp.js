"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const NeedHelps = () => {
  const router = useRouter();
  return (
    <div>
      <Box pb={2} sx={{ margin: "100px 0px", background: "#fff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box pt={2}>
                <Typography variant="h4" sx={{ color: "#000" }}>
                  NEED HELP BUYING THE RIGHT PRODUCT
                </Typography>
              </Box>
              <Box pt={2}>
                <Typography variant="body1">
                  To get more information about our Products click request a
                  free quote
                </Typography>
              </Box>
              <Box pt={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => router.push("/contactus")}
                >
                  Request a Free Quote
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="images/movecar.gif" width="100%" alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default NeedHelps;
