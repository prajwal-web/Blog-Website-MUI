import React from "react";
import { Box, Container, Grid, Typography, Link, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0d0d0e",
        color: "#fff",
        paddingTop: "40px",
        paddingBottom: "20px",
        mt: "40px",
        marginLeft: 10,
      }}
    >
      <Container>
        <Grid container>
          <Grid item>
            <Typography>About Us</Typography>
            <Typography> Blog Website</Typography>
            Email :
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your Email Here"
              style={{ height: 30, borderRadius: 10 }}
            />
            <Button
              color="primary"
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              Subscribe
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ marginLeft: 160 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Blog
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit" variant="body2">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Appstec ERP Solutions Pvt Ltd
            </Typography>
            <Typography variant="body2">Email: prajuu2000@gmail.com</Typography>
            <Typography variant="body2">Phone: +91 7019780368</Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid white",
            paddingTop: "20px",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            2025 Your Company. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
