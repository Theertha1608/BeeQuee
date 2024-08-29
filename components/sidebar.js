"use client";
// abhi
import {
  Box,
  Button,
  Drawer,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuClick = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { title: "ERP", submenu: ["Option 1", "Option 2"] },
    { title: "Campus Tour", submenu: ["Option 3", "Option 4"] },
    { title: "Alumni", submenu: [] },
    { title: "Careers", submenu: ["Option 5"] },
    { title: "Quick Linkss", submenu: [] },
  ];
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 1,
          paddingBottom: 1,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", ml: { md: 10, xs: 0 } }}>
          <Box
            sx={{
              width: { md: 80 },
              height: { md: 100 },
              display: { md: "flex", xs: "none" },
            }}
          >
            <img
              src="https://uxbyte.in/uploads/downloads/assets/icaslogo.jpeg"
              alt="Ilahia College Logo"
              layout="responsive" // Ensures the image scales properly
              width={170} // Default width, will be overridden by `sx` for responsive sizes
              height={140} // Default height, will be overridden by `sx` for responsive sizes
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              ml: 2,
            }}
          >
            <img
              src="https://uxbyte.in/uploads/downloads/assets/ilahiatextlogo.png"
              alt="Ilahia College Logo"
              width={130}
              height={100}
              //  style={{ marginRight: 18 }}
            />
            <Typography
              component="span"
              variant="body1"
              sx={{ color: "#075985", fontWeight: 750, fontSize: 18 }}
            >
              {/* College of Arts & Science */}
              COLLEGE OF ARTS & SCIENCE
            </Typography>

            <Typography
              component="span"
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              Affiliated to MG University
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              & AICTE Approved
            </Typography>
            <Box
              sx={{
                mb: 1,
                // alignItems: "center",
                gap: 1,
                display: { md: "none", xs: "flex" },
                //  position: "absolute",
              }}
            >
              <img
                src="https://uxbyte.in/uploads/downloads/assets/mgu.png"
                alt="Icon"
                width={50}
                height={50}
              />
              <img
                src="https://uxbyte.in/uploads/downloads/assets/aicte.png"
                alt="Icon"
                width={50}
                height={50}
              />
              <Button
                variant="contained"
                sx={{ width: "253px", height: "50px" }}
              >
                Admission 2024-25
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Drawer toggle for mobile */}
        <Box sx={{ display: { xs: "block", md: "none" }, mr: 2 }}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Links on larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            mr: 4,
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>Contacts</Typography>

          <Typography sx={{ fontWeight: 700 }}>ERP</Typography>
          <Typography sx={{ fontWeight: 700 }}>Campus Tour</Typography>
          <Typography sx={{ fontWeight: 700 }}>Alumni</Typography>
          <Typography sx={{ fontWeight: 700 }}>Careers</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: 700 }}>Quick Links</Typography>
            <ExpandMoreIcon />
          </Box>
          {/* Button and logos below the college name */}
          <Box
            sx={{
              mt: 6,
              display: "flex",
              alignItems: "center",
              gap: 2,
              position: "absolute",
            }}
          >
            <img
              src="https://uxbyte.in/uploads/downloads/assets/mgu.png"
              alt="Icon"
              width={50}
              height={50}
            />
            <img
              src="https://uxbyte.in/uploads/downloads/assets/aicte.png"
              alt="Icon"
              width={50}
              height={50}
            />
            <Button variant="contained" sx={{ width: "220px", height: "50px" }}>
              Admission 2024-25
            </Button>
          </Box>
        </Box>

        {/* Sidebar Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250, padding: 2 }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <img
                src="https://uxbyte.in/uploads/downloads/assets/icaslogo.jpeg"
                alt="Ilahia College Logo"
                layout="responsive" // Ensures the image scales properly
                width={30} // Default width, will be overridden by `sx` for responsive sizes
                height={20} // Default height, will be overridden by `sx` for responsive sizes
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  ml: 2,
                }}
              >
                <img
                  src="https://uxbyte.in/uploads/downloads/assets/ilahiatextlogo.png"
                  alt="Ilahia College Logo"
                  width={70}
                  height={30}
                  //  style={{ marginRight: 18 }}
                />
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ color: "#075985", fontWeight: 750, fontSize: 12 }}
                >
                  {/* College of Arts & Science */}
                  COLLEGE OF ARTS & SCIENCE
                </Typography>

                <Typography
                  // component="span"
                  // variant="body2"
                  sx={{ fontWeight: 600, fontSize: 10 }}
                >
                  Affiliated to MG University
                </Typography>
                <Typography
                  // component="span"
                  //  variant="body2"
                  sx={{ fontWeight: 600, fontSize: 10 }}
                >
                  & AICTE Approved
                </Typography>
              </Box>
            </Box>

            <IconButton
              onClick={toggleDrawer}
              sx={{
                position: "absolute",
                top: 8,
                right: 4,
                height: 25,
                width: 23,
                backgroundColor: "#f44336", // Red color background
                color: "#fff",
                "&:hover": {
                  backgroundColor: "yellow", // Darker red on hover
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Menu
              </Typography> */}
              <List>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem button onClick={() => handleSubmenuClick(index)}>
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontWeight: "medium",
                          textAlign: "left",
                        }}
                      />
                      {item.submenu.length > 0 &&
                        (openSubmenu === index ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        ))}
                    </ListItem>
                    {item.submenu.length > 0 && (
                      <Collapse
                        in={openSubmenu === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {item.submenu.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              sx={{ pl: 3 }}
                              button
                              component={motion.div}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: subIndex * 0.1,
                              }}
                            >
                              <ListItemText
                                primary={subItem}
                                primaryTypographyProps={{
                                  fontWeight: "light",
                                  textAlign: "left",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </motion.div>
          </Box>
        </Drawer>
      </Box>
    </Grid>
  );
};

export default AppBar;
