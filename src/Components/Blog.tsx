import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

const Blog = () => {
  return (
    <Container sx={{ height: "100%", marginLeft: 10 }}>
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h3" gutterBottom>
          Blog
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Stay in the loop with the latest about our products
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Button variant="contained">All categories</Button>
        <Button variant="text">Company</Button>
        <Button variant="text">Product</Button>
        <Button variant="text">Design</Button>
        <Button variant="text">Engineering</Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="250"
              image="https://picsum.photos/800/450?random=1"
              alt="Beach"
            />
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Engineering
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: 2,
                color: "black",
                fontFamily: "cursive",
                fontWeight: 600,
              }}
            >
              Revolutionizing software development with cutting-edge tools
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Our latest engineering tools are designed to streamline workflows
              and boost productivity. Discover how these innovations are
              transforming the software development landscape.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="250"
              image="https://picsum.photos/800/450?random=2"
              alt="Castle"
            />
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Product
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: 2,
                color: "black",
                fontFamily: "cursive",
                fontWeight: 600,
              }}
            >
              Innovative product features that drive success
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Explore the key features of our latest product release that are
              helping businesses achieve their goals. From user-friendly
              interfaces to robust
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="250"
              image="https://picsum.photos/800/450?random=3"
              alt="Castle"
            />
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Design
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: 2,
                color: "black",
                fontFamily: "cursive",
                fontWeight: 600,
              }}
            >
              Designing for the future: trends and insights
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Stay ahead of the curve with the latest design trends and
              insights. Our design team shares their
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="250"
              image="https://picsum.photos/800/450?random=4"
              alt="Castle"
            />
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Product
            </Typography>
            <Typography
              variant="h6"
              sx={{
                margin: 2,
                color: "black",
                fontFamily: "cursive",
                fontWeight: 600,
              }}
            >
              Maximizing efficiency with our latest product updates
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, color: "black" }}>
              Our recent product updates are designed to help you maximize
              efficiency and achieve more. Get a
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
