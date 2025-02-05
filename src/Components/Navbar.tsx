import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 60,
            width: 60,
            marginRight: 3,
            borderRadius: 50,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Typography variant="h6" sx={{ flexGrow: 1, color: "primary" }}>
          Blog Website
        </Typography>
        <Tabs textColor="inherit">
          <Tab label="Features" />
          <Tab label="Testimonials" />
          <Tab label="Highlights" />
          <Tab label="Pricing" />
          <Tab label="FAQ" />
          <Tab label="Blog" />
        </Tabs>
        <Box sx={{ ml: 2 }}>
          <Button color="primary" variant="text">
            Sign in
          </Button>
          <Button variant="contained" sx={{ ml: 1, backgroundColor: "black" }}>
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
