import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box sx={styles.heroContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={styles.textContainer}>
            <Typography variant="h2" component="h1" sx={styles.title}>
              Discover Your Perfect Dress
            </Typography>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              Explore our latest collection of stunning dresses tailored for every occasion.
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "220px",
                height: "50px",
                backgroundColor: "yellow",
                color: "black",
                borderRadius: "8px",
                '&:hover': {
                  backgroundColor: "darkorange",
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.imageContainer}>
            <Image
              src="/red gown.jpg" 
              alt="Elegant Red Dress"
              width={200}
              height={300}
              style={styles.heroImage}
            />
            <Image
              src="/night-gown.jpg" 
              alt="Stylish Evening Gown"
              width={200}
              height={300}
              style={styles.heroImage}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
    backgroundColor: "#f7f7f7",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "30px",
    color: "#555",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  heroImage: {
    borderRadius: "10px",
    objectFit: "cover",
  },
};

export default Hero;
