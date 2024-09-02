import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Hero = () => {
  const items = [
    {
      name: "Item 1",
      description: "Description for Item 1",
      image: "/caruosel_1.jpeg", // Replace with your image URL
    },
    {
      name: "Item 2",
      description: "Description for Item 2",
      image: "/caruosel_2.jpeg", // Replace with your image URL
    },
    {
      name: "Item 3",
      description: "Description for Item 3",
      image: "/caruosel_3.jpeg", // Replace with your image URL
    },
  ];

  const images = [
    { url: "/image_1.jpeg", text: "aesthetic" }, // Replace with your image URLs
    { url: "/image_2.jpeg", text: "black baloon" },
    { url: "/image_3.jpeg", text: "black baloon" },
    { url: "/image_4.jpeg", text: "black baloon" },
    { url: "/image_5.jpeg", text: "black baloon" },
    { url: "/image_2.jpeg", text: "black baloon" },
  ];

  return (
    <Box
      sx={{
        //   width: "100%",
        height: "180px", // Increase height to full viewport height
        overflow: "hidden",
      }}
    >
      <Carousel
        indicators={true} // Show indicator dots
        navButtonsAlwaysVisible={false} // Hide navigation arrows
        autoPlay={true}
        animation="slide"
        duration={500}
        sx={{
          height: "200px", // Ensure the carousel takes the full height of the container
          //   width: "100%",
          overflow: "hidden",
          boxShadow: 12,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "400px", // Ensure each item takes the full height of the carousel
              //  backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              textAlign: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div className="grid grid-cols-6 gap-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative   h-40 w-36 mb-24"
                  style={{
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-1 italic"
                    style={{
                      maxHeight: "20%", // Adjust the height as needed
                    }}
                  >
                    {image.text}
                  </div>
                </div>
              ))}
            </div>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              {item.name}
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
